import React, { Component } from 'react';
import firebase from './Events/firebase';
import { Link } from 'react-router-dom';

import $ from 'jquery';
import '../App.css'

class UploadEvent extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('mozilla-frontweb');
    this.state = {
      title: '',
      date:'',
      hashtags:'',
      description: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  componentDidMount() {
    


  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    const { title, date,  hashtags, description } = this.state;

    this.ref.add({
      title,
      date,
      description,
      hashtags

    }).then((docRef) => {

      this.setState({
        title: '',
        description: '',
        date: '',
        hashtags:''

      });

      this.props.history.push("/")
    })
    
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, date,  hashtags, description } = this.state;
    return (
      <div class="container">
          <br/><br/><br/><br/><br/>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center">
            ADD EVENTS
            </h3>
          </div>
          <center>
          <div class="panel-body col-sm-6">
          
            <form onSubmit={this.onSubmit}>
              <div class="form-group md-form">            
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>             
              <div class="form-group md-form">              
                 <input type="date" class="form-control" name="date" value={date} onChange={this.onChange} placeholder="Date" />
              </div>
              <div class="form-group md-form">
                <input type="text" class="form-control" name="hashtags" value={hashtags} onChange={this.onChange} placeholder="Hashtags" />
              </div>
              <div class="form-group ">              
                <textArea cols="40" rows="5" class="form-control" name="description" onChange={this.onChange} placeholder="Description" required>{description}</textArea>
              </div>
              
                        
              <div class='form-group text-center'>
                  <button
                    class='btn btn-default text-white btn-lg'
                    style={{ fontFamily: 'Acme' }}
                  >
                    ADD <i class='fa fa-paper-plane-o ml-1'></i>
                  </button>
                </div>
            </form>
          </div>
          </center>
        </div>
      </div>
    );
  }
}

export default UploadEvent;