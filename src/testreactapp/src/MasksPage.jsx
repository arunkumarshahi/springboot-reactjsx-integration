import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux';
import { itemsFetchData } from './actions';

class MasksPage extends React.Component {
  componentDidMount(){
    this.props.fetchData('http://localhost:8080/api/arunk');
  }
  render() {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }
    return (
        <ul>
           
            {this.props.items && this.props.items.map((item) => (
               <div> 
                   <img src={item.contentURL} alt="Logo" className="img-thumbnail" />
                   
                <li key={item.name}>
                    `data - {item.name} - {item.actor}`
                </li>
                </div>
            ))}
        </ul>
    );
}
}
const mapStateToProps = (state) => {
  return {
      items: state.items,
      hasErrored: state.error,
      isLoading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};
export default connect(mapStateToProps, mapDispatchToProps) (MasksPage);