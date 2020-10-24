import React, { useState } from 'react';
import Form from './Form' 

export default function AddTopics({topics, setTopics}) { 
    const handleSubmit = e => {
        e.preventDefault();
        let newTopic = createNewTopic(e.currentTarget.topic.value);
        topics.push(newTopic);
        setTopics([...topics]) 
    };

    const createNewTopic = title => {
        return {
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: title,
            id: Date.now(),
        };
    };
    

return(
    <Form handleSubmit={handleSubmit} topics={topics}/>
)
}