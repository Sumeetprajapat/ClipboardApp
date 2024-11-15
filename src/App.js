import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000)
  }
  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled","Success: ");
      document.title ='Textutils - Dark Mode';
      setInterval(() => {
        document.title='Texutils is amazing mode';
      },1000);
      setInterval(() =>{
        document.title = 'Install Textutils now';
      },1000);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","Success: ");
      document.title= 'Textutils - Light Mode';
    }
  }
  return (
     <>
     <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
          <Routes>
            <Route exact path="/About" element = {<About mode={mode}/>}/>
            <Route exact path="/" element = {<TextForm heading="Enter the text" showAlert={showAlert} mode={mode}></TextForm>}/>
          </Routes>
      </div>
      </Router>
     </>
  );
}

export default App;
