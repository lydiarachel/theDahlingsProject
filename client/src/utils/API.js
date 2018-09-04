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

    logOut: () => {
        return axios.get('/auth/logout')
    },

    loginLocal: new_user => {
        return axios.post('/auth/local', new_user)
    },
    registerUser: (new_user) => {
  
        return axios({method: 'post', config: { headers: {'Content-Type':'multidata/form-data'}},url:'/auth/register', data: new_user})
    },
    updateUser: (update_user) => {
  
        return axios({method: 'post', config: { headers: {'Content-Type':'multidata/form-data'}},url:'/user/update', data: update_user})
    },
  
    getAuthenticatedUser: () => axios.get('/user/profile')

}