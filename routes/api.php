<?php

use \Advoor\NovaEditorJs\Http\Controllers\EditorJsImageUploadController;
use \Advoor\NovaEditorJs\Http\Controllers\EditorJsLinkController;
use Illuminate\Support\Facades\Route;

Route::as('editor-js-upload-image-by-file')->post('upload/file', EditorJsImageUploadController::class . '@file');
Route::as('editor-js-upload-image-by-url')->post('upload/url', EditorJsImageUploadController::class . '@url');
Route::as('editor-js-fetch-url')->get('fetch/url', EditorJsLinkController::class . '@fetch');
