import axios from "axios";
import {baseUrl} from "./api";

export const getAllData = async (endPoint) => {
    const res = await axios.get(baseUrl + endPoint);
    const data = res.data;
    return data;
};

export const getDataById = async (endPoint, id) => {
    const res = await axios.get(`${baseUrl + endPoint}/${id}`);
    const data = res.data;
    return data;
};

export const deleteDataById = async (endPoint, id) => {
    const res = await axios.delete(`${baseUrl + endPoint}/${id}`);
    const data = res.data;
    return data;
};

export const postData = async (endPoint, obj) => {
    const res = await axios.post(baseUrl + endPoint, obj);
    const data = res.data;
    return data;
};

export const patchData = async (endPoint, id, obj) => {
    const res = await axios.patch(`${baseUrl + endPoint}/${id}`, obj);
    const data = res.data;
    return data;
};
export const putData = async (endPoint, id, obj) => {
    const res = await axios.put(`${baseUrl + endPoint}/${id}`, obj);
    const data = res.data;
    return data;
};
