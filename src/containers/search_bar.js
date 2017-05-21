import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { searchTerm: '' };
    
  }

  onInputChange(event){
    this.setState({searchTerm: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input 
          placeholder="Search city for 48 hour forecast (all times displayed are UTC)"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange.bind(this)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);