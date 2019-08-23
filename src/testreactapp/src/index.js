import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './search.scss';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import detailReducer from './reducers/detailReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
	detail: detailReducer,
	search: searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
