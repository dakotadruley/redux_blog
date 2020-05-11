export const post = (title, body) => ({
    type: 'POST',
    payload: {
        title,
        body
    }
});

export const deletePost = post => ({
    type: 'DELETE_POST',
    payload: post
});

// BONUS: you can update a post by passing an id and new body