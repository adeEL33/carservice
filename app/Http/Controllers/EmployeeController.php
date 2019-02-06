<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use App\User;
class EmployeeController extends Controller
{
    public function store(Request $request){
        $employee =new Employee;
        $employee->name =$request->name;
        $employee->email=$request->email;
        $employee->uname=$request->username;
        $employee->password="password";
        if($employee->save()){
            $user =new User;
            $user->name=$request->name;
            $user->username=$request->username;
            $user->email=$request->email;
            $user->password=$request->name."123";
            $user->roll=3;
            $user->save();
        }
    }

    public function show(){
        return Employee::all();
    }

    public function destroy($id){
        Employee::find($id)->delete();
        // $employeedetails=Employee::where('id',$id)->first();
        // User::where('username',$employeedetails->username)->delete();
    }

    public function edit($id){
        return Employee::find($id);
    }

    public function update(Request $request,$id){
        
        Employee::where('id',$id)->update(['name'=>$request->name,'email'=>$request->email,'uname'=>$request->username]);
    }

    
}
