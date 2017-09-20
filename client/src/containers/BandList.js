import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { selectBand } from '../actions/index';
import { bindActionCreators } from 'redux';


class BandList extends Component{
	renderList(){
		//console.log(this)
		return this.props.bands.map((bands) => {
			return (
				<tr><td key={bands.name} onClick={() => this.props.selectBand(bands)} className="list-group-item">{bands.name}</td><td key={bands.album} className="item">{bands.album}</td></tr>
			);
		});
	}

	render() {
		return (
			<Table>
				<thead>
					<tr>
						<th>Band</th>
						<th>Album</th>
					</tr>
				</thead>
				<tbody>
					{this.renderList()}
				</tbody>
			</Table>
		);;
	}
	
}
function mapStateToProps(state){
	return{
		bands: state.bands
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBand: selectBand }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);