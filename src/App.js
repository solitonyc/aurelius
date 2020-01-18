import React, {Component} from 'react';
import Navigation from './nav-bar/Navigation';
import Main from './sections/Main';
import Services from './sections/Services';
import About from './sections/About';
import Management from './sections/Management';
import Page5 from './sections/Page5';
import Footer from './sections/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Services />
        <About />
        <Management />
        <Page5 />
        <Footer />
      </div>
    );
  }
}

export default App;
