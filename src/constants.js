export const MultipleAxesChartData = {
    animationEnabled: true,	
    title:{
        text: ""
    },
    axisY : {
        title: "Values"
    },
    toolTip: {
        shared: true
    },
    data: [{
        type: "spline",
        name: "Net Working Capital",
        showInLegend: true,
        dataPoints: [
            { y: 155, label: "Jan" },
            { y: 150, label: "Feb" },
            { y: 152, label: "Mar" },
            { y: 148, label: "Apr" },
            { y: 142, label: "May" },
            { y: 150, label: "Jun" },
            { y: 146, label: "Jul" },
            { y: 149, label: "Aug" },
            { y: 153, label: "Sept" },
            { y: 158, label: "Oct" },
            { y: 154, label: "Nov" },
            { y: 150, label: "Dec" }
        ]
    },
    {
        type: "spline",
        name: "Gross Working Capital",
        showInLegend: true,
        dataPoints: [
            { y: 172, label: "Jan" },
            { y: 173, label: "Feb" },
            { y: 175, label: "Mar" },
            { y: 172, label: "Apr" },
            { y: 162, label: "May" },
            { y: 165, label: "Jun" },
            { y: 172, label: "Jul" },
            { y: 168, label: "Aug" },
            { y: 175, label: "Sept" },
            { y: 170, label: "Oct" },
            { y: 165, label: "Nov" },
            { y: 169, label: "Dec" }
        ]
    }]
}

export const columnChartData =  {
    title: {
        text: ""
    },
    data: [
    {
        type: "column",
        dataPoints: [
            { label: "Current",  y: 10  },
            { label: "1-30", y: 15  },
            { label: "31-40", y: 25  },
            { label: "41-50",  y: 30  },
            { label: "51+",  y: 28  }
        ]
    },
    {
        type: "column",
        dataPoints: [
            { label: "Current",  y: 7  },
            { label: "1-30", y: 26  },
            { label: "31-40", y: 13  },
            { label: "41-50",  y: 45  },
            { label: "51+",  y: 5  }
        ]
    }
    ]
}

export const stackedColumnChartData =  {
    animationEnabled: true,
    exportEnabled: true,
    title: {
        text: "",
        fontFamily: "verdana"
    },
    axisY: {
        title: "in Eur",
        includeZero: true,
        prefix: "€",
        suffix: "k"
    },
    toolTip: {
        shared: true,
        reversed: true
    },
    legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",

    },
    data: [
    {
        type: "stackedColumn",
        name: "General",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
            { label: "Jan", y: 14 },
            { label: "Feb", y: 12 },
            { label: "Mar", y: 14 },
            { label: "Apr", y: 13 },
            { label: "May", y: 13 },
            { label: "Jun", y: 13 },
            { label: "Jul", y: 14 },
            { label: "Aug", y: 14 },
            { label: "Sept", y: 13 },
            { label: "Oct", y: 14 },
            { label: "Nov", y: 14 },
            { label: "Dec", y: 14 }
        ]
    },
    {
        type: "stackedColumn",
        name: "Marketing",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
            { label: "Jan", y: 13 },
            { label: "Feb", y: 13 },
            { label: "Mar", y: 15 },
            { label: "Apr", y: 16 },
            { label: "May", y: 17 },
            { label: "Jun", y: 17 },
            { label: "Jul", y: 18 },
            { label: "Aug", y: 18 },
            { label: "Sept", y: 17 },
            { label: "Oct", y: 18 },
            { label: "Nov", y: 18 },
            { label: "Dec", y: 18 }
        ]
    },
    {
        type: "stackedColumn",
        name: "Sales",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
            { label: "Jan", y: 13 },
            { label: "Feb", y: 13 },
            { label: "Mar", y: 15 },
            { label: "Apr", y: 15 },
            { label: "May", y: 15 },
            { label: "Jun", y: 15 },
            { label: "Jul", y: 16 },
            { label: "Aug", y: 17 },
            { label: "Sept", y: 17 },
            { label: "Oct", y: 18 },
            { label: "Nov", y: 19 },
            { label: "Dec", y: 20 },
    ]
    },
    {
        type: "stackedColumn",
        name: "IT",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
            { label: "Jan", y: 14 },
            { label: "Feb", y: 8 },
            { label: "Mar", y: 6 },
            { label: "Apr", y: 6 },
            { label: "May", y: 5 },
            { label: "Jun", y: 5 },
            { label: "Jul", y: 6 },
            { label: "Aug", y: 3 },
            { label: "Sept", y: 9 },
            { label: "Oct", y: 5 },
            { label: "Nov", y: 8 },
            { label: "Dec", y: 2 },
        ]
    },
    
]
}