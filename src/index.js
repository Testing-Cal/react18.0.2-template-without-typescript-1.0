import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard-page';
import Listing from './listing-page';
import PageNotFound from './page-not-found';

const App = () => {
  const basePath = process.env.REACT_APP_CONTEXT;
  return (
    <Router basename={basePath}>
      <div>
          <nav style={{margin: '20px'}}>
              <Link to="/" style={{marginRight: '20px'}}>Home1</Link>
              <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
              <Link to="/listing">Listing</Link>
              <Link to="/dashboard/listing">Listing 1</Link>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard/*" element={<Dashboard />} >
                    <Route index element={<Home />} />
                    <Route path='new' element={<Posts />} /> {/*A nested route!*/}
                    <Route path='listing' element={<Listing />} /> {/*A nested route!*/}
              </Route>
              <Route path="/listing" element={<Listing />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>
    </Router>
   )
}

render(<App />, document.getElementById('root'));

/*
class based component

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Welcome to Integrated Digital Platform'
    };
  }

  render() {
   const basePath = process.env.REACT_APP_CONTEXT;
    return (
        <Router basename={basePath}>
            <div>
                <nav style={{margin: '20px'}}>
                    <Link to="/" style={{marginRight: '20px'}}>Home</Link>
                    <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
                    <Link to="/listing">Listing</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home name={this.state.name}/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/listing" element={<Listing />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
*/
