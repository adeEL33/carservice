import React, { Component } from 'react';
import axios from 'axios';
export default class Sale extends Component {
    constructor (props) {
        super(props);
        this.state = {
          model: '',
          vin: '',
          message:'',
          messageclass:'',
          service:'',
          services:[],
          stno:'',
          year:'',
          servicecharges:'',
          user:''
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleServiceChange =this.handleServiceChange.bind(this);
        this.handleServicechargesChange = this.handleServicechargesChange.bind(this);
        this.handleUseridChange = this.handleUseridChange.bind(this);
      }
      componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/carmodels').then(response=>{
              this.setState({ carmodels:response.data });
          });
          axios.get('http://127.0.0.1:8000/api/services').then(response=>{
            this.setState({ services:response.data });
        });

        axios.get('http://127.0.0.1:8000/api/sale/show/'+this.props.match.params.id).then(response=>{
            this.setState({ model:response.data.model,vin:response.data.vin,stno:response.data.stockno,year:response.data.year,service:response.data.service,servicecharges:response.data.charges });
        });
        this.setState({ user: this.refs.employee_id.value });
      }

      handleModelChange (evt) {
        this.setState({ model: evt.target.value });
      }
      handleUseridChange (evt) {
        this.setState({ user: evt.target.value });
      }
      handleYearChange (evt) {
        this.setState({ year: evt.target.value });
      }
      handleStockChange (evt) {
        this.setState({ stno: evt.target.value });
      }
      handleVinChange (evt) {
        this.setState({ vin: evt.target.value });
      }
      
      handleServiceChange(evt){
        this.setState({ service: evt.target.value });
        axios.get('http://127.0.0.1:8000/api/service/servicecharges/'+evt.target.value).then(response=>{
            this.setState({ servicecharges:response.data.charges });
        });
      }
      handleServicechargesChange(evt){
        this.setState({ servicecharges: evt.target.value });
      }
      onSubmit(e){
          e.preventDefault();
          if(this.state.model != "" && this.state.service != "" && this.state.year != "" && this.state.stno != "" && this.state.vin != ""){
            const datas ={
                model : this.state.model,
                year :this.state.year,
                stno :this.state.stno,
                vin :this.state.vin,
                service:this.state.service,
                servicecharges:this.state.servicecharges,
                employee:this.state.user
            }
            axios.put('http://127.0.0.1:8000/api/sale/update/'+this.props.match.params.id,datas).then(res=>{
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
                <h4>{
                            
                JSON.parse(localStorage.getItem('validate')).map((user,i)=>{
                    return (
                        <div>
                            <span key={i}>Hi ! {user.name}</span>
                            <input type="hidden" ref="employee_id" value={ user.id } className="form-control"  placeholder="VIN" onChange={this.handleUseridChange}/>
                        </div>
                            )
                    })
                }</h4>
                <hr />
                <h3>Sale Service</h3>
                <hr/>
                <p className={this.state.messageclass}>{ this.state.message }</p>

                <form onSubmit={ this.onSubmit }>
                    <div className="row">
                    <div className="col-md-3">
                            <div className="form-group">
                            <lable>Stock #</lable>
                            <input value={ this.state.stno } className="form-control" placeholder="Stock Number" onChange={this.handleStockChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Year</lable>
                            <input value={ this.state.year } className="form-control" placeholder="Year" onChange={this.handleYearChange}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Model</lable>
                            <input name="carmodel" value={ this.state.model } className="form-control" placeholder="Car Model" onChange={this.handleModelChange} list="carmodels"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>VIN</lable>
                            <input value={ this.state.vin } className="form-control"  placeholder="VIN" onChange={this.handleVinChange}/>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Services</lable>
                            <input name="service" value={ this.state.service }  className="form-control" placeholder="Services" onChange={this.handleServiceChange} list="services"/>
                            <datalist id="services">
                            {
                                this.state.services.map((serivce,i)=>{
                                return (
                                        <option key={i} value={ serivce.id }>{ serivce.servicename }</option>                                 )
                                })
                            }
                            </datalist>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                            <lable>Service Charges</lable>
                            <input value={ this.state.servicecharges } className="form-control" readOnly="readOnly" placeholder="Service charges" onChange={this.handleServicechargesChange}/>
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
