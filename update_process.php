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
  <h2>Updated!</h2>
	 <?php
		require_once("db_connect.php");

		$charId = $_REQUEST['charId'];
		$charName = $_REQUEST['charName'];
		$level = $_REQUEST['level'];
		$pointBank = $_REQUEST['pointBank'];
		$strBase = $_REQUEST['strBase'];
		$dexBase = $_REQUEST['dexBase'];
		$conBase = $_REQUEST['conBase'];
		$intBase = $_REQUEST['intBase'];
		$wisBase = $_REQUEST['wisBase'];
		$chaBase = $_REQUEST['chaBase'];
		$raceSelect = $_REQUEST['raceSelect'];
		$classSelect = $_REQUEST['classSelect'];
		$lastThing = $_REQUEST['lastThing'];
		
		$sql= "UPDATE `character` SET " . 
					"charName = '" . $charName . "', " .
					"level = '" . $level . "', " .
					"pointBank = '" . $pointBank . "', " .
					"strBase = '" . $strBase . "', " .
					"dexBase = '" . $dexBase . "', " .
					"conBase = '" . $conBase . "', " .
					"intBase = '" . $intBase . "', " .
					"wisBase = '" . $wisBase . "', " .
					"chaBase = '" . $chaBase . "', " .
					"raceSelect = '" . $raceSelect . "', " .
					"classSelect = '" . $classSelect . "', " .
					"lastThing = '" . $lastThing . "' WHERE charId = '" . $charId . "';";

		// echo $sql;

		mysql_query($sql) or die(mysql_error());

		echo $charName . " has been updated. Back to <a href='index.php'>index</a>.";

	?>
</div>
</body>
</html>