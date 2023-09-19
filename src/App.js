import './App.css';
import MultipleAxesChart from './components/MultipleAxesChart';
import ColumnChart from './components/ColumnChart';
import StackedColumnChart from './components/StackedColumnChart';
import DoughnutChart from './components/DoughnutChart';
import { MultipleAxesChartData, columnChartData, stackedColumnChartData } from './constants';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <div className="App">
        <div className="doughnut-container">
          <div className="doughnut">
            <Card title="Total Accounts Receivable" value="$6,621,280" />
          </div>
          <div className="doughnut">
            <Card
              title="Total Accounts Payable"
              value="$1,630,270"
              valueColor="red"
            />
          </div>
          <div className="doughnut">
            <Card title="Equity Ration" value="75.38%" />
          </div>
          <div className="doughnut">
            <Card title="Debt Equity" value="1.10%" />
          </div>
        </div>
        <div className="doughnut-container">
          <div className="doughnut">
            <DoughnutChart
              gaugeValue={1.86}
              maximumValue={3}
              color="blue"
              title="Current Ratio"
            />
          </div>
          <div className="doughnut">
            <DoughnutChart
              gaugeValue={10}
              maximumValue={31}
              color="yellow"
              title="DSI"
              subtitle="Data Sales Inventory"
            />
          </div>
          <div className="doughnut">
            <DoughnutChart
              gaugeValue={7}
              maximumValue={31}
              color="red"
              title="DSO"
              subtitle="Days Sales Outstanding"
            />
          </div>
          <div className="doughnut">
            <DoughnutChart
              gaugeValue={28}
              maximumValue={31}
              color="green"
              title="DPO"
              subtitle="Days Payable Outstanding"
            />
          </div>
        </div>
        <div className="doughnut-container">
          <div className="doughnut">
            <MultipleAxesChart
              title="Net Working Capital vs Gross Working Capital"
              data={MultipleAxesChartData}
            />
          </div>
          <div className="doughnut">
            <ColumnChart
              title={"Total Accounts Receivable and Payable Aging"}
              data={columnChartData}
            />
          </div>
        </div>
        <div className="doughnut">
          <StackedColumnChart
            title="Profit and Loss summary"
            data={stackedColumnChartData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
