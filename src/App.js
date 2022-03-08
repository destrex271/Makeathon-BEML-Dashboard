import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {DashBoardCard} from './components/DashBoard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr style={{color: "#ffffffff", width: "100%", margin: "0 auto", height:2}} />
      {/* <div className="container-fluid m-3"> */}
      <DashBoardCard 
        vehicleName="Test Vehicle"
        uid="6969696969"
        locationLat="10"
        locationLong="10"
        engOil="10"
        marginLeft="2"
      />
    </div>
  );
}

export default App;
