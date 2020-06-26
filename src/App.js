import React from 'react';
import Header from './header';
import List from './list';
import Footer from './footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div>
          <List />
        </div>
        <Footer />
      </div>
    )
  }
}



export default App;
