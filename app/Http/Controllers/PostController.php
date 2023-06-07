<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function addpost()
    {
        dd(Auth::user());
        return response()->json(['message' => 'Hi']);
    }
}
