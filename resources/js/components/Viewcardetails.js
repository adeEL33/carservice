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
          axios.get('http://127.0.0.1:8000/api/car/show').then(response=>{
              this.setState({ datas:response.data });
          });
      }
      Deleterecord(id){
            axios.delete('http://127.0.0.1:8000/api/cardetials/delete/'+id).then(response=>{
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
                <h3>View Car Details</h3>
                <hr />
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Sno #</th>
                            <th>Car Model</th>
                            <th>Car  No Plate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            
                            this.state.datas.map(cardetaiil=>{
                                return (
                                    <tr>
                                        <td>{cardetaiil.id}</td>
                                        <td>{cardetaiil.model}</td>
                                        <td>{cardetaiil.noplate}</td>
                                        <th><a href="#" className="btn btn-sm btn-danger" onClick={this.Deleterecord.bind(this,cardetaiil.id)}>Delete</a> | <Link className="btn btn-sm btn-success" to={`/cardetails/editcardetails/${cardetaiil.id}`}>Edit</Link></th>
                                    
                                    </tr>
                                )
                             
                            })
                            
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Sno #</th>
                            <th>Car Model</th>
                            <th>Car  No Plate</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
