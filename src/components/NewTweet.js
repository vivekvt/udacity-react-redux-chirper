import React, { Component } from 'react'
import {connect} from 'react-redux';
import {handleAddTweets} from '../actions/tweets';
import {Redirect} from 'react-router-dom';

class NewTweet extends Component {
    state={
        text:'',
        toHome:false,
    }
    handleChange=(e)=>{
        const text = e.target.value;
        this.setState({
            text
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const{ text } = this.state;
        const {dispatch, id}=this.props;
        dispatch(handleAddTweets(text, id));
        this.setState({
            text:'',
            toHome: id ? false : true
        })
    }

  render() {
    const{ text, toHome } = this.state;

    if(toHome === true){
        return <Redirect to='/' />
    }


    const tweetLeft=200-text.length;
    return (
      <div>
          <h3 className='center'>New Tweet</h3>
          <form onSubmit={this.handleSubmit} className="new-tweet">
              <textarea placeholder="What's Happening?" value={text}
              onChange={this.handleChange} className='textarea' maxLength={200} />
              {tweetLeft <= 100 && (
                  <div className='tweet-length'>
                      {tweetLeft}
                  </div>
              )}
              <button className='btn' type='submit'
              disabled={text === ''} >Submit</button>
          </form>
      </div>
    )
  }
}

// function mapStateToProps({tweets}){
//     return {
//         tweetIds:Object.keys(tweets)
//         .sort((a, b)=> tweets[b].timestamp - tweets[a].timestamp)
//     }
// }

export default connect()(NewTweet);