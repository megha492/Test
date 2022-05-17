import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import  ReactDOM  from 'react-dom';
import  ReactHighcharts  from 'react-highcharts';

class HighChartTest extends Component {

    state = {
        config: {
            chart: {
                renderTo: 'container',
                type: 'pie'
            },
            title: {
                text: 'Project Status'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: null
        },
        projectStatus: [
            {name: 'Project1',y: 20},
            {name: 'Project2',y: 20},
            {name: 'Project2',y: 60}
        ]
        
    }

	componentDidMount(){
        let newConfig = this.state.config;
        let projectStatus = this.state.projectStatus;
        newConfig.series = [{
            name: 'Brands',
            colorByPoint: true,
            data: projectStatus
        }]
        this.setState({config : newConfig})
	}
	render(){
        return (<HighChartTest />);
	}

}

const mapStatetoProps = state => {
		return {
			isAuthenticated: state.auth.token !== null
		}
}

const mapDispatchtoProps = dispatch => {
	return{
	}
}
	
export default connect(mapStatetoProps,mapDispatchtoProps)(HighChartTest);