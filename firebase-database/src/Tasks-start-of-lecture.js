import React, { Component } from 'react';

export default class TaskApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      tasks: []
    }
  }

  //add a new task to the list
  addTask = (taskDescription) => {
    console.log("Adding new task: ", taskDescription);

    // this.setState((prevState) => {
    //   let newTask = {
    //     id: prevState.tasks.length + 1,
    //     description: taskDescription,
    //     complete: false
    //   }
    //   let updatedTasks = prevState.tasks.concat(newTask)
    //   return {tasks: updatedTasks};
    // })
  }

  //change the completedness of the given task
  toggleCompletedness = (taskId) => {
    console.log("Toggling task completion: ", taskId)
    // this.setState((prevState) => {
    //   let updatedTasks = prevState.tasks.map((eachTask) => {
    //     if(eachTask.id === taskId)
    //       eachTask.complete = !eachTask.complete;
    //     return eachTask;
    //   })

    //   return {tasks: updatedTasks};
    // })
  }

  render() {
    let tasks = this.state.tasks; //local name for readability

    //do data processing
    let incomplete = tasks.filter((task) => !task.complete);

    return (
      <div className="container" onClick={this.testClick}>
        <p className="lead">Things <strong>WE</strong> have to do ({incomplete.length})</p>
        <TaskList tasks={tasks} howToToggle={this.toggleCompletedness} />
        <AddTaskForm howToAdd={this.addTask} />
      </div>
    );
  }
}

class TaskList extends Component {  
  render() {
    if(this.props.tasks === null) return null; //show nothing if no tasks

    //do data processing
    let taskComponents = this.props.tasks.map((eachTask) => {
      let singleTask = <Task 
                          key={eachTask.id} 
                          task={eachTask} 
                          howToToggle={this.props.howToToggle}
                        />
      return singleTask;
    })

    return (
      <ol>
        {taskComponents}
      </ol>
    );
  }
}

class Task extends Component {
  //helper method
  getClassName() {
    let className = '';
    if(this.props.task.complete){
      className = 'font-strike';
    }
    return className;    
  }

  handleClick = () => {
    this.props.howToToggle(this.props.task.id);
  };

  render() {
    console.log(this.props)

    //addEventListener('click', this.toggleCompletedness)
    //addEventListener('click', () => {
    //  this.toggleCompletedness();
    //})
    return (
      <li className={this.getClassName()} onClick={ this.handleClick } >
        {this.props.task.description}
      </li>
    );
  }
}

class AddTaskForm extends Component {
  constructor(props){
    super(props)

    this.state = {whatIsTyped: ''}
  }

  handleChange = (event) => {
    let value = event.target.value;
    console.log(value);
    this.setState({whatIsTyped: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.howToAdd(this.state.whatIsTyped);
  }

  render() {
    return (
      <form>
        <input 
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          onChange={this.handleChange}
          value={this.state.whatIsTyped}
          />
        <button className="btn btn-primary" onClick={this.handleSubmit} >
          Add task to list
        </button>
      </form>
    );
  }
}