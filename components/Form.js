import React from 'react';

export default function Form({handleSubmit, topics}) {

    return (
        <section>
            <header><h4>Add a topic</h4></header>
            <article>
                <form className="add-topic" onSubmit={handleSubmit}>
                    <input
                        required
                        type="text"
                        name="topic"
                        placeholder="Type your topic idea here"
                    />
                    <button type="submit">Submit</button>
                </form>
            </article>
        </section>
    )
}