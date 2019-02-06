import React, { Component } from 'react';
import axios from 'axios';
import Successmessage from './Successmessage';
import Errormessage from './Errormessage';
export default class Editcardetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
          modelll: '',
          noplattte: '',
          message:''
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleNoplateChange = this.handleNoplateChange.bind(this);
      }
      componentDidMount()
      {
          axios.get('http://127.0.0.1:8000/api/cardetail/show/'+this.props.match.params.id).then(response=>{
              this.setState({ modelll:response.data.model,noplattte:response.data.noplate });
          });
      }
      handleModelChange (evt) {
        this.setState({ modelll: evt.target.value });
      }

      handleNoplateChange (evt) {
        this.setState({ noplattte: evt.target.value });
      }

      onSubmit(e){
        e.preventDefault();
        if(this.state.modelll != "" && this.state.noplattte != ""){
          const datas ={
            modelll : this.state.modelll,
              noplattte :this.state.noplattte
          }
          axios.put('http://127.0.0.1:8000/api/cardetail/update/'+this.props.match.params.id,datas).then(res=>{
              this.setState({message:"Opration Done Successfully"});
          }).catch(error=>{
              this.setState({message:"opration Faild"});
          });
        }
        else{
            this.setState({message:"All fields are required"});
        }
       
    }

    render() {
        return (
            <div>
                <hr />
                <h3>Edit Car Details</h3>
                <hr />
                <div>
                { this.state.message }
                
                </div>
                <form onSubmit={ this.onSubmit }>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Car model</lable>
                            <input type="text" name="model" value={ this.state.modelll } className="form-control" placeholder="model" onChange={this.handleModelChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Car No Plate Email</lable>
                            <input type="text" name="noplate"  value={ this.state.noplattte } className="form-control" placeholder="noplate" onChange={this.handleNoplateChange}/>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-warning" >Update</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}
