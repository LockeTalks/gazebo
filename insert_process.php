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
	<h1>Created!</h1>
	<?php
	
	require_once("db_connect.php");

	$charName = $_REQUEST['charName'];
	$level = $_REQUEST['level'];
	$pointBank = $_REQUEST['pointBank'];
	$strBase = $_REQUEST['strBase'];
	$dexBase = $_REQUEST['dexBase'];
	$conBase = $_REQUEST['conBase'];
	$intBase = $_REQUEST['intBase'];
	$wisBase = $_REQUEST['wisBase'];
	$chaBase = $_REQUEST['chaBase'];
	$chaBase = $_REQUEST['chaBase'];
	$raceSelect = $_REQUEST['raceSelect'];
	$classSelect = $_REQUEST['classSelect'];
	$lastThing = $_REQUEST['lastThing'];

	// echo $charName . " " . $level;

	$sql = "INSERT INTO `character` VALUES (''," . 
																					"'" . $charName . "'," .
																					"'" . $level . "'," .
																					"'" . $pointBank . "'," .
																					"'" . $strBase . "'," .
																					"'" . $dexBase . "'," .
																					"'" . $conBase . "'," .
																					"'" . $intBase . "'," .
																					"'" . $wisBase . "'," .
																					"'" . $chaBase . "'," .
																					"'" . $raceSelect . "'," .
																					"'" . $classSelect . "'," .
																					"'" . $lastThing . "')";
	
	mysql_query($sql);
	mysql_close($conn);
	
	echo $charName . " successfully added to database.";
	echo "<br>Go back to <a href='index.php'>main page</a>.";
	
	// echo $sql;

	?>
	
</div>
</body>
</html>