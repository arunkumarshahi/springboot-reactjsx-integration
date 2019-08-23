import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  DELETE_TODO,
  UPDATE_SEARCHED_VALUE
} from '../actions/types';
const initialState = {
  loading: false,
  items: [],
  error: null,
  searchVal: '',
  selectedSeries: {}
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCESS:
      console.log('received ADD_TODO_SUCCESS  payload ..', action.payload);
      return {
        ...state,
        loading: false,
          error: null,
          items: [...action.payload]
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
          error: action.payload.error
      };
    case UPDATE_SEARCHED_VALUE:
      console.log('updated value ..', action.payload);
      return {
        ...state,
        searchedVal: action.payload,
          loading: false,
          error: ''
      };

    default:
      return state;
  }
};
export default searchReducer;