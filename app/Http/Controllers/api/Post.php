<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\News;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;

class Post extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $new = News::all();
        return response()->json($new,200);
    }

    public function newpost(){
        $new_post = DB::table('news')->join('news_category', 'news.id_newcate', '=', 'news_category.id')
        ->select('news.*', 'news_category.name as cate_name','news_category.id as id_cate','news_category.font as font')
        ->orderByDesc('id')->limit(2)->get();
        return response()->json($new_post,200);
    }
    public  function post_recent() {
        $new_post_recent = DB::table('news')->join('news_category', 'news.id_newcate', '=', 'news_category.id')
        ->select('news.*', 'news_category.name as cate_name','news_category.id as id_cate','news_category.font as font')
        ->orderByDesc('id')->skip(2)->take(6)->get();
        return response()->json($new_post_recent,200);
    }
    public function post_talk(){
        $new_post_talk = DB::table('news')->join('news_category', 'news.id_newcate', '=', 'news_category.id')
        ->select('news.*', 'news_category.name as cate_name','news_category.id as id_cate','news_category.font as font')
        ->where('id_newcate',18)->Where('news.status','1')
        ->orderByDesc('id')->take(3)->get();
        return response()->json($new_post_talk,200);
    }
    public function post_dev(){
        $new_post_dev = DB::table('news')->join('categories', 'news.id_categories', '=', 'categories.id')
        ->select('news.*', 'categories.name as cate_name','categories.id as id_cate','categories.front as font')
        ->where('id_categories',2)->Where('news.status','1')
        ->orderByDesc('id')->take(3)->get();
        return response()->json($new_post_dev,200);
    }
    public function post_tech(){
        $new_post_tech = DB::table('news')->join('categories', 'news.id_categories', '=', 'categories.id')
        ->select('news.*', 'categories.name as cate_name','categories.id as id_cate','categories.front as font')
        ->where('id_categories',1)->Where('news.status','1')
        ->orderByDesc('id')->take(2)->get();
        return response()->json($new_post_tech,200);
    }
    public function most_read(){
        $new_post_most_read = DB::table('news')->join('news_category', 'news.id_newcate', '=', 'news_category.id')
        ->select('news.*', 'news_category.name as cate_name','news_category.id as id_cate','news_category.font as font')
        ->where('news.status',1)
        ->orderByDesc('view')->take(6)->get();
        return response()->json($new_post_most_read,200);
    }
    public function post_random (){
        $post_random = DB::table('news')->inRandomOrder()->limit(6)->get();
        return response()->json($post_random,200);
    }
    public function post_views (){
        $post_views = DB::table('news')->join('news_category', 'news.id_newcate', '=', 'news_category.id')
        ->select('news.*', 'news_category.name as cate_name','news_category.id as id_cate','news_category.font as font')
        ->where('news.status',1)
        ->orderByDesc('view')->take(2)->get();
        return response()->json($post_views,200);
    }
    public function post_category($id){
        $get_category = DB::table('news')->join('categories', 'news.id_categories', '=', 'categories.id')
        ->select('news.*', 'categories.name as cate_name','categories.id as id_cate','categories.front as font')
        ->where('id_categories',$id)->Where('news.status','1')
        ->orderByDesc('id')->get();
        return response()->json($get_category,200);
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

        $category_save = News::create($data);

        return response()->json($category_save,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $news_one = News::find($id);
        if(is_null($news_one)){
            return response()->json(["message"=>"Recod Not Found"],404);
        }
        return response()->json($news_one,200);
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
            $category_update = News::find($id);

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
        $category_update = News::find($id);
        if(is_null($category_update)){
            return response()->json(["message"=>"Recod Not Found"],404);
        }
        $category_update->delete();
        return response()->json($category_update,200);
    }
}
