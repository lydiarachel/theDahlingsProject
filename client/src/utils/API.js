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
    findGists: params => {
        return axios.get(`/gist/find${params ? '?' + Object.keys(params)[0] + '=' + Object.values(params)[0] : ''}`)
    },
    // Search for gists by the string from input field
    searchForGists: params => {
        return axios.get('/gist/search/' + params)
    },
    findUser: params => {
        return axios.get(`/user/find${params ? '?' + Object.keys(params)[0] + '=' + Object.values(params)[0] : ''}`)
    },
    findSuggestion: params => {
        return axios.get(`/suggestion/find${params ? '?' + Object.keys(params)[0] + '=' + Object.values(params)[0] : ''}`)
    },
    deleteSuggestion: id => {
        return axios.delete('/suggestion' + id)
    },
    deleteComment: id => {
        return axios.delete('/comment' + id)
    },
    deleteGist: id => {
        return axios.delete('/gist' + id)
    },
    updateGist: params =>{
        return axios.post('/gist/update', params)
    },
    updateSuggestion: params =>{
        return axios.post('/suggestion/update', params)
    },

    // AUTHENTICATION
    loginGoogle: () => {
        return axios.get('/auth/google')
    },
    loginLocal: new_user => {
        return axios.post('/auth/local', new_user)
    },
    registerUser: new_user => {
        return axios.post('http://localhost:8080/auth/register', new_user)
    },
    
    getAuthenticatedUser: () => axios.get('/user/profile')

}