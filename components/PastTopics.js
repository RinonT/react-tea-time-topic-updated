import React, { useEffect, useState } from 'react';
import PastTopicsComponent from './PastTopicsComponent';

export default function ShowPastTopics({topics}) {
    const [prevTopics, setPrevTopics] = useState([]);
    // const [deleteTopic, setTopicToDelete] = useState([]);

    useEffect(() => {
        const prevTopicsData = topics.filter(topic => topic.discussedOn);
        setPrevTopics(prevTopicsData) 
    }, [topics]);
 
    const deleteOneTopic = (e) => {
        const id = e.target.id;
        const topicsToKeep = prevTopics.filter(topic => topic.id !== id);
        setPrevTopics(topicsToKeep);
    }

    return(
        <>
        {  
        prevTopics
        .map(topic => {
            return <PastTopicsComponent key={topic.id} {...topic} topicToDelete={deleteOneTopic} />
        }
        )
        }
        </>
    )
}