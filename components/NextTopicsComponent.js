import React from 'react';

export default function TopicsComponent({ id, title, upvotes, downvotes, }) {
    
    return (
        <article>
            <button className="archive" data-id={id}>
               archiveSVG
            </button>
            <h5 className="topic-text">{title}</h5>
            <div className="votes">
                <button className="upvote" data-id={id}>
                    upvoteSVG
                </button>
                <span className="upvote-number">{upvotes}</span>
                <button className="downvote" data-id={id}>
                    downvoteSVG
                </button>
                <span className="downvote-number">{downvotes}</span>
            </div>
        </article>
    )
}