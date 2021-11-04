import './App.css';
import DataEntryForm from './Components/DataEntryForm';
import RouteOrderList from './Components/RouteOrderList';
import WaypointList from './Components/WaypointList';

function App() {

  return (
    <div className="App">
      <DataEntryForm/>
      <WaypointList/>
      <RouteOrderList/>
    </div>
  );
}

export default App;
