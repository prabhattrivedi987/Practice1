import React  from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StackedColumnChart ({title="", data={}}) {
    return (
		<div>
            <div>{title}</div>
			<CanvasJSChart options = {data}/>
		</div>
		);
}