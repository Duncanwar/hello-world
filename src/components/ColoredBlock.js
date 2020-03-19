import React, { Component } from 'react'
import ChangeColorButton from './components/ChangeColorButton'

class ColoredBlock extends React.Component{
    constructor(props){
        super(props);
        this.ChangeColor=this.ChangeColor.bind(this);
        this.state={
            backgroundColor:"red"
        };
    }
    ChangeColor(){
        this.setState((prevState)=>{
            let newColor = prevState.backgroundColor==="red"?"blue":"red";
            return{
                backgroundColor:newColor
            };
        });
    }
    render(){
        return (
            <div style={{width:"200px",height:"200px",backgroundColor:this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.ChangeColor}/>
            </div>
        );
    }
}

export default ColoredBlock;