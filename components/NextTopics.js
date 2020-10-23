import React, { useEffect, useState } from 'react';
import NextTopics from './NextTopicsComponent';

export default function showNextTopics({topics}) {
    const [nextTopics, setNextTopics] = useState([]);

    useEffect(() => {
        const nextTopicsData = topics.filter(topic => !topic.discussedOn);
        setNextTopics(nextTopicsData)
        console.log(nextTopicsData);
    }, [topics]);

    // sort them the way we want
    nextTopics.sort((topicA, topicB) => {
        const ratioA = topicA.upvotes - topicA.downvotes;
        const ratioB = topicB.upvotes - topicB.downvotes;
        return ratioB - ratioA;
    });

    return(
        <>
        {nextTopics
            .map(topic => {
                return <NextTopics key={topic.id} {...topic} />
            }
            )}

        </>
    )

}