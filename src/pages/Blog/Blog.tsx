import React, { Component } from 'react';
import BlogService, { BlogPost } from '../../services/BlogServices';
import "./Blog.css";

interface BlogState {
  posts: BlogPost[];
  newPostTitle: string;
  newPostContent: string;
}

class Blog extends Component<{}, BlogState> {
  private blogService: BlogService;

  constructor(props: {}) {
    super(props);
    this.blogService = new BlogService();
    this.state = {
      posts: this.blogService.getPosts(),
      newPostTitle: '',
      newPostContent: ''
    };
  }

  handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newPostTitle: event.target.value });
  };

  handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ newPostContent: event.target.value });
  };

  handleAddPost = () => {
    const newPost: BlogPost = {
      id: 0, // ID će biti postavljen u addPost metodi
      title: this.state.newPostTitle,
      content: this.state.newPostContent
    };
    this.blogService.addPost(newPost);
    this.setState({ posts: this.blogService.getPosts(), newPostTitle: '', newPostContent: '' });
  };

  handleRemovePost = (id: number) => {
    this.blogService.removePost(id);
    this.setState({ posts: this.blogService.getPosts() });
  };

  render() {
    return (
      <div>
        <h1>AI Blog</h1>
        <div>
          <input
            type="text"
            value={this.state.newPostTitle}
            onChange={this.handleTitleChange}
            placeholder="Post Title"
            style={{ color: 'white', backgroundColor: 'black' }}
          />
          <textarea
            value={this.state.newPostContent}
            onChange={this.handleContentChange}
            placeholder="Post Content"
            style={{ color: 'white', backgroundColor: 'black' }}

          />
          <button onClick={this.handleAddPost}>Add Post</button>
        </div>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
                <h2 style={{ color: 'white' }}>{post.title}</h2>
                <p style={{ color: 'white' }}>{post.content}</p>
              
              <button onClick={() => this.handleRemovePost(post.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Blog;