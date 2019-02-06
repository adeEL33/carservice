import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class addservice extends Component {
    constructor () {
        super();
        this.state = {  datas: [] };
      }
      componentDidMount()
      {
          axios.get('http://127.0.0.1:8000/api/employee/show').then(response=>{
              this.setState({ datas:response.data });
          });
      }
      Deleterecord(id){
          alert('working');
            axios.delete('http://127.0.0.1:8000/api/employee/delete/'+id).then(response=>{
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
                <h3>View Employee</h3>
                <hr />
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Sno #</th>
                            <th>Employee Name</th>
                            <th>Employee User Name</th>
                            <th>Employee Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            
                            this.state.datas.map(emp=>{
                                return (
                                    <tr>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.uname}</td>
                                        <td>{emp.email}</td>
                                        <th><a href="#" className="btn btn-sm btn-danger" onClick={this.Deleterecord.bind(this,emp.id)}>Delete</a> | <Link className="btn btn-sm btn-success" to={`/employee/editemp/${emp.id}`}>Edit</Link></th>
                                    
                                    </tr>
                                )
                             
                            })
                            
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Sno #</th>
                            <th>Employee Name</th>
                            <th>Employee User Name</th>
                            <th>Employee Email</th>
                            <td>Action</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
