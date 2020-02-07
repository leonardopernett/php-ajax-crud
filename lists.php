<?php

include_once('./database.php');


$sql = "SELECT * FROM tasks";

$result = mysqli_query($connection, $sql);

if(!$result){
    die('consulta fallida' . mysqli_error($connection));
}

   $json = array();
  while($row = mysqli_fetch_array($result)){
    
    $json [] = array(
        "name"=>$row["name"],
        "description"=>$row["description"],
        "id"=>$row["id"],

    );
       
  }

  $json_string = json_encode($json);
  echo $json_string;


?>