import React, {useMemo} from "react";
import Chart from "chart.js";

class Graph extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            xLabel: props.xLabel,
            yLabel: props.yLabel,
            xValues: props.xValues,
            yValues: props.yValues,
        };
    }

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: this.state.xValues,
                datasets: [
                    {
                        label: this.state.yLabel,
                        data: this.state.yValues,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
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