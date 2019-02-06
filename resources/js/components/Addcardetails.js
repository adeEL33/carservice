import React, { Component } from 'react';
import axios from 'axios';
export default class Addcardetails extends Component {
    constructor () {
        super();
        this.state = {
          model: '',
          noplate: '',
          message:'',
          messageclass:''
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleNoplateChange = this.handleNoplateChange.bind(this);
      }
      
      handleModelChange (evt) {
        this.setState({ model: evt.target.value });
      }

      handleNoplateChange (evt) {
        this.setState({ noplate: evt.target.value });
      }

      onSubmit(e){
          e.preventDefault();
          if(this.state.model != "" && this.state.noplate != ""){
            const datas ={
                model : this.state.model,
                noplate :this.state.noplate
            }
            axios.post('http://127.0.0.1:8000/api/cardetail/add',datas).then(res=>{
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
                <h3>Add Car Details</h3>
                <hr />
                <p className={this.state.messageclass}>{ this.state.message }</p>

                <form onSubmit={ this.onSubmit }>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Car Model</lable>
                            <input name="carmodel" value={ this.state.model } className="form-control" placeholder="Car Model" onChange={this.handleModelChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Car Num Plate</lable>
                            <input  name="numplate" value={ this.state.noplate } className="form-control" placeholder="Car No Plate" onChange={this.handleNoplateChange}/>
                            </div>
                        </div>
                        
                        <div className="col-md-6"></div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-warning" >Submit</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}
