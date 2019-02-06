import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class Viewsale extends Component {
    constructor () {
        super();
        this.state = {  
            datas: [] };
      }
      componentDidMount()
      {
        var userrole='';
        var userid='';
        var url='';
      JSON.parse(localStorage.getItem('validate')).map((user,i)=>{
          userrole=user.roll;
          userid = user.id;
      });
      if(userrole != 3)
      {
          url ='http://127.0.0.1:8000/api/sale/show';
      }
      else{
          url ='http://127.0.0.1:8000/api/sale/employeeshow/'+userid;
      }
          axios.get(url).then(response=>{
              this.setState({ datas:response.data });
          });
      }
      Deleterecord(id){
          
            axios.delete('http://127.0.0.1:8000/api/sale/delete/'+id).then(response=>{
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
        var userrole='';
        JSON.parse(localStorage.getItem('validate')).map((user,i)=>{
            userrole=user.roll;
        });

        return (
            <div>
               <hr />
                <h3>View sales</h3>
                <hr />
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Sno #</th>
                            <th>Stock #</th>
                            <th>Model</th>
                            <th>VIN</th>
                            <th>Year</th>
                            <th>Service</th>
                            <th>Employee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            
                            this.state.datas.map(sale=>{
                                return (
                                    <tr>
                                        <td>{sale.id}</td>
                                        <td>{sale.stockno}</td>
                                        <td>{sale.model}</td>
                                        <td>{sale.vin}</td>
                                        <td>{sale.year}</td>
                                        <td>{sale.servicename}</td>
                                        <td>{sale.name }</td>
                                        <th>
                                        {userrole != 3 ?<span> <a href="#" className="btn btn-sm btn-danger" onClick={this.Deleterecord.bind(this,sale.id)}>Delete</a> | </span> : null } 
                                          
                                            
                                             <Link className="btn btn-sm btn-success" to={`/sale/editsales/${sale.id}`}>Edit</Link></th>
                                    </tr>
                                )
                             
                            })
                            
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Sno #</th>
                            <th>Stock #</th>
                            <th>Model</th>
                            <th>VIN</th>
                            <th>Year</th>
                            <th>Service</th>
                            <th>Employee</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
