<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Employee Routes
Route::post('employee/add','EmployeeController@store');
Route::get('employee/show','EmployeeController@show');
Route::delete('employee/delete/{id}','EmployeeController@destroy');
Route::get('employee/show/{id}','EmployeeController@edit');
Route::put('employee/update/{id}','EmployeeController@update');

//Services Routes
Route::post('service/add','ServiceController@store');
Route::get('service/show','ServiceController@show');
Route::delete('service/delete/{id}','ServiceController@destroy');
Route::get('service/show/{id}','ServiceController@edit');
Route::put('service/update/{id}','ServiceController@update');
Route::get('services','ServiceController@serviceslist');
Route::get('service/servicecharges/{id}','ServiceController@servicecharges');


//login
Route::post('login','UserController@login');

//user routes
Route::post('user/add','UserController@store');
Route::get('user/show','UserController@show');
Route::delete('user/delete/{id}','UserController@destroy');
Route::get('user/show/{id}','UserController@edit');
Route::put('user/update/{id}','UserController@update');

//cardetails routes
Route::post('cardetail/add','CardetailController@store');
Route::get('car/show','CardetailController@show');
Route::delete('cardetials/delete/{id}','CardetailController@destroy');
Route::get('cardetail/show/{id}','CardetailController@edit');
Route::put('cardetail/update/{id}','CardetailController@update');
Route::get('carmodels','CardetailController@carmodellist');
Route::get('cardetials/noplate/{id}','CardetailController@noplate');


//Sale routes
Route::post('sale/add','SaleController@store');
Route::get('sale/show','SaleController@show');
Route::get('sale/employeeshow/{id}','SaleController@employeeshow');
Route::delete('sale/delete/{id}','SaleController@destroy');
Route::get('sale/show/{id}','SaleController@edit');
Route::put('sale/update/{id}','SaleController@update');
Route::get('sale/today','SaleController@todaysale');
Route::get('sale/weekly','SaleController@weeklysale');
Route::get('sale/monthly','SaleController@monthlysale');
Route::get('dailyservicecount','SaleController@dailyservicecount');
Route::get('weeklyservicecount','SaleController@weeklyservicecount');
Route::get('monthlyservicecount','SaleController@monthlyservicecount');
Route::get('monthlymostsoldservicebyemployee','SaleController@monthlymostsoldservicebyemployee');
