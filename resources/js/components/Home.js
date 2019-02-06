import React, { Component } from 'react';
export default class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
          data:[],
          todaysale: '',
          monthlysale: '',
          weeklysale:'',
          dailyservicecount:[],
          weeklyservicecount:[],
          monthlyservicecount:[],
          monthlymostsoldservicebyemployee:[],
        };
      }
      componentDidMount()
      {
          axios.get('http://127.0.0.1:8000/api/sale/today').then(response=>{
              this.setState({ todaysale:response.data });
          });
          axios.get('http://127.0.0.1:8000/api/sale/weekly').then(response=>{
            this.setState({ weeklysale:response.data });
        });
        axios.get('http://127.0.0.1:8000/api/sale/monthly').then(response=>{
            this.setState({ monthlysale:response.data });
        });

        axios.get('http://127.0.0.1:8000/api/dailyservicecount').then(response=>{
            this.setState({ dailyservicecount:response.data });
        });
        axios.get('http://127.0.0.1:8000/api/weeklyservicecount').then(response=>{
            this.setState({ weeklyservicecount:response.data });
        });
        axios.get('http://127.0.0.1:8000/api/monthlyservicecount').then(response=>{
            this.setState({ monthlyservicecount:response.data });
        });
        axios.get('http://127.0.0.1:8000/api/monthlymostsoldservicebyemployee').then(response=>{
            this.setState({ monthlymostsoldservicebyemployee:response.data });
        });

        
      }
    render() {
        return (
            <div className="row">

            <div className="col-md-12"><hr /></div>

                <div className="col-md-4">
                    <div className="card ">
                    <div className="card-header"> <h4>Today Sale</h4></div>
                    <div className="card-body todaysale">
                        <h5>{ this.state.todaysale}</h5>
                    </div>
                    </div>
                   
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header"> <h4>Weekly Sale</h4></div>
                        <div className="card-body Weeklysale">
                        <h5>{ this.state.weeklysale}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card ">
                        <div className="card-header"><h4>Monthly Sale</h4></div>
                        <div className="card-body Monthlysale">
                        <h5>{ this.state.monthlysale}</h5>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-12"><hr /></div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-header"> <h4>Today Most Sold Service</h4></div>
                    <div className="card-body Monthlysale">
                    <div>{ this.state.dailyservicecount.map((dcount,i)=>{
                                
                    return (
                            <a className="nav-link" key={i}> {dcount.servicename} </a>                                 )
                                    })
                    }</div>
                    </div>
                    </div>
                   
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header"> <h4>Weekly Most Sold Service</h4></div>
                        <div className="card-body Weeklysoldservice">
                        <div>{ this.state.weeklyservicecount.map((wcount,i)=>{
                                
                                return (
                                        <a className="nav-link" key={i}> {wcount.servicename} </a>                                 )
                                                })
                                }</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <div className="card-header"><h4>Monthly Most Sold Service</h4></div>
                        <div className="card-body todaysale">
                        <div>{ this.state.monthlyservicecount.map((mcount,i)=>{
                                
                                return (
                                        <a className="nav-link" key={i}> {mcount.servicename} </a>                                 )
                                                })
                                }</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12"><hr /></div>
                <div className="col-md-4">
                <div className="card">
                        <div className="card-header"><h4>Employees High Sale </h4></div>
                        <div className="card-body employeesale">
                        <div>{ this.state.monthlymostsoldservicebyemployee.map((mcount,i)=>{
                                
                                return (
                                        <a className="nav-link" key={i}> {mcount.name} </a>                                 )
                                                })
                                }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
