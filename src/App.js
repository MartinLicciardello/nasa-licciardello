// import logo from './logo.svg';
import React, {useEffect , useState}  from 'react';
import logo from './NASA_logo.png';
import './App.css';
import axios from 'axios';
import CardComponent from './components/CardComponent/CardComponent';
import Spinner from './components/Spinner/Spinner';
// import { Header } from './components/Header/Header';

const App =() => {

  const[data,setData] = useState({});
  // console.log('Data:',data);

  const[isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // fetch('https://api.nasa.gov/planetary/apod?api_key=sfuh9HQK4cdFbF9japTngFzWCIhpmUTy2Hmek7bX')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
        axios('https://api.nasa.gov/planetary/apod?api_key=sfuh9HQK4cdFbF9japTngFzWCIhpmUTy2Hmek7bX').then(res => setData(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)


  }, []);


  return (
    <div className="App">


      {/* <Header/> */}
      
        <img src={logo} className="App-logo" alt="logo" width={200}/>
        {isLoading ? <Spinner/> : <CardComponent data = {data}/>}
        
        
    </div>
  );
}

export default App;
