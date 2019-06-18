import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



class CardBody extends Component {
    render() { 
        return (
            <div className="container " id="works">
                <div className=" card1">
                    <div className="card-body">
                        <h1 className="card-title"><a href="#">Crud App</a></h1>
                        <p className="card-text">reactJs & nodeJs & MongoDB</p>
                        <button type="button" className="btn btn-secondary">view in Github</button>
                    </div>
                    <img src={require("../images/pic08.jpg")} className="card-img-top" alt="alt"/>
                </div>



                        <div className="row">
                            <div className="col">
                            <div className="card mb-3 card2" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={require("../images/pic07.jpg")} className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title"><a href="#">Weather App</a></h3>
                                            <p className="card-text">ReactJs</p>
                                            <button type="button" className="btn btn-secondary">view in Github</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="card mb-3 card2" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={require("../images/pic02.jpg")} className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title"><a href="#">Authentication App</a></h3>
                                            <p className="card-text">ReactJs & NodeJs & MongoDB</p>
                                            <button type="button" className="btn btn-secondary">view in Github</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                
                    <div className="row">
                        <div className="col">
                            <div className="card mb-3 card2" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={require("../images/pic07.jpg")} className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title"><a href="#">Crud App</a></h3>
                                            <p className="card-text">ReactJs</p>
                                            <button type="button" className="btn btn-secondary">view in Github</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-3 card2" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={require("../images/pic02.jpg")} className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title"><a href="#">project5</a></h3>
                                            <p className="card-text">This is a wider card with supporting text below</p>
                                            <button type="button" className="btn btn-secondary">view in Github</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        );
    }
}
 
export default CardBody;