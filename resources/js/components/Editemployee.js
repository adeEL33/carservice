import React, { Component } from 'react';
import axios from 'axios';
import Successmessage from './Successmessage';
import Errormessage from './Errormessage';
export default class Editemployee extends Component {
    constructor (props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          username: '',
          message:''
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
      }
      componentDidMount()
      {
          axios.get('http://127.0.0.1:8000/api/employee/show/'+this.props.match.params.id).then(response=>{
              this.setState({ name:response.data.name,email:response.data.email,username:response.data.uname });
          });
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
          const datas ={
              name : this.state.name,
              email :this.state.email,
              username:this.state.username
          }
          axios.put('http://127.0.0.1:8000/api/employee/update/'+this.props.match.params.id,datas).then(res=>{
            this.setState({message :'1'});
          }).catch(error=>{
              this.setState({message:'0'})
          });
        }

    render() {
        return (
            <div>
                <hr />
                <h3>Edit Employee</h3>
                <hr />
                <div>
                {this.state.message == '1'?<Successmessage />:null}
                {this.state.message == '0'?<Errormessage />:null}
                </div>
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
                            <input name="email" readonly="readonly" value={ this.state.email } className="form-control" placeholder="Email" onChange={this.handleEmailChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Employee User Name</lable>
                            <input name="username" readonly="readonly" value={ this.state.username } className="form-control" placeholder="User Name" onChange={this.handleUserNameChange}/>
                            </div>
                        </div>
                        
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-warning" >Update</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}
