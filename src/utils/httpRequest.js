import axios from 'axios';
const api_url = process.env.REACT_APP_API_URL;

export const httpGetRequest = async (endpoint) => {
    try {
        const response = await axios.get(api_url + endpoint);
        return response.data;   
    } catch (error) {
        return error;
    }
}

export const httpPostRequest = async (endpoint, data) => {
    try {
        const response = await axios.post(api_url + endpoint, data);
        return response.data;   
    } catch (error) {
        return error;
    }
}

export const httpPutRequest = async (endpoint, data) => {
    try {
        const response = await axios.put(api_url + endpoint, data);
        return response.data;   
    } catch (error) {
        return error;
    }
}

export const httpDeleteRequest = async (endpoint) => {
    try {
        const response = await axios.delete(api_url + endpoint);
        return response.data;   
    } catch (error) {
        return error;
    }
}