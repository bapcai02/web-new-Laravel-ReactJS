<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Categories;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;

class Category extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Categories::all();
        return response()->json($category,200);
    }

    public function countcategory(){
        $count_category = DB::table('news')->join('categories', 'news.id_categories', '=', 'categories.id')
        ->select('categories.name as cate_name','categories.id as cate_id','categories.front as font',DB::raw('sum(news.id_categories) as sum' ))->groupBy('id_categories')
        ->where('news.status','1')->get();
        return response()->json($count_category,200);
    }
    public function getitems($id){
        $get_items = DB::table('news')->join('news_category', 'news.id_newcate', '=', 'news_category.id')
        ->select('news.*', 'news_category.name as cate_name','news_category.id as id_cate','news_category.font as font')
        ->where('id_newcate',$id)->Where('news.status','1')
        ->orderByDesc('id')->get();
        return response()->json($get_items,200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rule = [
            'name' => 'required|min:3',
            'front' => 'required|min:3',
        ];

        $validator = Validator::make($request->all(),$rule);

        if($validator->fails()){
            return response()->json($validator->errors(),400);
        }

        $data['name'] = $request->name;
        $data['status'] = $request->status; 
        $data['front'] = $request-> front;
        $data['created_at'] = Carbon::now();
        $data['updated_at'] = Carbon::now();

        $category_save = Categories::create($data);

        return response()->json($category_save,201);
    }

    public function hastag(){
        
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category_one = Categories::find($id);
        if(is_null($category_one)){
            return response()->json(["message"=>"Recod Not Found"],404);
        }
        return response()->json($category_one,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
            $category_update = Categories::find($id);

            $rule = [
                'name' => 'required|min:3',
                'front' => 'required|min:3',
            ];

            $validator = Validator::make($request->all(),$rule);

            if($validator->fails()){
                return response()->json($validator->errors(),400);
            }

            $data['name'] = $request->name;
            $data['status'] = $request->status; 
            $data['front'] = $request-> front;
            $data['updated_at'] = Carbon::now();

            if(is_null($category_update)){
                return response()->json(["message"=>"Recod Not Found"],404);
            }
            $category_update->update($data);

            return response()->json($category_update,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category_update = Categories::find($id);
        if(is_null($category_update)){
            return response()->json(["message"=>"Recod Not Found"],404);
        }
        $category_update->delete();
        return response()->json($category_update,200);
    }
}
