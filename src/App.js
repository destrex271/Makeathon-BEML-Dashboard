import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {DashBoardCard} from './components/DashBoard'
import DataChart from './components/Graph';


function App() {

  const apiUrl =  "https://makeathon-beml.herokuapp.com/api/getParameters"

  const getData = async () => {
    console.log("In")
    await fetch(apiUrl,{
      method: "get"
    }).then((res)=>console.log(JSON.stringify(res))).catch((err)=>console.log(err))
  }

  return (
    <div className="App">
      <Navbar />
      <hr style={{color: "#ffffffff", width: "100%", margin: "0 auto", height:2}} />
      {/* <div className="container-fluid m-3"> */}
      {/* <DashBoardCard 
        vehicleName="Test Vehicle"
        uid="6969696969"
        locationLat="10"
        locationLong="10"
        engOil="10"
        marginLeft="2"
      />
      <DataChart /> */}
      <button className='btn btn-success w-25' onClick={getData}>Get Data!</button>
    </div>
  );
}

export default App;
