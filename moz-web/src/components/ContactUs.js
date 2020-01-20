import React, { Component } from 'react';
// import axios from 'axios';


class ContactUs extends Component {

    constructor(props) {
        super(props);
  
        this.onChangeName = this.onChangeName.bind(this);  
        this.onChangeEmail = this.onChangeEmail.bind(this); 
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
  
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            name: '',
            email: '',
            contact:'',        
            comment: '',
        };
      }
   

      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }

      onChangeContact(e) {
        this.setState({
          contact: e.target.value
        });
      }

      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }

      onChangeComment(e) {
        this.setState({
          comment: e.target.value
        });
      }

      onSubmit(e) {
        e.preventDefault();
  
        const Params = {
          name: this.state.name,        
          email: this.state.email,
          contact: this.state.contact,
          comment: this.state.comment,
         
        };
  
    //     axios({
    //       method: 'POST',
    //       url: '#',
    //       data: Params
    //     }).then(response => {
    //       if (response.data.success) {
    //         alert("Response Noted");
    //      //    this.props.onSubmit(response.data.success);
    //         this.setState({
    //           name: '',
    //           course:'',
    //           email: '',             
    //           contact: ''              
    //         });
    //       } else {
    //         // alert(response.data.message);
    //      //    this.props.onSubmit(response.data.message);
    //       }
    //     });
    //   }

    }
    render() {
        return (    
                <div className="container"> 
                <br/><br/><br/><br/>
                    <div className="row">
                    <div className="col-md-12">
                    <h1 className="display-4">Get In Touch</h1>
                        <hr/>
                    </div>
                    <div className="col-md-6">
                        <div className="address">
                            
                        <h5>Address:</h5>
                        <ul className="list-unstyled">
                            <li> School Of Computer Engineering</li>
                            <li> KIIT University</li>
                            <li> Bhubaneswar, Odisha </li>
                        </ul>
                        
                        </div>
                        <div className="email">
                        <h5>Email:</h5>
                        <ul className="list-unstyled">
                            <li> mozillabbsr@gmail.com</li>
                        
                        </ul>
                        </div>
                        <div className="phone">
                            <h5>Phone:</h5>
                            <ul className="list-unstyled">
                            <li> +91- 079799 44709</li>
                            
                        </ul>
                        </div>
                        <div>          
                        <iframe width="400" height="250" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDzaPvBkJGToR8UA0jpGOaV8&key=AIzaSyAb9os1EmwXBnbaG1GuGfefpCdJchFq5nk" allowfullscreen></iframe>         
                </div>
                        <hr/>
                    
                    </div>
                    <div className="col-md-6">
                        {/* <div className="card"> */}

                        <form onSubmit={this.onSubmit}>
                <div className='form-group md-form'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Your Name'
                    value={this.state.name}
                    onChange={this.onChangeName}
                    required
                  />
                </div>
                <div className='form-group md-form'>
                  <input
                    type='email'
                    placeholder='E-Mail Address'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    required
                  />
                </div>
                <div className='form-group md-form'>
                  <input
                    type='text'
                    maxLength='10'
                    pattern='[0-9]{10}'
                    className='form-control'
                    placeholder='Contact No.'
                    value={this.state.contact}
                    onChange={this.onChangeContact}
                    required
                  />
                </div>
                <div className='form-group '>
                     <textarea cols="40" rows="5" onChange= {this.onChangeComment} placeholder="Your Message"className="form-control" required></textarea>
                </div>              

                <br />
                <div class='form-group text-center'>
                  <button
                    class='btn btn-default text-white btn-lg'
                    style={{ fontFamily: 'Acme' }}
                  >
                    Send <i class='fa fa-paper-plane-o ml-1'></i>
                  </button>
                </div>
              </form>                      
                        </div>
                        <br/>
                        <hr/>
                       

                    </div>
                </div>
            // </div>
        )
    }
}

export default ContactUs;

   