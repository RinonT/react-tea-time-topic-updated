import React from 'react';

export default function PastTopicsComponent({id, title, discussedOn,}) {

    const discussedOnDate = new Date(Number(discussedOn));
			return (
                <article>
                    <button class="delete" data-id={id}> </button>
                    <h5 class="topic-text"> {title}</h5>
                    {/* <p>Discussed on {discussedOnDate.toLocaleDateString()} */}
                </article>
        )
}