import React,{Component} from 'react'
import ChangeColorButton from './ChangeColorButton'

class ColoredBlock extends Component{
    constructor(props){
        super(props);
        this.changeColor=this.changeColor.bind(this);
        this.state={
            backgroundColor:"red"
        };  
    }

    changeColor(){
        this.setState((prevState) => {
            let newColor = prevState.backgroundColor === "red " ?  "red" : "blue"  ;
        return {
            backgroundColor : newColor
        };
             });
    }
    render(){
        return (
            <div style={{width:"200px", height:"200px", backgroundColor:this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.changeColor} />
            </div>
        );
    }
}

export default ColoredBlock;