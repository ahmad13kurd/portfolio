import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends Component {
   
    render() { 
        return ( 
            <div className="contact container">
               
                    <header className="mb-5">

                    </header>
                    <div className="row">
                        <div className="col-md-7 mb-5 mb-md-0">
                        <form id="contact-form" method="post" action="https://formspree.io/ahmad.malla.ismail@gmail.com" className="form">
                            <div className="controls">
                                <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <label className="form-label"></label>
                                    <input type="text" name="name" id="name" placeholder="Enter your firstname" required="required" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <label className="form-label"></label>
                                    <input type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required" className="form-control"/>
                                    </div>
                                </div>
                                </div>
                                <div className="form-group">
                                <label className="form-label"></label>
                                <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <label className="form-label"></label>
                                <textarea rows="4" name="message" id="message" placeholder="Enter your message" required="required" className="form-control"></textarea>
                                </div>
                                <button type="submit" className="btn btn-secondary">Send message</button>
                            </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <div className="info">
                                <div className="row">
                                    <div className="col">Address</div>
                                    <div className="col">Eschenbeeker Str.1 <br/>42109 WUPPERTAL</div>
                                </div>
                        
                                <div className="row">
                                    <div className="col">Phone</div>
                                    <div className="col"><a href="#">+49 1792609267</a></div>
                                </div>
                            
                                <div className="row">
                                    <div className="col">Email</div>
                                    <div className="col"><a href="#">ahmad.malla.ismail@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
     
            </div>
         );
    }
}
 
export default Contact;

