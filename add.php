<?php

include_once('./database.php');
   
if($_POST){

    $name =  $_POST['name'];
    $description =  $_POST['description'];


    $sql = "INSERT INTO tasks (name , description) VALUES ('$name', '$description')" ;

   $result =  mysqli_query($connection, $sql);

   if(!$result){
       die("error consulta fallado");
   }

   echo "tasks added succefully ";
}