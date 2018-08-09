import React, { Component } from 'react';


import Heading from './components/Heading'
import ActionButtons from './components/ActionButtons'

class App extends Component {
  render() {
    return (
      <div className='container'>
        
        <Heading>Git the Gist</Heading>
        <ActionButtons />
        
      </div>
    );
  }
}

export default App;
