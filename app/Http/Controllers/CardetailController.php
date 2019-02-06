<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cardetail;
class CardetailController extends Controller
{
    public function store(Request $request){
       $cardetail = new Cardetail;
       $cardetail->model=$request->model;
       $cardetail->noplate=$request->noplate;
       $cardetail->save();
    }

    public function show(){
        return Cardetail::all();
    }
    public function destroy($id){
        Cardetail::find($id)->delete();
    }
    public function edit($id){
        return Cardetail::find($id);
    }   
    public function update(Request $request,$id){
        Cardetail::where('id',$id)->update(['model'=>$request->modelll,'noplate'=>$request->noplattte]);
    }
    public function carmodellist(){
        return Cardetail::all();
    }

    public function noplate($id){
        return Cardetail::find($id);
    }
}
