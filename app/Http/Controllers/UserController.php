<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller
{
    public function store(Request $request){
        $user =new User;
        $user->name=$request->name;
        $user->username=$request->uname;
        $user->email=$request->email;
        $user->password=$request->password;
        $user->roll=$request->roll;
        $user->save();
    }  
    
    public function show(){
        return User::all();
    }
    public function destroy($id){
        User::find($id)->delete();
    }

    public function edit($id){
        return user::find($id);
    }
    public function update(Request $request,$id){
        
       User::where('id',$id)->update(['name'=>$request->name,'username'=>$request->uname,'email'=>$request->email,'password'=>$request->password,'roll'=>$request->roll]);
       
    }
    public function login(Request $request){
        $auth=User::where('username',$request->name)->where('password',$request->password)->count('id');
        
         if($auth > 0){
            return User::where('username',$request->name)->where('password',$request->password)->get();
                
            }
            else{
             return false;
         }
         
     }
}
