import profileReducer, {ADD_POST_ACTION_CREATOR, deletePost} from './profile-reducer';

let state = {
    posts : [
        {id: 1, post: "Hello, world!4", likesCount: 8},
        {id: 2, post: "Hello, world!3", likesCount: 9},
        {id: 3, post: "Hello, world!2", likesCount: 10},
        {id: 4, post: "Hello, world!", likesCount: 11},
        {id: 5, post: "It's my first post!", likesCount: 12}
    ]
}

it('length of posts should be incremented', () => {
    let action = ADD_POST_ACTION_CREATOR('newPostBody');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
});

it('message of new post should be correct', () => {
    let action = ADD_POST_ACTION_CREATOR('newPostBody');

    let newState = profileReducer(state, action);

    expect(newState.posts[5].post).toBe('newPostBody');
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(2);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});