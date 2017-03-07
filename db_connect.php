<?php
  $db_name = "characters";
  $un = "root";
  $pw ="";
  $host = "localhost";

  $conn = mysql_connect($host, $un, $pw) or die (mysql_error());
  //echo("Connected to mySQL Database<br>");
  
  mysql_select_db($db_name) or die (mysql_error());
  //echo("Connected to Characters");

?>