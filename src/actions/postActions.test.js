import { post, POST, deletePost, DELETE_POST } from './postActions.js';

describe('blog post actions', () => {
    it('creates a blog post action', () => {
        const action = post('Babes first blog post', 'The body of said blog post.');

        expect(action).toEqual({
           type: POST,
           payload: {
            title: 'Babes first blog post',
            body: 'The body of said blog post.'
        }
    });
});

it('creates a delete blog post action', () => {
    const action = deletePost('Babes first blog post');

    expect(action).toEqual({
        type: DELETE_POST,
        payload: 'Babes first blog post'
    });
});

});