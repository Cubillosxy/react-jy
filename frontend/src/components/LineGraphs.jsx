import React from "react";
import Graph from "./Graph";
import axios from 'axios';

class LineGraph extends React.Component {
    state = {
        helpText: '',
        csvInput: '',
        columnsNames: [],
        data: {},
        dataGraph: {},
        xAxis: '',
        yAxis: ''
    };

    urlParser = process.env.REACT_APP_URL_PARSER;


    handleInputChange = (e) => {
      this.setState({csvInput: e.target.value});
    };

    handleProcess = () => {
        this.setState({helpText: 'processing ....'});
        const {csvInput} = this.state;
            if (!this.urlParser) {
                console.log('Missing URL ', );
            }
            else if (csvInput) {
                axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
                axios.post(this.urlParser, {csv_data: csvInput}).then( response => {
                        if (response.data.error) {
                            this.setState({helpText: response.data.error});
                        }
                        else{
                            this.setState({
                                helpText: 'load ok',
                                columnsNames: response.data.headers,
                                data: response.data.data
                            });
                        }
                    }
                );

            }
            else {
                this.setState({helpText: 'no data'});
            }

    };

    handleGraph = () => {
        const {xAxis} = this.state;
        const {yAxis} = this.state;
        const xValues = this.state.data[xAxis];
        const yValues = this.state.data[yAxis];

        if (xValues && xValues.length && yValues && yValues.length) {
            this.setState({
                dataGraph: {
                    xLabel: xAxis,
                    yLabel: yAxis,
                    xValues,
                    yValues,
                }
            });
        }
    };

    handleXAxis = (e) => {
        //this.setState({xAxis: this.state.data[target]});
        this.setState({xAxis: e.target.value});
    };

    handleYAxis = (e) => {
        this.setState({yAxis: e.target.value});
    };

    render() {
        const {columnsNames} = this.state;
        const {helpText} = this.state;

        const items = [];

        for (const [index, value] of columnsNames.entries()) {
            items.push(<option name={value}>{value}</option>)
        }


        return (
            <div className="LineGraph">
                <div>
                    <header>
                        <h3>Paste - csv text </h3>
                    </header>

                    <textarea name="csv_data" onChange={this.handleInputChange}/>
                    <br/>
                    <button type="submit" onClick={this.handleProcess}>
                        process
                    </button>

                    <span> {helpText} </span>
                </div>


                <hr/>
                <section className="graph-command">
                    <span>X AXIS</span>
                    <select name="x-axis" id="x-axis" onChange={this.handleXAxis}>
                        <option value="">----</option>
                        {items}
                    </select>
                    <br/>
                    <span>Y AXIS</span>
                    <select name="y-axis" id="y-axis" onChange={this.handleYAxis}>
                        <option value="">----</option>
                        {items}
                    </select>
                    <br/>
                    <br/>
                    <button type="submit" onClick={this.handleGraph}>
                        drawn chart
                    </button>
                </section>

                <hr/>
                <section className="graph">
                    <Graph
                        dataGraph={this.state.dataGraph}
                    />
                </section>
            </div>
        )
    }
}

export default LineGraph;