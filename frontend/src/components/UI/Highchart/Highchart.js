import React from 'react';

const highchart = (props) => {

	return(<ReactHighcharts config= {props.config} ref="chart"></ReactHighcharts>);
}

export default highchart;