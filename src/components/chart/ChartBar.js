import "./ChartBar.css"

const ChartBar = props => {
    let barFillHeight;

    if( props.max > 0 ){
        barFillHeight = Math.round( (props.value / props.max) * 100 )+"%"
    }else{
        barFillHeight = "0%"
    }
    // console.log(props.value, props.max)
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;