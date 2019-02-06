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
            <Router>
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
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/addemployee' component={Addemployee}/>
                        <Route exact path='/viewemployee' component={Viewemployee}/>
                        <Route exact path='/addservice' component={Addservice}/>
                        <Route exact path='/viewservice' component={Viewservice}/>
                        <Route exact path='/service/editservice/:id' component={Editservice}/>
                        <Route exact path='/employee/editemp/:id' component={Editemployee}/>
                        <Route exact path='/addusers' component={Adduser}/>
                        <Route exact path='/viewusers' component={Viewuser}/>
                        <Route exact path='/user/edituser/:id' component={Edituser}/>
                        <Route exact path='/addcardetails' component={Addcardetails}/>
                        <Route exact path='/viewcardetails' component={Viewcardetails}/>
                        <Route exact path='/cardetails/editcardetails/:id' component={Editcardetail}/>
                        <Route exact path='/sale' component={Sale}/>
                        <Route exact path='/viewsale' component={Viewsale}/>
                        <Route exact path='/sale/editsales/:id' component={Editsale}/>
                       
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
