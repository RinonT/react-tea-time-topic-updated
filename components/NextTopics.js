import React, { useEffect, useState } from 'react';
import NextTopics from './NextTopicsComponent';

export default function showNextTopics({ setTopics, topics }) {
    const [nextTopics, setNextTopics] = useState([]);
    const [sortedTopics, setSortedTopics] = useState([]);
    const [, setUpvoteTopic] = useState(0);
    const [, setDownvoteTopic] = useState(0);
 
    useEffect(() => {
        const nextTopicsData = topics.filter(topic => !topic.discussedOn);
        nextTopicsData.map(topic => topic.totalVotes = topic.upvotes - topic.downvotes)
        setNextTopics(nextTopicsData);
    }, [topics]);

    useEffect(() => {
        setSortedTopics(nextTopics.sort((topicA, topicB) => topicB.totalVotes - topicA.totalVotes))
    }, [nextTopics])

    const upvoteOneTopic = (e) => {
        const id = e.currentTarget.id;
        const topicToUpvote = sortedTopics.find(topic => topic.id === id || topic.id == id);
        setUpvoteTopic(topicToUpvote.upvotes++);
    };

    const downvoteOneTopic = (e) => {
        const id = e.currentTarget.id;
        const topicToDownvote = sortedTopics.find(topic => topic.id === id || topic.id == id);
        setDownvoteTopic(topicToDownvote.downvotes++);
    };

    const archiveOneTopic = (id) => {
        const topicToArchive = topics.find(topic => topic.id === id || topic.id == id);
        topicToArchive.discussedOn = Date.now(); // add a timestamp to the attribute
        setTopics([...topics])
    };


    return (
        <>
            {sortedTopics
                .map(topic => {
                    return <NextTopics key={topic.id} {...topic} setTopics={setTopics} upvoteTopic={upvoteOneTopic} downvoteTopic={downvoteOneTopic} archiveTopic={() => archiveOneTopic(topic.id)} />
                }
                )}
        </>
    )

}