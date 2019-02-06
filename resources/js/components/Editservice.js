import React, { Component } from 'react';
import Successmessage from './Successmessage';
import Errormessage from './Errormessage';
export default class Editservice extends Component {
    constructor (props) {
        super(props);
        this.state = {
          data:[],
          name: '',
          charges: '',
          message:''
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleChargesChange = this.handleChargesChange.bind(this);
      }
      componentDidMount()
      {
          axios.get('http://127.0.0.1:8000/api/service/show/'+this.props.match.params.id).then(response=>{
              this.setState({ name:response.data.servicename,charges:response.data.charges });
          });
      }
      handleNameChange (evt) {
        this.setState({ name: evt.target.value });
      }

      handleChargesChange (evt) {
        this.setState({ charges: evt.target.value });
      }
    
      onSubmit(e){
          e.preventDefault();
          const datas ={
              name : this.state.name,
              charges :this.state.charges
          }
          axios.put('http://127.0.0.1:8000/api/service/update/'+this.props.match.params.id,datas).then(res=>{
            this.setState({message :'1'});
          }).catch(error=>{
              this.setState({message:'0'})
          });
      }
       render() {
        return (
            <div>
                <hr />
                <h3>Edit Service</h3>
                <hr />
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
                            <button type="submit" className="btn btn-warning" >Update</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}
