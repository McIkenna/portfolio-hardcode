import axios from "axios"
import { DELETE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS, UPLOAD_TASK, GET_TASKS, GET_PROJECTS_JSON} from "./types";
import bioData from './jsonFile/bioData.json'

export const createProject = (project, history) => async dispatch => {
    try {
       await axios.post(`https://ikenna-portfolio-java.herokuapp.com/admin/project/uploadFile`, project)
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
        
    }
}

export const getProjects = () => async dispatch => {
    const res = await axios.get(`https://ikenna-portfolio-java.herokuapp.com/api/project/all`)
    //console.log(pay_data)
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
}

export const getProjectsJson = () => async dispatch => {
    //const pay_data = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //const pay_data = await fetch('./jsonFile/projectLists.json/projects')
    dispatch({
        type: GET_PROJECTS_JSON,
        //pay_data.data
        payload: bioData.projects
    })
}

export const deleteProject = id => async dispatch => {
    if(window.confirm("This will delete Permanent")){
        await axios.delete(`https://ikenna-portfolio-java.herokuapp.com/admin/project/${id}`)
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        })
    }
}

export const getStoredProject = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`https://ikenna-portfolio-java.herokuapp.com/api/project/${id}`)
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })
    } catch (error) {
        history.push("/");
        
    }
}
/*
export const uploadTask = (task, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/api/file/uploadFile", task)
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })

    }catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getStoredTasks = () => async dispatch =>{
        const res = await axios.get("http://localhost:8080/api/file/uploads/all")
    dispatch({
        type: GET_TASKS,
        payload: res.data
    })
}*/

export const updateProject = (project, history) => async dispatch => {
    try {
       await axios.post(`https://ikenna-portfolio-java.herokuapp.com/admin/project/uploadFile`, project)
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
        
    }
}