import React from 'react';

class AddTodo extends React.Component{
    handleChange(event){
      this.props.handleChange({
        value: event.target.value,
      })
    }
  
    addList(){
      const todoElement = {
        content: this.props.value,
        id: this.props.todoList.length + 1,
      }
      this.props.addList(todoElement)
    }

    render(){
      return(
        <div>
          <input 
            type="text" 
            value={this.props.value} 
            onChange={(event)=>{this.handleChange(event)}}
          />
          <button onClick={()=> this.addList()}>追加</button>
        </div>
      )
    }
}
  
export default AddTodo;