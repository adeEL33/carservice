import React, { Component } from 'react';
import Successmessage from './Successmessage';
import Errormessage from './Errormessage';
export default class addservice extends Component {
    constructor () {
        super();
        this.state = {
          name: '',
          uname: '',
          email:'',
          password:'',
          roll:'',
          message:'',
          messageclass:''
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRollChange = this.handleRollChange.bind(this);
      }
      
      handleNameChange (evt) {
        this.setState({ name: evt.target.value });
      }

      handleUnameChange (evt) {
        this.setState({ uname: evt.target.value });
      }
      handleEmailChange (evt) {
        this.setState({ email: evt.target.value });
      }

      handlePasswordChange (evt) {
        this.setState({ password: evt.target.value });
      }

      handleRollChange (evt) {
        this.setState({ roll: evt.target.value });
      }
    
      onSubmit(e){
          e.preventDefault();
          if(this.state.name != '' && this.state.uname !='' && this.state.email !='' && this.state.password != '' && this.state.roll != ''){
            const datas ={
                name : this.state.name,
                uname :this.state.uname,
                email : this.state.email,
                password :this.state.password,
                roll : this.state.roll

            }
            axios.post('http://127.0.0.1:8000/api/user/add',datas).then(res=>{
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
                <h3>Add Users</h3>
                <hr />
                <p className={this.state.messageclass}>{ this.state.message }</p>

                <form onSubmit={ this.onSubmit }>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Name</lable>
                            <input name="sname" value={ this.state.name } className="form-control" placeholder="Name" onChange={this.handleNameChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>User Name</lable>
                            <input name="sname" value={ this.state.uname } className="form-control" placeholder="User Name" onChange={this.handleUnameChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Email</lable>
                            <input type="text"  value={ this.state.email } className="form-control" placeholder="Email" onChange={this.handleEmailChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Password</lable>
                            <input type="text" value={ this.state.password } className="form-control" placeholder="Password" onChange={this.handlePasswordChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Roll</lable>
                            <select value={ this.state.rolls } className="form-control"  onChange={this.handleRollChange}>
                                <option value="">Select</option>
                                <option value="1">Admin</option>
                                <option value="2">Modrator</option>
                                <option value="3">Employee</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-md-9"></div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-warning" >Submit</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}
