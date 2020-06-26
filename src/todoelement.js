import React from 'react'; 

class TodoElement extends React.Component{
  onDelete(){
    this.props.onDelete(this.props.element.id)
  }
  render(){
    return(
      <li className='todo-list'>
        <span>{this.props.element.content}</span>
        <button onClick={()=> this.onDelete()}>削除</button>
      </li>
    )
  }
}

export default TodoElement;