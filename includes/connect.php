<?php 
    $db_dsn = array( 
        'host' => 'localhost', // this will point to your domain name for FIP
        'dbname' => 'db_MiniApp', // update this with your database name
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = ''; // windows users leave this blank

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);//trying to connect to you local database
        // var_dump($pdo);
        // echo (in this case) is almost like console.log
        // echo "you're in! enjoy the show";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }