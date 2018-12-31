import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Oséias Paulo da Silva',
        avatar:
          'https://avatars1.githubusercontent.com/u/19921640?s=400&u=0f69244d5312206cbab6237eae7edc67f5615501&v=4',
        time: 'há 8 min',
        body:
          'Lorem ipsum sapien aptent erat varius vestibulum morbi, velit praesent proin dapibus non leo consequat, senectus eget pellentesque per pellentesque risus. enim venenatis odio orci vulputate ultrices mollis suscipit, etiam quam non massa etiam vehicula, libero tincidunt velit suspendisse nullam accumsan. sed venenatis.',
      },
      {
        id: 2,
        name: 'Oséias Paulo da Silva²',
        avatar:
          'https://avatars1.githubusercontent.com/u/19921640?s=400&u=0f69244d5312206cbab6237eae7edc67f5615501&v=4',
        time: 'há 16 min',
        body:
          'Lorem ipsum sapien aptent erat varius vestibulum morbi, velit praesent proin dapibus non leo consequat, senectus eget pellentesque per pellentesque risus. enim venenatis odio orci vulputate ultrices mollis suscipit, etiam quam non massa etiam vehicula, libero tincidunt velit suspendisse nullam accumsan. sed venenatis.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
