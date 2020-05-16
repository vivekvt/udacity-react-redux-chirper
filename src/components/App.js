import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
      <React.Fragment>
      <LoadingBar />
      <div className='container'>
        
        <Nav />
        {this.props.loading === true ? null : 
        <div>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/tweet/:id' component={TweetPage} />
          <Route exact path='/new' component={NewTweet} />
        </div>
        }
      </div>
      </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authUser}){
  return {
    loading: authUser===null
  }
}

export default connect(mapStateToProps)(App);