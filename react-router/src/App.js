import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

import {Route, Switch, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {posts: this.props.initialPosts};
  }

  componentDidMount() {
    fetch('./blogPosts.json').then((response) => {
        return response.json()
    })
      .then((data) => {
        console.log(data);
        this.setState({posts: data})
      })
      .catch((err) => {})
  }

  addPost = (text, date) => {
    this.setState((prevState) => {
      let shallowCopy = Object.assign({}, prevState.posts); //don't modify prevState!
      shallowCopy[date] = text; //add new entry  
      return {posts: shallowCopy} //return updated object
    })
  }
  
  // renderBlogForm = () => {
  //   return <NewPostPage postCallback={this.addPost} />
  // }

  renderBlogForm = (routerProps) => {
    console.log(routerProps);
    return <NewPostPage {...routerProps} postCallback={this.addPost} />
  }

  render() {
    console.log(this.state);

    let postLinks = Object.keys(this.state.posts).map((date) => {
      return (
        <li key={date}>
          <NavLink to={'/blog/posts/'+date} className="nav-link">{date}</NavLink>
        </li>
      )
    });

    return (
      <div className="container">
        <h1>My Blog</h1>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
              {/* <a href='/' className="nav-link">Home</a> */}
            </li>
            <li>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li>
              <a href='/blog' className="nav-link">Blog</a>
            </li>
            {postLinks}
          </ul>
        </nav>
        {/* <NewPostPage postCallback={this.addPost} /> */}
        
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/info" component={MoreInfoPage} />
          <Route path="/" render={this.renderBlogForm} />
        </Switch>

        <BlogPostList {...this.state} />
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
    console.log(this.props);
    this.props.postCallback(this.state.text, this.state.date);
  }

  render() {
    console.log("form props", this.props);
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
        <Button color="success" className="mb-3" onClick={this.handleClick}>
          Post! 
        </Button> 
        {/* <button className="btn btn-primary mb-3" onClick={this.handleClick}>
          Post!
        </button> */}
      </form>
    );
  }
}


class AboutPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet cumque. Quasi esse facilis quisquam recusandae quam deleniti suscipit, libero dolore tenetur dignissimos expedita neque repellendus accusantium mollitia, dicta id.</p>
      </div>
    );
  }
}

class MoreInfoPage extends Component {
  render() {
    return (
      <div>
        <h2>More Info</h2>
        <p>I AM MORE INFO!!!</p>
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
      <Card>
        <CardBody>
          <CardTitle>Post on {date}</CardTitle>
          <CardText>{post}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default App;