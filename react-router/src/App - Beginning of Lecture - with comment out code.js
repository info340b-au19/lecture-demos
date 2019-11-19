import React, { Component } from 'react';

// // to import reactstrap SLIDE 7
// import { Card, CardText, CardBody,
//   CardTitle, Button } from 'reactstrap';

// // to import react-router-dom SLIDE 12
// import {Route, Switch, NavLink} from 'react-router-dom';  

class App extends Component {
  constructor(props){
    super(props);
    this.state = {posts: this.props.initialPosts};  //if you wanted it blank- " = {posts: {}}"
  }

// to fetch data SLIDE 5 (Uncomment)
// componentDidMount() {
//   fetch('./blogPosts.json').then((response) => {
//     return response.json()
//   })
//     .then((data) => {
//       console.log(data);
//       this.setState({posts: data})
//     })
//     .catch((err) => {
//       console.log("ouch");
//     })
// }


  addPost = (text, date) => {
    console.log("adding post");
    this.setState((prevState) => {
      let shallowCopy = Object.assign({}, prevState.posts); //don't modify prevState!
      shallowCopy[date] = text; //add new entry  
      return {posts: shallowCopy} //return updated object
    })
  }
  
  render() {
    console.log(this.state);
    let postLinks = Object.keys(this.state.posts).map((date) => {
      return (
        <li key={date}>
          <a href={'/blog/posts/'+date} className="nav-link">{date}</a>
        </li>
      )
    });

    return (
      <div className="container">
        <h1>My Blog</h1>
        <nav>
          
          {/* Original Nav */}

          <ul className="nav">
            <li>
              <a href='/' className="nav-link">Home</a>
            </li>
            <li>
              <a href='/about' className="nav-link">About</a>
            </li>
            <li>
              <a href='/blog' className="nav-link">Blog</a>
            </li>
            {postLinks}
          </ul>

          {/* 2nd Nav - NavLink Example Slide 12  */}

        {/* <ul className="nav">
            <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li>
              <a href='/blog' className="nav-link">Blog</a>
            </li>
            {postLinks}
          </ul> */}
        </nav>
        
        {/* Original code instantiating page components */}

        <NewPostPage postCallback={this.addPost} />
        <AboutPage />
        <BlogPostList posts={this.state.posts} />

        {/* 1st verssion of code instantiating components with routes         */}
        
          {/* <Route exact path="/" component={NewPostPage} />
          <Route path="/info/about" component={AboutPage} />
          <Route path="/info" component={MoreInfoPage} />
          <BlogPostList posts={this.state.posts} />
         */}
       
        {/* 2nd version  of code instantiating components with routes (using switch) */}
       
        {/* <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/info" component={MoreInfoPage} />
          <Route path="/" component={NewPostPage} />
        </Switch>
        <BlogPostList posts={this.state.posts} /> */}
      </div>
    );
  }
}

class NewPostPage extends Component {

  constructor(props){
    super(props);
    this.state = {text: '', date: '2019-02-27'};
  }

  handleChange = (event) => {
    if(event.target.type === "text"){
      this.setState({text: event.target.value})
    } else {
      this.setState({date: event.target.value})
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.postCallback(this.state.text, this.state.date);
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <input type="date"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.date}
          />
        <input 
          className="form-control mb-3"
          placeholder="What did you do today?"
          onChange={this.handleChange}
          value={this.state.text}
          />
        {/* use bootsrap button - SLIDE 7? */}
        {/* <Button color="danger" className="mb-3" onClick={this.handleClick}>
          Post! 
        </Button>  */}
        <button className="btn btn-primary mb-3" onClick={this.handleClick}>
          Post!
        </button>
      </form>
    );
  }
}


class AboutPage extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet cumque. Quasi esse facilis quisquam recusandae quam deleniti suscipit, libero dolore tenetur dignissimos expedita neque repellendus accusantium mollitia, dicta id.</p>
      </div>
    );
  }
}

//Added to demonstrate routing SLIDE 12
class MoreInfoPage extends Component {
  render() {
    return (
      <div>
        <h2>More Info</h2>
        <p>I am more info... everybody knows that</p>
      </div>
    );
  }
}

class BlogPostList extends Component {
  render() {
    let postItems = Object.keys(this.props.posts).map((date) => {
      return <BlogPost key={date} date={date} post={this.props.posts[date]} />
    })

    return <div>{postItems}</div>
  }
}

class BlogPost extends Component {
  render() {

    let date = this.props.date;    
    let post = this.props.post;

    return (
 //Use Bootstrap cards instead -- SLIDE 7
      // <Card>
      //   <CardBody>
      //     <CardTitle>Post on {date}</CardTitle>
      //     <CardText>{post}</CardText>
      //   </CardBody>
      // </Card>
 
      <div>
        <h2>Post on {date}</h2>
        <p>{post}</p>
      </div>
    );
  }
}

export default App;