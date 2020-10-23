import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import ShowNextTopic from './NextTopics';

export default function App() {
    const [topics, setTopics] = useState([]);
    const fetchTopics = async () => {
        const endpoint = 'https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json';
        const result = await fetch(endpoint);
        const topicsData = await result.json();
        setTopics(topicsData);
    };

    useEffect(() => {
        fetchTopics();
    }, [])

    return (
        <>
            <Heading heading="Next Topics" />
            <ShowNextTopic topics={topics} />
            <Heading heading="Past Topics" />
        </>
    )
}