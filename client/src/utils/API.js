import axios from "axios";

export default {
    createGist: gistData => {
        return axios.post('/gist/create',  gistData)
    },
    createComment: commentData => {
        return axios.post("/comment/create", commentData)
    },
    createUser: userData => {
        return axios.post('/user/create', userData)
    },
    createSuggestion: suggestionData => {
        return axios.post('/suggestion/create', suggestionData)
    },
    getGist: id => {
        return axios.get('/gist' + id)
    },
    getMultiGist: search =>{
        return axios.get('/gist/multi', search)
    },
    getCategoryGist: category => {
        return axios.get('/gist/multi' + category)
    },
    getUser: id => {
        return axios.get('/user' + id)
    },
    getSuggestion: () => {
        return axios.get('/suggestion/multi')
    },
    deleteSuggestion: id => {
        return axios.delete('/suggestion' + id)
    },
    deleteComment: id => {
        return axios.delete('/comment' + id)
    },
    deleteGist: id => {
        return axios.delete('/gist' + id)
    }

}