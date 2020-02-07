<?php

include_once('./database.php');

if($_POST['id']){

    $id = $_POST['id'];

    $sql ="DELETE FROM tasks WHERE id =$id ";

    $result = mysqli_query($connection, $sql);


    if(!$result){
        die("error consulta". mysqli_error($connection));
    }


    echo "tasks deleted succefully";
}