import apiBase from './api-base';
const resource = '/movies';

export default {
    getMovies(){
        return apiBase.get(`${resource}/`);
    }
}