import React,{Component} from 'react'
 

//component class 

class Welcome extends Component{
    
render(){
    const {name,heroName}=this.props
return <h1>Welcome to {name} aka {heroName}</h1>
}

}

export default Welcome