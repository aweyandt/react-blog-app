import React from 'react';

function Content({title, content, author, date}) {
    return (
        <main>
            <h1>{title}</h1>
            <p>{content}</p>
            <div>
                <p>
                    <strong>Author:</strong> {author}
                </p>
                <p>
                    <strong>Date:</strong> {date}
                </p>
            </div>
        </main>
    );
}

export default Content;