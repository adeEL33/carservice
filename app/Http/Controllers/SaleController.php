<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sale;
use Carbon\Carbon;
use DB;
class SaleController extends Controller
{
    public function store(Request $request){
        $sale =new Sale;
        $sale->stockno=$request->stno;
        $sale->model=$request->model;
        $sale->vin=$request->vin;
        $sale->service=$request->service;
        $sale->year=$request->year;
        if($request->employee != ""){
            $sale->employee=$request->employee;
        }
        else {
            $sale->employee=1;
        }
        $sale->save();
    }

    public function show(){
     return  Sale::select('sales.*','services.servicename','services.charges','users.name')->leftjoin('services','services.id','=','sales.service')->leftjoin('users','users.id','=','sales.employee')->get();
    }
    public function employeeshow($id){
        return  Sale::select('sales.*','services.servicename','services.charges','users.name')->leftjoin('services','services.id','=','sales.service')->leftjoin('users','users.id','=','sales.employee')->where('sales.employee',$id)->get();
    }
    public function destroy($id){
        Sale::find($id)->delete();
    }

    public function edit($id){
        return Sale::select('sales.*','services.charges')->leftjoin('services','services.id','=','sales.service')->find($id);
    }

    public function update(Request $request,$id){
        Sale::where('id',$id)->update(['stockno'=>$request->stno,'model'=>$request->model,'vin'=>$request->vin,'service'=>$request->service,'year'=>$request->year]);
    }

    public function todaysale(){
        return Sale::leftjoin('services','services.id','=','sales.service')->whereDate('sales.created_at',Carbon::today())->sum('services.charges');
    }
    
    public function weeklysale(){
        Carbon::setWeekStartsAt(Carbon::MONDAY);
        Carbon::setWeekEndsAt(Carbon::SUNDAY);
        return Sale::leftjoin('services','services.id','=','sales.service')->whereBetween('sales.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->sum('services.charges');
    }
    public function monthlysale(){
        return Sale::leftjoin('services','services.id','=','sales.service')->whereraw('MONTH(sales.created_at)',date('m'))->sum('services.charges');
    }
    public function dailyservicecount(){
        $query =DB::raw('select * from (select sales.service,services.servicename from sales LEFT JOIN services on services.id = sales.service Where DATE(sales.created_at) = CURDATE() ) x  GROUP BY x.service ORDER BY COUNT(x.service) DESC LIMIT 1');
        return DB::select($query);
    }
    public function weeklyservicecount(){
       
        $query =DB::raw('select * from (select sales.service,services.servicename from sales LEFT JOIN services on services.id = sales.service Where DATE(sales.created_at) > DATE_SUB(NOW(), INTERVAL 1 WEEK)) x GROUP BY x.service ORDER BY COUNT(x.service) DESC LIMIT 1');
        return DB::select($query);
    }
    public function monthlyservicecount(){
        $query =DB::raw('select * from (select sales.service,services.servicename from sales LEFT JOIN services on services.id = sales.service Where MONTH(sales.created_at) = MONTH(CURRENT_DATE())) x GROUP BY x.service ORDER BY COUNT(x.service) DESC LIMIT 1');
        return DB::select($query);
    }
    
    public function monthlymostsoldservicebyemployee(){
        $query =DB::raw('select * from (select sales.employee,employees.name from sales LEFT JOIN employees on employees.id = sales.employee Where MONTH(sales.created_at) = MONTH(CURRENT_DATE())) x GROUP BY x.employee ORDER BY COUNT(x.employee) DESC LIMIT 3');
        return DB::select($query);
    }
}
