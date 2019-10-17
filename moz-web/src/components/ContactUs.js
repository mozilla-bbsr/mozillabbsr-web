import React, { Component } from 'react'


class ContactUs extends Component {
    state = {
        fullName: '',
        email: '',
        mobile:'',        
        comment: '',
    }

    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state)
       
   }
    handleChange = (e) => {
       this.setState({
           [e.target.id]:e.target.value
       }) 
    }
    render() {
        return (    
                <div className="container"> 
                <br/>
                <br/>
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
                        <div className="card">
                        <form onSubmit = {this.handleSubmit}>
                            <div className="card-body">
                            
                                    <div className="form-row">
                                        <div className="form-group col-md-12"> 
                                        <div className = "input-field"> 
                                            <input type ="text" className="form-control" id = "fullName" name = "fullName" onChange={this.handleChange} required="required" placeholder="Full Name"/>
                                        </div>
                                        </div>
                                        <div className="form-group col-md-12">  
                                        <div className = "input-field">                         
                                            <input type="email" className="form-control" id="email" placeholder="Email" required="required" onChange={this.handleChange}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                        <div className = "input-field">
                                            <input id="mobile" placeholder="Mobile No." className="form-control" type="tel" onChange= {this.handleChange}/>
                                        </div>
                                        </div>
                                        
                                        <div className="form-group col-md-12">
                                        <div className = "input-field">
                                                <textarea id="comment" name="comment" cols="40" rows="5" onChange= {this.handleChange} placeholder="Your Message"className="form-control"></textarea>
                                        </div>
                                        </div>
                                    </div>
                                                            
                                        <div className="form-row">
                                        <div className = "input-field">                        
                                            <button type="button" className="btn btn-success">Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </form>
                        </div>
                        <br/>
                                    <hr/>
                        <div className="social">
                        <ul className="list-inline list-unstyled">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/mozillabbsr/"><i className="fa fa-facebook-square fa-4x"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="mailto:mozillabbsr@gmail.com?Subject=Hello"><i className="fa fa-envelope-square fa-4x" style={{color:'black'}}aria-hidden="true"></i></a>
                            </li>
                            
                        </ul>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;