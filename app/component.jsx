import React from 'react';

var style={
    backgroundColor:'#ccc'
}

export default class Hello extends React.Component{
    render(){
        return (
            <div style={style}>
                <h1>Hello Word</h1>;
            </div>
        )
    }
}