import logo from './logo.svg';
import './App.css';
import Navbarr from './Navbarr';
import Header from './Header';
import Cardd from './Cardd';



function App() {
  return (
   <div>
    <Navbarr></Navbarr>
    <Header></Header>
    <div className='cardgroup'>
    <Cardd></Cardd>
    <Cardd></Cardd>
    <Cardd></Cardd>
   </div>
   </div>
  );
}

export default App;
