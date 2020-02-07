<?php

include_once ('./database.php');

if($_POST){

    $name = $_POST['name'];
    $description = $_POST['description'];
    $id = $_POST['id'];

    $sql = "UPDATE tasks SET name = '$name', description = '$description' WHERE id='$id'";
    $resultado = mysqli_query($connection, $sql);

    if(!$resultado){
       die("error". mysqli_error($connection));
    }

    echo "task updated succefully";
}