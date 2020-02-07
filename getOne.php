<?php

include_once('./database.php');
if($_POST['id']){

    $id = $_POST['id'];

    $sql ="SELECT * FROM tasks WHERE id=$id ";

    $result = mysqli_query($connection, $sql);

    if(!$result){
        die("consulta fallida");
    }

     $json = array();
    while($row = mysqli_fetch_array($result)){
        $json [] = array(
            "name"=>$row['name'],
            "description"=>$row['description'],
            "id"=>$row['id'],

        );

       $json_string =  json_encode($json);
       echo $json_string;
    }
} 