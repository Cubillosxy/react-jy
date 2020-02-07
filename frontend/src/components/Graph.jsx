import React, {useMemo} from "react";
import Chart from "chart.js";

class Graph extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            xValues: this.props.xValues,
            yValues: this.props.yValues,
        }
    }

    chartRef = React.createRef();

    componentDidUpdate() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const {dataGraph} = this.props;

        if (this.state.xValues !== dataGraph.xValues || this.state.yValues !== dataGraph.yValues) {
            this.setState({xValues: dataGraph.xValues, yValues: dataGraph.yValues});
            new Chart(myChartRef, {
                type: "line",
                data: {
                    labels: dataGraph.xValues,
                    datasets: [
                        {
                            label: dataGraph.yLabel,
                            data: dataGraph.yValues,
                        }
                    ]
                },
                options: {
                    fill: false
                }
            });
        }


    }
    render() {

        return (
            <div className="">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default Graph;