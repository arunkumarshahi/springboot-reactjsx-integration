import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { itemsFetchData, updateSearchedValue, updateSelectedSeries } from './actions';
class WebSeriesDetail extends Component {
	handleClick = (event, searchInput) => {
		this.props.updateSelSeries(searchInput, false);
	};
	render() {
		const actorCard = (
			<Card>
				<CardImg top width="100%" src={this.props.contentURL} alt="Card image cap" />
				{this.props.selectedSeries && (
					<CardBody className="card-body">
						<CardTitle className="card-text">{this.props.selectedSeries.actorName}</CardTitle>

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
		);

		const seriesCard = (
			<Card>
				<CardImg top width="100%" src={this.props.contentURL} alt="Card image cap" />
				{this.props.selectedSeries && (
					<CardBody className="card-body">
						<CardTitle className="card-text">{this.props.selectedSeries.name}</CardTitle>
						<CardText className="card-text">Acted by : {this.props.selectedSeries.actor}</CardText>
						<CardText className="card-text">Directed by : {this.props.selectedSeries.director}</CardText>
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
		);
		return (
			<div>
				{this.props.selectedSeries.actorDetail && actorCard}
				{!this.props.selectedSeries.actorDetail && seriesCard}
			</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WebSeriesDetail);
