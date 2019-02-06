import React, { Component } from 'react';
import axios from 'axios';
export default class Addemployee extends Component {
    constructor () {
        super();
        this.state = {
          name: '',
          email: '',
          username: '',
          message:'',
          messageclass:''
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
      }
      
      handleNameChange (evt) {
        this.setState({ name: evt.target.value });
      }

      handleEmailChange (evt) {
        this.setState({ email: evt.target.value });
      }
      
      handleUserNameChange (evt) {
        this.setState({ username: evt.target.value });
      }

      onSubmit(e){
          e.preventDefault();
          if(this.state.name != "" && this.state.email != "" && this.state.username != ""){
            const datas ={
                name : this.state.name,
                email :this.state.email,
                username:this.state.username
            }
            axios.post('http://127.0.0.1:8000/api/employee/add',datas).then(res=>{
                this.setState({messageclass:"alert alert-success"});
                this.setState({message:"Opration Done Successfully"});
            }).catch(error=>{
                this.setState({messageclass:"alert alert-danger"});
                this.setState({message:"opration Faild"});
            });
          }
          else{
            this.setState({messageclass:"alert alert-danger"});
              this.setState({message:"All fields are required"});
          }
         
      }

    render() {
        return (
            <div>
                <hr />
                <h3>Add Employee</h3>
                <hr />
                <p className={this.state.messageclass}>{ this.state.message }</p>

                <form onSubmit={ this.onSubmit }>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Employee Name</lable>
                            <input name="employeename" value={ this.state.name } className="form-control" placeholder="Name" onChange={this.handleNameChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Employee Email</lable>
                            <input name="email" value={ this.state.email } className="form-control" placeholder="Email" onChange={this.handleEmailChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Employee User Name</lable>
                            <input name="username" value={ this.state.username } className="form-control" placeholder="User Name" onChange={this.handleUserNameChange}/>
                            </div>
                        </div>
                        
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-warning" >Submit</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}
