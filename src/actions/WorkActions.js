import axios from "axios"
import {DELETE_WORK, GET_ERRORS, GET_WORK, GET_WORKS } from "./types"
import bioData from './jsonFile/bioData.json'

export const createWork = (work, history) => async dispatch => {
    try {
      await axios.post(`https://ikenna-portfolio-java.herokuapp.com/admin/work`, work)
        history.push("/")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getWorks = () => async dispatch => {
   // const res = await axios.get(`https://ikenna-portfolio-java.herokuapp.com/api/work/all`)
    dispatch({
        type: GET_WORKS,
        payload: bioData.workExperience//res.data
    })
}

export const getStoredWork = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`https://ikenna-portfolio-java.herokuapp.com/api/work/${id}`)
        dispatch({
            type: GET_WORK,
            payload: res.data
        })
    } catch (err) {
        history.push("/");
        
    }
}

export const deleteWork = id => async dispatch => {
    if(window.confirm("this will delete Work Experience Permanent"))
    {
        await axios.delete(`https://ikenna-portfolio-java.herokuapp.com/admin/work/${id}`)
    }
    dispatch({
        type: DELETE_WORK,
        payload: id
    })
}

export const updatePrevWork = (work, history) => async dispatch => {
    try {
        await axios.post(`https://ikenna-portfolio-java.herokuapp.com/admin/work`, work)
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};
