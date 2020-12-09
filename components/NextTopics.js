import React, { useEffect, useState } from 'react';
import NextTopics from './NextTopicsComponent';

export default function showNextTopics({ setTopics, topics }) {
    const [nextTopics, setNextTopics] = useState([]);
    const [sortedTopics, setSortedTopics] = useState([]);
 
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
        const newTopicList = topics.map(topic => {
			if (topic.id === id) {
				return {
					...topic,
					upvotes: topic.upvotes + 1,
				};
			}
			return topic;
		});
		setTopics(newTopicList);
    };

    const downvoteOneTopic = (e) => {
        const id = e.currentTarget.id; 
        const newTopicList = topics.map(topic => {
			if (topic.id === id) {
				return {
					...topic,
					downvotes: topic.downvotes + 1,
				};
			}
			return topic;
		});
		setTopics(newTopicList);
    };

    const archiveOneTopic = (id) => { 
        const newTopicList = topics.map(topic => {
			if (topic.id === id) {
				return {
					...topic,
					discussedOn: Date.now(),
				};
			}
			return topic;
		});
		setTopics(newTopicList);
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