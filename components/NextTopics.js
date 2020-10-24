import React, { useEffect, useState } from 'react';
import NextTopics from './NextTopicsComponent';

export default function showNextTopics({topics, setTopics}) {
    const [nextTopics, setNextTopics] = useState([]);
    const [upvoteTopic, setUpvoteTopic] = useState(0);
    const [downvoteTopic, setDownvoteTopic] = useState(0);
    const [archiveTopic, setArchiveTopic] = useState([]);

    useEffect(() => {
        const nextTopicsData = topics.filter(topic => !topic.discussedOn);
        nextTopicsData.map(topic => topic.totalVotes = topic.upvotes - topic.downvotes)
        setNextTopics(nextTopicsData)
    }, [topics]);

    const upvoteOneTopic = (e) => {
        const id = e.target.id;
        const topicToUpvote = topics.find(topic => topic.id == id);
        setUpvoteTopic(topicToUpvote.upvotes++);
    };
 
    const downvoteOneTopic = (e) => {
        const id = e.target.id;
        const topicToDownvote = topics.find(topic => topic.id == id);
        setDownvoteTopic(topicToDownvote.downvotes++);
    };

    const archiveOneTopic = (e) => {
        const id = e.target.id;
        const topicToArchive = topics.find(topic => topic.id === id || topic.id == id );
        topicToArchive.discussedOn = Date.now(); // add a timestamp to the attribute
        topics.push(topicToArchive)
        setTopics([...topics])
        console.log(topics)
    }; 
// Sort the topics by its totalVotes
nextTopics.sort((topicA, topicB) => topicB.totalVotes - topicA.totalVotes);

console.log(nextTopics);
    return(
        <>
        {nextTopics
            .map(topic => {
                return <NextTopics key={topic.id} {...topic} setTopics={setTopics} upvoteTopic={upvoteOneTopic} downvoteTopic={downvoteOneTopic} archiveTopic={archiveOneTopic} />
            }
            )}

        </>
    )

}