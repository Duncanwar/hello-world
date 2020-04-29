import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
//import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import TickingClock from './components/TickingClock'
import ColoredBlock from './components/ColoredBlock'
import Greetings from './components/conditonRendering/Greeting'
import LoginControl from './components/conditonRendering/LoginControl'
import NameList from './components/list-keys/NameList'

class App extends Component{

render() {
  return (
    <div className="App">
      {/* <header>
        <h1>Hello world</h1>
      </header>
      <Greet name="Bruce" heroName="Super">
        <p>This is a paragraph</p>
      </Greet>
      <Greet name="Milcah" heroName="Queen"></Greet>
      <button>MemlalgmmlammlGMGLAMLSLL</button>
      <Greet name="Duncan" heroName="Warrior"></Greet>
      
      <Welcome name="Bruce" heroName="Super" ></Welcome>
      <Welcome name="Bruce" heroName="Super" ></Welcome>
      <Welcome name="Bruce" heroName="Super" ></Welcome>

<Hello /> */}
 {/* <Greet name="Duncan" heroName="Warrior"></Greet>
 <Welcome name="Bruce" heroName="Super" ></Welcome>

<Greet/>
<Message/>
<Counter/>
<TickingClock/>
 <ColoredBlock />  */}
{/* <ChangeColorButton /> */}
<LoginControl/> {/* Element variable*/}
<NameList />
    </div>
  );
}

}
export default App;
