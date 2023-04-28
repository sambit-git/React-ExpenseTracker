import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const maxValue = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );
  
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          max={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
