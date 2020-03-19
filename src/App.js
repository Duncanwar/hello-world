import React,{Component} from 'react';
import './App.css';
//import Greet from '.components/Greet'
//import Welcome from '.components/Welcome'
//import Hello from '.components/Hello'
import Me from '.components/me'
class App extends Component{

render() {
  return (
    <div className="App">
      <header>
        <h1>Hello world</h1>
      </header>
      
      <Me/>
    </div>
  );
}

}
export default App;
