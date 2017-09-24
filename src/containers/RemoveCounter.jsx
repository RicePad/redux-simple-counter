import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions';
import { bindActionCreators } from 'redux';

class RemoveCounter extends Component {
    constructor(props){
        super(props);
    }
    
    countDown(){
        return this.props.removeCounter()
    }
    
    render(){
        return(
            <div className="container">
              <form>
                <div className="field is-grouped">
                    <div className="control">
                    <button className="button is-primary" onClick={(e) => {e.preventDefault();this.countDown()}}>
                        Remove
                    </button>
                    </div>
                </div>
              </form>
            </div>
            );
    }
}



export default connect(null, { removeCounter })(RemoveCounter);