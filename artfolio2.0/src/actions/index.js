import axios from 'axios';

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CREATE_POST = "CREATE_POST";
export const UPDATING = "UPDATING";
export const UPDATE_POST = "UPDATE_POST";
export const GOT_POSTS = "GOT_POSTS";
export const DELETE_POST = "DELETE_POST";

// /api/users/posts/:id

export const signIn = signinInfo => dispatch => {
    axios
    .post('https://backend-art.herokuapp.com/api/login', signinInfo)
    .then(res => { 
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        dispatch({type: SIGN_IN, payload: res});
     })
     .catch(err => console.log(err))
}

export const getPosts = () => dispatch => {
    axios
    .get(`https://backend-art.herokuapp.com/api/posts`)
    .then(res => dispatch({type: GOT_POSTS, payload: res.data}))
    .catch(err => console.log(err))
}

export const signOut = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    dispatch({type: SIGN_OUT});
}

export const createAccount = accountInfo => dispatch => {
    axios
    .post('https://backend-art.herokuapp.com/api/register', accountInfo)
    .then(res => (dispatch({type: CREATE_ACCOUNT})))
}

export const createPost = post => dispatch => {
    const token = localStorage.getItem('token')
    const request = { 
        headers: { 
            authorization: token
         }
     }
    axios
    .post(`https://backend-art.herokuapp.com/api/posts`, post, request)
    .then(res => dispatch({type: CREATE_POST}))
    .catch(err => console.log(err))
}

export const updating = post => {
    return {
        type: UPDATING,
        payload: post
    }
}

export const updatePost = (post, id) => dispatch => {
    console.log(post, id)
    const token = localStorage.getItem('token')
    const request = { 
        headers: { 
            authorization: token
         }
     }
    axios
    .put(`https://backend-art.herokuapp.com/api/posts/${id}`, post, request)
    .then(res => dispatch({type: UPDATE_POST}))
    .catch(err => console.log(err))
}

export const deletePost = (postId) => dispatch => {
    console.log(postId)
    const token = localStorage.getItem('token')
    const request = { 
        headers: { 
            authorization: token
         }
     }
    axios
    .delete(`https://backend-art.herokuapp.com/api/posts/${postId}`, request)
    .then(res => dispatch({type: DELETE_POST}))
    .catch(err => console.log(err))
}

