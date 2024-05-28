import axios from "axios";
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOOGLE_TABS } from "./type";

const API_URL = `http://localhost:8000`;


export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO, payload: res.data });
    }
    catch (err) {
        console.log("Error in adding new todo", err.message);
    }

}


export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({ type: GETALL_TODO, payload: res.data });
    }
    catch (error) {
        console.log(`Error while calling getAllTodos Api`, error.message);
    }
}


export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({ type: TOGGLE_TODO, payload: res.data });
    }
    catch (error) {
        console.log(`Error while calling toggleTodos Api`, error.message);
    }
}


export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });
        dispatch({ type: UPDATE_TODO, payload: res.data });
    }
    catch (error) {
        console.log(`Error while calling updateTodos Api`, error.message);
    }
}


export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({ type: DELETE_TODO, payload: res.data });
    }
    catch (error) {
        console.log(`Error while calling deleteTodos Api`, error.message);
    }
}


export const toogleTabs = (tab) => async (dispatch) => {
    dispatch({ type: TOOGLE_TABS, selected: tab })
}

