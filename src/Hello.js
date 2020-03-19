import React from 'react'

const Hello=()=>{
    //return (<div><h1>Hello Semugeshi</h1>
    //</div>)

    return React.createElement(
        'div',
        {id:'me',className:"yoi"},
        React.createElement('h1',null,'No Jsx used')
    )
}

export default Hello



