import React from 'react';
import './App.css';
import Navbar from './components/Nav';
import Card from './components/Card';
import logo from './assets/images/bt.jpeg'
import BlueDollar from './assets/images/dollar-blue.png'
import PinkDollar from './assets/images/pink-dollar.png'
import { ResponsiveContainer, AreaChart, Tooltip, Area } from 'recharts';
import BtcCard from './components/BTCCard';
import Footer from './components/Footer';

function App() {
  const rangeData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]
  
  return (
    <div className="App">
      <Navbar />
      <Card>
        <div className='bt-wrapper'>
          <div>
          <img src={logo} className="bt-logo" alt="logo" />
            <span className='bt-text'>Bitcoin</span>
            </div>
          <span className='gray-text bt-margin'>BTC</span>
          </div>
        <span className="card-value">3.529020 BTC</span>
        <div className='bt-wrapper'>
          <span className='usd-text'>$19.153 USD</span>
          <div className='percent'><span>-2.32%</span></div>
          </div>
      </Card>
      <Card>
        <div className='bt-wrapper'>
          <div className='gray-text'>
            <span className='red-dot'></span> Lower: $4.895</div>
          <div className='gray-text'>
            <span className='green-dot'></span>Higher: $6.857</div>
          <div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
        <AreaChart
            width={730}
            height={250}
            data={rangeData}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
            >
            <Area type="monotone" dataKey="uv" stroke="#FEF6EC" fill="#FEF6EC" />
            <Tooltip />
        </AreaChart>
        </ResponsiveContainer>
      </Card>
      <div className='bt-wrapper'>
        <BtcCard icon={BlueDollar} title={'Buy BTC'}/>
        <BtcCard icon={PinkDollar} title={'Sell BTC'}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
