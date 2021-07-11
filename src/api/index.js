import axios from 'axios';


const url = "http://localhost:5000"

export const fetchTest = (num) => axios.get(`${url}/test`)

export const evaluate = (test) => axios.post(`${url}/test/submit`,test)