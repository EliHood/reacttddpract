import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentFeed from './components/CommentFeed';

const comments =[

  {
    author: 'Ian Wilson',
    text: 'A boats a boat but a mystery box could be anything.'
  },
  {
    author: 'Max Powers Jr',
    text: 'Krypton sucks.'
  },
  {
    author: 'Kent Beck',
    text: 'Red, Green, Refactor.'
  }
    
]
class App extends Component {



  render() {
      return (
        <div>
          <h1>Welcome</h1>
          <CommentFeed comments={comments} />
         
        </div>
      );
    }
  }
  export default App;