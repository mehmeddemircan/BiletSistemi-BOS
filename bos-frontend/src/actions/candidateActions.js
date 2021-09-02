import axios from "axios";

import {
  CANDIDATE_CREATE_FAIL,
  CANDIDATE_CREATE_REQUEST,
  CANDIDATE_CREATE_SUCCESS,
  CANDIDATE_DETAILS_FAIL,
  CANDIDATE_DETAILS_REQUEST,
  CANDIDATE_DETAILS_SUCCESS,
  CREATE_CANDIDATE_FAIL,
  CREATE_CANDIDATE_REQUEST,
  CREATE_CANDIDATE_SUCCESS,
  DELETE_CANDIDATE_FAIL,
  DELETE_CANDIDATE_REQUEST,
  DELETE_CANDIDATE_SUCCESS,
  GET_ALL_CANDIDATES_FAIL,
  GET_ALL_CANDIDATES_REQUEST,
  GET_ALL_CANDIDATES_SUCCESS,
  GET_SINGLE_CANDIDATE_FAIL,
  GET_SINGLE_CANDIDATE_REQUEST,
  GET_SINGLE_CANDIDATE_SUCCESS,
  UPDATE_CANDIDATE_FAIL,
  UPDATE_CANDIDATE_REQUEST,
  UPDATE_CANDIDATE_SUCCESS,
} from "../constants/candidateConstants";

export const newCandidate = (candidate) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_CANDIDATE_REQUEST,
    });

    const { data } = await axios.post(
      "https://localhost:44369/api/candidate",
      candidate
    );

    dispatch({
      type: CREATE_CANDIDATE_SUCCESS,
      paylaod: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CANDIDATE_FAIL,
      payload: error.response.data,
    });
  }
};

export const AllCandidates = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_CANDIDATES_REQUEST,
    });

    const { data } = await axios.get("https://localhost:44369/api/candidate");

    dispatch({
      type: GET_ALL_CANDIDATES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CANDIDATES_FAIL,
      error: error.response,
    });
  }
};

export const getSingleCandidate = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_CANDIDATE_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:44369/api/candidate/${id}`
    );

    dispatch({
      type: GET_SINGLE_CANDIDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_CANDIDATE_FAIL,
      error: error.response.data,
    });
  }
};

export const deleteCandidate = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CANDIDATE_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:44369/api/candidate/${id}`
    );

    dispatch({
      type: DELETE_CANDIDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CANDIDATE_FAIL,
      payload: error.response.data,
    });
  }
};

export const updateCandidate = (id,candidate) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CANDIDATE_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:44369/api/candidate/${id}`,candidate
    );

    dispatch({
      type: UPDATE_CANDIDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CANDIDATE_FAIL,
      payload: error.response.data,
    });
  }
}