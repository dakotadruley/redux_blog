import { post, deletePost } from '../actions/postActions.js';
import reducer from './postReducer.js';

describe('blog post reducer', () => {
    it('handles the post action', () => {
        const state = [];
        const action = post(
        'Babes first post',
        'Body of first post.'
        );
        //  you only need the keys if it's an object 

        const newState = reducer(state, action);

        expect(newState).toEqual([{
            title: 'Babes first post',
            body: 'Body of first post.'
        }]);
    });

    it('handles the deletePost action', () => {
        const state = [{
            title: 'Babes first post',
            body: 'Body of first post.'
        }];

        const action = deletePost(0);

        const newState = reducer(state, action);

        expect(newState).toEqual([]);
    });
});