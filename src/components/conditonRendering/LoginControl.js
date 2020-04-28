import React from 'react'
import LogoutButton from './Logout'
import LoginButton from './LoginButton'
import Greeting from './Greeting'
import MailBox from './MailBox'
import Page from './Page'

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn:false};
    }
    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }
   
    render(){
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        const isLoggedIn = this.state.isLoggedIn;
        // let button;
        // if(isLoggedIn){
        //     button = <LogoutButton onClick={this.handleLoginClick}/>;  not used because of ternary expression
        // }
        // else{
        //     button = <LoginButton onClick={this.handleLoginClick}/>;
        // }
         return(
<div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    <Greeting isLoggedIn={isLoggedIn} />
    {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick}/> : <LoginButton onClick={this.handleLoginClick}/>}
    <MailBox unreadMessages={messages}/>
    <Page />
</div>
        );
    }
}
export default LoginControl;