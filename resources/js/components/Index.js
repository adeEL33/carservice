import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Addemployee from './Addemployee';
import Addservice from './Addservice';
import Viewemployee from './Viewemployee';
import Viewservice from './Viewservice';
import Editservice from './Editservice';
import Editemployee from './Editemployee';
import Adduser from './Adduser';
import Viewuser from './Viewuser';
import Edituser from './Edituser';
import Addcardetails from './Addcardetails';
import Viewcardetails from './Viewcardetails';
import Editcardetail from "./Editcardetail";
import Sale from "./Sale";
import Viewsale from './Viewsale';
import Editsale from './Editsale';
import Home from './Home';
export default class Index extends Component {
    render() {
        return (
            <div>
            <Router basename={'/carservice/public'}>
                <div>
            <Header/>
            <div className="container-fluid">
            
                <div className="row">
                    <div className="col-md-2 sidebar">
                    <hr/>
                        <div className="cart-header"><Link to='/addemployee' className="text text-success">Add Employee</Link></div><hr/>
                        <div className="cart-header"><Link to='/viewemployee' className="text text-success">View Employee</Link></div><hr/>
                        <div className="cart-header"><Link to='/addservice' className="text text-success">Add Service</Link></div><hr/>
                        <div className="cart-header"><Link to='/viewservice' className="text text-success">View Service</Link></div><hr/>
                        <div className="cart-header"><Link to='/addusers' className="text text-success">Add Users</Link></div><hr/>
                        <div className="cart-header"><Link to='/addcardetails' className="text text-success">Add Car Details</Link></div><hr/>
                        <div className="cart-header"><Link to='/viewcardetails' className="text text-success">View Car Details</Link></div><hr/>
                        <div className="cart-header"><Link to='/sale' className="text text-success">Sale Services</Link></div><hr/>
                        <div className="cart-header"><Link to='/viewsale' className="text text-success">View Sales</Link></div><hr/>
                       
                    </div>
                    
                    <div className="col-md-10">
                        <Route exact path='${process.env.PUBLIC_URL}/' component={Home}/>
                        <Route exact path='${process.env.PUBLIC_URL}/addemployee' component={Addemployee}/>
                        <Route exact path='${process.env.PUBLIC_URL}/viewemployee' component={Viewemployee}/>
                        <Route exact path='${process.env.PUBLIC_URL}/addservice' component={Addservice}/>
                        <Route exact path='${process.env.PUBLIC_URL}/viewservice' component={Viewservice}/>
                        <Route exact path='${process.env.PUBLIC_URL}/service/editservice/:id' component={Editservice}/>
                        <Route exact path='${process.env.PUBLIC_URL}/employee/editemp/:id' component={Editemployee}/>
                        <Route exact path='${process.env.PUBLIC_URL}/addusers' component={Adduser}/>
                        <Route exact path='${process.env.PUBLIC_URL}/viewusers' component={Viewuser}/>
                        <Route exact path='${process.env.PUBLIC_URL}/user/edituser/:id' component={Edituser}/>
                        <Route exact path='${process.env.PUBLIC_URL}/addcardetails' component={Addcardetails}/>
                        <Route exact path='${process.env.PUBLIC_URL}/viewcardetails' component={Viewcardetails}/>
                        <Route exact path='${process.env.PUBLIC_URL}/cardetails/editcardetails/:id' component={Editcardetail}/>
                        <Route exact path='${process.env.PUBLIC_URL}/sale' component={Sale}/>
                        <Route exact path='${process.env.PUBLIC_URL}/viewsale' component={Viewsale}/>
                        <Route exact path='${process.env.PUBLIC_URL}/sale/editsales/:id' component={Editsale}/>
                       
                    </div>
                </div>
            
            </div>
            </div>
            </Router>
            <Footer/>
            </div>
        );
    }
}
