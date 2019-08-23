import {
	ADD_TODO_SUCCESS,
	ADD_TODO_FAILURE,
	ADD_TODO_STARTED,
	DELETE_TODO,
	UPDATE_SEARCHED_VALUE,
	UPDATE_SELECTED_SERIES,
	SEARCH_DETAIL_SUCCESS,
	SEARCH_DETAIL_FAILURE,
	SEARCH_DETAIL_STARTED
} from './types';

import axios from 'axios';

export const itemsFetchData = (url) => {
	console.log('itemsFetchData ----', url);
	return (dispatch) => {
		dispatch(addTodoStarted());
		axios
			.get(url)
			.then((res) => {
				console.log('apiresponse --> ', res.data);
				// setTimeout(() => {
				// 	dispatch(addTodoSuccess(res.data));
				// }, 0);
				dispatch(addTodoSuccess(res.data));
			})
			.catch((err) => {
				console.log('error is = ', err);
				dispatch(addTodoFailure(err.message));
			});
	};
};

export const updateSearchedValue = (val) => {
	console.log('update search valje ..', val);
	return (dispatch) => {
		dispatch(updateSearchedVal(val));
	};
};

const updateSearchedVal = (value) => ({
	type: UPDATE_SEARCHED_VALUE,
	payload: value
});
const addTodoSuccess = (todo) => ({
	type: ADD_TODO_SUCCESS,
	payload: todo
});

const addTodoStarted = () => ({
	type: ADD_TODO_STARTED
});

const searchDetailFailure = (error) => ({
	type: SEARCH_DETAIL_FAILURE,
	payload: {
		error
	}
});

const searchDetailSuccess = (todo) => ({
	type: SEARCH_DETAIL_SUCCESS,
	payload: todo
});

const searchDetailStarted = () => ({
	type: SEARCH_DETAIL_STARTED
});

const addTodoFailure = (error) => ({
	type: ADD_TODO_FAILURE,
	payload: {
		error
	}
});
export const updateSelectedSeries = (val, flag) => {
	const url = `http://localhost:8080/api/getdetails/${val}/${flag}`;
	console.log('update search valje ..', val);
	// return dispatch => {dispatch(updateSelSeries(val))};
	console.log('itemsFetchData ----', url);
	return (dispatch) => {
		dispatch(searchDetailStarted());
		axios
			.get(url)
			.then((res) => {
				console.log('apiresponse --> ', res.data);
				dispatch(searchDetailSuccess(res.data));
			})
			.catch((err) => {
				console.log('error is = ', err);
				dispatch(searchDetailFailure(err.message));
			});
	};
};

const updateSelSeries = (value) => ({
	type: UPDATE_SELECTED_SERIES,
	payload: value
});
