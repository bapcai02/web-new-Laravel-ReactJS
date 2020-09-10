<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';
    protected $fillable = [
        'id_categories', 'id_newcate', 'name','title','image','content','view','status','created_at','updated_at'
    ];
}

