import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import DestinationEntry from './Components/DestinationEntry';
import OrderListContainer from './Components/OrderListContainer';
import Map from './Components/Map';

function App() {
  return (
    <div className="App">
      <Header/>
      <DestinationEntry/>
      <div>
        <OrderListContainer/>
        <Map/>
      </div>
    </div>
  );
}

export default App;
