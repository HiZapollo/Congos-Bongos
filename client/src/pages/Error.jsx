import React from 'react';

function Error() {
    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Something went wrong. The page you're looking for might have been moved, deleted, or doesn't exist.</p>
            <p>Maybe try heading back to the <a href="/">home page</a> and navigate from there.</p>
            <img src="path_to_some_error_image.jpg" alt="Error illustration" />
        </div>
    );
}

export default Error;
