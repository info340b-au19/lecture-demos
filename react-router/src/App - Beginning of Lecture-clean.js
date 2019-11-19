import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {posts: this.props.initialPosts};
  }

  addPost = (text, date) => {
    console.log("adding post");
    this.setState((prevState) => {
      let shallowCopy = Object.assign({}, prevState.posts); //don't modify prevState!
      shallowCopy[date] = text; //add new entry  
      return {posts: shallowCopy} //return updated object
    })
  }
  
  render() {
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
        </nav>
        <NewPostPage postCallback={this.addPost} />
        <AboutPage />
        <BlogPostList posts={this.state.posts} />
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
      <div>
        <h2>Post on {date}</h2>
        <p>{post}</p>
      </div>
    );
  }
}

export default App;