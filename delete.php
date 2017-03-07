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
	<h1>Deleted!</h1>
<?php
	$charId = $_REQUEST['charId'];
	require_once("db_connect.php");
	$sql = "DELETE FROM `character` WHERE charId= '" . $charId . "';";
	// echo $sql;
	mysql_query($sql) or die(mysql_error());
	echo "Character #" . $charId . " deleted from the database.<br><a href='index.php'>Back to index</a>"; 
?>
</div>
</body>
</html>

