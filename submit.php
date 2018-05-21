<?php
/**
 * Created by PhpStorm.
 * User: mingfei
 * Date: 5/20/18
 * Time: 7:42 PM
 */
header('Access-Control-Allow-Origin: *', false);
header('Access-Control-Allow-Methods: POST,GET', false);
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept', false);

$data = file_get_contents('php://input');
$dataJson = json_decode($data, true);

$userId = $dataJson["uid"];
// $userName = $dataJson["info"][0]["value"];

if (empty($userId))){
    exit("Empty data received");
}

$timestamp = date('Y-m-d-H-i-s');

$filename = $timestamp.'-'.$userId.'.json';

if (file_put_contents($filename, $data)){
    echo "Received:".$timestamp;
}
else{
    echo "Failed";
}

?>
