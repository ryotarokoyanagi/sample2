import React from 'react';
import TodoElement from './todoelement';
import AddTodo from './addtodo';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          todoList: [],
          value: '',
        }
    }
    
    handleChange(key_value){
      this.setState(key_value)
    }
    
    addList(todoElement){
      this.setState({
        todoList: this.state.todoList.concat(todoElement),
        value: '',
      })
    }

    handleDelete(id){
      alert('削除してもいいですか？')
      const newTodoList = this.state.todoList.filter(element=>
        element.id !== id
      )
      this.setState({todoList: newTodoList})
    }

    render(){    
      return (
        <div className="main">
          <div  className="action">
            <p>追加する</p>
            <AddTodo 
              {...this.state} 
              handleChange={(key_value)=>{this.handleChange(key_value)}}
              addList={(todoElement)=>{this.addList(todoElement)}}
            />
          </div>
          <div className="indicate">
            <h2>リスト</h2>
            <ol>
              {this.state.todoList.map((element)=>(
                <TodoElement 
                  key={element.id} 
                  element={element}
                  onDelete={(id)=>{this.handleDelete(id)}} 
                  {...this.state}
                />
              ))}
            </ol>
          </div>
        </div>
      )
    }
}

export default List;