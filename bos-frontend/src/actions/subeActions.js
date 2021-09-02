import { message } from "antd";
import axios from "axios";
import {
  CREATE_SUBE_FAIL,
  CREATE_SUBE_REQUEST,
  CREATE_SUBE_SUCCESS,
  DELETE_SUBE_FAIL,
  DELETE_SUBE_REQUEST,
  DELETE_SUBE_SUCCESS,
  GET_ALL_SUBES_FAIL,
  GET_ALL_SUBES_REQUEST,
  GET_ALL_SUBES_SUCCESS,
  GET_SINGLE_SUBE_FAIL,
  GET_SINGLE_SUBE_REQUEST,
  GET_SINGLE_SUBE_SUCCESS,
  UPDATE_SUBE_FAIL,
  UPDATE_SUBE_REQUEST,
  UPDATE_SUBE_SUCCESS,
} from "../constants/subeConstants";

export const newSube = (sube) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_SUBE_REQUEST,
    });

    const { data } = await axios.post(
      "https://localhost:44308/api/Subes",
      sube
    );

    dispatch({
      type: CREATE_SUBE_SUCCESS,
      paylaod: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SUBE_FAIL,
      payload: error.response.data,
    });
  }
};

export const AllSubes = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_SUBES_REQUEST,
    });

    const { data } = await axios.get("https://localhost:44308/api/Subes");

    dispatch({
      type: GET_ALL_SUBES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_SUBES_FAIL,
      error: error.response,
    });
  }
};

export const getSingleSube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_SUBE_REQUEST,
    });

    const { data } = await axios.get(`https://localhost:44308/api/Subes/${id}`);

    dispatch({
      type: GET_SINGLE_SUBE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_SUBE_FAIL,
      error: error.response.data,
    });
  }
};

export const deleteSube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_SUBE_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:44308/api/Subes/${id}`
    );

    dispatch({
      type: DELETE_SUBE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SUBE_FAIL,
      payload: error.response.data,
    });
  }
};

export const updateSube = (id, sube) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_SUBE_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:44308/api/Subes/${id}`,
      sube
    );

  

    dispatch({
      type: UPDATE_SUBE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SUBE_FAIL,
      payload: error.response.data,
    });
  }
};
