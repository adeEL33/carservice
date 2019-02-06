import React, { Component } from 'react';
import Successmessage from './Successmessage';
import Errormessage from './Errormessage';
export default class addservice extends Component {
    constructor () {
        super();
        this.state = {
          name: '',
          charges: '',
          message:'',
          messageclass:''

        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleChargesChange = this.handleChargesChange.bind(this);
      }
      
      handleNameChange (evt) {
        this.setState({ name: evt.target.value });
      }

      handleChargesChange (evt) {
        this.setState({ charges: evt.target.value });
      }
    
      onSubmit(e){
          e.preventDefault();
          if(this.state.name != "" && this.state.charges != ""){
          const datas ={
              name : this.state.name,
              charges :this.state.charges
          }
          axios.post('http://127.0.0.1:8000/api/service/add',datas).then(res=>{
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
                <h3>Add Service</h3>
                <hr />
                <p className={this.state.messageclass}>{ this.state.message }</p>
                {this.state.message == '1'?<Successmessage />:null}
                {this.state.message == '0'?<Errormessage />:null}
                <form onSubmit={ this.onSubmit }>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Service Name</lable>
                            <input name="sname" value={ this.state.name } className="form-control" placeholder="Service Name" onChange={this.handleNameChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Service Charges</lable>
                            <input type="number" min="0" name="scharges" value={ this.state.charges } className="form-control" placeholder="Service Charges" onChange={this.handleChargesChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
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
