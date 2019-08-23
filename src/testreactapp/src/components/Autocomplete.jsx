import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './AutoComplete.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faCoffee,
	faCog,
	faSpinner,
	faQuoteLeft,
	faSquare,
	faTimes,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCoffee, faCog, faSpinner, faQuoteLeft, faTimes, faSearch);
class Autocomplete extends Component {
	static propTypes = {
		suggestions: PropTypes.instanceOf(Array)
	};

	static defaultProps = {
		suggestions: []
	};

	constructor(props) {
		super(props);
		console.log('this.props.items in constructior ::', this.props.items);
		this.state = {
			// The active selection's index
			activeSuggestion: 0,
			// The suggestions that match the user's input
			filteredSuggestions: [],
			// Whether or not the suggestion list is shown
			showSuggestions: false,
			// What the user has entered
			userInput: ''
		};
	}
	componentDidUpdate(prevProps, nextProps) {
		console.log('componentDidUpdate nextProps called', nextProps);
		console.log('componentDidUpdate prevProps called', prevProps);
		console.log('componentDidUpdate props called', this.props);
		if (prevProps !== this.props) {
			this.setState({
				activeSuggestion: 0,
				filteredSuggestions: this.props.suggestions
				//	showSuggestions: true
			});
		}
	}
	clearText = () => {
		this.setState({ userInput: '' });
	};
	// Event fired when the input value is changed
	onChange = (e) => {
		console.log('this.props.items in onChange ::', this.props.suggestions);
		const { suggestions } = this.props;
		const userInput = e.currentTarget.value;
		this.props.onChange(e);

		this.setState({
			// activeSuggestion: 0,
			// filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value
		});
		// }
	};

	// Event fired when the user clicks on a suggestion
	onClick = (e) => {
		// Update the user input and reset the rest of the state
		console.log('filtered suggestion ', e.currentTarget);
		const suggestion = this.state.filteredSuggestions.filter((suggestion) => suggestion.id === e.currentTarget.id);
		this.props.onClick(e.currentTarget.id, suggestion[0].actor);
		this.setState({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: e.currentTarget.title
		});
	};

	// Event fired when the user presses a key down
	onKeyDown = (e) => {
		const { activeSuggestion, filteredSuggestions } = this.state;
		// User pressed the enter key, update the input and close the
		// suggestions
		if (e.keyCode === 13) {
			console.log('active suggestion ::', filteredSuggestions[activeSuggestion]);
			this.setState({
				activeSuggestion: 0,
				showSuggestions: false,
				userInput: filteredSuggestions[activeSuggestion].actor
					? filteredSuggestions[activeSuggestion].actorName
					: filteredSuggestions[activeSuggestion].seriesTitle
			});
			this.props.onClick(filteredSuggestions[activeSuggestion].id, filteredSuggestions[activeSuggestion].actor);
		} else if (e.keyCode === 38) {
			// User pressed the up arrow, decrement the index
			if (activeSuggestion === 0) {
				return;
			}
			this.setState({ activeSuggestion: activeSuggestion - 1 });
		} else if (e.keyCode === 40) {
			// User pressed the down arrow, increment the index
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}
			this.setState({ activeSuggestion: activeSuggestion + 1 });
		}
	};

	render() {
		const {
			onChange,
			onClick,
			onKeyDown,
			state: { activeSuggestion, filteredSuggestions, showSuggestions, userInput }
		} = this;

		let suggestionsListComponent;

		if (showSuggestions && userInput) {
			if (filteredSuggestions.length) {
				suggestionsListComponent = (
					<div>
						<ul class="suggestions">
							{filteredSuggestions.map((suggestion, index) => {
								let className;

								// Flag the active suggestion with a class
								if (index === activeSuggestion) {
									className = 'suggestion-active';
								}

								return (
									<li
										className={className}
										key={suggestion}
										title={suggestion.actor ? suggestion.actorName : suggestion.seriesTitle}
										id={suggestion.id}
										onClick={onClick}
									>
										<div>
											<div className="split left">
												<img
													src={suggestion.contentURL}
													alt="Logo"
													className="img-suggestion-thumbnail"
												/>
											</div>
											<div className="split right">
												<span className="suggestion-first-line">
													{suggestion.actor ? (
														suggestion.actorName
													) : (
														suggestion.seriesTitle
													)}{' '}
												</span>
											</div>
											<div className="suggestion-second-line">
												{suggestion.actor ? suggestion.actorName : 'Not Available'}
											</div>
											{/*  */}
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				);
			} else {
				suggestionsListComponent = (
					<div class="no-suggestions">
						<em>No suggestions, you're on your own!</em>
					</div>
				);
			}
		}

		return (
			<div className="input_suggestion search_input input-wrapper">
				<input
					type="text"
					id="as"
					placeholder="Find web series, web film, short series(Enter min 3 characters)"
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={userInput}
				/>
				<div>
					<FontAwesomeIcon
						icon={userInput ? faTimes : faSearch}
						className="icon"
						onClick={this.clearText}
						size="3x"
					/>
				</div>
				{suggestionsListComponent}
			</div>
		);
	}
}

export default Autocomplete;
