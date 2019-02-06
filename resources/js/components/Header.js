import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            userrole:''
        }
        this.Logout=this.Logout.bind(this);
            
        }
    Logout(){
        var r = confirm("Are You Sure You Want To Log Out");
        if(r){
            localStorage.setItem('validate','');
        }
       

    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link to='/' className="text text-success">Home</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    {/* {
                            
                    JSON.parse(localStorage.getItem('validate')).map((user,i)=>{
                        
                        return (
                                <a className="nav-link" key={i}>Hi ! {user.name}</a>                                 )
                        })
                    } */}
                </li>
                <li className="nav-item active logout">
                <form onSubmit={ this.Logout }>
                    <button className="btn btn-sm btn-warning" href="#" >Logout</button>
                </form>
                </li>
            </ul>
            </nav>
        );
    }
}
