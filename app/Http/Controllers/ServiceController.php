<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service;
class ServiceController extends Controller
{
    public function store(Request $request){
        $service =new Service;
        $service->servicename =$request->name;
        $service->charges =$request->charges;
        $service->save();
    }
    public function show(){
        return Service::all();
    }

    public function destroy($id){
        Service::find($id)->delete();
    }

    public function edit($id){
        return Service::find($id);
    }

    public function update(Request $request,$id){
        
        Service::where('id',$id)->update(['servicename'=>$request->name,'charges'=>$request->charges]);
    }

    public function serviceslist(){
        return Service::all();
    }

    public function servicecharges($id){
        return Service::find($id);
    }

    
}
