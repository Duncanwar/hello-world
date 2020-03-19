import React, { Component } from 'react'

class Counter extends Component{
constructor(props){
    super(props)
    this.state={
        count:0
    }
}
increment(){
    this.setState({
        count:this.state.count+1
    },()=>console.log("callback value"+this.state.count))
}
decrement(){
    this.setState(prevState=>({
        count:prevState.count-1
    }))
    console.log(this.state.count)
}

    render(){
        return(
            <div>
                <h1>Count-{this.state.count}</h1>
                <button onClick={()=>this.increment()}>increment</button>
                <button onClick={()=>this.decrement()}>decrement</button>
            </div>
        )
    }
}
export default Counter