import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Index from './Index';
export default class Login extends Component {

    constructor(){
        super();
            this.state = {
            name: '',
            password:'',
            validate:''
            };
            this.onSubmit=this.onSubmit.bind(this);
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
        }
        handleNameChange (evt) {
            this.setState({ name: evt.target.value });
        }

      handlePasswordChange (evt) {
        this.setState({ password: evt.target.value });
      }

      onSubmit(e){
         // e.preventDefault();
         if(this.state.name != "" && this.state.password != ""){
            const datas ={
                name : this.state.name,
                password :this.state.password,
            }
            axios.post('http://127.0.0.1:8000/api/login',datas).then(res=>{
             localStorage.setItem('validate',JSON.stringify(res.data));
            }).catch(error=>{
              alert('email or password is inncorrect')
            });
         }
         else{
            
             alert("all fields are required");
             e.preventDefault();
         }
          
      }

    render() {
        let htmlcomponent;
        if(localStorage.getItem('validate') == ''){
            htmlcomponent = <div className="container-fluid logindiv"><div>
            <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <br/><br/><br/><br/><br/><br/>
            <div className="card bg-dark text-white rounded-0">
                <div className="card-header">
                    <h3 className="mb-0">Login</h3>
                </div>
                <div className="card-body">
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                    <label>User Name</label>
                    <input type="text" placeholder="Enter User Name" className="form-control form-control-lg rounded-0" name="uname1" onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control form-control-lg rounded-0" onChange={this.handlePasswordChange}/>
                    </div>
                    <button className="btn btn-warning">Login</button>
                </form>
                </div>
            </div> 
        </div>
        
        
        
        
        </div>
        <div className="col-md-3"></div>   
    </div></div>;
        }
        else{
            htmlcomponent = <Index />;
        }
        return (
        <div>
            <div >
                { htmlcomponent }
            </div>
            
        </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Login />, document.getElementById('app'));
}
