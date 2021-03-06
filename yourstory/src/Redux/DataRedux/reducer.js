import {
    FETCH_SOURCE_REQUEST,
    FETCH_SOURCE_SUCCESS,
    FETCH_SOURCE_FAILURE,
    FETCH_FILTERED_DATA_REQUEST,
    FETCH_FILTERED_DATA_SUCCESS,
    FETCH_FILTERED_DATA_FAILURE,
    FILTERBYSEARCH,
    FILTERBYLANGUAGEREQUEST,
    FILTERBYLANGUAGESUCCESS,
    FILTERBYLANGUAGEFAILURE,
    POSTSTORY,
    POSTSTORYSUCCESS,
    POSTSTORYFAILURE,
    BOOKMARK_REQUEST,
    BOOKMARK_SUCCESS,
    BOOKMARK_FAILURE,
    GET_BOOKMARK_FAILURE,
    GET_BOOKMARK_REQUEST,
    GET_BOOKMARK_SUCCESS
  } 
  from "./actionTypes";
  
  const initStore = {
    isLoading: false,
    query: "",
    source: [],
    error: "",
    bookmarkData:[]
  };
  
  const reducer = (state = initStore, {type,payload}) => {
    switch (type) {
      case FETCH_SOURCE_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_SOURCE_SUCCESS:  
        return {
          ...state,
          isLoading: false,
          source: payload,
        };
      case FETCH_SOURCE_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload
        };
        case FETCH_FILTERED_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_FILTERED_DATA_SUCCESS:  
        return {
          ...state,
          isLoading: false,
          source: payload,
        };
      case FETCH_FILTERED_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload
        };
      case FILTERBYSEARCH:
        return {
          ...state,
          source: payload
        }
      case FILTERBYLANGUAGEREQUEST:
        return {
          ...state,
          isLoading: true
        }
      case FILTERBYLANGUAGESUCCESS:
        return {
          ...state,
          isLoading: false,
          source: payload
        }
      case FILTERBYLANGUAGEFAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload
        }
      case BOOKMARK_REQUEST:
        return{
          ...state,
        }
        case BOOKMARK_SUCCESS:
        return{
          ...state,
        }
        case BOOKMARK_FAILURE:
          return{
            ...state,
          }

          case GET_BOOKMARK_REQUEST:
            return{
              ...state,
            }
            case GET_BOOKMARK_SUCCESS:
            return{
              ...state,
              bookmarkData:payload
            }
            case GET_BOOKMARK_REQUEST:
              return{
                ...state,
              }
      default:
        return state;
    }
  };
  
  export default reducer;