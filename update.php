<?php
  require_once("db_connect.php");

  $charId = $_REQUEST['charId'];
  $sql = "SELECT * FROM `character` WHERE charId = '" . $charId . "';";
  
  // echo $sql;

  $result = mysql_query($sql) or die(mysql_error());

  $row = mysql_fetch_array($result) or die(mysql_error());

?>

<html lang="en">
<head>
  <title>Character Sheet</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script language="javascript" type="text/javascript" src="gazebo-functions.js"></script>
</head>
<body onload="setRaceFeatures();setFullAbs();setAbMods();setClassFeatures;setHP();setInit();setFullSaves()">
<h1>Update Character</h1>
<div class="container">
  <form action="update_process.php" method="post">
	<input type="hidden" name="charId" value="<?php print($charId); ?>" />
    
  	<div class="row">
			
			<div class="col-sm-6">
				<p>
					Character Name: <input type="text" value="<?php print($row['charName']) ?>" class="form-control" id="charName" name="charName">
    		</p>			
			</div> 
			
      <div class="col-sm-6">
				<p>
					Level:
					<select class="form-control" id="level" name="level">
						<option <?php if($row['level']==1){print('selected'); } ?> value="1">1</option>
						<option <?php if($row['level']==2){print('selected'); } ?> value="2">2</option>
						<option <?php if($row['level']==3){print('selected'); } ?> value="3">3</option>
						<option <?php if($row['level']==4){print('selected'); } ?> value="4">4</option>
						<option <?php if($row['level']==5){print('selected'); } ?> value="5">5</option>
					</select>
				</p>
    	</div>
			
		</div>
			
    <div class="row">
		  <p>
				<strong>Ability Scores</strong>
			</p>
			<p>
			  Points You Can Spend on Abilities: <input type="number" id="pointBank" name="pointBank" value="<?php print($row['pointBank']) ?>" readonly>
		  </p>
			<div class="col-sm-4">
			<table>
				<tr>
					<td colspan="4">BUY</td>
				</tr>
				<tr>
					<td>Base STR</td>
					<td><input type="number" id="strBase" name="strBase" value="<?php print($row['strBase']) ?>" readonly></td>
					<td><input type="button" onClick="buyStr();setFullAbs();setAbMods()" value="+STR"></td>
					<td><input type="button" onClick="sellStr();setFullAbs();setAbMods()" value="-STR"></td>
				</tr>
				<tr>
					<td>Base DEX</td>
					<td><input type="number" id="dexBase" name="dexBase" value="<?php print($row['dexBase']) ?>" readonly></td>
					<td><input type="button" onClick="buyDex();setFullAbs();setAbMods();setInit();setFullSaves()" value="+DEX"></td>
					<td><input type="button" onClick="sellDex();setFullAbs();setAbMods();setInit();setFullSaves()" value="-DEX"></td>
				</tr>
				<tr>
					<td>Base CON</td>
					<td><input type="number" id="conBase" name="conBase" value="<?php print($row['conBase']) ?>" readonly></td>
					<td><input type="button" onClick="buyCon();setFullAbs();setAbMods();setHP();setFullSaves()" value="+CON"></td>
					<td><input type="button" onClick="sellCon();setFullAbs();setAbMods();setHP();setFullSaves()" value="-CON"></td>
				</tr>
				<tr>
					<td>Base INT</td>
					<td><input type="number" id="intBase" name="intBase" value="<?php print($row['intBase']) ?>" readonly></td>
					<td><input type="button" onClick="buyInt();setFullAbs();setAbMods()" value="+INT"></td>
					<td><input type="button" onClick="sellInt();setFullAbs();setAbMods()" value="-INT"></td>
				</tr>
				<tr>
					<td>Base WIS</td>
					<td><input type="number" id="wisBase" name="wisBase" value="<?php print($row['wisBase']) ?>" readonly></td>
					<td><input type="button" onClick="buyWis();setFullAbs();setAbMods();setFullSaves()" value="+WIS"></td>
					<td><input type="button" onClick="sellWis();setFullAbs();setAbMods();setFullSaves()" value="-WIS"></td>
				</tr>
				<tr>
					<td>Base CHA</td>
					<td><input type="number" id="chaBase" name="chaBase" value="<?php print($row['chaBase']) ?>" readonly></td>
					<td><input type="button" onClick="buyCha();setFullAbs();setAbMods()" value="+CHA"></td>
					<td><input type="button" onClick="sellCha();setFullAbs();setAbMods()" value="-CHA"></td>
				</tr>
			</table>
			</div>
		  <div class="col-sm-4">
			<table>
				<tr>
					<td colspan="4">ADJUST</td>
				</tr>
				<tr>
					<td rowspan="6">Race<br>Adj.</td>
          <td><input type="number" id="strRaceMod" value="0" readonly></td>
					<td>Full STR</td><td><input type="number" id="strFull" readonly></td>
				</tr>
				<tr>
					<td><input type="number" id="dexRaceMod" value="0" readonly></td>
					<td>Full DEX</td><td><input type="number" id="dexFull" readonly></td>
				</tr>
				<tr>
					<td><input type="number" id="conRaceMod" value="0" readonly></td>
					<td>Full CON</td><td><input type="number" id="conFull" readonly></td>
				</tr>
				<tr>
					<td><input type="number" id="intRaceMod" value="0" readonly></td>
					<td>Full INT</td><td><input type="number" id="intFull" readonly></td>
				</tr>
				<tr>
					<td><input type="number" id="wisRaceMod" value="0" readonly></td>
					<td>Full WIS</td><td><input type="number" id="wisFull" readonly></td>
				</tr>
				<tr>
					<td><input type="number" id="chaRaceMod" value="0" readonly></td>
					<td>Full CHA</td><td><input type="number" id="chaFull" readonly></td>
				</tr>
			</table>
			</div>
		  <div class="col-sm-4">
				<table>
				<tr>
					<td colspan="4">MOD</td>
				</tr>	
				<tr>
					<td>STR Mod</td><td><input type="number" id="strMod" readonly></td>
				</tr>
				<tr>
					<td>DEX Mod</td><td><input type="number" id="dexMod" readonly></td>
				</tr>
				<tr>
					<td>CON Mod</td><td><input type="number" id="conMod" readonly></td>
				</tr>
				<tr>
					<td>INT Mod</td><td><input type="number" id="intMod" readonly></td>
				</tr>
				<tr>
					<td>WIS Mod</td><td><input type="number" id="wisMod" readonly></td>
				</tr>
				<tr>
					<td>CHA Mod</td><td><input type="number" id="chaMod" readonly></td>
				</tr>
			</table>
			</div>
    </div>
	
    <div class="row">
			<div class="col-sm-4">
				<p>
					Race: 
						<select id="raceSelect" name="raceSelect" onchange="setFullAbs();setAbMods();setRaceFeatures();setClassFeatures();setFullAbs();setAbMods();setHP();setInit();setFullSaves()">
							<option <?php if($row['raceSelect']=='noneSelected'){print('selected'); } ?> value="noneSelected">--------</option>
							<option <?php if($row['raceSelect']=='human'){print('selected'); } ?> value="human">Human</option>
							<option <?php if($row['raceSelect']=='dwarf'){print('selected'); } ?> value="dwarf">Dwarf</option>
							<option <?php if($row['raceSelect']=='elf'){print('selected'); } ?> value="elf">Elf</option>
							<option <?php if($row['raceSelect']=='gnome'){print('selected'); } ?> value="gnome">Gnome</option>
							<option <?php if($row['raceSelect']=='halfElf'){print('selected'); } ?> value="halfElf">Half-Elf</option>
							<option <?php if($row['raceSelect']=='halfOrc'){print('selected'); } ?> value="halfOrc">Half-Orc</option>
							<option <?php if($row['raceSelect']=='halfling'){print('selected'); } ?> value="halfling">Halfling</option>
						</select> 
				</p>
			</div>
			<div class="col-sm-4">
				<p>
					Class:
						<select id="classSelect" name="classSelect" onchange="setFullAbs();setAbMods();setRaceFeatures();setClassFeatures();setFullAbs();setAbMods();setHP();setInit();setFullSaves()">
							<option <?php if($row['classSelect']=='noneSelected'){print('selected'); } ?> value="noneSelected">--------</option>
							<option <?php if($row['classSelect']=='barbarian'){print('selected'); } ?> value="barbarian">Barbarian</option>
							<option <?php if($row['classSelect']=='bard'){print('selected'); } ?> value="bard">Bard</option>
							<option <?php if($row['classSelect']=='cleric'){print('selected'); } ?> value="cleric">Cleric</option>
							<option <?php if($row['classSelect']=='druid'){print('selected'); } ?> value="druid">Druid</option>
							<option <?php if($row['classSelect']=='fighter'){print('selected'); } ?> value="fighter">Fighter</option>
							<option <?php if($row['classSelect']=='monk'){print('selected'); } ?> value="monk">Monk</option>
							<option <?php if($row['classSelect']=='paladin'){print('selected'); } ?> value="paladin">Paladin</option>
							<option <?php if($row['classSelect']=='ranger'){print('selected'); } ?> value="ranger">Ranger</option>
							<option <?php if($row['classSelect']=='rogue'){print('selected'); } ?> value="rogue">Rogue</option>
							<option <?php if($row['classSelect']=='sorcerer'){print('selected'); } ?> value="sorcerer">Sorcerer</option>
							<option <?php if($row['classSelect']=='wizard'){print('selected'); } ?> value="wizard">Wizard</option>
						</select>
				</p>
			</div>
			<div class="col-sm-4">
				<p>
					Base Attack Bonus: <input type="number" id="baseAttack" value="0" readonly>
				</p>
			</div>
    </div>
	
	<div class="row">
		<div class="col-sm-12">
			<strong>HP, Initiative, Speed</strong>
			<table>
			<tr>
				<td>Total Hit Points</td>
				<td><input type="number" id="hpTotal" value="0" readonly></td>
				<td>= HP from Class</td>
				<td><input type="number" id="hpClass" value="0" readonly></td>
				<td>+ CON Modifier</td>
				<td><input type="number" id="hpCon" value="0" readonly></td>
			</tr>
			<tr>
				<td>Initiative Modifier</td>
				<td><input type="number" id="initMod" value="0" readonly></td>
				<td>= DEX Modifier</td>
				<td><input type="number" id="initDex" value="0" readonly></td>
				<td>+ Feats/Other</td>
				<td><input type="number" id="initOther" value="0" readonly></td>
			</tr>
			<tr>
				<td>Base Land Speed</td>
				<td><input type="number" id="baseSpeed" readonly></td>
				<td>Damage Reducation</td>
				<td><input type="number" id="damageReducation" value="0" readonly></td>
				<td>Spell Resistance</td>
				<td><input type="number" id="spellResistance" value="0" readonly></td>
			</tr>	
		</table>
		</div>
	</div>
		
	<div class="row">
		<div class="col-sm-12">
			<strong>Saves</strong>
			<table>
        <tr>
          <td>Full Fortitude Save</td>
					<td><input type="number" id="fortFull" readonly></td>
          <td>= CON Mod</td><td><input type="number" id="conToFort" readonly></td>
          <td>+ Class Fortitude Adj.</td><td><input type="number" id="fortClass" readonly></td>
          <td>+ Misc. Fortitude Adj.</td><td><input type="number" id="fortMisc" readonly></td>
        </tr>
        <tr>
          <td>Full Reflex Save</td>
					<td><input type="number" id="refFull" readonly></td>
          <td>= DEX Mod</td><td><input type="number" id="dexToRef" readonly></td>
          <td>+ Class Reflex Adj.</td><td><input type="number" id="refClass" readonly></td>
          <td>+ Misc. Reflex Adj.</td><td><input type="number" id="refMisc" readonly></td>
        </tr>
        <tr>
          <td>Full Will Save</td>
					<td><input type="number" id="willFull" readonly></td>
          <td>= WIS Mod</td><td><input type="number" id="wisToWill" readonly></td>
          <td>+ Class Will Adj.</td><td><input type="number" id="willClass" readonly></td>
          <td>+ Misc. Will Adj.</td><td><input type="number" id="willMisc" readonly></td>
        </tr>
      </table>
		</div>
	</div>

	<div class="row">
		<div class="col-sm-3">
			Last Thing: <input type="number" id="lastThing" name="lastThing" value="<?php print($row['lastThing']) ?>">
		</div>
		<div class="col-sm-9">
			<button type="submit" class="btn btn-default">Submit</button>
		</div>
	</div>  
	
</form>
</div>

</body>
</html>