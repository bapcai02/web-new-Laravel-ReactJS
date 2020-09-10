<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::middleware('auth:api')->get('/user',function(Request $request){
     return $request->user();
});

route::post('login','api\HomeApi@login');
Route::post('register', 'api\HomeApi@register');

Route::group(['prefix' => 'auth'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/category','api\HomeApi@category');
        Route::get('/category/{id}','api\HomeApi@categoryFindId');
        Route::post('/category/add','api\HomeApi@categorySave');
        Route::put('/category/update/{id}','api\HomeApi@categoryUpdate');
        Route::delete('/category/delete/{id}','api\HomeApi@categoryDelete');
    });
});
Route::group(['prefix' => 'category'], function () {
    Route::get('/','api\Category@index');
    Route::get('/count','api\Category@countcategory');
    Route::get('/{id}','api\Category@show');
    Route::get('/hastag','api\Category@hastag');
    Route::get('/items/{id}','api\Category@getitems');
    Route::post('/add','api\Category@store');
    Route::put('/update/{id}','api\Category@update');
    Route::delete('/delete/{id}','api\Category@destroy');
});

Route::group(['prefix' => 'post'] , function () {
    Route::get('/','api\Post@index');
    Route::get('/newpost','api\Post@newpost');
    Route::get('/recent','api\Post@post_recent');
    Route::get('/talk','api\Post@post_talk');
    Route::get('/dev','api\Post@post_dev');
    Route::get('/tech','api\Post@post_tech');
    Route::get('/read','api\Post@most_read');
    Route::get('/random','api\Post@post_random');
    Route::get('/views','api\Post@post_views');
    Route::get('/{id}','api\Post@show');
    Route::get('category/{id}','api\Post@post_category');
    Route::post('/add','api\Post@store');
    Route::put('/update/{id}','api\Post@update');
    Route::delete('/delete/{id}','api\Post@destroy');
});
