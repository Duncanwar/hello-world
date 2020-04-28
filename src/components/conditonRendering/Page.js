import React from 'react'
import WarningBanner from './WarningBanner';
// component hiding
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={showWarning:true};
        this.handleToogleClick = this.handleToogleClick.bind(this);
    }
    handleToogleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToogleClick} >
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}
export default Page;