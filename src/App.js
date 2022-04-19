
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import Switch,BrowserRouter } from 'react-router6-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 
  useParams
} from 'react-router-dom';

function App() {
const [mode, setMode] = useState('light'); /// whether Dark mode is on or off

const [alert, setAlert] = useState(null);

const showAlert =(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  } ,1500)
}

const toggleMode=()=>{
  if(mode === 'light'){
    setMode ('dark')
    document.body.style.backgroundColor = '#042743';
    document.body.style.color ='white';
    showAlert("Dark Mode has been enabled", "success");
    document.title='TextUtils - Dark Mode';
    setInterval(() => {
      document.title='TextUtils - Is Amaizing ';
    }, 2000);
    setInterval(() => {
      document.title='Install - TextUtils ';
    }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color ='black';
    showAlert("Light Mode has been enabled", "success");
    document.title='TextUtils - Light Mode';
  }
}
  return (
    <Router>
    <>

    <Navbar title="Todolist" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
   
         {/* <About /> */}
      
      <Switch>
      
          <Route exact path="/" >
          <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
          <Route exact path="/about" mode={mode}>
            <About />
          </Route>
     
        </Switch>
       
     
    </>
    </Router>
  );
}

export default App;
