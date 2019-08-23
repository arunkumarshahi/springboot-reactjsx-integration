// import {
//     ADD_TODO_SUCCESS,
//     ADD_TODO_FAILURE,
//     ADD_TODO_STARTED,
//     DELETE_TODO,
//     UPDATE_SEARCHED_VALUE,
//     UPDATE_SELECTED_SERIES,
//     SEARCH_DETAIL_SUCCESS,
//     SEARCH_DETAIL_FAILURE,
//     SEARCH_DETAIL_STARTED
//   } from '../actions/types';

//   const initialState = {
//     loading: false,
//     items: [],
//     error: null,
//     searchVal:"",
//     selectedSeries:{}
//   };

//   export default function rootReducer(state = initialState, action) {
//     switch (action.type) {
//       case ADD_TODO_STARTED:

//         return {
//           ...state,
//           loading: true
//         };
//       case ADD_TODO_SUCCESS:
//       console.log("received payload ..",action.payload)
//         return {
//           ...state,
//           loading: false,
//           error: null,
//           //items: [...state.items, action.payload]
//           items:  [ ...action.payload ]
//         };
//       case ADD_TODO_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload.error
//         };
//         case UPDATE_SEARCHED_VALUE:
//         console.log("updated value ..",action.payload)
//         return {
//           ...state,
//           searchedVal:action.payload,
//           loading: false,
//           error: ''
//         };
//         case SEARCH_DETAIL_STARTED:

//         return {
//           ...state,
//           loading: true
//         };
//       case SEARCH_DETAIL_SUCCESS:
//       console.log("received payload for SEARCH_DETAIL_SUCCESS..",action.payload)
//         return {
//           ...state,
//           loading: false,
//           error: null,
//           selectedSeries:action.payload
//         };
//       case SEARCH_DETAIL_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload.error
//         };
//         case UPDATE_SELECTED_SERIES:
//         console.log("UPDATE_SELECTED_SERIES updated value ..",action.payload)
//         return {
//           ...state,
//           selectedSeries:action.payload,
//           loading: false,
//           error: ''
//         };
//       default:
//         return state;
//     }
//   }
