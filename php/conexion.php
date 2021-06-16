<?php
/* $host_db = "manchachis-mysqldbserver.mysql.database.azure.com";
$user_db = "nesdu-mysql@manchachis-mysqldbserver";
$pass_db = "Manchachis2019";
$db_name = "manchachis"; */

$host_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "manchachis";

$conexion = new mysqli($host_db,$user_db,$pass_db,$db_name);

if($conexion->connect_error){
	die("La conexion fallo: ".$conexion->connect_error);
}

date_default_timezone_set('America/La_Paz');
$fecha = date('Y-m-d');
?>