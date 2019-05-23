import React, { Component, Fragment } from 'react';

export default class RedditClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: '',
      subredditText: '',
      posts: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Render complete.');

    if (this.state.subreddit !== prevState.subreddit) {
      console.log('Fetching subreddit...');
      fetch(`https://www.reddit.com/r/${this.state.subreddit}.json`)
        .then(res => res.json())
        .then(json => {
          this.setState({ posts: json.data.children.map(c => c.data) });
        });
    }
  }

  handleChange(event) {
    this.setState({ subredditText: event.currentTarget.value });
  }

  handleClick() {
    if (this.state.subredditText !== '') {
      this.setState({ subreddit: this.state.subredditText });
    }
  }

  renderThumbnail(thumbnail, title, url) {
    if (thumbnail !== '' && thumbnail !== 'self') {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} />
        </a>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Subreddit Class</h1>
        <input
          type="text"
          placeholder="Type a subreddit"
          onChange={this.handleChange}
          value={this.state.subredditText}
        />
        <button onClick={this.handleClick}>Change</button>
        <h2>{this.state.subreddit}</h2>
        <ul>
          {this.state.posts.map(post => (
            <Fragment key={post.id}>
              {this.renderThumbnail(post.thumbnail, post.title, post.url)}
              <li>{post.title}</li>
            </Fragment>
          ))}
        </ul>
      </div>
    );
  }
}
