<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TestController extends Controller
{
    //

    public function index() {
        return Inertia::render('Test', [
            'id' => 3, 
            'name' => 'Jack'
        ]);
    }
}
