import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './product.css';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { connect } from 'react-redux';

import { itemsFetchData, updateSearchedValue, updateSelectedSeries } from './actions';
class Product extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = (event, searchInput) => {
		this.props.updateSelSeries(searchInput, false);
	};
	rateIt = () => {
		console.log('rate it ', this.props.selectedSeries.name);
	};
	render() {
		const actorCard = (
			<div>
				<h1>{this.props.selectedSeries && this.props.selectedSeries.actorName}</h1>
				<Card className="noshadow">
					{this.props.selectedSeries && (
						<CardBody className="card-body">
							{/* <CardTitle className="card-text">{this.props.selectedSeries.actorName}</CardTitle> */}

							<div>
								{' '}
								{this.props.selectedSeries &&
									this.props.selectedSeries.webSeriesList &&
									this.props.selectedSeries.webSeriesList.map((element) => (
										<a
											onClick={(event) => {
												this.handleClick(event, element.id);
											}}
											style={{ cursor: 'pointer', 'margin-right': '40px' }}
										>
											{element.name}
										</a>
									))}
							</div>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					)}
				</Card>
			</div>
		);

		const seriesCard = (
			<div>
				<h1>{this.props.selectedSeries && this.props.selectedSeries.name}</h1>
				<button onClick={this.rateIt}> Rate it !</button>
				<Card className="noshadow">
					{this.props.selectedSeries && (
						<CardBody className="card-body">
							{/* <CardTitle className="card-text">{this.props.selectedSeries.name}</CardTitle> */}
							<CardText className="card-text">Cast : {this.props.selectedSeries.actor}</CardText>
							<CardText className="card-text">
								Directed by : {this.props.selectedSeries.director}
							</CardText>
							<CardText className="card-text">Platform : {this.props.selectedSeries.platform}</CardText>
							{/* <CardText className="card-text">Platform : {this.props.selectedSeries.webSeriesList}</CardText> */}
							<div>
								{' '}
								{this.props.selectedSeries &&
									this.props.selectedSeries.webSeriesList &&
									this.props.selectedSeries.webSeriesList.map((element) => (
										<a
											onClick={(event) => {
												this.handleClick(event, element.id);
											}}
											style={{ cursor: 'pointer', 'margin-right': '40px' }}
										>
											{element.name}
										</a>
									))}
							</div>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					)}
				</Card>
			</div>
		);
		return (
			<main className="container">
				<div className="left-column">
					<img
						data-image="red"
						className="active"
						src={this.props.selectedSeries ? this.props.selectedSeries.contentURL : ''}
						alt=""
					/>
				</div>

				<div className="right-column">
					<div className="product-description">
						<div>
							{this.props.selectedSeries.actorDetail && actorCard}
							{!this.props.selectedSeries.actorDetail && seriesCard}
						</div>
					</div>
				</div>
			</main>
		);
	}
}

//export default WebSeriesDetail;
const mapStateToProps = (state) => {
	return {
		selectedSeries: state.detail.selectedSeries,
		hasErrored: state.detail.error,
		isLoading: state.detail.loading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(itemsFetchData(url)),
		updatedSearchedVal: (url) => dispatch(updateSearchedValue(url)),
		updateSelSeries: (details, flag) => dispatch(updateSelectedSeries(details, flag))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
