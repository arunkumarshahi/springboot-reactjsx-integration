import {
  UPDATE_SELECTED_SERIES,
  SEARCH_DETAIL_SUCCESS,
  SEARCH_DETAIL_FAILURE,
  SEARCH_DETAIL_STARTED
} from '../actions/types';
const initialState = {
  loading: false,
  items: [],
  error: null,
  searchVal: '',
  selectedSeries: {}
};
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DETAIL_STARTED:
      return {
        ...state,
        loading: true
      };
    case SEARCH_DETAIL_SUCCESS:
      console.log('received payload for SEARCH_DETAIL_SUCCESS..', action.payload);
      return {
        ...state,
        loading: false,
          error: null,
          selectedSeries: action.payload
      };
    case SEARCH_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
          error: action.payload.error
      };
    case UPDATE_SELECTED_SERIES:
      console.log('UPDATE_SELECTED_SERIES updated value ..', action.payload);
      return {
        ...state,
        selectedSeries: action.payload,
          loading: false,
          error: ''
      };
    default:
      return state;
  }
};
export default detailReducer;