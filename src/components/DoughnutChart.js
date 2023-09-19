import React, { useEffect, useRef }  from 'react';
import CanvasJSReact from '@canvasjs/react-charts';


 

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function DoughnutChart ({gaugeValue = 0, maximumValue=0, color='#69C434', title="", subtitle=""}) {
    const chartRef = useRef(null);

    useEffect(() => {
      const createGauge = () => {
        var gauge = {
          title: { text: "" },
          data: { y: gaugeValue }, // gauge value
          maximum: maximumValue
        };
  
        gauge.unoccupied = {
          y: gauge.maximum - gauge.data.y,
          color: "#DEDEDE",
          toolTipContent: null,
          highlightEnabled: false,
          click: function () { gauge.unoccupied.exploded = true; }
        };
        gauge.data.click = function () { gauge.data.exploded = true; };
  
        if (!gauge.data.color)
          gauge.data.color = color;
        gauge.valueText = { text: gauge.data.y.toString(), verticalAlign: "center", fontSize: "40", fontFamily: "DIN Light" };
  
        var data = {
          type: "doughnut",
          indexLabelPlacement: "inside",
          innerRadius: "60%",
          dataPoints: [
            {
              y: 1,
              indexLabel: gauge.maximum + "",
              color: "transparent"
            },
            {
              y: gauge.maximum - 2,
              color: "transparent",
              toolTipContent: null
            },
            {
              y: 1,
              indexLabel: "0",
              color: "transparent"
            },
            gauge.data,
            gauge.unoccupied,
          ],
        };
  
        if (!chartRef.current.options.data)
          chartRef.current.options.data = [];
        chartRef.current.options.data.push(data);
  
        if (gauge.title) {
          chartRef.current.options.title = gauge.title;
        }
  
        if (!chartRef.current.options.subtitles)
          chartRef.current.options.subtitles = [];
        chartRef.current.options.subtitles.push(gauge.valueText);
  
        chartRef.current.render();
      };
  
      createGauge();
    }, []);
  
    const options = {
      theme: "light2",
      animationEnabled: true,
      title: {},
      subtitles: []
    };
  
    return (
      <div className='container'>
        <div>{title}</div>
        {subtitle?<div>[{subtitle}]</div>:<></>}
        <CanvasJSChart options={options} ref={chartRef} />
      </div>
    ); 
}