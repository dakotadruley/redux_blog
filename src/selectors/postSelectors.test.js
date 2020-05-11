import { getPosts, getPostByIndex } from "./postSelectors";

describe('blog post selectors', () => {
    it('gets all blog posts', () => {
        const state = [{
            title: 'Babes first blog post',
            body: 'Body of first blog post'
        }];

        const posts = getPosts(state);

        expect(posts).toEqual([{
            title: 'Babes first blog post',
            body: 'Body of first blog post'
        }]);
    });

    it('gets blog post by index', () => {
        const state = [{
            title: 'Babes first blog post',
            body: 'Body of first blog post'
        },
        {
            title: 'Babes first blog post v2',
            body: 'Body of first blog post v2'
        },
        {
            title: 'Babes first blog post v3',
            body: 'Body of first blog post v3'
        }];

        const post = getPostByIndex(state, 0);

        expect(post).toEqual({
            title: 'Babes first blog post',
            body: 'Body of first blog post'
        });
    });
});