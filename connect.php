<?php
    $bd = "";
    $host = "localhost:3307";
    $user = "root";
    $pass = "1234";

    $conexion = mysql_pconnect($host,$user,$pass) or trigger_error(mysql_error(),E_USER_ERROR);
?>