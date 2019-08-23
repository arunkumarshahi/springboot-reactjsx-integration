import React, { Component } from 'react';
import { Route, NavLink, HashRouter, withRouter } from 'react-router-dom';
import Home from './Home';
import Animation from './animation';
import ImageGallery from './ImageGallery';

import { connect } from 'react-redux';
import Autocomplete from './components/Autocomplete';
import { itemsFetchData, updateSearchedValue, updateSelectedSeries } from './actions';
import Product from './Product';
import GobingingIcon from './Go_Binging_Logo_White_BG.svg';

class Main extends Component {
	_onBlur = (event) => {
		console.log(event.target.id);
		this.props.updatedSearchedVal(event.target.value);
	};
	onClick = (event, flag) => {
		//const searchInput= event.target.value;
		//this.props.fetchData(`http://localhost:8080/api/${this.props.searchedVal}`);
		this.props.updateSelSeries(event, flag);
		console.log('event..', event);
		this.props.history.push('/searchdetails');
	};
	onChange = (event) => {
		const searchInput = event.target.value;
		this.props.fetchData(`http://localhost:8080/api/searchtitle/${searchInput}`);

		//this.context.router.push('/sample');
	};
	getTableList = () => {
		console.log(
			'inside updated value in main ..',
			this.props.selectedSeries && Object.keys(this.props.selectedSeries)
		);

		if (this.props.selectedSeries) {
			console.log('key list -->', Object.keys(this.props.selectedSeries));
			return Object.keys(this.props.selectedSeries).map((key) => (
				<div key={key}>
					{key}: {this.props.selectedSeries[key] ? this.props.selectedSeries[key] : 'Not available'}
				</div>
			));
		} else {
			return <div> 'No details found '</div>;
		}
	};

	render() {
		console.log('updated value in main ..', this.props.items);

		return (
			<div>
				{this.props.isLoading && <div class="loading">Loading&#8230;</div>}
				<div>
					<div>
						{/* <h1 className="main_title">GO</h1>
						<h1 className="main_title_sub_text">BINGING</h1> */}
						<img className="logo-icon" src={GobingingIcon} alt="Logo" />
						<button type="button" onClick={this.onClick} className="search_btn btn">
							Search
						</button>
						{/* <input placeholder="Find web series, web film, short series"  onFocus={this._onFocus} onBlur={this._onBlur} ref={(input) => { this.LasName = input; }}  id="LasName" type="text" className="search_input"/> */}
						<Autocomplete onChange={this.onChange} onClick={this.onClick} suggestions={this.props.items} />
						<ul className="header">
							<li>
								<NavLink to="/">NOW PLAYING</NavLink>
							</li>
							<li>
								<NavLink to="/stuff">Know more</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Upcoming series</NavLink>
							</li>
							<li>
								<NavLink to="/stuff">REPEAT WATCH</NavLink>
							</li>
							<li>
								<NavLink to="/searchdetails">WEB DATABASE</NavLink>
							</li>

							{false && (
								<li>
									<NavLink to="/rateit">Rate It</NavLink>
								</li>
							)}
							{/* <li><NavLink to="/MasksPage">MasksPage</NavLink></li> */}
						</ul>
						<div className="content">
							<Route path="/" exact={true} component={ImageGallery} />
							<Route path="/xxxxx" component={Animation} />
							<Route exact={true} path="/contact" activeClassName="is-active" component={ImageGallery} />
							<Route path="/searchdetails" component={Product} />
							<Route path="/rateit" exact={true} component={Animation} />
							{/* <ImageGallery/> */}
							<div />
						</div>
					</div>
				</div>
				<div />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.search.items,
		searchedVal: state.search.searchedVal,
		selectedSeries: state.detail.selectedSeries,
		hasErrored: state.search.error,
		isLoading: state.search.loading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(itemsFetchData(url)),
		updatedSearchedVal: (url) => dispatch(updateSearchedValue(url)),
		updateSelSeries: (details, flag) => dispatch(updateSelectedSeries(details, flag))
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
