import React, { Fragment, useState, useEffect } from 'react';

export default function RedditHooks() {
  const [subreddit, setSubreddit] = useState('');
  const [subredditText, setSubredditText] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (subreddit !== '') {
      console.log('Fetching subreddit...');
      fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(res => res.json())
        .then(json => {
          setPosts(json.data.children.map(c => c.data));
        });
    }
  }, [subreddit]);

  const handleChange = event => {
    setSubredditText(event.currentTarget.value);
  };

  const renderThumbnail = (thumbnail, title, url) => {
    if (thumbnail !== '' && thumbnail !== 'self') {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} />
        </a>
      );
    }
  };

  return (
    <div className="App">
      <h1>Subreddit Hooks</h1>
      <input
        type="text"
        placeholder="Type a subreddit"
        onChange={handleChange}
        value={subredditText}
      />
      <button onClick={() => setSubreddit(subredditText)}>Change</button>
      <h2>{subreddit}</h2>
      <ul>
        {posts.map(post => (
          <Fragment key={post.id}>
            {renderThumbnail(post.thumbnail, post.title, post.url)}
            <li>{post.title}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
