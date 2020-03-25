import React from 'react'
import ChangeColorButton from './components/ChangeColorButton'
//import TickingClock from './components/TickingClock'
class ColoredBlock extends React.Component{
    render(){
        return (
            <div style={{width:"200px",height:"200px",backgroundColor:"red"}}>
                <ChangeColorButton/>
                {/* <TickingClock /> */}
            </div>
        );
    }
}

export default ColoredBlock;