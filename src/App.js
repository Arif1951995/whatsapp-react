import React, { Component } from 'react';
import './App.css';
import User from './components/User'

class App extends  Component {
  state = {
    data: []
  }
componentDidMount() {
  fetch(`https://cors-anywhere.herokuapp.com/https://tk-whatsapp.herokuapp.com/messages`)
.then(result => {
    return result.json();
})
.then(data => {
   this.setState({
     data: data
   })
   console.log(data);
})
.catch(error => {
    document.write(`<h1>${error}</h1>`)
})

}
  



  render() {
    return (
     <ul>
       {
          
     this.state.data ? this.state.data.map(e => {
      return <User user={e} 
      unread={e.isUnread ? 'unread-li' : ''}
      unreadNumOfSms={e.isUnread ? 'unread-div' : ''}
       />
    }) : 'asdad'
       }
     </ul>
        
    );
  }
}

export default App;
