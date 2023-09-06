import axios from 'axios';
import IMovieItem from "../models/IMovieItem";
import { API_BASE_URL } from '../config';

const getMoviesFromServer = (url: string | undefined) => {
    return axios.get<IMovieItem[]>(`${API_BASE_URL}/${url}`)
        .then(response => response.data);
}

const getMovieById = (url: string | undefined, id: string | undefined) => {
    return axios.get<IMovieItem>(`${API_BASE_URL}/${url}/${id}`)
        .then(response => response.data);
}

const pushMovieToServer = (newFavourite: IMovieItem) => {
    return axios.post<IMovieItem>(`${API_BASE_URL}/favourite`, newFavourite, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.data);
}

const deleteMovieFromServer = async (id: string) =>{
    await axios.delete(`${API_BASE_URL}/favourite/${id}`);
}

export { getMoviesFromServer, getMovieById, pushMovieToServer, deleteMovieFromServer };