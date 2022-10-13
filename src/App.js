import logo from './logo.svg';
import './App.css';
import Watch from './components/Watch/Watch';
import Tablet from './components/Tablet/Tablet';
// import Device from './components/Device/Device';

function App() {
  return (
    <div className="App">
      {/* <Device name="uPhone" price="1 taka"></Device> */}

      <Watch></Watch>
      <Tablet></Tablet>

    </div>
  );
}

export default App;
