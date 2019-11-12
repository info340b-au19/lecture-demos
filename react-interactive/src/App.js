import React, { Component } from 'react';

// // // BASE DEMO with example 1 code
// class App extends Component {

//   render() {
//     //do data processing
//     let tasks = this.props.initialTasks;
//     let incomplete = tasks.filter((task) => !task.complete);
//     //console.log("Number of tasks:", incomplete.length);

//     return (
//       <div className="container">
//         <p className="lead">Things I have to do ({incomplete.length})</p>
//         <TaskList tasks={tasks} />
//         <AddTaskForm />
//       </div>
//     );
//   }
// }


// class TaskList extends Component {  
//   render() {
//     //do data processing
//     let taskComponents = this.props.tasks.map((eachTask) => {
//       let singleTask = <Task 
//                           key={eachTask.id} 
//                           task={eachTask} /> 
//       return singleTask;
//     })

//     return (
//       <ol>
//         {taskComponents}
//       </ol>
//     );
//   }
// }

// // // EXAMPLE 1B - adding a callback to toggle as a prop
// // class TaskList extends Component {  
// //   render() {
// //     //do data processing
// //     let taskComponents = this.props.tasks.map((eachTask) => {
// //       let singleTask = <Task 
// //                           key={eachTask.id} 
// //                           task={eachTask} 
// //                           howToToggle={this.props.howToToggle}
// //                           /> //pass callback down
// //       return singleTask;
// //     })

// //     return (
// //       <ol>
// //         {taskComponents}
// //       </ol>
// //     );
// //   }
// // }



// class Task extends Component {
//   //helper method
//   getClassName() {
//     let className = '';
//     if(this.props.task.complete){
//       className = 'font-strike';
//     }
//     return className;    
//   }

//   render() {
//     let thisTask = this.props.task; //can give local name for readability
//     return (
//       <li className={this.getClassName()} >
//         {thisTask.description}
//       </li>
//     );
//   }
// }

// // // EXAMPLE 1 Adding Event handler to handle clicks to mark Complete
// // class Task extends Component {
// //   //helper method
// //   getClassName() {
// //     let className = '';
// //     if(this.props.task.complete){
// //       className = 'font-strike';
// //     }
// //     return className;    
// //   }

// // // EXAMPLE 1A - using a public class field
// //   handleClick = () => {    // public class field: use arrow here with an anonymous function rather than typing in the {}
// //      console.log("clicky clicky", this.props.task.description);

// //     //  // EXAMPLE 1B
// //     //  this.props.howToToggle(this.props.task.key);  // Won't work in it's current form
// //      }


// // //   handleClick () {
// // //     console.log("clicky clicky", this.props.task.description);
// // //  }

// //   render() {
// //     let thisTask = this.props.task; //can give local name for readability
// //     return (
// //       <li className={this.getClassName()} onClick={this.handleClick} >
// //         {thisTask.description}
// //       </li>
// //     );
// //   }
// // }

// class AddTaskForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {newTask: ''}; //what is typed in
//   }

//   handleChange = (event) => {    
//     //let whichElement = event.target;
//     //let whatValue = whichElement.value;
//     let value = event.target.value;
//     console.log("I changed to:", value);
//     this.setState({newTask: value})
//   }

//   handleClick = (event) => {
//     event.preventDefault();
//     this.props.howToAdd(this.state.newTask)
//   }

//   render() {
//     return (
//       <form>
//         <input 
//           className="form-control mb-3"
//           placeholder="What else do you have to do?"
//           value={this.state.newTask}
//           onChange={this.handleChange}
//           />
//         <button className="btn btn-primary" onClick={this.handleClick}>
//           Add task to list
//         </button>
//       </form>
//     );
//   }
// }

//---------------------------------------------------------------------------------------------------------

// // EXAMPLE 2 adding code to handle state in the Task component (Note that here the state is being kept in the Task component)
// class App extends Component {

//   render() {
//     //do data processing
//     let tasks = this.props.initialTasks;
//     let incomplete = tasks.filter((task) => !task.complete);
//     //console.log("Number of tasks:", incomplete.length);

//     return (
//       <div className="container">
//         <p className="lead">Things I have to do ({incomplete.length})</p>
//         <TaskList tasks={tasks} />
//         <AddTaskForm />
//       </div>
//     );
//   }
// }

// class TaskList extends Component {  
//   render() {
//     //do data processing
//     let taskComponents = this.props.tasks.map((eachTask) => {
//       let singleTask = <Task 
//                           key={eachTask.id} 
//                           task={eachTask} 
//                           howToToggle={this.props.howToToggle}
//                           /> //pass callback down
//       return singleTask;
//     })

//     return (
//       <ol>
//         {taskComponents}
//       </ol>
//     );
//   }
// }

// class Task extends Component {
  
//   constructor(props) {
//     super(props)  //tell the component class to handle assigning props and stuff
//     //this.state = {countClick: 0}

//     // EXAMPLE 2A ( and 2B) - using state object for toggling strikethrough
//     this.state = {countClick: 0, isComplete: this.props.task.complete}
//   }
  
//   //helper method
//   getClassName() {
//     let className = '';
   
//    // if(this.props.task.complete){

//    //EXAMPLE 2A (and 2B) - using state object for toggline strikethrough
//    if(this.state.isComplete){
//       className = 'font-strike';
//     }
//     return className;    
//   }
  
//   // EXAMPLE 2A - see the setstate in this block of code

//   handleClick = () => {    // public class field: use arrow here with an anonymous function rather than typing in the {}
//      console.log("clicky clicky", this.props.task.description);
    
    
//      this.setState({countClick: 1}) //change clickcount
//      }

//   // // EXAMPLE 2B: pass callback rather than object to modify based on current value (count)
//   // handleClick = () => {    // public class field: use arrow here with an anonymous function rather than typing in the {}
//   //    console.log("clicky clicky", this.props.task.description);
//   //    this.setState((prevState, prevProps) => {
//   //       let updatedState = {countClick: prevState.countClick + 1,
//   //                           isComplete: !prevState.isComplete
//   //                         }

//   //       return updatedState;  //must return the updated state
//   //    } ) //change clickcount
//   //    };   
  
//     render() {
  
//     return (
//       <li className={this.getClassName()} onClick={this.handleClick}  >
//         {this.props.task.description}
//         {' '} ({this.state.countClick})
//       </li>
//     );
//   }
// }



// class AddTaskForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {newTask: ''}; //what is typed in
//   }

//   handleChange = (event) => {    
//     //let whichElement = event.target;
//     //let whatValue = whichElement.value;
//     let value = event.target.value;
//     console.log("I changed to:", value);
//     this.setState({newTask: value})
//   }

//   handleClick = (event) => {
//     event.preventDefault();
//     this.props.howToAdd(this.state.newTask)
//   }

//   render() {
//     return (
//       <form>
//         <input 
//           className="form-control mb-3"
//           placeholder="What else do you have to do?"
//           value={this.state.newTask}
//           onChange={this.handleChange}
//           />
//         <button className="btn btn-primary" onClick={this.handleClick}>
//           Add task to list
//         </button>
//       </form>
//     );
//   }
// }

//---------------------------------------------------------------------------------------------

//EXAMPLE 3 - Lifting state
class App extends Component {
  constructor(props){
    super(props); //pass up to parent

    //initialize state
    this.state = {
      tasks: [] //SAMPLE_TASKS //store the tasks in the STATE, initialize
    };

  }

  componentDidMount() {
    //fetch('https://api.github.com/repos/info340a-au18/lecture-demos/issues')
    fetch('./tasks.json') //local file
      .then((res) => res.json())
      .then((data) => {
        let issueTasks = data.map((issue) => {
          return {
            id: issue.id,
            description: issue.description,
            complete: false
          }
        })
        this.setState({tasks:issueTasks})        
      })
  }

  toggleComplete = (taskId) => {
    this.setState((currentState) => { //update the state and RE-RENDER
      let updatedTasks = currentState.tasks.map((task) => {
        if(task.id === taskId)
          task.complete = !task.complete;      
        return task;
      })
      return {tasks: updatedTasks}
    })
  }

  addTask = (newDescription) => {
    this.setState((currentState) => {
      let newTask = {
        id: currentState.tasks.length+1,
        description: newDescription,
        complete: false
      }
      currentState.tasks.push(newTask); //add task, better to copy array
      return {tasks: currentState.tasks}
    })
  }

  render() {
    //do data processing
    let incomplete = this.state.tasks.filter((task) => !task.complete);
    //console.log("Number of tasks:", incomplete.length);

    return (
      <div className="container">
        <p className="lead">Things I have to do ({incomplete.length})</p>
        <TaskList howToToggle={this.toggleComplete} tasks={this.state.tasks} />
        <AddTaskForm howToAdd={this.addTask} />
      </div>
    );
  }
}

class TaskList extends Component {  
  render() {
    //do data processing
    let taskComponents = this.props.tasks.map((eachTask) => {
      let singleTask = <Task 
                          key={eachTask.id} 
                          task={eachTask} 
                          howToToggle={this.props.howToToggle}
                          /> //pass callback down
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
  }

  render() {
    let thisTask = this.props.task; //can give local name for readability
    return (
      <li className={this.getClassName()} onClick={this.handleClick} >
        {thisTask.description}
      </li>
    );
  }
}


class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {newTask: ''}; //what is typed in
  }

  handleChange = (event) => {    
    //let whichElement = event.target;
    //let whatValue = whichElement.value;
    let value = event.target.value;
    console.log("I changed to:", value);
    this.setState({newTask: value})
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.howToAdd(this.state.newTask)
  }

  render() {
    return (
      <form>
        <input 
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          value={this.state.newTask}
          onChange={this.handleChange}
          />
        <button className="btn btn-primary" onClick={this.handleClick}>
          Add task to list
        </button>
      </form>
    );
  }
}

export default App;