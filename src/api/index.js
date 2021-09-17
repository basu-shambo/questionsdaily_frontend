import axios from 'axios';

const API = axios.create({baseURL:"http://localhost:5000"});

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('user')){
//         req.headers.authorisation = "Bearer"
//     }
// });

//test endpoints
export const fetchTest = (num) => API.get('/test');
export const evaluate = (test) => API.post('/test/submit',test)

//auth endpoints
export const signup =  (formData) => API.post('/auth/signup',formData);
export const login = (formData) => API.post('/auth/login',formData);