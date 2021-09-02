import {

  CREATE_CANDIDATE_FAIL,
  CREATE_CANDIDATE_REQUEST,
  CREATE_CANDIDATE_RESET,
  CREATE_CANDIDATE_SUCCESS,
  DELETE_CANDIDATE_FAIL,
  DELETE_CANDIDATE_REQUEST,
  DELETE_CANDIDATE_RESET,
  DELETE_CANDIDATE_SUCCESS,
  GET_ALL_CANDIDATES_FAIL,
  GET_ALL_CANDIDATES_REQUEST,
  GET_ALL_CANDIDATES_SUCCESS,
  GET_SINGLE_CANDIDATE_FAIL,
  GET_SINGLE_CANDIDATE_REQUEST,
  GET_SINGLE_CANDIDATE_SUCCESS,
  UPDATE_CANDIDATE_FAIL,
  UPDATE_CANDIDATE_REQUEST,
  UPDATE_CANDIDATE_RESET,
  UPDATE_CANDIDATE_SUCCESS,
} from "../constants/candidateConstants";



export const getCandidateDetailsReducer =  (state = {candidate : {}}, action) => {
  switch (action.type) {

  case GET_SINGLE_CANDIDATE_REQUEST:
    return { ...state, loading : true  }

    case GET_SINGLE_CANDIDATE_SUCCESS:
      return { ...state, loading : false ,candidate: action.payload}
      case GET_SINGLE_CANDIDATE_FAIL:

        return { ...state ,loading: false,error : action.payload}


  default:
    return state
  }
}

export const getAllCandidatesReducer =  (state = {candidates: []}, action) => {
  switch (action.type) {
    case GET_ALL_CANDIDATES_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_CANDIDATES_SUCCESS:
      return { ...state, loading: false, candidates: action.payload };

    case GET_ALL_CANDIDATES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}





export const newCandidateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CANDIDATE_REQUEST:
      return {
        ...state,

        loading: true,
      };

    case CREATE_CANDIDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        sub: action.payload,
      };
    case CREATE_CANDIDATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case CREATE_CANDIDATE_RESET:
      return {
        ...state,

        success: false,
      };

    default:
      return state;
  }
};



export const candidateReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CANDIDATE_REQUEST:
    case UPDATE_CANDIDATE_REQUEST:
      return { ...state, loading: true };

    case DELETE_CANDIDATE_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        deleted: action.payload 
      };

    case UPDATE_CANDIDATE_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        updated: action.payload ,
        updateSuccess: true 
      };

    case DELETE_CANDIDATE_FAIL:
    case UPDATE_CANDIDATE_FAIL:
      return { ...state, error: action.payload, };

    case DELETE_CANDIDATE_RESET:
      return {
        ...state,
        deleted: false,
      };
    case UPDATE_CANDIDATE_RESET:
      return {
        ...state,
        updateSuccess: false,
      };
    default:
      return state;
  }
};
