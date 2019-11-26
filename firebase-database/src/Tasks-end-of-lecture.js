import React, { Component } from 'react';

import firebase from 'firebase/app';

//jitc
let jitc = {
  message: "Hello world",
  user_info: {
    name: "Joel"
  },
  tasks: {
    'aslkdjaslkdj': {id:1, description: "Foo"},
    'iuyiuyiu': {id:2, description: "Bar"},
    'mn,mn,mn': {id:3, description:"Baz"},
  }
}

//delete tasks[1]
//modify tasks[1].description = "Changed"


export default class TaskApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      message: '',
      tasks: []
    }
  }

  componentDidMount() {
    let messageRef = firebase.database().ref('message')
    messageRef.on('value', (snapshot) => {
      let value = snapshot.val();

      console.log("value is now: ", value);
      this.setState({message: value});
    });

    let tasksRef = firebase.database().ref('tasks');
    tasksRef.on('value', (snapshot) => {
      let value = snapshot.val();
  
      //we are converting the object to an array
      let taskIds = Object.keys(value);     //this is an array of keys
      
      //allowing us to make a new array of objects by using the map method
      let tasks = taskIds.map((taskId) => {
        //return {id: taskId, complete: value[taskId], description: value[taskID]}
        return {id: taskId, ...value[taskId]}
      })

      console.log(tasks);
      this.setState({tasks: tasks})
    })

  }

  //add a new task to the list
  addTask = (taskDescription) => {
    console.log("Adding new task: ", taskDescription);

    // let messageRef = firebase.database().ref('message')
    // messageRef.set(taskDescription)
    //   .catch((err) => {
    //     console.log(err);
    //   })

    if(userId != "Joel Ross") 

    let newTask = {
      description: taskDescription,
      complete: false
    }

    let tasksRef = firebase.database().ref('tasks');
    tasksRef.push(newTask);
  


    // this.setState((prevState) => {
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
        <p>{this.state.message}</p>
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