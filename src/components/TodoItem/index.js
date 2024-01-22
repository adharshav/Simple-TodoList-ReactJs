import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  onDelete = () => {
    const {todoDetails, deleteTodo} = this.props
    const {id} = todoDetails
    deleteTodo(id)
  }

  render() {
    const {title} = this.props.todoDetails
    return (
      <li className="todo-item">
        <p className="title">{title}</p>
        <button type="button" className="delete-button" onClick={this.onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
