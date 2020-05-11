import { post } from './postActions.js';

describe('blog posts', () => {
    it('creates a blog post', () => {
        const action = post('Babes first blog post', 'The body of said blog post.');

        expect(action).toEqual({
           type: 'POST',
           payload: {
            title: 'Babes first blog post',
            body: 'The body of said blog post.'
        }
    });
});

});