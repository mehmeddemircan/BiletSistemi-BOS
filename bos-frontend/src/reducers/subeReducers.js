import {

    CREATE_SUBE_FAIL,
    CREATE_SUBE_REQUEST,
    CREATE_SUBE_RESET,
    CREATE_SUBE_SUCCESS,
    DELETE_SUBE_FAIL,
    DELETE_SUBE_REQUEST,
    DELETE_SUBE_RESET,
    DELETE_SUBE_SUCCESS,
    GET_ALL_SUBES_FAIL,
    GET_ALL_SUBES_REQUEST,
    GET_ALL_SUBES_SUCCESS,
    GET_SINGLE_SUBE_FAIL,
    GET_SINGLE_SUBE_REQUEST,
    GET_SINGLE_SUBE_SUCCESS,
    UPDATE_SUBE_FAIL,
    UPDATE_SUBE_REQUEST,
    UPDATE_SUBE_RESET,
    UPDATE_SUBE_SUCCESS,
} from '../constants/subeConstants'
  
  
  
  export const getSubeDetailsReducer =  (state = {sube : {}}, action) => {
    switch (action.type) {
  
    case GET_SINGLE_SUBE_REQUEST:
      return { ...state, loading : true  }
  
      case GET_SINGLE_SUBE_SUCCESS:
        return { ...state, loading : false ,sube: action.payload}
        case GET_SINGLE_SUBE_FAIL:
  
          return { ...state ,loading: false,error : action.payload}
  
  
    default:
      return state
    }
  }
  
  export const getAllSubesReducer =  (state = {subes: []}, action) => {
    switch (action.type) {
      case GET_ALL_SUBES_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SUBES_SUCCESS:
        return { ...state, loading: false, subes: action.payload };
  
      case GET_ALL_SUBES_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  
  
  
  
  export const newSubeReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_SUBE_REQUEST:
        return {
          ...state,
  
          loading: true,
        };
  
      case CREATE_SUBE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          sub: action.payload,
        };
      case CREATE_SUBE_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case CREATE_SUBE_RESET:
        return {
          ...state,
  
          success: false,
        };
  
      default:
        return state;
    }
  };
  
  
  
  export const subeReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_SUBE_REQUEST:
      case UPDATE_SUBE_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_SUBE_SUCCESS:
        return { 
          ...state, 
          loading: false, 
          deleted: true ,
         
        };
  
      case UPDATE_SUBE_SUCCESS:
        return { 
          ...state, 
          loading: false, 
          updated : action.payload ,
          updateSuccess: true 
        };
  
      case DELETE_SUBE_FAIL:
      case UPDATE_SUBE_FAIL:
        return { ...state, error: action.payload, };
  
      case DELETE_SUBE_RESET:
        return {
          ...state,
          deleted: false,
        };
      case UPDATE_SUBE_RESET:
        return {
          ...state,
          updateSuccess: false,
        };
      default:
        return state;
    }
  };
  