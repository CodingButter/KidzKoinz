<?php
    define("DB_HOST","localhost");
    define("DB_NAME","kidzkoinz");
    define("DB_USER",'kidz_user');
    define("DB_PASS",'kidzkoinzpassword');
    
    define("SERVER","http://localhost/KidzKoinz/server/");

// Create connection

try {
    $con = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8;port=3306",DB_USER, DB_PASS);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 } catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
 }

?>