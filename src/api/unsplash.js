import axios from 'axios';

export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers: {   
        Authorization: 'Client-ID c741ba785bcb173f01bf097ebd32a3ce633122c11afd7ef643f39609ac7369b1'
    }
});