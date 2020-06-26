import React from 'react';
//import Game1 from './game1';

class Main2 extends React.Component{
    render(){
        
        return(
            <div className="indicate">
                <h2>リスト</h2>
                <ol>
                    {this.props.todoListNode}
                </ol>
            </div>
        )
    }
}

export default Main2;