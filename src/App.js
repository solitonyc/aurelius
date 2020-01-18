import React, {Component} from 'react';
import Navigation from './nav-bar/Navigation';
import Main from './sections/Main';
import Services from './sections/Services';
import Page3 from './sections/Page3';
import Page4 from './sections/Page4';
import Page5 from './sections/Page5';
import Footer from './sections/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Services />
        <Page3 />
        <Page4 />
        <Page5 />
        <Footer />
      </div>
    );
  }
}

export default App;
