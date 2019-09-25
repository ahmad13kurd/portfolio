import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



class CardBody extends Component {
    render() { 
        return (
            <div className="container " id="works">
                <div className=" card1">
                    <div className="card-body">
                        <h1 className="card-title"><a href=" https://crodapp.herokuapp.com/" target="_blank">MERN Crud App</a></h1>
                        <p className="card-text">reactJs & nodeJs & MongoDB</p>
                        <a type="button" href="https://github.com/ahmad13kurd/CrudApp-react-nodeJs" target="_blank" className="btn btn-secondary">view in Github</a>
                    </div>
                    <a href="#" target="_blank"><img src={require("../images/crudNode.jpg")} className="card-img-top" alt="alt"/></a>
                </div>



                        <div className="row">
                            <div className="col">
                            <div className="card mb-3 card2">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <a href="https://ahmad13kurd.github.io/weatherapp" target="_blank"><img src={require("../images/regenschauer.png")} className="card-img" alt="..." /></a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title"><a href="https://ahmad13kurd.github.io/weatherapp" target="_blank">Weather App</a></h3>
                                            <p className="card-text">ReactJs</p>
                                            <a type="button" href="https://github.com/ahmad13kurd/weatherapp" target="_blank" className="btn btn-secondary">view in Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="card mb-3 card2" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <a href="#"><img src={require("../images/authen.png")} className="card-img" alt="..." /></a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                        <h3 className="card-title"><a href="https://authenapp.herokuapp.com/" target="_blank">Authentication App</a></h3>
                                            <p className="card-text">ReactJs & NodeJs & MongoDB</p>
                                            <a type="button" href="https://github.com/ahmad13kurd/authenapp" target="_blank" className="btn btn-secondary">view in Github</a>
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
                                        <a href="https://ahmad13kurd.github.io/crudapp-reactjs" target="_blank"><img src={require("../images/crud.png")} className="card-img" alt="..." /></a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title"><a href="https://ahmad13kurd.github.io/crudapp-reactjs" target="_blank">Crud App</a></h3>
                                            <p className="card-text">ReactJs</p>
                                            <a type="button" href="https://github.com/ahmad13kurd/crudapp-reactjs" target="_blank" className="btn btn-secondary">view in Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col">
                            <div className="card mb-3 card2" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <a href="#" target="_blank"><img src={require("../images/pic02.jpg")} className="card-img" alt="..." /></a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title"><a href="#" target="_blank">project5</a></h3>
                                            <p className="card-text">This is a wider card with supporting text below</p>
                                            <a type="button" href="#" target="_blank" className="btn btn-secondary">view in Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    
            </div>
        );
    }
}
 
export default CardBody;