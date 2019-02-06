import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class Viewservice extends Component {
    constructor () {
        super();
        this.state = {  datas: [] };
      }
      componentDidMount()
      {
          axios.get('http://127.0.0.1:8000/api/service/show').then(response=>{
              this.setState({ datas:response.data });
          });
      }
      Deleterecord(id){
            axios.delete('http://127.0.0.1:8000/api/service/delete/'+id).then(response=>{
             var data =this.state.datas;
             for(var i=0;i < data.length;i++){
                 if(data[i].id == id){
                     data.splice(i,1);
                     this.setState({datas:data});
                 }
                
             }
             
        });
      }
    render() {
        return (
            <div>
               <hr />
                <h3>View Services</h3>
                <hr />
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Sno #</th>
                            <th>Service Name</th>
                            <th>Service Charges</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            
                            this.state.datas.map(service=>{
                                return (
                                    <tr>
                                        <td>{service.id}</td>
                                        <td>{service.servicename}</td>
                                        <td>{service.charges}</td>
                                        <th><a href="#" className="btn btn-sm btn-danger" onClick={this.Deleterecord.bind(this,service.id)}>Delete</a> | <Link className="btn btn-sm btn-success" to={`/service/editservice/${service.id}`}>Edit</Link></th>
                                    
                                    </tr>
                                )
                             
                            })
                            
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Sno #</th>
                            <th>Service Name</th>
                            <th>Service Charges</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
