<html lang="en">
<head>
  <title>Character Sheet</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h1>GAZEBO</h1>
  <p>Existing Characters:</p>
<?php

  require_once("db_connect.php");

  $sql = "SELECT * FROM `character`";
  $result = mysql_query($sql) or die(mysql_error());
  
  echo "<table class='table'>";
  while($row = mysql_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['charId'] . "</td>" 
     . "<td>" . $row['charName'] . "</td>" 
     . "<td>" . $row['level'] . "</td>"
     . "<td><a href='delete.php?charId=" . $row['charId'] . "'>Delete</a></td>"
     . "<td><a href='update.php?charId=" . $row['charId'] . "'>Update</a></td>";
  echo "</tr>";
  }  
  echo "</table>"
  
?>
 <p>
   <a href="create.html">Create new character.</a>
 </p> 
</div>
</body>
</html>