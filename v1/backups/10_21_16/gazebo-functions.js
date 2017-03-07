var charStr;
var charDex;
var charCon;
var charInt;
var charWis;
var charCha;
var charRace;
var class1;
var fort;
var ref;
var will;
var hpBase;
var attack;

function buyStr() {
	var charPoints = document.getElementById("pointBank").value;
	var charStr = document.getElementById("str").value;
	if (charStr>=0 && charStr<=13 && charPoints>=1) {
		document.getElementById("str").value++;
		document.getElementById("pointBank").value--;
	} else if(charStr>=14 && charStr<=15 && charPoints>=2) {
		document.getElementById("str").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	}
	else if(charStr>=16 && charStr<=17 && charPoints>=3) {
		document.getElementById("str").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	} else {
		charStr = charStr;
		charPoints = charPoints;
	}
}
function sellStr() {
	var charPoints = document.getElementById("pointBank").value;
	var charStr = document.getElementById("str").value;
	if (charStr>8 && charStr<=14 && charPoints<25) {
		document.getElementById("str").value--;
		document.getElementById("pointBank").value++;
	} else if(charStr==15 || charStr==16 && charPoints<25) {
		document.getElementById("str").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	}
	else if(charStr==17 || charStr==18 && charPoints<25) {
		document.getElementById("str").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	} else if(charStr<=8 || charPoints===0) {
		charStr = charStr;
		charPoints = charPoints;
	} else {
		charStr = charStr;
		charPoints = charPoints;
	}
}
function buyDex() {
	var charPoints = document.getElementById("pointBank").value;
	var charDex = document.getElementById("dex").value;
	if (charDex>=0 && charDex<=13 && charPoints>=1) {
		document.getElementById("dex").value++;
		document.getElementById("pointBank").value--;
	} else if(charDex>=14 && charDex<=15 && charPoints>=2) {
		document.getElementById("dex").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	}
	else if(charDex>=16 && charDex<=17 && charPoints>=3) {
		document.getElementById("dex").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	} else {
		charDex = charDex;
		charPoints = charPoints;
	}
}
function sellDex() {
	var charPoints = document.getElementById("pointBank").value;
	var charDex = document.getElementById("dex").value;
	if (charDex>8 && charDex<=14 && charPoints<25) {
		document.getElementById("dex").value--;
		document.getElementById("pointBank").value++;
	} else if(charDex==15 || charDex==16 && charPoints<25) {
		document.getElementById("dex").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	}
	else if(charDex==17 || charDex==18 && charPoints<25) {
		document.getElementById("dex").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	} else if(charDex<=8 || charPoints===0) {
		charDex = charDex;
		charPoints = charPoints;
	} else {
		charDex = charDex;
		charPoints = charPoints;
	}
}
function buyCon() {
	var charPoints = document.getElementById("pointBank").value;
	var charCon = document.getElementById("con").value;
	if (charCon>=0 && charCon<=13 && charPoints>=1) {
		document.getElementById("con").value++;
		document.getElementById("pointBank").value--;
	} else if(charCon>=14 && charCon<=15 && charPoints>=2) {
		document.getElementById("con").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	}
	else if(charCon>=16 && charCon<=17 && charPoints>=3) {
		document.getElementById("con").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	} else {
		charCon = charCon;
		charPoints = charPoints;
	}
}
function sellCon() {
	var charPoints = document.getElementById("pointBank").value;
	var charCon = document.getElementById("con").value;
	if (charCon>8 && charCon<=14 && charPoints<25) {
		document.getElementById("con").value--;
		document.getElementById("pointBank").value++;
	} else if(charCon==15 || charCon==16 && charPoints<25) {
		document.getElementById("con").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	}
	else if(charCon==17 || charCon==18 && charPoints<25) {
		document.getElementById("con").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	} else if(charCon<=8 || charPoints===0) {
		charCon = charCon;
		charPoints = charPoints;
	} else {
		charCon = charCon;
		charPoints = charPoints;
	}
}
function buyInt() {
	var charPoints = document.getElementById("pointBank").value;
	var charInt = document.getElementById("int").value;
	if (charInt>=0 && charInt<=13 && charPoints>=1) {
		document.getElementById("int").value++;
		document.getElementById("pointBank").value--;
	} else if(charInt>=14 && charInt<=15 && charPoints>=2) {
		document.getElementById("int").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	}
	else if(charInt>=16 && charInt<=17 && charPoints>=3) {
		document.getElementById("int").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	} else {
		charInt = charInt;
		charPoints = charPoints;
	}
}
function sellInt() {
	var charPoints = document.getElementById("pointBank").value;
	var charInt = document.getElementById("int").value;
	if (charInt>8 && charInt<=14 && charPoints<25) {
		document.getElementById("int").value--;
		document.getElementById("pointBank").value++;
	} else if(charInt==15 || charInt==16 && charPoints<25) {
		document.getElementById("int").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	}
	else if(charInt==17 || charInt==18 && charPoints<25) {
		document.getElementById("int").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	} else if(charInt<=8 || charPoints===0) {
		charInt = charInt;
		charPoints = charPoints;
	} else {
		charInt = charInt;
		charPoints = charPoints;
	}
}
function buyWis() {
	var charPoints = document.getElementById("pointBank").value;
	var charWis = document.getElementById("wis").value;
	if (charWis>=0 && charWis<=13 && charPoints>=1) {
		document.getElementById("wis").value++;
		document.getElementById("pointBank").value--;
	} else if(charWis>=14 && charWis<=15 && charPoints>=2) {
		document.getElementById("wis").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	}
	else if(charWis>=16 && charWis<=17 && charPoints>=3) {
		document.getElementById("wis").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	} else {
		charWis = charWis;
		charPoints = charPoints;
	}
}
function sellWis() {
	var charPoints = document.getElementById("pointBank").value;
	var charWis = document.getElementById("wis").value;
	if (charWis>8 && charWis<=14 && charPoints<25) {
		document.getElementById("wis").value--;
		document.getElementById("pointBank").value++;
	} else if(charWis==15 || charWis==16 && charPoints<25) {
		document.getElementById("wis").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	}
	else if(charWis==17 || charWis==18 && charPoints<25) {
		document.getElementById("wis").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	} else if(charWis<=8 || charPoints===0) {
		charWis = charWis;
		charPoints = charPoints;
	} else {
		charWis = charWis;
		charPoints = charPoints;
	}
}
function buyCha() {
	var charPoints = document.getElementById("pointBank").value;
	var charCha = document.getElementById("cha").value;
	if (charCha>=0 && charCha<=13 && charPoints>=1) {
		document.getElementById("cha").value++;
		document.getElementById("pointBank").value--;
	} else if(charCha>=14 && charCha<=15 && charPoints>=2) {
		document.getElementById("cha").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	}
	else if(charCha>=16 && charCha<=17 && charPoints>=3) {
		document.getElementById("cha").value++;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
		document.getElementById("pointBank").value--;
	} else {
		charCha = charCha;
		charPoints = charPoints;
	}
}
function sellCha() {
	var charPoints = document.getElementById("pointBank").value;
	var charCha = document.getElementById("cha").value;
	if (charCha>8 && charCha<=14 && charPoints<25) {
		document.getElementById("cha").value--;
		document.getElementById("pointBank").value++;
	} else if(charCha==15 || charCha==16 && charPoints<25) {
		document.getElementById("cha").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	}
	else if(charCha==17 || charCha==18 && charPoints<25) {
		document.getElementById("cha").value--;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
		document.getElementById("pointBank").value++;
	} else if(charCha<=8 || charPoints===0) {
		charCha = charCha;
		charPoints = charPoints;
	} else {
		charCha = charCha;
		charPoints = charPoints;
	}
}

function setRaceAdj() {
	charRace = document.getElementById("raceSelect").value;
	if (charRace == "human") {
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Any";
	} else if (charRace == "dwarf") {
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = "2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = "-2";
		document.getElementById("baseSpeed").value = 20;
		document.getElementById("favoredClass").value = "Fighter";
	} else if (charRace == "elf") {
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = "2";
		document.getElementById("conRaceMod").value = "-2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Wizard";
	} else if (charRace == "gnome") {
		document.getElementById("strRaceMod").value = "-2";
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = "2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 20;
		document.getElementById("favoredClass").value = "Bard";
	} else if (charRace == "halfElf") {
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Any";
	} else if (charRace == "halfOrc") {
		document.getElementById("strRaceMod").value = "2";
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = "-2";
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = "-2";
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Barbarian";
	} else if (charRace == "halfling") {
		document.getElementById("strRaceMod").value = "-2";
		document.getElementById("dexRaceMod").value = "2";
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 20;
		document.getElementById("fortMisc").value = "1";
		document.getElementById("refMisc").value = "1";
		document.getElementById("willMisc").value = "1";
		document.getElementById("favoredClass").value = "Rogue";
	}
}
function setFullAbs() {
	document.getElementById("strFull").value = parseInt(document.getElementById("str").value) + parseInt(document.getElementById("strRaceMod").value);
	document.getElementById("dexFull").value = parseInt(document.getElementById("dex").value) + parseInt(document.getElementById("dexRaceMod").value);
	document.getElementById("conFull").value = parseInt(document.getElementById("con").value) + parseInt(document.getElementById("conRaceMod").value);
	document.getElementById("intFull").value = parseInt(document.getElementById("int").value) + parseInt(document.getElementById("intRaceMod").value);
	document.getElementById("wisFull").value = parseInt(document.getElementById("wis").value) + parseInt(document.getElementById("wisRaceMod").value);
	document.getElementById("chaFull").value = parseInt(document.getElementById("cha").value) + parseInt(document.getElementById("chaRaceMod").value);
}
function setAbMods() {
	charStr = parseInt(document.getElementById("strFull").value);
	charDex = parseInt(document.getElementById("dexFull").value);
	charCon = parseInt(document.getElementById("conFull").value);
	charInt = parseInt(document.getElementById("intFull").value);
	charWis = parseInt(document.getElementById("wisFull").value);
	charCha = parseInt(document.getElementById("chaFull").value);
	if (charStr==6 || charStr==7) {
		document.getElementById("strMod").value = "-2"
	} else if (charStr==8 || charStr==9) {
		document.getElementById("strMod").value = "-1";
	} else if (charStr==10 || charStr==11) {
		document.getElementById("strMod").value = "0";
	} else if (charStr==12 || charStr==13) {
		document.getElementById("strMod").value = "1";
	} else if (charStr==14 || charStr==15) {
		document.getElementById("strMod").value = "2";
	} else if (charStr==16 || charStr==17) {
		document.getElementById("strMod").value = "3";
	} else if (charStr==18 || charStr==19) {
		document.getElementById("strMod").value = "4";
	} else if (charStr==20 || charStr==21) {
		document.getElementById("strMod").value = "5";
	}
	if (charDex==6 || charDex==7) {
		document.getElementById("dexMod").value = "-2"
	} else if (charDex==8 || charDex==9) {
		document.getElementById("dexMod").value = "-1";
	} else if (charDex==10 || charDex==11) {
		document.getElementById("dexMod").value = "0";
	} else if (charDex==12 || charDex==13) {
		document.getElementById("dexMod").value = "1";
	} else if (charDex==14 || charDex==15) {
		document.getElementById("dexMod").value = "2";
	} else if (charDex==16 || charDex==17) {
		document.getElementById("dexMod").value = "3";
	} else if (charDex==18 || charDex==19) {
		document.getElementById("dexMod").value = "4";
	} else if (charDex==20 || charDex==21) {
		document.getElementById("dexMod").value = "5";
	}
	if (charCon==6 || charCon==7) {
		document.getElementById("conMod").value = "-2"
	} else if (charCon==8 || charCon==9) {
		document.getElementById("conMod").value = "-1";
	} else if (charCon==10 || charCon==11) {
		document.getElementById("conMod").value = "0";
	} else if (charCon==12 || charCon==13) {
		document.getElementById("conMod").value = "1";
	} else if (charCon==14 || charCon==15) {
		document.getElementById("conMod").value = "2";
	} else if (charCon==16 || charCon==17) {
		document.getElementById("conMod").value = "3";
	} else if (charCon==18 || charCon==19) {
		document.getElementById("conMod").value = "4";
	} else if (charCon==20 || charCon==21) {
		document.getElementById("conMod").value = "5";
	}
	if (charInt==6 || charInt==7) {
		document.getElementById("intMod").value = "-2"
	} else if (charInt==8 || charInt==9) {
		document.getElementById("intMod").value = "-1";
	} else if (charInt==10 || charInt==11) {
		document.getElementById("intMod").value = "0";
	} else if (charInt==12 || charInt==13) {
		document.getElementById("intMod").value = "1";
	} else if (charInt==14 || charInt==15) {
		document.getElementById("intMod").value = "2";
	} else if (charInt==16 || charInt==17) {
		document.getElementById("intMod").value = "3";
	} else if (charInt==18 || charInt==19) {
		document.getElementById("intMod").value = "4";
	} else if (charInt==20 || charInt==21) {
		document.getElementById("intMod").value = "5";
	}
	if (charWis==6 || charWis==7) {
		document.getElementById("wisMod").value = "-2"
	} else if (charWis==8 || charWis==9) {
		document.getElementById("wisMod").value = "-1";
	} else if (charWis==10 || charWis==11) {
		document.getElementById("wisMod").value = "0";
	} else if (charWis==12 || charWis==13) {
		document.getElementById("wisMod").value = "1";
	} else if (charWis==14 || charWis==15) {
		document.getElementById("wisMod").value = "2";
	} else if (charWis==16 || charWis==17) {
		document.getElementById("wisMod").value = "3";
	} else if (charWis==18 || charWis==19) {
		document.getElementById("wisMod").value = "4";
	} else if (charWis==20 || charWis==21) {
		document.getElementById("wisMod").value = "5";
	}
	if (charCha==6 || charCha==7) {
		document.getElementById("chaMod").value = "-2"
	} else if (charCha==8 || charCha==9) {
		document.getElementById("chaMod").value = "-1";
	} else if (charCha==10 || charCha==11) {
		document.getElementById("chaMod").value = "0";
	} else if (charCha==12 || charCha==13) {
		document.getElementById("chaMod").value = "1";
	} else if (charCha==14 || charCha==15) {
		document.getElementById("chaMod").value = "2";
	} else if (charCha==16 || charCha==17) {
		document.getElementById("chaMod").value = "3";
	} else if (charCha==18 || charCha==19) {
		document.getElementById("chaMod").value = "4";
	} else if (charCha==20 || charCha==21) {
		document.getElementById("chaMod").value = "5";
	}
	document.getElementById("conToFort").value = document.getElementById("conMod").value;
	document.getElementById("dexToRef").value = document.getElementById("dexMod").value;
	document.getElementById("wisToWill").value = document.getElementById("wisMod").value;
}
function setClass() {
	document.getElementById("fighterFeatsAvailable").value = 0;
  class1 = document.getElementById("classSelect").value;
	conMod = document.getElementById("conMod").value;
	intMod = parseInt(document.getElementById("intMod").value);
	document.getElementById("appraiseRanks").value = 0;
	document.getElementById("balanceRanks").value = 0;
	document.getElementById("bluffRanks").value = 0;
	document.getElementById("climbRanks").value = 0;
	document.getElementById("concentrationRanks").value = 0;
	document.getElementById("decipherScriptRanks").value = 0;
	document.getElementById("diplomacyRanks").value = 0;
	document.getElementById("disableDeviceRanks").value = 0;
	document.getElementById("disguiseRanks").value = 0;
	document.getElementById("escapeArtistRanks").value = 0;
	document.getElementById("forgeryRanks").value = 0;
	document.getElementById("gatherInformationRanks").value = 0;
	document.getElementById("handleAnimalRanks").value = 0;
	document.getElementById("healRanks").value = 0;
	document.getElementById("hideRanks").value = 0;
	document.getElementById("intimidateRanks").value = 0;
	document.getElementById("jumpRanks").value = 0;
	document.getElementById("listenRanks").value = 0;
	document.getElementById("moveSilentlyRanks").value = 0;
	document.getElementById("openLockRanks").value = 0;
	document.getElementById("rideRanks").value = 0;
	document.getElementById("senseMotiveRanks").value = 0;
	document.getElementById("searchRanks").value = 0;
	document.getElementById("senseMotiveRanks").value = 0;
	document.getElementById("sleightOfHandRanks").value = 0;
	document.getElementById("spellcraftRanks").value = 0;
	document.getElementById("spotRanks").value = 0;
	document.getElementById("survivalRanks").value = 0;
	document.getElementById("swimRanks").value = 0;
	document.getElementById("tumbleRanks").value = 0;
	document.getElementById("useMagicDeviceRanks").value = 0;
	document.getElementById("useRopeRanks").value = 0;
	document.getElementById("knowledgeArcanaRanks").value = 0;
	document.getElementById("knowledgeHistoryRanks").value = 0;
	document.getElementById("knowledgeLocalRanks").value = 0;
	document.getElementById("knowledgePlanesRanks").value = 0;
	document.getElementById("knowledgeReligionRanks").value = 0;
	document.getElementById("appraiseClass1Skill").checked = false;
	document.getElementById("balanceClass1Skill").checked = false;
	document.getElementById("bluffClass1Skill").checked = false;
	document.getElementById("climbClass1Skill").checked = false;
	document.getElementById("concentrationClass1Skill").checked = false;
	document.getElementById("decipherScriptClass1Skill").checked = false;
	document.getElementById("diplomacyClass1Skill").checked = false;
	document.getElementById("disableDeviceClass1Skill").checked = false;
	document.getElementById("disguiseClass1Skill").checked = false;
	document.getElementById("escapeArtistClass1Skill").checked = false;
	document.getElementById("forgeryClass1Skill").checked = false;
	document.getElementById("gatherInformationClass1Skill").checked = false;
	document.getElementById("handleAnimalClass1Skill").checked = false;
	document.getElementById("healClass1Skill").checked = false;
	document.getElementById("hideClass1Skill").checked = false;
	document.getElementById("intimidateClass1Skill").checked = false;
	document.getElementById("jumpClass1Skill").checked = false;
	document.getElementById("listenClass1Skill").checked = false;
	document.getElementById("moveSilentlyClass1Skill").checked = false;
	document.getElementById("openLockClass1Skill").checked = false;
	document.getElementById("rideClass1Skill").checked = false;
	document.getElementById("senseMotiveClass1Skill").checked = false;
	document.getElementById("searchClass1Skill").checked = false;
	document.getElementById("senseMotiveClass1Skill").checked = false;
	document.getElementById("sleightOfHandClass1Skill").checked = false;
	document.getElementById("spellcraftClass1Skill").checked = false;
	document.getElementById("spotClass1Skill").checked = false;
	document.getElementById("survivalClass1Skill").checked = false;
	document.getElementById("swimClass1Skill").checked = false;
	document.getElementById("tumbleClass1Skill").checked = false;
	document.getElementById("useMagicDeviceClass1Skill").checked = false;
	document.getElementById("useRopeClass1Skill").checked = false;
	document.getElementById("knowledgeArcanaClass1Skill").checked = false;
	document.getElementById("knowledgeHistoryClass1Skill").checked = false;
	document.getElementById("knowledgeLocalClass1Skill").checked = false;
	document.getElementById("knowledgePlanesClass1Skill").checked = false;
	document.getElementById("knowledgeReligionClass1Skill").checked = false;
  if (class1 == "barbarian") {
    fort = "2";
    ref = "0";
    will = "0";
		hpBase = "12";
		attack = "1";
		document.getElementById("skillBank").value = (4 + intMod) * 4;
		document.getElementById("climbRanks").className = "class1Skill";
		document.getElementById("climbClass1Skill").checked = true;
		document.getElementById("handleAnimalRanks").className = "class1Skill";
		document.getElementById("handleAnimalClass1Skill").checked = true;
		document.getElementById("intimidateRanks").className = "class1Skill";
		document.getElementById("intimidateClass1Skill").checked = true;
		document.getElementById("jumpRanks").className = "class1Skill";
		document.getElementById("jumpClass1Skill").checked = true;
		document.getElementById("listenRanks").className = "class1Skill";
		document.getElementById("listenClass1Skill").checked = true;
		document.getElementById("rideRanks").className = "class1Skill";
		document.getElementById("rideClass1Skill").checked = true;
		document.getElementById("survivalRanks").className = "class1Skill";
		document.getElementById("survivalClass1Skill").checked = true;
		document.getElementById("swimRanks").className = "class1Skill";
		document.getElementById("swimClass1Skill").checked = true;
  } else if (class1 == "bard") {
    fort = "0";
    ref = "2";
    will = "2";
		hpBase = "6";
		attack = "0";
		document.getElementById("skillBank").value = (6 + intMod) * 4;
		document.getElementById("appraiseRanks").className = "class1Skill";
		document.getElementById("appraiseClass1Skill").checked = true;
		document.getElementById("balanceRanks").className = "class1Skill";
		document.getElementById("balanceClass1Skill").checked = true;
		document.getElementById("bluffRanks").className = "class1Skill";
		document.getElementById("bluffClass1Skill").checked = true;
		document.getElementById("climbRanks").className = "class1Skill";
		document.getElementById("climbClass1Skill").checked = true;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("decipherScriptRanks").className = "class1Skill";
		document.getElementById("decipherScriptClass1Skill").checked = true;
		document.getElementById("diplomacyRanks").className = "class1Skill";
		document.getElementById("diplomacyClass1Skill").checked = true;
		document.getElementById("disguiseRanks").className = "class1Skill";
		document.getElementById("disguiseClass1Skill").checked = true;
		document.getElementById("escapeArtistRanks").className = "class1Skill";
		document.getElementById("escapeArtistClass1Skill").checked = true;
		document.getElementById("gatherInformationRanks").className = "class1Skill";
		document.getElementById("gatherInformationClass1Skill").checked = true;
		document.getElementById("hideRanks").className = "class1Skill";
		document.getElementById("hideClass1Skill").checked = true;
		document.getElementById("jumpRanks").className = "class1Skill";
		document.getElementById("jumpClass1Skill").checked = true;
		document.getElementById("knowledgeArcanaRanks").className = "class1Skill";
		document.getElementById("knowledgeArcanaClass1Skill").checked = true;
		document.getElementById("knowledgeHistoryRanks").className = "class1Skill";
		document.getElementById("knowledgeHistoryClass1Skill").checked = true;
		document.getElementById("knowledgeLocalRanks").className = "class1Skill";
		document.getElementById("knowledgeLocalClass1Skill").checked = true;
		document.getElementById("knowledgePlanesRanks").className = "class1Skill";
		document.getElementById("knowledgePlanesClass1Skill").checked = true;
		document.getElementById("knowledgeReligionRanks").className = "class1Skill";
		document.getElementById("knowledgeReligionClass1Skill").checked = true;
		document.getElementById("listenRanks").className = "class1Skill";
		document.getElementById("listenClass1Skill").checked = true;
		document.getElementById("moveSilentlyRanks").className = "class1Skill";
		document.getElementById("moveSilentlyClass1Skill").checked = true;
		document.getElementById("senseMotiveRanks").className = "class1Skill";
		document.getElementById("senseMotiveClass1Skill").checked = true;
		document.getElementById("sleightOfHandRanks").className = "class1Skill";
		document.getElementById("sleightOfHandClass1Skill").checked = true;
		document.getElementById("spellcraftRanks").className = "class1Skill";
		document.getElementById("spellcraftClass1Skill").checked = true;
		document.getElementById("swimRanks").className = "class1Skill";
		document.getElementById("swimClass1Skill").checked = true;
		document.getElementById("tumbleRanks").className = "class1Skill";
		document.getElementById("tumbleClass1Skill").checked = true;
		document.getElementById("useMagicDeviceRanks").className = "class1Skill";
		document.getElementById("useMagicDeviceClass1Skill").checked = true;
  } else if (class1 == "cleric") {
    fort = "2";
    ref = "0";
    will = "2";
		hpBase = "8";
		attack = "0";
		document.getElementById("skillBank").value = (2 + intMod) * 4;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("diplomacyRanks").className = "class1Skill";
		document.getElementById("diplomacyClass1Skill").checked = true;
		document.getElementById("healRanks").className = "class1Skill";
		document.getElementById("healClass1Skill").checked = true;
		document.getElementById("knowledgeArcanaRanks").className = "class1Skill";
		document.getElementById("knowledgeArcanaClass1Skill").checked = true;
		document.getElementById("knowledgeHistoryRanks").className = "class1Skill";
		document.getElementById("knowledgeHistoryClass1Skill").checked = true;
		document.getElementById("knowledgePlanesRanks").className = "class1Skill";
		document.getElementById("knowledgePlanesClass1Skill").checked = true;
		document.getElementById("knowledgeReligionRanks").className = "class1Skill";
		document.getElementById("knowledgeReligionClass1Skill").checked = true;
		document.getElementById("spellcraftRanks").className = "class1Skill";
		document.getElementById("spellcraftClass1Skill").checked = true;
  } else if (class1 == "druid") {
    fort = "2";
    ref = "0";
    will = "2";
		hpBase = "8";
		attack = "0";
		document.getElementById("skillBank").value = (4 + intMod) * 4;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("diplomacyRanks").className = "class1Skill";
		document.getElementById("diplomacyClass1Skill").checked = true;
		document.getElementById("handleAnimalRanks").className = "class1Skill";
		document.getElementById("handleAnimalClass1Skill").checked = true;
		document.getElementById("healRanks").className = "class1Skill";
		document.getElementById("healClass1Skill").checked = true;
		document.getElementById("listenRanks").className = "class1Skill";
		document.getElementById("listenClass1Skill").checked = true;
		document.getElementById("rideRanks").className = "class1Skill";
		document.getElementById("rideClass1Skill").checked = true;
		document.getElementById("spellcraftRanks").className = "class1Skill";
		document.getElementById("spellcraftClass1Skill").checked = true;
		document.getElementById("spotRanks").className = "class1Skill";
		document.getElementById("spotClass1Skill").checked = true;
		document.getElementById("survivalRanks").className = "class1Skill";
		document.getElementById("survivalClass1Skill").checked = true;
		document.getElementById("swimRanks").className = "class1Skill";
		document.getElementById("swimClass1Skill").checked = true;
  } else if (class1 == "fighter") {
		document.getElementById("fighterFeatsAvailable").value = 1;
    fort = "2";
    ref = "0";
    will = "0";
		hpBase = "10";
		attack = "1";
		document.getElementById("skillBank").value = (2 + intMod) * 4;
		document.getElementById("climbRanks").className = "class1Skill";
		document.getElementById("climbClass1Skill").checked = true;
		document.getElementById("handleAnimalRanks").className = "class1Skill";
		document.getElementById("handleAnimalClass1Skill").checked = true;
		document.getElementById("intimidateRanks").className = "class1Skill";
		document.getElementById("intimidateClass1Skill").checked = true;
		document.getElementById("jumpRanks").className = "class1Skill";
		document.getElementById("jumpClass1Skill").checked = true;
		document.getElementById("rideRanks").className = "class1Skill";
		document.getElementById("rideClass1Skill").checked = true;
		document.getElementById("swimRanks").className = "class1Skill";
		document.getElementById("swimClass1Skill").checked = true;
  } else if (class1 == "monk") {
    fort = "2";
    ref = "2";
    will = "2";
		hpBase = "8";
		attack = "0";
		document.getElementById("skillBank").value = (4 + intMod) * 4;
		document.getElementById("balanceRanks").className = "class1Skill";
		document.getElementById("balanceClass1Skill").checked = true;
		document.getElementById("climbRanks").className = "class1Skill";
		document.getElementById("climbClass1Skill").checked = true;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("diplomacyRanks").className = "class1Skill";
		document.getElementById("diplomacyClass1Skill").checked = true;
		document.getElementById("escapeArtistRanks").className = "class1Skill";
		document.getElementById("escapeArtistClass1Skill").checked = true;
		document.getElementById("hideRanks").className = "class1Skill";
		document.getElementById("hideClass1Skill").checked = true;
		document.getElementById("jumpRanks").className = "class1Skill";
		document.getElementById("jumpClass1Skill").checked = true;
		document.getElementById("knowledgeArcanaRanks").className = "class1Skill";
		document.getElementById("knowledgeArcanaClass1Skill").checked = true;
		document.getElementById("knowledgeReligionRanks").className = "class1Skill";
		document.getElementById("knowledgeReligionClass1Skill").checked = true;
		document.getElementById("listenRanks").className = "class1Skill";
		document.getElementById("listenClass1Skill").checked = true;
		document.getElementById("moveSilentlyRanks").className = "class1Skill";
		document.getElementById("moveSilentlyClass1Skill").checked = true;
		document.getElementById("senseMotiveRanks").className = "class1Skill";
		document.getElementById("senseMotiveClass1Skill").checked = true;
		document.getElementById("spotRanks").className = "class1Skill";
		document.getElementById("spotClass1Skill").checked = true;
		document.getElementById("swimRanks").className = "class1Skill";
		document.getElementById("swimClass1Skill").checked = true;
		document.getElementById("tumbleRanks").className = "class1Skill";
		document.getElementById("tumbleClass1Skill").checked = true;
  } else if (class1 == "paladin") {
    fort = "2";
    ref = "0";
    will = "0";
		hpBase = "10";
		attack = "1";
		document.getElementById("skillBank").value = (2 + intMod) * 4;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("diplomacyRanks").className = "class1Skill";
		document.getElementById("diplomacyClass1Skill").checked = true;
		document.getElementById("handleAnimalRanks").className = "class1Skill";
		document.getElementById("handleAnimalClass1Skill").checked = true;
		document.getElementById("healRanks").className = "class1Skill";
		document.getElementById("healClass1Skill").checked = true;
		document.getElementById("knowledgeReligionRanks").className = "class1Skill";
		document.getElementById("knowledgeReligionClass1Skill").checked = true;
		document.getElementById("rideRanks").className = "class1Skill";
		document.getElementById("rideClass1Skill").checked = true;
		document.getElementById("rideRanks").className = "class1Skill";
		document.getElementById("rideClass1Skill").checked = true;
  } else if (class1 == "ranger") {
    fort = "2";
    ref = "0";
    will = "0";
		hpBase = "8";
		attack = "1";
		document.getElementById("skillBank").value = (6 + intMod) * 4;
		document.getElementById("climbRanks").className = "class1Skill";
		document.getElementById("climbClass1Skill").checked = true;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("handleAnimalRanks").className = "class1Skill";
		document.getElementById("handleAnimalClass1Skill").checked = true;
		document.getElementById("healRanks").className = "class1Skill";
		document.getElementById("healClass1Skill").checked = true;
		document.getElementById("hideRanks").className = "class1Skill";
		document.getElementById("hideClass1Skill").checked = true;
		document.getElementById("jumpRanks").className = "class1Skill";
		document.getElementById("jumpClass1Skill").checked = true;
		document.getElementById("listenRanks").className = "class1Skill";
		document.getElementById("listenClass1Skill").checked = true;
		document.getElementById("moveSilentlyRanks").className = "class1Skill";
		document.getElementById("moveSilentlyClass1Skill").checked = true;
		document.getElementById("rideRanks").className = "class1Skill";
		document.getElementById("rideClass1Skill").checked = true;
		document.getElementById("searchRanks").className = "class1Skill";
		document.getElementById("searchClass1Skill").checked = true;
		document.getElementById("spotRanks").className = "class1Skill";
		document.getElementById("spotClass1Skill").checked = true;
		document.getElementById("survivalRanks").className = "class1Skill";
		document.getElementById("survivalClass1Skill").checked = true;
		document.getElementById("swimRanks").className = "class1Skill";
		document.getElementById("swimClass1Skill").checked = true;
		document.getElementById("useRopeRanks").className = "class1Skill";
		document.getElementById("useRopeClass1Skill").checked = true;
  } else if (class1 == "rogue") {
    fort = "2";
    ref = "2";
    will = "0";
		hpBase = "6";
		attack = "0";
		document.getElementById("skillBank").value = (8 + intMod) * 4;
		document.getElementById("appraiseRanks").className = "class1Skill";
		document.getElementById("appraiseClass1Skill").checked = true;
		document.getElementById("balanceRanks").className = "class1Skill";
		document.getElementById("balanceClass1Skill").checked = true;
		document.getElementById("bluffRanks").className = "class1Skill";
		document.getElementById("bluffClass1Skill").checked = true;
		document.getElementById("climbRanks").className = "class1Skill";
		document.getElementById("climbClass1Skill").checked = true;
		document.getElementById("decipherScriptRanks").className = "class1Skill";
		document.getElementById("decipherScriptClass1Skill").checked = true;
		document.getElementById("diplomacyRanks").className = "class1Skill";
		document.getElementById("diplomacyClass1Skill").checked = true;
		document.getElementById("disableDeviceRanks").className = "class1Skill";
		document.getElementById("disableDeviceClass1Skill").checked = true;
		document.getElementById("disguiseRanks").className = "class1Skill";
		document.getElementById("disguiseClass1Skill").checked = true;
		document.getElementById("escapeArtistRanks").className = "class1Skill";
		document.getElementById("escapeArtistClass1Skill").checked = true;
		document.getElementById("forgeryRanks").className = "class1Skill";
		document.getElementById("forgeryClass1Skill").checked = true;
		document.getElementById("gatherInformationRanks").className = "class1Skill";
		document.getElementById("gatherInformationClass1Skill").checked = true;
		document.getElementById("hideRanks").className = "class1Skill";
		document.getElementById("hideClass1Skill").checked = true;
		document.getElementById("intimidateRanks").className = "class1Skill";
		document.getElementById("intimidateClass1Skill").checked = true;
		document.getElementById("jumpRanks").className = "class1Skill";
		document.getElementById("jumpClass1Skill").checked = true;
		document.getElementById("knowledgeLocalRanks").className = "class1Skill";
		document.getElementById("knowledgeLocalClass1Skill").checked = true;
		document.getElementById("listenRanks").className = "class1Skill";
		document.getElementById("listenClass1Skill").checked = true;
		document.getElementById("moveSilentlyRanks").className = "class1Skill";
		document.getElementById("moveSilentlyClass1Skill").checked = true;
		document.getElementById("openLockRanks").className = "class1Skill";
		document.getElementById("openLockClass1Skill").checked = true;
		document.getElementById("searchRanks").className = "class1Skill";
		document.getElementById("searchClass1Skill").checked = true;
		document.getElementById("senseMotiveRanks").className = "class1Skill";
		document.getElementById("senseMotiveClass1Skill").checked = true;
		document.getElementById("sleightOfHandRanks").className = "class1Skill";
		document.getElementById("sleightOfHandClass1Skill").checked = true;
		document.getElementById("spotRanks").className = "class1Skill";
		document.getElementById("spotClass1Skill").checked = true;
		document.getElementById("swimRanks").className = "class1Skill";
		document.getElementById("swimClass1Skill").checked = true;
		document.getElementById("tumbleRanks").className = "class1Skill";
		document.getElementById("tumbleClass1Skill").checked = true;
		document.getElementById("useMagicDeviceRanks").className = "class1Skill";
		document.getElementById("useMagicDeviceClass1Skill").checked = true;
		document.getElementById("useRopeRanks").className = "class1Skill";
		document.getElementById("useRopeClass1Skill").checked = true;
  } else if (class1 == "sorcerer") {
    fort = "0";
    ref = "0";
    will = "2";
		hpBase = "4";
		attack = "0";
		document.getElementById("skillBank").value = (2 + intMod) * 4;
		document.getElementById("bluffRanks").className = "class1Skill";
		document.getElementById("bluffClass1Skill").checked = true;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("knowledgeArcanaRanks").className = "class1Skill";
		document.getElementById("knowledgeArcanaClass1Skill").checked = true;
		document.getElementById("spellcraftRanks").className = "class1Skill";
		document.getElementById("spellcraftClass1Skill").checked = true;
  } else if (class1 == "wizard") {
    fort = "0";
    ref = "0";
    will = "2";
		hpBase = "4";
		attack = "0";
		document.getElementById("skillBank").value = (2 + intMod) * 4;
		document.getElementById("concentrationRanks").className = "class1Skill";
		document.getElementById("concentrationClass1Skill").checked = true;
		document.getElementById("decipherScriptRanks").className = "class1Skill";
		document.getElementById("decipherScriptClass1Skill").checked = true;
		document.getElementById("knowledgeArcanaRanks").className = "class1Skill";
		document.getElementById("knowledgeArcanaClass1Skill").checked = true;
		document.getElementById("knowledgeHistoryRanks").className = "class1Skill";
		document.getElementById("knowledgeHistoryClass1Skill").checked = true;
		document.getElementById("knowledgeLocalRanks").className = "class1Skill";
		document.getElementById("knowledgeLocalClass1Skill").checked = true;
		document.getElementById("knowledgePlanesRanks").className = "class1Skill";
		document.getElementById("knowledgePlanesClass1Skill").checked = true;
		document.getElementById("knowledgeReligionRanks").className = "class1Skill";
		document.getElementById("knowledgeReligionClass1Skill").checked = true;
		document.getElementById("spellcraftRanks").className = "class1Skill";
		document.getElementById("spellcraftClass1Skill").checked = true;
  }
	document.getElementById("hpCon").value = (+conMod);
	document.getElementById("hpClass").value = (+hpBase);
	document.getElementById("hpTotal").value = (+hpBase) + (+conMod);
  document.getElementById("fortClass").value = fort;
  document.getElementById("refClass").value = ref;
  document.getElementById("willClass").value = will;
	document.getElementById("baseAttack").value = attack;
}
function setHP() {
conMod = document.getElementById("conMod").value;
hpBase = document.getElementById("hpClass").value;
document.getElementById("hpCon").value = (+conMod);
document.getElementById("hpTotal").value = (+hpBase) + (+conMod);
}
function setInit() {
dex = document.getElementById("dexMod").value;
other = "0"; // Placeholder value
document.getElementById("initDex").value = (+dex);
document.getElementById("initOther").value = (+other);
document.getElementById("initMod").value = (+dex) + (+other);
}
function setFullSaves() {
	var conMod = document.getElementById("conMod").value;
	var dexMod = document.getElementById("dexMod").value;
	var wisMod = document.getElementById("wisMod").value;
	var fortClass = document.getElementById("fortClass").value;
	var refClass = document.getElementById("refClass").value;
	var willClass = document.getElementById("willClass").value;
	var conMisc = document.getElementById("fortMisc").value;
	var refMisc = document.getElementById("refMisc").value;
	var willMisc = document.getElementById("willMisc").value;
	document.getElementById("fortFull").value = (+conMod) + (+fortClass) + (+conMisc);
	document.getElementById("refFull").value = (+dexMod) + (+refClass) + (+refMisc);
	document.getElementById("willFull").value = (+wisMod) + (+willClass) + (+willMisc);
}
function getRanks(thisSkill) {
	var skillStart = thisSkill.value;
	document.getElementById("rankStart").value = skillStart;
}
function setRanks(thisSkill) {
	var begin = parseInt(document.getElementById("rankStart").value);
	var end = thisSkill.value;
	var bank = parseInt(document.getElementById("skillBank").value);
	var maxClass = parseInt(document.getElementById("maxRanksClass"));
	var maxCross = parseInt(document.getElementById("maxRanksCrossClass"));
	if (thisSkill.className == "class1Skill") {
		if (begin < end && bank >= "1") {
			bank -= 1;
		} else if (begin < end && bank < "1") {
			bank = bank;
			thisSkill.value = begin;
		} else if (begin > end) {
			bank += 1;
		} 
	} else if (thisSkill.className != "class1Skill") {
		if (begin < end && bank >= "2") {
			bank -= 2;
		} else if (begin < end && bank < "2") {
			bank = bank;
			thisSkill.value = begin;
		} else if (begin > end) {
			bank += 2;
		} 
}
	document.getElementById("skillBank").value = bank
}
function zeroBlanks() {
	var allBlanks = document.getElementsByClassName("startEmpty");
	var i;
	for (i = 0; i < allBlanks.length; i++) {
		document.getElementsByClassName("startEmpty")[i].value = 0;
	}
}
function updateSkills() {
	document.getElementById("appraiseSkillBonus").value = parseInt(document.getElementById("appraiseAbilityMod").value) + parseInt(document.getElementById("appraiseRanks").value) + parseInt(document.getElementById("appraiseRaceSyn").value) + parseInt(document.getElementById("appraiseMisc").value);
	document.getElementById("balanceSkillBonus").value = parseInt(document.getElementById("balanceAbilityMod").value) + parseInt(document.getElementById("balanceRanks").value) + parseInt(document.getElementById("balanceRaceSyn").value) + parseInt(document.getElementById("balanceMisc").value) + parseInt(document.getElementById("balanceArmorCheck").value);
	document.getElementById("bluffSkillBonus").value = parseInt(document.getElementById("bluffAbilityMod").value) + parseInt(document.getElementById("bluffRanks").value) + parseInt(document.getElementById("bluffRaceSyn").value) + parseInt(document.getElementById("bluffMisc").value) + parseInt(document.getElementById("bluffFavored").value);
	document.getElementById("climbSkillBonus").value = parseInt(document.getElementById("climbAbilityMod").value) + parseInt(document.getElementById("climbRanks").value) + parseInt(document.getElementById("climbRaceSyn").value) + parseInt(document.getElementById("climbMisc").value) + parseInt(document.getElementById("climbArmorCheck").value);
	document.getElementById("concentrationSkillBonus").value = parseInt(document.getElementById("concentrationAbilityMod").value) + parseInt(document.getElementById("concentrationRanks").value) + parseInt(document.getElementById("concentrationRaceSyn").value) + parseInt(document.getElementById("concentrationMisc").value);
	document.getElementById("decipherScriptSkillBonus").value = parseInt(document.getElementById("decipherScriptAbilityMod").value) + parseInt(document.getElementById("decipherScriptRanks").value) + parseInt(document.getElementById("decipherScriptRaceSyn").value) + parseInt(document.getElementById("decipherScriptMisc").value);
	document.getElementById("diplomacySkillBonus").value = parseInt(document.getElementById("diplomacyAbilityMod").value) + parseInt(document.getElementById("diplomacyRanks").value) + parseInt(document.getElementById("diplomacyRaceSyn").value) + parseInt(document.getElementById("diplomacyMisc").value);
	document.getElementById("disableDeviceSkillBonus").value = parseInt(document.getElementById("disableDeviceAbilityMod").value) + parseInt(document.getElementById("disableDeviceRanks").value) + parseInt(document.getElementById("disableDeviceRaceSyn").value) + parseInt(document.getElementById("disableDeviceMisc").value);
	document.getElementById("disguiseSkillBonus").value = parseInt(document.getElementById("disguiseAbilityMod").value) + parseInt(document.getElementById("disguiseRanks").value) + parseInt(document.getElementById("disguiseRaceSyn").value) + parseInt(document.getElementById("disguiseMisc").value);
	document.getElementById("escapeArtistSkillBonus").value = parseInt(document.getElementById("escapeArtistAbilityMod").value) + parseInt(document.getElementById("escapeArtistRanks").value) + parseInt(document.getElementById("escapeArtistRaceSyn").value) + parseInt(document.getElementById("escapeArtistMisc").value) + parseInt(document.getElementById("escapeArtistArmorCheck").value);
	document.getElementById("forgerySkillBonus").value = parseInt(document.getElementById("forgeryAbilityMod").value) + parseInt(document.getElementById("forgeryRanks").value) + parseInt(document.getElementById("forgeryRaceSyn").value) + parseInt(document.getElementById("forgeryMisc").value);
	document.getElementById("gatherInformationSkillBonus").value = parseInt(document.getElementById("gatherInformationAbilityMod").value) + parseInt(document.getElementById("gatherInformationRanks").value) + parseInt(document.getElementById("gatherInformationRaceSyn").value) + parseInt(document.getElementById("gatherInformationMisc").value);
	document.getElementById("handleAnimalSkillBonus").value = parseInt(document.getElementById("handleAnimalAbilityMod").value) + parseInt(document.getElementById("handleAnimalRanks").value) + parseInt(document.getElementById("handleAnimalRaceSyn").value) + parseInt(document.getElementById("handleAnimalMisc").value);
	document.getElementById("healSkillBonus").value = parseInt(document.getElementById("healAbilityMod").value) + parseInt(document.getElementById("healRanks").value) + parseInt(document.getElementById("healRaceSyn").value) + parseInt(document.getElementById("healMisc").value);
	document.getElementById("hideSkillBonus").value = parseInt(document.getElementById("hideAbilityMod").value) + parseInt(document.getElementById("hideRanks").value) + parseInt(document.getElementById("hideRaceSyn").value) + parseInt(document.getElementById("hideMisc").value) + parseInt(document.getElementById("hideArmorCheck").value);
	document.getElementById("intimidateSkillBonus").value = parseInt(document.getElementById("intimidateAbilityMod").value) + parseInt(document.getElementById("intimidateRanks").value) + parseInt(document.getElementById("intimidateRaceSyn").value) + parseInt(document.getElementById("intimidateMisc").value);
	document.getElementById("jumpSkillBonus").value = parseInt(document.getElementById("jumpAbilityMod").value) + parseInt(document.getElementById("jumpRanks").value) + parseInt(document.getElementById("jumpRaceSyn").value) + parseInt(document.getElementById("jumpMisc").value) + parseInt(document.getElementById("jumpArmorCheck").value);
	document.getElementById("listenSkillBonus").value = parseInt(document.getElementById("listenAbilityMod").value) + parseInt(document.getElementById("listenRanks").value) + parseInt(document.getElementById("listenRaceSyn").value) + parseInt(document.getElementById("listenMisc").value) + parseInt(document.getElementById("listenFavored").value);
	document.getElementById("moveSilentlySkillBonus").value = parseInt(document.getElementById("moveSilentlyAbilityMod").value) + parseInt(document.getElementById("moveSilentlyRanks").value) + parseInt(document.getElementById("moveSilentlyRaceSyn").value) + parseInt(document.getElementById("moveSilentlyMisc").value) + parseInt(document.getElementById("moveSilentlyArmorCheck").value);
	document.getElementById("openLockSkillBonus").value = parseInt(document.getElementById("openLockAbilityMod").value) + parseInt(document.getElementById("openLockRanks").value) + parseInt(document.getElementById("openLockRaceSyn").value) + parseInt(document.getElementById("openLockMisc").value);
	document.getElementById("rideSkillBonus").value = parseInt(document.getElementById("rideAbilityMod").value) + parseInt(document.getElementById("rideRanks").value) + parseInt(document.getElementById("rideRaceSyn").value) + parseInt(document.getElementById("rideMisc").value);
	document.getElementById("searchSkillBonus").value = parseInt(document.getElementById("searchAbilityMod").value) + parseInt(document.getElementById("searchRanks").value) + parseInt(document.getElementById("searchRaceSyn").value) + parseInt(document.getElementById("searchMisc").value);
	document.getElementById("senseMotiveSkillBonus").value = parseInt(document.getElementById("senseMotiveAbilityMod").value) + parseInt(document.getElementById("senseMotiveRanks").value) + parseInt(document.getElementById("senseMotiveRaceSyn").value) + parseInt(document.getElementById("senseMotiveMisc").value) + parseInt(document.getElementById("senseMotiveFavored").value);
	document.getElementById("sleightOfHandSkillBonus").value = parseInt(document.getElementById("sleightOfHandAbilityMod").value) + parseInt(document.getElementById("sleightOfHandRanks").value) + parseInt(document.getElementById("sleightOfHandRaceSyn").value) + parseInt(document.getElementById("sleightOfHandMisc").value) + parseInt(document.getElementById("sleightOfHandArmorCheck").value);
	document.getElementById("spellcraftSkillBonus").value = parseInt(document.getElementById("spellcraftAbilityMod").value) + parseInt(document.getElementById("spellcraftRanks").value) + parseInt(document.getElementById("spellcraftRaceSyn").value) + parseInt(document.getElementById("spellcraftMisc").value);
	document.getElementById("spotSkillBonus").value = parseInt(document.getElementById("spotAbilityMod").value) + parseInt(document.getElementById("spotRanks").value) + parseInt(document.getElementById("spotRaceSyn").value) + parseInt(document.getElementById("spotMisc").value) + parseInt(document.getElementById("spotFavored").value);
	document.getElementById("survivalSkillBonus").value = parseInt(document.getElementById("survivalAbilityMod").value) + parseInt(document.getElementById("survivalRanks").value) + parseInt(document.getElementById("survivalRaceSyn").value) + parseInt(document.getElementById("survivalMisc").value) + parseInt(document.getElementById("survivalFavored").value);
	document.getElementById("swimSkillBonus").value = parseInt(document.getElementById("swimAbilityMod").value) + parseInt(document.getElementById("swimRanks").value) + parseInt(document.getElementById("swimRaceSyn").value) + parseInt(document.getElementById("swimMisc").value) + (parseInt(document.getElementById("swimArmorCheck").value) * 2);
	document.getElementById("tumbleSkillBonus").value = parseInt(document.getElementById("tumbleAbilityMod").value) + parseInt(document.getElementById("tumbleRanks").value) + parseInt(document.getElementById("tumbleRaceSyn").value) + parseInt(document.getElementById("tumbleMisc").value) + parseInt(document.getElementById("tumbleArmorCheck").value);
	document.getElementById("useMagicDeviceSkillBonus").value = parseInt(document.getElementById("useMagicDeviceAbilityMod").value) + parseInt(document.getElementById("useMagicDeviceRanks").value) + parseInt(document.getElementById("useMagicDeviceRaceSyn").value) + parseInt(document.getElementById("useMagicDeviceMisc").value);
	document.getElementById("useRopeSkillBonus").value = parseInt(document.getElementById("useRopeAbilityMod").value) + parseInt(document.getElementById("useRopeRanks").value) + parseInt(document.getElementById("useRopeRaceSyn").value) + parseInt(document.getElementById("useRopeMisc").value);
	document.getElementById("knowledgeArcanaSkillBonus").value = parseInt(document.getElementById("knowledgeArcanaAbilityMod").value) + parseInt(document.getElementById("knowledgeArcanaRanks").value) + parseInt(document.getElementById("knowledgeArcanaRaceSyn").value) + parseInt(document.getElementById("knowledgeArcanaMisc").value);
	document.getElementById("knowledgeHistorySkillBonus").value = parseInt(document.getElementById("knowledgeHistoryAbilityMod").value) + parseInt(document.getElementById("knowledgeHistoryRanks").value) + parseInt(document.getElementById("knowledgeHistoryRaceSyn").value) + parseInt(document.getElementById("knowledgeHistoryMisc").value);
	document.getElementById("knowledgeLocalSkillBonus").value = parseInt(document.getElementById("knowledgeLocalAbilityMod").value) + parseInt(document.getElementById("knowledgeLocalRanks").value) + parseInt(document.getElementById("knowledgeLocalRaceSyn").value) + parseInt(document.getElementById("knowledgeLocalMisc").value);
	document.getElementById("knowledgePlanesSkillBonus").value = parseInt(document.getElementById("knowledgePlanesAbilityMod").value) + parseInt(document.getElementById("knowledgePlanesRanks").value) + parseInt(document.getElementById("knowledgePlanesRaceSyn").value) + parseInt(document.getElementById("knowledgePlanesMisc").value);
	document.getElementById("knowledgeReligionSkillBonus").value = parseInt(document.getElementById("knowledgeReligionAbilityMod").value) + parseInt(document.getElementById("knowledgeReligionRanks").value) + parseInt(document.getElementById("knowledgeReligionRaceSyn").value) + parseInt(document.getElementById("knowledgeReligionMisc").value);
}
function setAbsToSkills() {
	var str = document.getElementById("strMod").value;
	var dex = document.getElementById("dexMod").value;
	var con = document.getElementById("conMod").value;
	var int = document.getElementById("intMod").value;
	var wis = document.getElementById("wisMod").value;
	var cha = document.getElementById("chaMod").value;
	document.getElementById("appraiseAbilityMod").value = int;
	document.getElementById("balanceAbilityMod").value = dex;
	document.getElementById("bluffAbilityMod").value = cha;
	document.getElementById("climbAbilityMod").value = str;
	document.getElementById("concentrationAbilityMod").value = con;
	document.getElementById("decipherScriptAbilityMod").value = int;
	document.getElementById("diplomacyAbilityMod").value = cha;
	document.getElementById("disableDeviceAbilityMod").value = dex;
	document.getElementById("disguiseAbilityMod").value = cha;
	document.getElementById("escapeArtistAbilityMod").value = dex;
	document.getElementById("forgeryAbilityMod").value = int;
	document.getElementById("gatherInformationAbilityMod").value = cha;
	document.getElementById("handleAnimalAbilityMod").value = cha;
	document.getElementById("healAbilityMod").value = wis;
	document.getElementById("hideAbilityMod").value = dex;
	document.getElementById("intimidateAbilityMod").value = cha;
	document.getElementById("jumpAbilityMod").value = str;
	document.getElementById("listenAbilityMod").value = wis;
	document.getElementById("moveSilentlyAbilityMod").value = dex;
	document.getElementById("openLockAbilityMod").value = dex;
	document.getElementById("rideAbilityMod").value = dex;
	document.getElementById("searchAbilityMod").value = wis;
	document.getElementById("senseMotiveAbilityMod").value = wis;
	document.getElementById("sleightOfHandAbilityMod").value = wis;
	document.getElementById("spellcraftAbilityMod").value = int;
	document.getElementById("spotAbilityMod").value = wis;
	document.getElementById("survivalAbilityMod").value = wis;
	document.getElementById("swimAbilityMod").value = str;
	document.getElementById("tumbleAbilityMod").value = dex;
	document.getElementById("useMagicDeviceAbilityMod").value = cha;
	document.getElementById("useRopeAbilityMod").value = dex;
	document.getElementById("knowledgeArcanaAbilityMod").value = int;
	document.getElementById("knowledgeHistoryAbilityMod").value = int;
	document.getElementById("knowledgeLocalAbilityMod").value = int;
	document.getElementById("knowledgePlanesAbilityMod").value = int;
	document.getElementById("knowledgeReligionAbilityMod").value = int;
}
function resetSkillBank() {
	class1 = document.getElementById("classSelect").value;
	document.getElementById("appraiseRanks").value = 0;
	document.getElementById("balanceRanks").value = 0;
	document.getElementById("bluffRanks").value = 0;
	document.getElementById("climbRanks").value = 0;
	document.getElementById("concentrationRanks").value = 0;
	document.getElementById("decipherScriptRanks").value = 0;
	document.getElementById("diplomacyRanks").value = 0;
	document.getElementById("disableDeviceRanks").value = 0;
	document.getElementById("disguiseRanks").value = 0;
	document.getElementById("escapeArtistRanks").value = 0;
	document.getElementById("forgeryRanks").value = 0;
	document.getElementById("gatherInformationRanks").value = 0;
	document.getElementById("handleAnimalRanks").value = 0;
	document.getElementById("healRanks").value = 0;
	document.getElementById("hideRanks").value = 0;
	document.getElementById("intimidateRanks").value = 0;
	document.getElementById("jumpRanks").value = 0;
	document.getElementById("listenRanks").value = 0;
	document.getElementById("moveSilentlyRanks").value = 0;
	document.getElementById("openLockRanks").value = 0;
	document.getElementById("rideRanks").value = 0;
	document.getElementById("senseMotiveRanks").value = 0;
	document.getElementById("searchRanks").value = 0;
	document.getElementById("senseMotiveRanks").value = 0;
	document.getElementById("sleightOfHandRanks").value = 0;
	document.getElementById("spellcraftRanks").value = 0;
	document.getElementById("spotRanks").value = 0;
	document.getElementById("survivalRanks").value = 0;
	document.getElementById("swimRanks").value = 0;
	document.getElementById("tumbleRanks").value = 0;
	document.getElementById("useMagicDeviceRanks").value = 0;
	document.getElementById("useRopeRanks").value = 0;
	document.getElementById("knowledgeArcanaRanks").value = 0;
	document.getElementById("knowledgeHistoryRanks").value = 0;
	document.getElementById("knowledgeLocalRanks").value = 0;
	document.getElementById("knowledgePlanesRanks").value = 0;
	document.getElementById("knowledgeReligionRanks").value = 0;
	intMod = parseInt(document.getElementById("intMod").value);
	switch(class1) {
		case "barbarian" :
			document.getElementById("skillBank").value = (4 + intMod) * 4;
			break;
		case "bard" :
			document.getElementById("skillBank").value = (6 + intMod) * 4;
			break;
		case "cleric" :
			document.getElementById("skillBank").value = (2 + intMod) * 4;
			break;
		case "druid" :
			document.getElementById("skillBank").value = (4 + intMod) * 4;
			break;
		case "fighter" :
			document.getElementById("skillBank").value = (2 + intMod) * 4;
			break;
		case "monk" :
			document.getElementById("skillBank").value = (4 + intMod) * 4;
			break;
		case "paladin" :
			document.getElementById("skillBank").value = (2 + intMod) * 4;
			break;
		case "ranger" :
			document.getElementById("skillBank").value = (6 + intMod) * 4;
			break;
		case "rogue" :
			document.getElementById("skillBank").value = (8 + intMod) * 4;
			break;
		case "sorcerer" :
			document.getElementById("skillBank").value = (2 + intMod) * 4;
			break;
		case "wizard" :
			document.getElementById("skillBank").value = (2 + intMod) * 4;
	}
}

function setFeatsAvailable() {
	var race = document.getElementById("raceSelect").value;
	var feats;
	var charClass = document.getElementById("classSelect").value;
	var fighterFeats;
	if (race == "human") {
		feats = 2;
	} else {
		feats = 1;
	}
	if(charClass == "fighter") {
		fighterFeats = 1;
	} else {
		fighterFeats = 0;
	}
	document.getElementById("featsAvailable").value = feats;
	document.getElementById("fighterFeatsAvailable").value = fighterFeats;
}

function populateFeats() {
	document.getElementById("featSelectionZone").innerHTML = "";
	var charClass = document.getElementById("classSelect").value;
	var featSlots = document.getElementById("featsAvailable").value;
	var featNamesArray;
	for (i=0; i<featSlots; i++) {
		var featSelectionZone = document.getElementById("featSelectionZone");
		//Create array with the names of all feats available for the character's class
		switch(charClass) {
			case "barbarian": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Heavy)","Athletic","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard","Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative"," ","Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus"];
				break;
				case "bard": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus","---Item Creation---","Scribe Scroll","---Metamagic---","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell"];
				break;
				case "cleric": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard","Extra Turning","Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus","---Item Creation---","Scribe Scroll","---Metamagic---","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell"];
				break;
				case "druid": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus","---Item Creation---","Scribe Scroll","---Metamagic---","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell"];
				break;
				case "fighter": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus"];
				break;
				case "monk": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus"];
				break;
				case "paladin": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus"];
				break;
				case "ranger": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus"];
				break;
				case "rogue": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus"];
				break;
				case "sorcerer": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus", "Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus","---Item Creation---","Scribe Scroll","---Metamagic---","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell"];
				break;
				case "wizard": 
				featNamesArray = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard", "Great Fortitude","Improved Counterspell", "Improved Familiar","Improved Initiative", "Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows", "Investigator","Iron Will", "Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample", "Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot",  "Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus","Spell Mastery","Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","Weapon Finesse","Weapon Focus","---Item Creation---","Scribe Scroll","---Metamagic---","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell"];
				break;
		}
		//Create and append a select list for the names array to go in to
		var selectList = document.createElement("select");
		selectList.id = "featsSelect" + i;
		selectList.addEventListener("change", displayFeats, false);
		featSelectionZone.appendChild(selectList);
		//Create and append the options based on the names array
		for (var x = 0; x < featNamesArray.length; x++) {
		var option = document.createElement("option");
		option.value = featNamesArray[x];
		option.text = featNamesArray[x];
		selectList.appendChild(option);
		}
		var mybr = document.createElement('br');
		featSelectionZone.appendChild(mybr);
	}
}

function populateFighterFeats() {
	var charClass = document.getElementById("classSelect").value;
	if (charClass == 'fighter') {
	document.getElementById("fighterFeatSelectionZone").innerHTML = "";
	document.getElementById("fighterFeatDisplayZone").innerHTML = "";
	var fighterFeatSlots = document.getElementById("fighterFeatsAvailable").value;
	for (i=0; i<fighterFeatSlots; i++) {
		var fighterFeatSelectionZone = document.getElementById("fighterFeatSelectionZone");
		//Create array of options to be added
		var array = ["---Fighter Feat---","Blind-Fight","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip", "Combat Reflexes","Dodge","Mobility","Spring Attack","Exotic Weapon Proficiency", "Improved Initiative","Improved Shield Bash","Improved Unarmed Strike","Deflect Arrows","Improved Grapple","Snatch Arrows","Stunning Fist","Mounted Combat","Mounted Archery","Ride-By Attack","Spirited Charge","Trample","Point Blank Shot","Far Shot","Precise Shot","Rapid Shot","Manyshot","Shot On The Run","Improved Precise Shot","Power Attack","Cleave","Improved Bull Rush","Improved Overrun","Improved Sunder","Quick Draw","Rapid Reload","Two-Weapon Fighting","Two-Weapon Defense","Improved Two-Weapon Fighting","Greater Two-Weapon Fighting","Weapon Finesse","Weapon Focus","Weapon Specialization","Greater Weapon Focus","Greater Weapon Specialization"];
		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "fighterFeatsSelect" + i;
		selectList.addEventListener("change", displayFeats, false);
		fighterFeatSelectionZone.appendChild(selectList);
		//Create and append the options
		for (var x = 0; x < array.length; x++) {
		var option = document.createElement("option");
		option.value = array[x];
		option.text = array[x];
		selectList.appendChild(option);
		}
		var mybr = document.createElement('br');
		fighterFeatSelectionZone.appendChild(mybr);
	}
} else {
	document.getElementById("fighterFeatSelectionZone").innerHTML = "N/A";
	document.getElementById("fighterFeatDisplayZone").innerHTML = "N/A";
}
}

function displayFeats() {
	var charRace = document.getElementById("raceSelect").value;
	var charClass = document.getElementById("classSelect").value;
	var feat1 = document.getElementById("featsSelect0").value;
	if (charRace == 'human') {
		var feat2 = document.getElementById("featsSelect1").value;
		document.getElementById("featDisplayZone").innerHTML = feat1 + "<br>" + feat2;
	} else {
		switch(feat1) {
			case 	"---General Feat---" : 
				document.getElementById("featDisplayZone").innerHTML = "Select a feat to learn more about it.";
				break;
			case 	"Acrobatic" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>You get a +2 bonus on all <a href="/srd/skills/jump.htm">Jump</a> checks and <a href="/srd/skills/tumble.htm">Tumble</a> checks.</p>';
				break;
			case 	"Agile" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>You get a +2 bonus on all <a href="/srd/skills/balance.htm">Balance</a> checks and <a href="/srd/skills/escapeArtist.htm">Escape Artist</a> checks.</p>';
				break;
			case 	"Alertness" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>You get a +2 bonus on all <a href="/srd/skills/listen.htm">Listen</a> checks and <a href="/srd/skills/spot.htm">Spot</a> checks.</p><h5>Special</h5><p>The master of a <a href="/srd/classes/sorcererWizard.htm#familiars">familiar</a> gains the benefit of the Alertness feat whenever the familiar is within arm’s reach.</p>';
				break;
			case 	"Animal Affinity" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>You get a +2 bonus on all <a href="/srd/skills/handleAnimal.htm">Handle Animal</a> checks and <a href="/srd/skills/ride.htm">Ride</a> checks.</p>'; 
				break;
			case 	"Armor Proficiency (Light)" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>When you wear a type of armor with which you are <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a>, the armor check penalty for that armor applies only to <a href="/srd/skills/balance.htm">Balance</a>, <a href="/srd/skills/climb.htm">Climb</a>, <a href="/srd/skills/escapeArtist.htm">Escape Artist</a>, <a href="/srd/skills/hide.htm">Hide</a>, <a href="/srd/skills/jump.htm">Jump</a>, <a href="/srd/skills/moveSilently.htm">Move Silently</a>, <a href="/srd/skills/sleightOfHand.htm">Sleight of Hand</a>, and <a href="/srd/skills/tumble.htm">Tumble</a> checks.</p><h5>Normal</h5><p>	A character who is wearing armor with which she is not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> applies its armor check penalty to <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> and to all <a href="/srd/skills/usingSkills.htm#skillChecks">skill checks</a> that involve moving, including <a href="/srd/skills/ride.htm">Ride</a>.</p><h5>Special</h5><p>All characters except <a href="/srd/classes/sorcererWizard.htm#wizard">wizards</a>, <a href="/srd/classes/sorcererWizard.htm#sorcerer">sorcerers</a>, and <a href="/srd/classes/monk.htm">monks</a> automatically have Armor Proficiency (light) as a bonus feat. They need not select it.</p>'; 
				break;
			case 	"Armor Proficiency (Medium)" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	<a href="#armorProficiencyLight">Armor Proficiency (light)</a>.</p><h5>Benefit</h5><p>	See <a href="#armorProficiencyLight">Armor Proficiency (light)</a>.</p><h5>Normal</h5><p>	See <a href="#armorProficiencyLight">Armor Proficiency (light)</a>.</p><h5>Special</h5><p>	<a href="/srd/classes/fighter.htm">Fighters</a>, <a href="/srd/classes/barbarian.htm">barbarians</a>, <a href="/srd/classes/paladin.htm">paladins</a>, <a href="/srd/classes/cleric.htm">clerics</a>, <a href="/srd/classes/druid.htm">druids</a>, and <a href="/srd/classes/bard.htm">bards</a> automatically have Armor Proficiency (medium) as a bonus feat. They need not select it.</p>'; 
				break;
			case 	"Armor Proficiency (Heavy)" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p><a href="#armorProficiencyLight">Armor Proficiency (light)</a>, <a href="#armorProficiencyMedium">Armor Proficiency (medium)</a>.</p><h5>Benefit</h5><p>See <a href="#armorProficiencyLight">Armor Proficiency (light)</a>.</p><h5>Normal</h5><p>See <a href="#armorProficiencyLight">Armor Proficiency (light)</a>.</p><h5>Special</h5><p><a href="/srd/classes/fighter.htm">Fighters</a>, <a href="/srd/classes/paladin.htm">paladins</a>, and <a href="/srd/classes/cleric.htm">clerics</a> automatically have Armor Proficiency (heavy) as a bonus feat. They need not select it.</p>'; 
				break;
			case 	"Athletic" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>You get a +2 bonus on all <a href="/srd/skills/climb.htm">Climb</a> checks and <a href="/srd/skills/swim.htm">Swim</a> checks.</p>'; 
				break;
			case 	"Augment Summoning" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p><a href="#spellFocus">Spell Focus</a> (conjuration).</p><h5>Benefit</h5><p>Each creature you conjure with any summon spell gains a +4 <a href="/srd/theBasics.htm#enhancementBonus">enhancement bonus</a> to Strength and Constitution for the duration of the spell that summoned it.</p>'; 
				break;
			case 	"Blind-Fight" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	In melee, every time you miss because of <a href="/srd/combat/combatModifiers.htm#concealment">concealment</a>, you can reroll your miss chance percentile roll one time to see if you actually hit.</p><p>An <a href="/srd/conditionSummary.htm#invisible">invisible</a> attacker gets no advantages related to hitting you in melee. That is, you don’t lose your Dexterity bonus to Armor Class, and the attacker doesn’t get the usual +2 bonus for being invisible. The invisible attacker’s bonuses do still apply for ranged attacks, however.</p><p>You take only half the usual penalty to speed for being unable to see. Darkness and poor visibility in general reduces your speed to three-quarters normal, instead of one-half.</p><h5>Normal</h5><p>Regular <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> modifiers for invisible attackers trying to hit you apply, and you lose your Dexterity bonus to AC. The speed reduction for darkness and poor visibility also applies.</p><h5>Special</h5><p>The Blind-Fight feat is of no use against a character who is the subject of a <a class="spell" href="/srd/spells/blink.htm">blink</a> spell.</p><p>A <a href="/srd/classes/fighter.htm">fighter</a> may select Blind-Fight as one of his fighter bonus feats.</p>'; 
				break;
			case 	"Combat Casting" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	You get a +4 bonus on <a href="/srd/skills/concentration.htm">Concentration</a> checks made to cast a spell or use a <a href="/srd/specialAbilities.htm#spellLikeAbilities">spell-like ability</a> while on the defensive or while you are <a href="/srd/conditionSummary.htm#grappling">grappling</a> or <a href="/srd/conditionSummary.htm#pinned">pinned</a>.</p>'; 
				break;
			case 	"Combat Expertise" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>Int 13.</p><h5>Benefit</h5><p>When you use the attack action or the <a href="/srd/combat/actionsInCombat.htm#fullAttack">full attack</a> action in melee, you can take a penalty of as much as -5 on your <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> and add the same number (+5 or less) as a <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to your Armor Class. This number may not exceed your base attack bonus. The changes to attack rolls and Armor Class last until your next action.</p><h5>Normal</h5><p>A character without the Combat Expertise feat can <a href="/srd/combat/actionsInCombat.htm#fightingDefensivelyasaStandardAction">fight defensively</a> while using the attack or full attack action to take a -4 penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> and gain a +2 <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to Armor Class.</p><h5>Special</h5><p>A <a href="/srd/classes/fighter.htm">fighter</a> may select Combat Expertise as one of his fighter bonus feats.</p>'; 
				break;
			case 	"Improved Disarm" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#disarm">disarm</a> an opponent, nor does the opponent have a chance to disarm you. You also gain a +4 bonus on the opposed <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> you make to disarm your opponent.</p><h5>Normal</h5><p>	See the normal <a href="/srd/combat/specialAttacks.htm#disarm">disarm</a> rules.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Disarm as one of his fighter bonus feats.</p><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Improved Disarm as a bonus feat at 6th level, even if she does not meet the prerequisites.</p>'; 
				break;
			case 	"Improved Feint" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You can make a <a href="/srd/skills/bluff.htm">Bluff</a> check to <a href="/srd/combat/specialAttacks.htm#feint">feint</a> in combat as a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a>.</p><h5>Normal</h5><p>	<a href="/srd/combat/specialAttacks.htm#feint">Feinting</a> in combat is a <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a>.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Feint as one of his fighter bonus feats.</p>'; 
				break;
			case 	"Improved Trip" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#trip">trip</a> an opponent while you are unarmed. You also gain a +4 bonus on your Strength check to trip your opponent.</p><p>	If you trip an opponent in melee combat, you immediately get a melee attack against that opponent as if you hadn’t used your attack for the trip attempt.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#trip">trip</a> an opponent while you are unarmed.</p><h5>Special</h5><p>	At 6th level, a <a href="/srd/classes/monk.htm">monk</a> may select Improved Trip as a bonus feat, even if she does not have the prerequisites.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Trip as one of his fighter bonus feats.</p>'; 
				break;
			case 	"Whirlwind Attack" : 
				document.getElementById("featDisplayZone").innerHTML = '<a href="http://www.d20srd.org/srd/feats.htm" target="blank">NAME</a>'; 
				break;
			case 	"Combat Reflexes" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>You may make a number of additional <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> equal to your Dexterity bonus.</p><p>With this feat, you may also make <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> while <a href="/srd/conditionSummary.htm#flatFooted">flat-footed</a>.</p><h5>Normal</h5><p>A character without this feat can make only one <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> per round and can’t make attacks of opportunity while <a href="/srd/conditionSummary.htm#flatFooted">flat-footed</a>.</p><h5>Special</h5><p>The Combat Reflexes feat does not allow a <a href="/srd/classes/rogue.htm">rogue</a> to use her opportunist ability more than once per round.</p><p>A <a href="/srd/classes/fighter.htm">fighter</a> may select Combat Reflexes as one of his fighter bonus feats.</p><p>A <a href="/srd/classes/monk.htm">monk</a> may select Combat Reflexes as a bonus feat at 2nd level.</p>'; 
				break;
			case 	"Deceitful" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>You get a +2 bonus on all <a href="/srd/skills/disguise.htm">Disguise</a> checks and <a href="/srd/skills/forgery.htm">Forgery</a> checks.</p>'; 
				break;
			case 	"Deft Hands" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/sleightOfHand.htm">Sleight of Hand</a> checks and <a href="/srd/skills/useRope.htm">Use Rope</a> checks.</p>'; 
				break;
			case 	"Diligent" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/appraise.htm">Appraise</a> checks and <a href="/srd/skills/decipherScript.htm">Decipher Script</a> checks.</p>'; 
				break;
			case 	"Dodge" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	Dex 13.</p><h5>Benefit</h5><p>	During your action, you designate an opponent and receive a +1 <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to Armor Class against attacks from that opponent. You can select a new opponent on any action.</p><p>	A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose <a href="/srd/theBasics.htm#dodgeBonus">dodge bonuses</a>. Also, dodge bonuses stack with each other, unlike most other types of bonuses.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Dodge as one of his fighter bonus feats.</p>';
				break;
			case 	"-Mobility" : 
				var dex = document.getElementById("dexFull").value;
				if (dex >= 13) {
					document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#dodge">Dodge</a>.</p><h5>Benefit</h5><p>	You get a +4 <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to Armor Class against <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> caused when you move out of or within a threatened area. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses.</p><p>	<a href="/srd/theBasics.htm#dodgeBonus">Dodge bonuses</a> stack with each other, unlike most types of bonuses.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Mobility as one of his fighter bonus feats.</p>';
				} else {
					document.getElementById("featDisplayZone").innerHTML = 'Sorry, you need a Dex score of at least 13. Change your ability scores then select this feat again.';
				}
				break;
			case 	"--Spring Attack" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#dodge">Dodge</a>, <a href="#mobility">Mobility</a>, base attack bonus +4.</p><h5>Benefit</h5><p>	When using the attack action with a melee weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed. Moving in this way does not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> from the defender you attack, though it might provoke attacks of opportunity from other creatures, if appropriate. You can’t use this feat if you are wearing heavy armor.</p><p>	You must move at least 5 feet both before and after you make your attack in order to utilize the benefits of Spring Attack.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Spring Attack as one of his fighter bonus feats.</p>';
				break;
			case 	"Endurance" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You gain a +4 bonus on the following checks and saves: <a href="/srd/skills/swim.htm">Swim</a> checks made to resist <a href="/srd/combat/injuryandDeath.htm#nonlethalDamage">nonlethal damage</a>, Constitution checks made to continue running, Constitution checks made to avoid nonlethal damage from a forced march, Constitution checks made to hold your breath, Constitution checks made to avoid nonlethal damage from starvation or thirst, <a href="/srd/combat/combatStatistics.htm#fortitude">Fortitude saves</a> made to avoid nonlethal damage from hot or cold environments, and Fortitude saves made to resist damage from suffocation. Also, you may sleep in light or medium armor without becoming <a href="/srd/conditionSummary.htm#fatigued">fatigued</a>.</p><h5>Normal</h5><p>	A character without this feat who sleeps in medium or heavier armor is automatically fatigued the next day.</p><h5>Special</h5><p>	A <a href="/srd/classes/ranger.htm">ranger</a> automatically gains Endurance as a bonus feat at 3rd level. He need not select it.</p>';
				break;
			case 	"Eschew Materials" :
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You can cast any spell that has a material component costing 1 gp or less without needing that component. (The casting of the spell still provokes <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> as normal.) If the spell requires a material component that costs more than 1 gp, you must have the material component at hand to cast the spell, just as normal.</p>';
				break;
			case 	"Exotic Weapon Proficiency" : 
				document.getElementById("featDisplayZone").innherHTML = '<p>	Choose a type of <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">exotic weapon</a>. You understand how to use that type of exotic weapon in combat.</p><h5>Prerequisite</h5><p>	Base attack bonus +1 (plus Str 13 for <a href="/srd/equipment/weapons.htm#swordBastard">bastard sword</a> or <a href="/srd/equipment/weapons.htm#waraxeDwarven">dwarven waraxe</a>).</p><h5>Benefit</h5><p>	You make <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> with the weapon normally.</p><h5>Normal</h5><p>	A character who uses a weapon with which he or she is not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> takes a -4 penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>.</p><h5>Special</h5><p>	You can gain Exotic Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of exotic weapon. Proficiency with the bastard sword or the dwarven waraxe has an additional prerequisite of Str 13.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Exotic Weapon Proficiency as one of his fighter bonus feats.</p>';
				break;
			case 	"-Diehard" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="#endurance">Endurance</a>.</p><h5>Benefit</h5><p>	When reduced to between -1 and -9 hit points, you automatically become <a href="/srd/conditionSummary.htm#stable">stable</a>. You don’t have to roll to see if you lose 1 hit point each round.</p><p>	When reduced to negative hit points, you may choose to act as if you were <a href="/srd/conditionSummary.htm#disabled">disabled</a>, rather than <a href="/srd/conditionSummary.htm#dying">dying</a>. You must make this decision as soon as you are reduced to negative hit points (even if it isn’t your turn). If you do not choose to act as if you were disabled, you immediately fall <a href="/srd/conditionSummary.htm#unconscious">unconscious</a>.</p><p>	When using this feat, you can take either a single move or <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a> each turn, but not both, and you cannot take a full round action. You can take a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a> without further injuring yourself, but if you perform any standard action (or any other action deemed as strenuous, including some <a href="/srd/combat/actionsInCombat.htm#freeActions">free actions</a>, <a href="/srd/combat/actionsInCombat.htm#swiftActions">swift actions</a>, or <a href="/srd/combat/actionsInCombat.htm#immediateActions">immediate actions</a>, such as casting a <a href="#quickenSpell">quickened spell</a>) you take 1 point of damage after completing the act. If you reach -10 hit points, you immediately die.</p><h5>Normal</h5><p>	A character without this feat who is reduced to between -1 and -9 hit points is unconscious and <a href="/srd/conditionSummary.htm#dying">dying</a>.</p>';
				break;
			case 	"Extra Turning" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	Ability to turn or rebuke creatures.</p><h5>Benefit</h5><p>	Each time you take this feat, you can use your ability to turn or rebuke creatures four more times per day than normal.</p><p>	If you have the ability to turn or rebuke more than one kind of creature each of your turning or rebuking abilities gains four additional uses per day.</p><h5>Normal</h5><p>	Without this feat, a character can typically <a href="/srd/combat/specialAttacks.htm#turnOrRebukeUndead">turn or rebuke undead</a> (or other creatures) a number of times per day equal to 3 + his or her Charisma modifier.</p><h5>Special</h5><p>	You can gain Extra Turning multiple times. Its effects stack. Each time you take the feat, you can use each of your turning or rebuking abilities four additional times per day.</p>';
				break;
			case 	"Great Fortitude" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/combat/combatStatistics.htm#fortitude">Fortitude saving throws</a>.</p>';
				break;
			case 	"Improved Counterspell" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell.</p><h5>Normal</h5><p>	Without this feat, you may counter a spell only with the same spell or with a spell specifically designated as countering the target spell.</p>';
				break;
			case 	"Improved Critical" : 
				document.getElementById("featDisplayZone").innherHTML = '<p>	Choose one type of weapon.</p><h5>Prerequisite</h5><p>	Proficient with weapon, base attack bonus +8.</p><h5>Benefit</h5><p>	When using the weapon you selected, your threat range is doubled.</p><h5>Special</h5><p>	You can gain Improved Critical multiple times. The effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	This effect doesn’t stack with any other effect that expands the threat range of a weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Critical as one of his fighter bonus feats.</p>';
				break;
			case 	"Improved Familiar" : 
				document.getElementById("featDisplayZone").innherHTML = '<table id="tableImprovedFamiliarbyAlignment" cellspacing="0" class="right">	<caption>Table: Improved Familiar by Alignment</caption>	<tr>		<th align="left">Familiar</th>		<th align="left">Alignment</th>		<th>Arcane Spellcaster Level</th>	</tr><tr>		<td><a href="/srd/monsters/shockerLizard.htm">Shocker lizard</a></td>		<td>Neutral</td>		<td align="center">5th</td>	</tr>	<tr>		<td><a href="/srd/monsters/stirge.htm">Stirge</a></td>		<td>Neutral</td>		<td align="center">5th</td>	</tr>	<tr>		<td><a href="/srd/monsters/formian.htm#worker">Formian worker</a></td>		<td>Lawful neutral</td>		<td align="center">7th</td>	</tr>	<tr>		<td><a href="/srd/monsters/devil.htm#imp">Imp</a></td>		<td>Lawful evil</td>		<td align="center">7th</td>	</tr>	<tr>		<td><a href="/srd/monsters/pseudodragon.htm">Pseudodragon</a></td>		<td>Neutral good</td>		<td align="center">7th</td>	</tr>	<tr>		<td><a href="/srd/monsters/demon.htm#quasit">Quasit</a></td>		<td>Chaotic evil</td>		<td align="center">7th</td>	</tr></table><table id="tableImprovedFamiliarbyTypeSubtype" cellspacing="0" class="right">	<caption>Table: Improved Familiar by Masters Type/Subtype</caption>	<thead>		<tr>			<th align="left">Familiar</th>			<th>Masters<br />Type/Subtype</th>			<th>Arcane<br />Spellcaster<br />Level</th>		</tr>	</thead>	<tfoot>		<tr>			<td colspan="3">				<ol>					<li>Or other <a href="/srd/monsters/celestialCreature.htm">celestial</a> animal from the standard familiar list.</li>					<li>Or other <a href="/srd/monsters/fiendishCreature.htm">fiendish</a> animal from the standard familiar list.</li>					<li>The master must first create the <a href="/srd/monsters/homunculus.htm">homunculus</a>, substituting ichor or another part of the master’s body for blood if necessary.</li>				</ol>			</td>		</tr>	</tfoot>	<tbody>		<tr>			<td><a href="/srd/monsters/celestialCreature.htm">Celestial</a> <a href="/srd/monsters/hawk.htm">hawk</a><sup>1</sup></td>			<td align="center"><a href="/srd/typesSubtypes.htm#goodSubtype">Good</a></td>			<td align="center">3rd</td>		</tr>		<tr>			<td><a href="/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="/srd/monsters/snake.htm#viperSnake">Tiny viper snake</a><sup>2</sup></td>			<td align="center"><a href="/srd/typesSubtypes.htm#evilSubtype">Evil</a></td>			<td align="center">3rd</td>		</tr>		<tr>			<td><a href="/srd/monsters/elemental.htm#airElemental">Air elemental</a>, Small</td>			<td align="center"><a href="/srd/typesSubtypes.htm#airSubtype">Air</a></td>			<td align="center">5th</td>		</tr>		<tr>			<td><a href="/srd/monsters/elemental.htm#earthElemental">Earth elemental</a>, Small</td>			<td align="center"><a href="/srd/typesSubtypes.htm#earthSubtype">Earth</a></td>			<td align="center">5th</td>		</tr>		<tr>			<td><a href="/srd/monsters/elemental.htm#fireElemental">Fire elemental</a>, Small</td>			<td align="center"><a href="/srd/typesSubtypes.htm#fireSubtype">Fire</a></td>			<td align="center">5th</td>		</tr>		<tr>			<td><a href="/srd/monsters/shockerLizard.htm">Shocker lizard</a></td>			<td align="center">Electricity</td>			<td align="center">5th</td>		</tr>		<tr>			<td><a href="/srd/monsters/elemental.htm#waterElemental">Water elemental</a>, Small</td>			<td align="center"><a href="/srd/typesSubtypes.htm#waterSubtype">Water</a></td>			<td align="center">5th</td>		</tr>		<tr>			<td><a href="/srd/monsters/homunculus.htm">Homunculus</a><sup>3</sup></td>			<td align="center"><a href="/srd/typesSubtypes.htm#undeadType">Undead</a></td>			<td align="center">7th</td>		</tr>		<tr>			<td><a href="/srd/monsters/mephit.htm#iceMephit">Ice mephit</a></td>			<td align="center"><a href="/srd/typesSubtypes.htm#coldSubtype">Cold</a></td>			<td align="center">7th</td>		</tr>	</tbody></table><h3 id="improvedFamiliar">Improved Familiar [General]</h3><p>	This feat allows spellcasters to acquire a new <a href="/srd/classes/sorcererWizard.htm#familiars">familiar</a> from a nonstandard list, but only when they could normally acquire a new familiar.</p><h5>Prerequisites</h5><p>	Ability to acquire a new familiar, compatible <a href="/srd/description.htm#alignment">alignment</a>, sufficiently high level (see below).</p><h5>Benefit</h5><p>	When choosing a <a href="/srd/classes/sorcererWizard.htm#familiars">familiar</a>, the creatures listed below are also available to the spellcaster. The spellcaster may choose a familiar with an <a href="/srd/description.htm#alignment">alignment</a> up to one step away on each of the alignment axes (lawful through chaotic, good through evil).</p><p>	Improved familiars otherwise use the rules for regular familiars, with two exceptions: If the creature’s type is something other than animal, its type does not change; and improved familiars do not gain the ability to speak with other creatures of their kind (although many of them already have the ability to communicate).</p><p>	The list in <a href="#tableImprovedFamiliarbyAlignment">Table: Improved Familiar by Alignment</a> presents only a few possible improved familiars. Almost any creature of the same general size and power as those on the list makes a suitable familiar. Nor is the master’s <a href="/srd/description.htm#alignment">alignment</a> the only possible categorization. For instance, improved familiars could be assigned by the master’s creature type or subtype, as shown in <a href="#tableImprovedFamiliarbyTypeSubtype">Table: Improved Familiar by Type/Subtype</a>.</p>';
				break;
			case 	"Improved Initiative" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +4 bonus on initiative checks.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Initiative as one of his fighter bonus feats.</p>';
				break;
			case 	"Improved Turning" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	Ability to turn or rebuke creatures.</p><h5>Benefit</h5><p>	You turn or rebuke creatures as if you were one level higher than you are in the class that grants you the ability.</p>';
				break;
			case 	"Improved Unarmed Strike" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You are considered to be armed even when unarmed —that is, you do not provoke attacks or opportunity from armed opponents when you attack them while unarmed. However, you still get an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> against any opponent who makes an unarmed attack on you.</p><p>	In addition, your <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strikes</a> can deal lethal or <a href="/srd/combat/injuryandDeath.htm#nonlethalDamage">nonlethal damage</a>, at your option.</p><h5>Normal</h5><p>	Without this feat, you are considered unarmed when attacking with an <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a>, and you can deal only <a href="/srd/combat/injuryandDeath.htm#nonlethalDamage">nonlethal damage</a> with such an attack.</p><h5>Special</h5><p>	A <a href="/srd/classes/monk.htm">monk</a> automatically gains Improved Unarmed Strike as a bonus feat at 1st level. She need not select it.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Unarmed Strike as one of his fighter bonus feats.</p>';
				break;
			case 	"-Deflect Arrows" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#improvedUnarmedStrike">Improved Unarmed Strike</a>.</p><h5>Benefit</h5><p>	You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not <a href="/srd/conditionSummary.htm#flatFooted">flat-footed</a>.</p><p>	Attempting to deflect a ranged weapon doesn’t count as an action. Unusually massive ranged weapons and ranged attacks generated by spell effects can’t be deflected.</p><h5>Special</h5><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Deflect Arrows as a bonus feat at 2nd level, even if she does not meet the prerequisites.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Deflect Arrows as one of his fighter bonus feats.</p>';
				break;
			case 	"-Improved Grapple" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#improvedUnarmedStrike">Improved Unarmed Strike</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you make a <a href="/srd/combat/combatStatistics.htm#touchAttacks">touch attack</a> to start a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a>. You also gain a +4 bonus on all <a href="/srd/combat/specialAttacks.htm#grappleChecks">grapple checks</a>, regardless of whether you started the grapple.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you make a <a href="/srd/combat/combatStatistics.htm#touchAttacks">touch attack</a> to start a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a>.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Grapple as one of his fighter bonus feats.</p><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Improved Grapple as a bonus feat at 1st level, even if she does not meet the prerequisites.</p>';
				break;
			case 	"-Snatch Arrows" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 15, <a href="#deflectArrows">Deflect Arrows</a>, <a href="#improvedUnarmedStrike">Improved Unarmed Strike</a>.</p><h5>Benefit</h5><p>	When using the <a href="#deflectArrows">Deflect Arrows</a> feat you may catch the weapon instead of just deflecting it. <a href="/srd/equipment/weapons.htm#thrownWeapons">Thrown weapons</a> can immediately be thrown back at the original attacker (even though it isn’t your turn) or kept for later use.</p><p>	You must have at least one hand free (holding nothing) to use this feat.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Snatch Arrows as one of his fighter bonus feats.</p>';
				break;
			case 	"-Stunning Fist" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 13, Wis 13, <a href="#improvedUnarmedStrike">Improved Unarmed Strike</a>, base attack bonus +8.</p><h5>Benefit</h5><p>	You must declare that you are using this feat before you make your <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> (thus, a failed attack roll ruins the attempt). Stunning Fist forces a foe damaged by your unarmed attack to make a <a href="/srd/combat/combatStatistics.htm#fortitude">Fortitude saving throw</a> (DC 10 + &frac12; your character level + your Wis modifier), in addition to dealing damage normally. A defender who fails this saving throw is <a href="/srd/conditionSummary.htm#stunned">stunned</a> for 1 round (until just before your next action).  A stunned creature drops everything held, can’t take actions, takes a -2 penalty to AC, and loses his Dexterity bonus to AC. You may attempt a stunning attack once per day for every four levels you have attained (but see Special), and no more than once per round. <a href="/srd/typesSubtypes.htm#constructType">Constructs</a>, <a href="/srd/typesSubtypes.htm#oozeType">oozes</a>, <a href="/srd/typesSubtypes.htm#plantType">plants</a>, <a href="/srd/typesSubtypes.htm#undeadType">undead</a>, <a href="/srd/typesSubtypes.htm#incorporealSubtype">incorporeal creatures</a>, and creatures immune to <a href="/srd/combat/actionsInCombat.htm#criticalHits">critical hits</a> cannot be stunned.</p><h5>Special</h5><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Stunning Fist as a bonus feat at 1st level, even if she does not meet the prerequisites. A monk who selects this feat may attempt a stunning attack a number of times per day equal to her monk level, plus one more time per day for every four levels she has in classes other than monk.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Stunning Fist as one of his fighter bonus feats.</p>';
				break;
			case 	"Investigator" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/gatherInformation.htm">Gather Information</a> checks and <a href="/srd/skills/search.htm">Search</a> checks.</p>';
				break;
			case 	"Iron Will" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/combat/combatStatistics.htm#reflex">Will saving throws</a>.</p>';
				break;
			case 	"Leadership" : 
				document.getElementById("featDisplayZone").innherHTML = '<table id="tableLeadership" cellspacing="0" class="right">	<caption>Table: Leadership</caption>	<tr>		<th rowspan="2">Leadership<br />Score</th>		<th rowspan="2">Cohort<br />Level</th>		<th colspan="6">Number of Followers by Level</th>	</tr>	<tr>		<th>1st</th>		<th>2nd</th>		<th>3rd</th>		<th>4th</th>		<th>5th</th>		<th>6th</th>	</tr>	<tr>		<td align="center">1 or lower</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">2</td>		<td align="center">1st</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">3</td>		<td align="center">2nd</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">4</td>		<td align="center">3rd</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">5</td>		<td align="center">3rd</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">6</td>		<td align="center">4th</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">7</td>		<td align="center">5th</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">8</td>		<td align="center">5th</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">9</td>		<td align="center">6th</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">10</td>		<td align="center">7th</td>		<td align="center">5</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">11</td>		<td align="center">7th</td>		<td align="center">6</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr><tr>		<td align="center">12</td>		<td align="center">8th</td>		<td align="center">8</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">13</td>		<td align="center">9th</td>		<td align="center">10</td>		<td align="center">1</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">14</td>		<td align="center">10th</td>		<td align="center">15</td>		<td align="center">1</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">15</td>		<td align="center">10th</td>		<td align="center">20</td>		<td align="center">2</td>		<td align="center">1</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">16</td>		<td align="center">11th</td>		<td align="center">25</td>		<td align="center">2</td>		<td align="center">1</td>		<td align="center">—</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">17</td>		<td align="center">12th</td>		<td align="center">30</td>		<td align="center">3</td>		<td align="center">1</td>		<td align="center">1</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">18</td>		<td align="center">12th</td>		<td align="center">35</td>		<td align="center">3</td>		<td align="center">1</td>		<td align="center">1</td>		<td align="center">—</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">19</td>		<td align="center">13th</td>		<td align="center">40</td>		<td align="center">4</td>		<td align="center">2</td>		<td align="center">1</td>		<td align="center">1</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">20</td>		<td align="center">14th</td>		<td align="center">50</td>		<td align="center">5</td>		<td align="center">3</td>		<td align="center">2</td>		<td align="center">1</td>		<td align="center">—</td>	</tr>	<tr>		<td align="center">21</td>		<td align="center">15th</td>		<td align="center">60</td>		<td align="center">6</td>		<td align="center">3</td>		<td align="center">2</td>		<td align="center">1</td>		<td align="center">1</td>	</tr>	<tr>		<td align="center">22</td>		<td align="center">15th</td>		<td align="center">75</td>		<td align="center">7</td>		<td align="center">4</td>		<td align="center">2</td>		<td align="center">2</td>		<td align="center">1</td>	</tr>	<tr>		<td align="center">23</td>		<td align="center">16th</td>		<td align="center">90</td>		<td align="center">9</td>		<td align="center">5</td>		<td align="center">3</td>		<td align="center">2</td>		<td align="center">1</td>	</tr>	<tr>		<td align="center">24</td>		<td align="center">17th</td>		<td align="center">110</td>		<td align="center">11</td>		<td align="center">6</td>		<td align="center">3</td>		<td align="center">2</td>		<td align="center">1</td>	</tr>	<tr>		<td align="center">25 or higher</td>		<td align="center">17th</td>		<td align="center">135</td>		<td align="center">13</td>		<td align="center">7</td>		<td align="center">4</td>		<td align="center">2</td>		<td align="center">2</td>	</tr></table><table id="tableReputation" cellspacing="0" class="right">	<caption>Table: Reputation</caption>	<tr>		<th align="left">Leader’s Reputation</th>		<th>Modifier</th>	</tr>	<tr>		<td>Great renown</td>		<td align="center">+2</td>	</tr>	<tr>		<td>Fairness and generosity</td>		<td align="center">+1</td>	</tr>	<tr>		<td>Special power</td>		<td align="center">+1</td>	</tr>	<tr>		<td>Failure</td>		<td align="center">-1</td>	</tr>	<tr>		<td>Aloofness</td>		<td align="center">-1</td>	</tr>	<tr>		<td>Cruelty</td>		<td align="center">-2</td>	</tr></table><table id="tableAttractingCohorts" cellspacing="0" class="right">	<caption>Table: Attracting Cohorts</caption>	<thead>		<tr>			<th align="left">The Leader…</th>			<th>Modifier</th>		</tr>	</thead>	<tfoot>		<tr>			<td colspan="2">				* Cumulative per cohort killed.			</td>		</tr>	</tfoot>	<tbody>		<tr>			<td>Has a <a href="/srd/classes/sorcererWizard.htm#familiars">familiar</a>, special mount, or animal companion</td>			<td align="center">-2</td>		</tr>		<tr>			<td>Recruits a cohort of a different alignment</td>			<td align="center">-1</td>		</tr>		<tr>			<td>Caused the death of a cohort</td>			<td align="center">-2*</td>		</tr>	</tbody></table><table id="tableAttractingFollowers" cellspacing="0" class="right">	<caption>Table: Attracting Followers</caption>	<tr>		<th align="left">The Leader…</th>		<th>Modifier</th>	</tr>	<tr>		<td>Has a stronghold, base of operations, guildhouse, or the like</td>		<td align="center">+2</td>	</tr>	<tr>		<td>Moves around a lot</td>		<td align="center">-1</td>	</tr>	<tr>		<td>Caused the death of other followers</td>		<td align="center">-1</td>	</tr></table><h5>Prerequisite</h5><p>	Character level 6th.</p><h5 id="benefits">Benefits</h5><p>	Having this feat enables the character to attract loyal companions and devoted followers, subordinates who assist her. See the table below for what sort of cohort and how many followers the character can recruit.</p><h5 id="leadershipScore">Leadership Score</h5><p>	A character’s base Leadership score equals his level plus any Charisma modifier. In order to take into account negative Charisma modifiers, this table allows for very low Leadership scores, but the character must still be 6th level or higher in order to gain the Leadership feat. Outside factors can affect a character’s Leadership score, as detailed above.</p><h5 id="cohortLevel">Cohort Level</h5><p>	The character can attract a cohort of up to this level. Regardless of a character’s Leadership score, he can only recruit a cohort who is two or more levels lower than himself. The cohort should be equipped with gear appropriate for its level. A character can try to attract a cohort of a particular race, class, and <a href="/srd/description.htm#alignment">alignment</a>. The cohort’s alignment may not be opposed to the leader’s alignment on either the law-vs-chaos or good-vs-evil axis, and the leader takes a Leadership penalty if he recruits a cohort of an alignment different from his own.</p><p>	Cohorts earn XP as follows:</p><p>	The cohort does not count as a party member when determining the party’s XP.</p><p>	Divide the cohort’s level by the level of the PC with whom he or she is associated (the character with the Leadership feat who attracted the cohort).</p><p>	Multiply this result by the total XP awarded to the PC and add that number of experience points to the cohort’s total.</p><p>	If a cohort gains enough XP to bring it to a level one lower than the associated PC’s character level, the cohort does not gain the new level—its new XP total is 1 less than the amount needed attain the next level.</p><h5 id="numberofFollowersbyLevel">Number of Followers by Level</h5><p>	The character can lead up to the indicated number of characters of each level. Followers are similar to cohorts, except they’re generally low-level NPCs. Because they’re generally five or more levels behind the character they follow, they’re rarely effective in combat.</p><p>	Followers don’t earn experience and thus don’t gain levels. However, when a character with Leadership attains a new level, the player consults the table above to determine if she has acquired more followers, some of which may be higher level than the existing followers. (You don’t consult the table to see if your cohort gains levels, however, because cohorts earn experience on their own.)</p><h5 id="leadershipModifiers">Leadership Modifiers</h5><p>	Several factors can affect a character’s Leadership score, causing it to vary from the base score (character level + Cha modifier). A character’s reputation (from the point of view of the cohort or follower he is trying to attract) raises or lowers his Leadership score, see <a href="#tableReputation">Table: Reputation</a>.</p><p>	Other modifiers may apply when the character tries to attract a cohort, see <a href="#tableAttractingCohorts">Table: Attracting Cohorts</a>.</p><p>	Followers have different priorities from cohorts. When the character tries to attract a new follower, use any of the modifiers that apply on <a href="#tableAttractingFollowers">Table: Attracting Followers</a>.</p>';
				break;
			case 	"Lightning Reflexes" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/combat/combatStatistics.htm#reflex">Reflex saving throws</a>.</p>';
				break;
			case 	"Magical Aptitude" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/spellcraft.htm">Spellcraft</a> checks and <a href="/srd/skills/useMagicDevice.htm">Use Magic Device</a> checks.</p>';
				break;
			case 	"Martial Weapon Proficiency" : 
				document.getElementById("featDisplayZone").innherHTML = '<p>	Choose a type of <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">martial weapon</a>. You understand how to use that type of martial weapon in combat.</p><h5>Benefit</h5><p>	You make <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> with the selected weapon normally.</p><h5>Normal</h5><p>	When using a weapon with which you are not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a>, you take a -4 penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>.</p><h5>Special</h5><p>	<a href="/srd/classes/barbarian.htm">Barbarians</a>, <a href="/srd/classes/fighter.htm">fighters</a>, <a href="/srd/classes/paladin.htm">paladins</a>, and <a href="/srd/classes/ranger.htm">rangers</a> are <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with all <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">martial weapons</a>. They need not select this feat.</p><p>	You can gain Martial Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/cleric.htm">cleric</a> who chooses the War domain automatically gains the Martial Weapon Proficiency feat related to his deity’s favored weapon as a bonus feat, if the weapon is a martial one. He need not select it.</p>';
				break;
			case 	"Mounted Combat" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank.</p><h5>Benefit</h5><p>	Once per round when your mount is hit in combat, you may attempt a <a href="/srd/skills/ride.htm">Ride</a> check (as a reaction) to negate the hit. The hit is negated if your <a href="/srd/skills/ride.htm">Ride</a> check result is greater than the opponent’s <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a>. (Essentially, the <a href="/srd/skills/ride.htm">Ride</a> check result becomes the mount’s Armor Class if it’s higher than the mount’s regular AC.)</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Mounted Combat as one of his fighter bonus feats.</p>';
				break;
			case 	"-Mounted Archery" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank, <a href="#mountedCombat">Mounted Combat</a>.</p><h5>Benefit</h5><p>	The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Mounted Archery as one of his fighter bonus feats.</p>';
				break;
			case 	"-Ride-By Attack" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank, <a href="#mountedCombat">Mounted Combat</a>.</p><h5>Benefit</h5><p>	When you are mounted and use the <a href="/srd/combat/specialAttacks.htm#charge">charge</a> action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can’t exceed double your mounted speed. You and your mount do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> from the opponent that you attack.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Ride-By Attack as one of his fighter bonus feats.</p>';
				break;
			case 	"--Spirited Charge" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank, <a href="#mountedCombat">Mounted Combat</a>, <a href="#rideByAttack">Ride-By Attack</a>.</p><h5>Benefit</h5><p>	When mounted and using the <a href="/srd/combat/specialAttacks.htm#charge">charge</a> action, you deal double damage with a melee weapon (or triple damage with a <a href="/srd/equipment/weapons.htm#lance">lance</a>).</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Spirited Charge as one of his fighter bonus feats.</p>';
				break;
			case 	"-Trample" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank, <a href="#mountedCombat">Mounted Combat</a>.</p><h5>Benefit</h5><p>	When you attempt to <a href="/srd/combat/specialAttacks.htm#overrun">overrun</a> an opponent while mounted, your target may not choose to avoid you. Your mount may make one hoof attack against any target you knock down, gaining the standard +4 bonus on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> against <a href="/srd/conditionSummary.htm#prone">prone</a> targets.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Trample as one of his fighter bonus feats.</p>';
				break;
			case 	"Natural Spell" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Wis 13, wild shape ability.</p><h5>Benefit</h5><p>	You can complete the verbal and somatic components of spells while in a wild shape. You substitute various noises and gestures for the normal verbal and somatic components of a spell.</p><p>	You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while in a wild shape.</p>';
				break;
			case 	"Negotiator" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/diplomacy.htm">Diplomacy</a> checks and <a href="/srd/skills/senseMotive.htm">Sense Motive</a> checks.</p>';
				break;
			case 	"Nimble Fingers" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/disableDevice.htm">Disable Device</a> checks and <a href="/srd/skills/openLock.htm">Open Lock</a> checks.</p>';
				break;
			case 	"Persuasive" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/bluff.htm">Bluff</a> checks and <a href="/srd/skills/intimidate.htm">Intimidate</a> checks.</p>';
				break;
			case 	"Point Blank Shot" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Point Blank Shot as one of his fighter bonus feats.</p>';
				break;
			case 	"-Far Shot" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="#pointBlankShot">Point Blank Shot</a>.</p><h5>Benefit</h5><p>	When you use a <a href="/srd/equipment/weapons.htm#projectileWeapons">projectile weapon</a>, such as a bow, its range increment increases by one-half (multiply by 1&frac12;). When you use a <a href="/srd/equipment/weapons.htm#thrownWeapons">thrown weapon</a>, its range increment is doubled.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Far Shot as one of his fighter bonus feats.</p>';
				break;
			case 	"-Precise Shot" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="#pointBlankShot">Point Blank Shot</a>.</p><h5>Benefit</h5><p>	You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard -4 penalty on your <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a>.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Precise Shot as one of his fighter bonus feats.</p>';
				break;
			case 	"--Improved Precise Shot" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 19, <a href="#pointBlankShot">Point Blank Shot</a>, <a href="#preciseShot">Precise Shot</a>, base attack bonus +11.</p><h5>Benefit</h5><p>	Your ranged attacks ignore the AC bonus granted to targets by anything less than <a href="/srd/combat/combatModifiers.htm#totalCover">total cover</a>, and the miss chance granted to targets by anything less than <a href="/srd/combat/combatModifiers.htm#totalConcealment">total concealment</a>. Total cover and total concealment provide their normal benefits against your ranged attacks.</p><p>	In addition, when you shoot or throw ranged weapons at a <a href="/srd/conditionSummary.htm#grappling">grappling</a> opponent, you automatically strike at the opponent you have chosen.</p><h5>Normal</h5><p>	See the normal rules on the effects of <a href="/srd/combat/combatModifiers.htm#cover">cover</a> and <a href="/srd/combat/combatModifiers.htm#concealment">concealment</a>. Without this feat, a character who shoots or throws a ranged weapon at a target involved in a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> must roll randomly to see which grappling combatant the attack strikes.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Precise Shot as one of his fighter bonus feats.</p><p>	An 11th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the archery combat style is treated as having Improved Precise Shot, even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
				break;
			case 	"-Rapid Shot" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#pointBlankShot">Point Blank Shot</a>.</p><h5>Benefit</h5><p>You can get one extra attack per round with a ranged weapon. The attack is at your highest base attack bonus, but each attack you make in that round (the extra one and the normal ones) takes a -2 penalty. You must use the <a href="/srd/combat/actionsInCombat.htm#fullAttack">full attack</a> action to use this feat.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Rapid Shot as one of his fighter bonus feats.</p><p>	A 2nd-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the archery combat style is treated as having Rapid Shot, even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
				break;
			case 	"--Manyshot" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 17, <a href="#pointBlankShot">Point Blank Shot</a>, <a href="#rapidShot">Rapid Shot</a>, base attack bonus +6</p><h5>Benefit</h5><p>As a <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a>, you may fire two arrows at a single opponent within 30 feet. Both arrows use the same <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> (with a -4 penalty) to determine success and deal damage normally (but see Special).</p><p>	For every five points of base attack bonus you have above +6, you may add one additional arrow to this attack, to a maximum of four arrows at a base attack bonus of +16. However, each arrow after the second adds a cumulative -2 penalty on the <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> (for a total penalty of -6 for three arrows and -8 for four).</p><p>	<a href="/srd/specialAbilities.htm#damageReduction">Damage reduction</a> and other resistances apply separately against each arrow fired.</p><h5>Special</h5><p>	Regardless of the number of arrows you fire, you apply precision-based damage only once. If you score a <a href="/srd/combat/actionsInCombat.htm#criticalHits">critical hit</a>, only the first arrow fired deals critical damage; all others deal regular damage.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Manyshot as one of his fighter bonus feats.</p><p>	A 6th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the archery combat style is treated as having Manyshot even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
				break;
			case 	"-Shot On The Run" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#dodge">Dodge</a>, <a href="#mobility">Mobility</a>, <a href="#pointBlankShot">Point Blank Shot</a>, base attack bonus +4.</p><h5>Benefit</h5><p>	When using the attack action with a ranged weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Shot on the Run as one of his fighter bonus feats.</p>';
				break;
			case 	"Power Attack" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	Str 13.</p><h5>Benefit</h5><p>	On your action, before making <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> for a round, you may choose to subtract a number from all melee attack rolls and add the same number to all melee damage rolls. This number may not exceed your base attack bonus. The penalty on attacks and bonus on damage apply until your next turn.</p><h5>Special</h5><p>	If you attack with a two-handed weapon, or with a one-handed weapon wielded in two hands, instead add twice the number subtracted from your <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>. You can’t add the bonus from Power Attack to the damage dealt with a light weapon (except with <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strikes</a> or <a href="/srd/specialAbilities.htm#naturalWeapons">natural weapon</a> attacks), even though the penalty on attack rolls still applies. (Normally, you treat a <a href="/srd/equipment/weapons.htm#doubleWeapons">double weapon</a> as a one-handed weapon and a light weapon. If you choose to use a double weapon like a two-handed weapon, attacking with only one end of it in a round, you treat it as a two-handed weapon.)</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Power Attack as one of his fighter bonus feats.</p>';
				break;
			case 	"-Cleave" : 
				document.getElementById("featDisplayZone").innherHTML = 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	If you deal a creature enough damage to make it drop (typically by dropping it to below 0 hit points or killing it), you get an immediate, extra melee attack against another creature within reach. You cannot take a 5-foot step before making this extra attack. The extra attack is with the same weapon and at the same bonus as the attack that dropped the previous creature. You can use this ability once per round.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Cleave as one of his fighter bonus feats.</p>';
				break;
			case 	"--Great Cleave" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#cleave">Cleave</a>, <a href="#powerAttack">Power Attack</a>, base attack bonus +4.</p><h5>Benefit</h5><p>	This feat works like <a href="#cleave">Cleave</a>, except that there is no limit to the number of times you can use it per round.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Great Cleave as one of his fighter bonus feats.</p>';
				break;
			case 	"-Improved Bull Rush" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you perform a <a href="/srd/combat/specialAttacks.htm#bullRush">bull rush</a> you do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> from the defender. You also gain a +4 bonus on the opposed Strength check you make to push back the defender.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Bull Rush as one of his fighter bonus feats.</p>';
				break;
			case 	"-Improved Overrun" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you attempt to <a href="/srd/combat/specialAttacks.htm#overrun">overrun</a> an opponent, the target may not choose to avoid you. You also gain a +4 bonus on your Strength check to knock down your opponent.</p><h5>Normal</h5><p>	Without this feat, the target of an <a href="/srd/combat/specialAttacks.htm#overrun">overrun</a> can choose to avoid you or to block you.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Overrun as one of his fighter bonus feats.</p>';
				break;
			case 	"-Improved Sunder" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you <a href="/srd/combat/specialAttacks.htm#sunder">strike at an object held or carried by an opponent</a> (such as a weapon or shield), you do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a>.</p><p>	You also gain a +4 bonus on any <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> made to attack an object held or carried by another character.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you strike at an object held or carried by another character.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Sunder as one of his fighter bonus feats.</p>';
				break;
			case 	"Quick Draw" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	Base attack bonus +1.</p><h5>Benefit</h5><p>	You can draw a weapon as a <a href="/srd/combat/actionsInCombat.htm#freeActions">free action</a> instead of as a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a>. You can draw a hidden weapon (see the <a href="/srd/skills/sleightOfHand.htm">Sleight of Hand</a> skill) as a move action.</p><p>	A character who has selected this feat may throw weapons at his full normal rate of attacks (much like a character with a bow).</p><h5>Normal</h5><p>	Without this feat, you may draw a weapon as a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a>, or (if your base attack bonus is +1 or higher) as a <a href="/srd/combat/actionsInCombat.htm#freeActions">free action</a> as part of movement. Without this feat, you can draw a hidden weapon as a <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a>.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Quick Draw as one of his fighter bonus feats.</p>';
				break;
			case 	"Rapid Reload" : 
				document.getElementById("featDisplayZone").innherHTML = '<p>	Choose a type of crossbow (hand, light, or heavy).</p><h5>Prerequisite</h5><p>	Weapon Proficiency (crossbow type chosen).</p><h5>Benefit</h5><p>	The time required for you to reload your chosen type of crossbow is reduced to a <a href="/srd/combat/actionsInCombat.htm#freeActions">free action</a> (for a <a href="/srd/equipment/weapons.htm#crossbowHand">hand</a> or <a href="/srd/equipment/weapons.htm#crossbowLight">light crossbow</a>) or a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a> (for a <a href="/srd/equipment/weapons.htm#crossbowHeavy">heavy crossbow</a>). Reloading a crossbow still provokes an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a>.</p><p>	If you have selected this feat for hand crossbow or light crossbow, you may fire that weapon as many times in a <a href="/srd/combat/actionsInCombat.htm#fullAttack">full attack</a> action as you could attack if you were using a bow.</p><h5>Normal</h5><p>	A character without this feat needs a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a> to reload a hand or light crossbow, or a <a href="/srd/combat/actionsInCombat.htm#fullRoundActions">full-round action</a> to reload a heavy crossbow.</p><h5>Special</h5><p>	You can gain Rapid Reload multiple times. Each time you take the feat, it applies to a new type of crossbow.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Rapid Reload as one of his fighter bonus feats.</p>';
				break;
			case 	"Run" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	When running, you move five times your normal speed (if wearing medium, light, or no armor and carrying no more than a medium load) or four times your speed (if wearing heavy armor or carrying a heavy load). If you make a jump after a running start (see the <a href="/srd/skills/jump.htm">Jump</a> skill description), you gain a +4 bonus on your <a href="/srd/skills/jump.htm">Jump</a> check. While running, you retain your Dexterity bonus to AC.</p><h5>Normal</h5><p>	You move four times your speed while running (if wearing medium, light, or no armor and carrying no more than a medium load) or three times your speed (if wearing heavy armor or carrying a heavy load), and you lose your Dexterity bonus to AC.</p>';
				break;
			case 	"Self-Sufficient" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/heal.htm">Heal</a> checks and <a href="/srd/skills/survival.htm">Survival</a> checks.</p>';
				break;
			case 	"Shield Proficiency" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You can use a shield and take only the standard penalties.</p><h5>Normal</h5><p>	When you are using a shield with which you are not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a>, you take the shield’s armor check penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> and on all <a href="/srd/skills/usingSkills.htm#skillChecks">skill checks</a> that involve moving, including <a href="/srd/skills/ride.htm">Ride</a> checks.</p><h5>Special</h5><p>	<a href="/srd/classes/barbarian.htm">Barbarians</a>, <a href="/srd/classes/bard.htm">bards</a>, <a href="/srd/classes/cleric.htm">clerics</a>, <a href="/srd/classes/druid.htm">druids</a>, <a href="/srd/classes/fighter.htm">fighters</a>, <a href="/srd/classes/paladin.htm">paladins</a>, and <a href="/srd/classes/ranger.htm">rangers</a> automatically have Shield Proficiency as a bonus feat. They need not select it.</p>';
				break;
			case 	"-Improved Shield Bash" :
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="#shieldProficiency">Shield Proficiency</a>.</p><h5>Benefit</h5><p>	When you perform a <a href="/srd/combat/specialAttacks.htm#shieldBashAttacks">shield bash</a>, you may still apply the shield’s <a href="/srd/theBasics.htm#shieldBonus">shield bonus</a> to your AC.</p><h5>Normal</h5><p>	Without this feat, a character who performs a <a href="/srd/combat/specialAttacks.htm#shieldBashAttacks">shield bash</a> loses the shield’s <a href="/srd/theBasics.htm#shieldBonus">shield bonus</a> to AC until his or her next turn.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Shield Bash as one of his fighter bonus feats';
				break;
			case 	"-Tower Shield Proficiency" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="#shieldProficiency">Shield Proficiency</a>.</p><h5>Benefit</h5><p>	You can use a tower shield and suffer only the standard penalties.</p><h5>Normal</h5><p>	A character who is using a shield with which he or she is not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> takes the shield’s armor check penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> and on all <a href="/srd/skills/usingSkills.htm#skillChecks">skill checks</a> that involve moving, including <a href="/srd/skills/ride.htm">Ride</a>.</p><h5>Special</h5><p>	<a href="/srd/classes/fighter.htm">Fighters</a> automatically have Tower Shield Proficiency as a bonus feat. They need not select it.</p>';
				break;
			case 	"Simple Weapon Proficiency" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You make <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> with <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">simple weapons</a> normally.</p><h5>Normal</h5><p>	When using a weapon with which you are not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a>, you take a -4 penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>.</p><h5>Special</h5><p>	All characters except for <a href="/srd/classes/druid.htm">druids</a>, <a href="/srd/classes/monk.htm">monks</a>, and <a href="/srd/classes/sorcererWizard.htm#wizard">wizards</a> are automatically <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with all <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">simple weapons</a>. They need not select this feat.</p>';
				break;
			case 	"Skill Focus" : 
				document.getElementById("featDisplayZone").innherHTML = '<p>	Choose a skill.</p><h5>Benefit</h5><p>	You get a +3 bonus on all checks involving that skill.</p><h5>Special</h5><p>	You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new skill.</p>';
				break;
			case 	"Spell Focus" : 
				document.getElementById("featDisplayZone").innherHTML = '<p>	Choose a school of magic.</p><h5>Benefit</h5><p>	Add +1 to the Difficulty Class for all <a href="/srd/combat/combatStatistics.htm#savingThrows">saving throws</a> against spells from the school of magic you select.</p><h5>Special</h5><p>You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic.</p>';
				break;
			case 	"-Greater Spell Focus" : 
				document.getElementById("featDisplayZone").innherHTML = '<p>	Choose a school of magic to which you already have applied the <a href="#spellFocus">Spell Focus</a> feat.</p><h5>Benefit</h5><p>	Add +1 to the Difficulty Class for all <a href="/srd/combat/combatStatistics.htm#savingThrows">saving throws</a> against spells from the school of magic you select. This bonus stacks with the bonus from <a href="#spellFocus">Spell Focus</a>.</p><h5>Special</h5><p>	You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic to which you already have applied the <a href="#spellFocus">Spell Focus</a> feat.</p>';
				break;
			case 	"Spell Mastery" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="/srd/classes/sorcererWizard.htm#wizard">Wizard</a> level 1st.</p><h5>Benefit</h5><p>	Each time you take this feat, choose a number of spells equal to your Intelligence modifier that you already know. From that point on, you can prepare these spells without referring to a spellbook.</p><h5>Normal</h5><p>	Without this feat, you must use a spellbook to prepare all your spells, except <a class="spell" href="/srd/spells/readMagic.htm">read magic</a>.</p>';
				break;
			case 	"Spell Penetration" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on <a href="/srd/magicOverview/castingSpells.htm#casterLevelChecks">caster level checks</a> (1d20 + caster level) made to overcome a creature’s <a href="/srd/specialAbilities.htm#spellResistance">spell resistance</a>.</p>';
				break;
			case 	"Greater Spell Penetration" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Prerequisite</h5><p>	<a href="#spellPenetration">Spell Penetration</a>.</p><h5>Benefit</h5><p>	You get a +2 bonus on <a href="/srd/magicOverview/castingSpells.htm#casterLevelChecks">caster level checks</a> (1d20 + caster level) made to overcome a creature’s <a href="/srd/specialAbilities.htm#spellResistance">spell resistance</a>. This bonus stacks with the one from <a href="#spellPenetration">Spell Penetration</a>.</p>';
				break;
			case 	"Stealthy" : 
				document.getElementById("featDisplayZone").innherHTML = '<h5>Benefit</h5><p>	You get a +2 bonus on all <a href="/srd/skills/hide.htm">Hide</a> checks and <a href="/srd/skills/moveSilently.htm">Move Silently</a> checks.</p>';
				break;
			case 	"Toughness" : 
				document.getElementById("featDisplayZone").innherHTML ='<h5>Benefit</h5><p>	You gain +3 hit points.</p><h5>Special</h5><p>	A character may gain this feat multiple times. Its effects stack.</p>';
				break;
			case 	"Track" : 
				document.getElementById("featDisplayZone").innherHTML = '<table id="tableTrackDC" cellspacing="0" class="right">	<caption>Table: Track DC</caption>	<tr>		<th align="left">Surface</th>		<th><a href="/srd/skills/survival.htm">Survival</a> DC</th>	</tr>	<tr>		<td>Very soft ground</td>		<td align="center">5</td>	</tr>	<tr>		<td>Soft ground</td>		<td align="center">10</td>	</tr>	<tr>		<td>Firm ground</td>		<td align="center">15</td>	</tr>	<tr>		<td>Hard ground</td>		<td align="center">20</td>	</tr></table><table id="tableTrackDCModifiers" cellspacing="0" class="right">	<caption>Table: Track DC Modifiers</caption>	<thead>		<tr>			<th align="left">Condition</th>			<th><a href="/srd/skills/survival.htm">Survival</a> DC<br />Modifier</th>		</tr>	</thead>	<tfoot>		<tr>			<td colspan="2">				<ol>					<li>For a group of mixed sizes, apply only the modifier for the largest size category.</li>					<li>Apply only the largest modifier from this category.</li>				</ol>			</td>		</tr>	</tfoot>	<tbody>		<tr>			<td>Every three creatures in the group being tracked</td>			<td align="center">-1</td>		</tr>		<tr>			<td>Size of creature or creatures being tracked<sup>1</sup></td>			<td align="center"></td>		</tr>		<tr>			<td class="sub">Fine</td>			<td align="center">+8</td>		</tr>		<tr>			<td class="sub">Diminutive</td>			<td align="center">+4</td>		</tr>		<tr>			<td class="sub">Tiny</td>			<td align="center">+2</td>		</tr>		<tr>			<td class="sub">Small</td>			<td align="center">+1</td>		</tr>		<tr>			<td class="sub">Medium</td>			<td align="center">0</td>		</tr>		<tr>			<td class="sub">Large</td>			<td align="center">-1</td>		</tr>		<tr>			<td class="sub">Huge</td>			<td align="center">-2</td>		</tr>		<tr>			<td class="sub">Gargantuan</td>			<td align="center">-4</td>		</tr>		<tr>			<td class="sub">Colossal</td>			<td align="center">-8</td>		</tr>		<tr>			<td>Every 24 hours since the trail was made</td>			<td align="center">+1</td>		</tr>		<tr>			<td>Every hour of rain since the trail was made</td>			<td align="center">+1</td>		</tr>		<tr>			<td>Fresh snow cover since the trail was made</td>			<td align="center">+10</td>		</tr>		<tr>			<td>Poor visibility<sup>2</sup></td>			<td align="center"></td>		</tr>		<tr>			<td class="sub">Overcast or moonless night</td>			<td align="center">+6</td>		</tr>		<tr>			<td class="sub">Moonlight</td>			<td align="center">+3</td>		</tr>		<tr>			<td class="sub">Fog or precipitation</td>			<td align="center">+3</td>		</tr>		<tr>			<td>Tracked party hides trail (and moves at half speed)</td>			<td align="center">+5</td>		</tr>	</tbody></table><h3 id="track">Track [General]</h3><h5>Benefit</h5><p>	To find tracks or to follow them for 1 mile requires a successful <a href="/srd/skills/survival.htm">Survival</a> check. You must make another <a href="/srd/skills/survival.htm">Survival</a> check every time the tracks become difficult to follow.</p><p>	You move at half your normal speed (or at your normal speed with a -5 penalty on the check, or at up to twice your normal speed with a -20 penalty on the check). The DC depends on the surface and the prevailing conditions, as given on <a href="#tableTrackDC">Table: Track DC</a>.</p><h5 id="verySoftGround">Very Soft Ground</h5><p>	Any surface (fresh snow, thick dust, wet mud) that holds deep, clear impressions of footprints.</p><h5 id="softGround">Soft Ground</h5><p>	Any surface soft enough to yield to pressure, but firmer than wet mud or fresh snow, in which a creature leaves frequent but shallow footprints.</p><h5 id="firmGround">Firm Ground</h5><p>	Most normal outdoor surfaces (such as lawns, fields, woods, and the like) or exceptionally soft or dirty indoor surfaces (thick rugs and very dirty or dusty floors). The creature might leave some traces (broken branches or tufts of hair), but it leaves only occasional or partial footprints.</p><h5 id="hardGround">Hard Ground</h5><p>	Any surface that doesn’t hold footprints at all, such as bare rock or an indoor floor. Most streambeds fall into this category, since any footprints left behind are obscured or washed away. The creature leaves only traces (scuff marks or displaced pebbles).</p><p>	Several modifiers may apply to the <a href="/srd/skills/survival.htm">Survival</a> check, as given on <a href="#tableTrackDCModifiers">Table: Track DC Modifiers</a>.</p><p>	If you fail a <a href="/srd/skills/survival.htm">Survival</a> check, you can retry after 1 hour (outdoors) or 10 minutes (indoors) of searching.</p><h5>Normal</h5><p>	Without this feat, you can use the <a href="/srd/skills/survival.htm">Survival</a> skill to find tracks, but you can follow them only if the DC for the task is 10 or lower. Alternatively, you can use the <a href="/srd/skills/search.htm">Search</a> skill to find a footprint or similar sign of a creature’s passage using the DCs given above, but you can’t use <a href="/srd/skills/search.htm">Search</a> to follow tracks, even if someone else has already found them.</p><h5>Special</h5><p>	A <a href="/srd/classes/ranger.htm">ranger</a> automatically has Track as a bonus feat. He need not select it.</p><p>	This feat does not allow you to find or follow the tracks made by a subject of a <a class="spell" href="/srd/spells/passWithoutTrace.htm">pass without trace</a> spell.</p>';
				break;
			case 	"Two-Weapon Fighting" : 
				document.getElementById("featDisplayZone").innerHTML = '<p>	You can fight with a weapon in each hand. You can make one extra attack each round with the second weapon.</p><h5>Prerequisite</h5><p>	Dex 15.</p><h5>Benefit</h5><p>	Your penalties on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6.  See the <a href="/srd/combat/specialAttacks.htm#twoWeaponFighting">Two-Weapon Fighting</a> special attack.</p><h5>Normal</h5><p>	If you wield a second weapon in your off hand, you can get one extra attack per round with that weapon. When fighting in this way you suffer a -6 penalty with your regular attack or attacks with your primary hand and a -10 penalty to the attack with your off hand. If your off-hand weapon is light the penalties are reduced by 2 each. (An <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a> is always considered light.)</p><h5>Special</h5><p>	A 2nd-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the two-weapon combat style is treated as having Two-Weapon Fighting, even if he does not have the prerequisite for it, but only when he is wearing light or no armor.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Two-Weapon Fighting as one of his fighter bonus feats.</p>';
				break;
			case 	"-Two-Weapon Defense" : 
			document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Dex 15, <a href="#twoWeaponFighting">Two-Weapon Fighting</a>.</p><h5>Benefit</h5><p>	When wielding a <a href="/srd/equipment/weapons.htm#doubleWeapons">double weapon</a> or two weapons (not including <a href="/srd/specialAbilities.htm#naturalWeapons">natural weapons</a> or <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strikes</a>), you gain a +1 <a href="/srd/theBasics.htm#shieldBonus">shield bonus</a> to your AC.  See the <a href="/srd/combat/specialAttacks.htm#twoWeaponFighting">Two-Weapon Fighting</a> special attack.</p><p>	When you are <a href="/srd/combat/actionsInCombat.htm#fightingDefensivelyasaStandardAction">fighting defensively</a> or using the <a href="/srd/combat/actionsInCombat.htm#totalDefense">total defense</a> action, this <a href="/srd/theBasics.htm#shieldBonus">shield bonus</a> increases to +2.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Two-Weapon Defense as one of his fighter bonus feats.</p>';
				break;
			case 	"-Improved Two-Weapon Fighting" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Dex 17, <a href="#twoWeaponFighting">Two-Weapon Fighting</a>, base attack bonus +6.</p><h5>Benefit</h5><p>	In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty.  See the <a href="/srd/combat/specialAttacks.htm#twoWeaponFighting">Two-Weapon Fighting</a> special attack.</p><h5>Normal</h5><p>	Without this feat, you can only get a single extra attack with an off-hand weapon.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Two-Weapon Fighting as one of his fighter bonus feats.</p><p>	A 6th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the two-weapon combat style is treated as having Improved Two-Weapon Fighting, even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
				break;
			case 	"-Greater Two-Weapon Fighting" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisites</h5><p>	Dex 19, <a href="#improvedTwoWeaponFighting">Improved Two-Weapon Fighting</a>, <a href="#twoWeaponFighting">Two-Weapon Fighting</a>, base attack bonus +11.</p><h5>Benefit</h5><p>	You get a third attack with your off-hand weapon, albeit at a -10 penalty. See the <a href="/srd/combat/specialAttacks.htm#twoWeaponFighting">Two-Weapon Fighting</a> special attack.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Greater Two-Weapon Fighting as one of his fighter bonus feats.</p><p>	An 11th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the two-weapon combat style is treated as having Greater Two-Weapon Fighting, even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
				break;
			case 	"Weapon Finesse" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	Base attack bonus +1.</p><h5>Benefit</h5><p>	With a light weapon, <a href="/srd/equipment/weapons.htm#rapier">rapier</a>, <a href="/srd/equipment/weapons.htm#whip">whip</a>, or <a href="/srd/equipment/weapons.htm#chainSpiked">spiked chain</a> made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>. If you carry a shield, its armor check penalty applies to your attack rolls.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Weapon Finesse as one of his fighter bonus feats.</p><p>	<a href="/srd/specialAbilities.htm#naturalWeapons">Natural weapons</a> are always considered light weapons.</p>';
				break;
			case 	"Weapon Focus" : 
				document.getElementById("featDisplayZone").innerHTML = '<p>	Choose one type of weapon. You can also choose <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a> or <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> (or ray, if you are a spellcaster) as your weapon for purposes of this feat.</p><h5>Prerequisites</h5><p>	Proficiency with selected weapon, base attack bonus +1.</p><h5>Benefit</h5><p>	You gain a +1 bonus on all <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> you make using the selected weapon.</p><h5>Special</h5><p>	You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Weapon Focus as one of his fighter bonus feats. He must have Weapon Focus with a weapon to gain the <a href="#weaponSpecialization">Weapon Specialization</a> feat for that weapon.</p>';
				break;
			case 	"-Weapon Specialization" :
				document.getElementById("featDisplayZone").innerHTML = '<p>	Choose one type of weapon for which you have already selected the <a href="#weaponFocus">Weapon Focus</a> feat. You can also choose <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a> or <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> as your weapon for purposes of this feat. You deal extra damage when using this weapon.</p><h5>Prerequisites</h5><p>	Proficiency with selected weapon, <a href="#weaponFocus">Weapon Focus</a> with selected weapon, <a href="/srd/classes/fighter.htm">fighter</a> level 4th.</p><h5>Benefit</h5><p>	You gain a +2 bonus on all damage rolls you make using the selected weapon.</p><h5>Special</h5><p>	You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Weapon Specialization as one of his fighter bonus feats.</p>';
				break;
			case 	"-Greater Weapon Focus" : 
				document.getElementById("featDisplayZone").innerHTML = '<p>	Choose one type of weapon for which you have already selected <a href="#weaponFocus">Weapon Focus</a>. You can also choose <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a> or <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> as your weapon for purposes of this feat.</p><h5>Prerequisites</h5><p>	Proficiency with selected weapon, <a href="#weaponFocus">Weapon Focus</a> with selected weapon, <a href="/srd/classes/fighter.htm">fighter</a> level 8th.</p><h5>Benefit</h5><p>	You gain a +1 bonus on all <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including the one from <a href="#weaponFocus">Weapon Focus</a> (see below).</p><h5>Special</h5><p>	You can gain Greater Weapon Focus multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> must have Greater Weapon Focus with a given weapon to gain the <a href="#greaterWeaponSpecialization">Greater Weapon Specialization</a> feat for that weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Greater Weapon Focus as one of his fighter bonus feats.</p>';
				break;
			case 	"-Greater Weapon Specialization" :
				document.getElementById("featDisplayZone").innerHTML = '<p>	Choose one type of weapon for which you have already selected <a href="#weaponSpecialization">Weapon Specialization</a>. You can also choose <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a> or <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> as your weapon for purposes of this feat.</p><h5>Prerequisites</h5><p>	Proficiency with selected weapon, <a href="#greaterWeaponFocus">Greater Weapon Focus</a> with selected weapon, <a href="#weaponFocus">Weapon Focus</a> with selected weapon, <a href="#weaponSpecialization">Weapon Specialization</a> with selected weapon, <a href="/srd/classes/fighter.htm">fighter</a> level 12th.</p><h5>Benefit</h5><p>	You gain a +2 bonus on all damage rolls you make using the selected weapon. This bonus stacks with other bonuses on damage rolls, including the one from <a href="#weaponSpecialization">Weapon Specialization</a> (see below).</p><h5>Special</h5><p>	You can gain Greater Weapon Specialization multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Greater Weapon Specialization as one of his fighter bonus feats.</p>';
				break;
			case 	"---Item Creation---" :
				document.getElementById("featDisplayZone").innerHTML = '---';
				break;
			case 	"Brew Potion" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>Caster level 3rd.</p><h5>Benefit</h5><p>You can create a potion of any 3rd-level or lower spell that you know and that targets one or more creatures. Brewing a potion takes one day. When you create a potion, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. The base price of a potion is its spell level &times; its caster level &times; 50 gp. To brew a potion, you must spend 1/25 of this base price in XP and use up raw materials costing one half this base price.</p><p>When you create a potion, you make any choices that you would normally make when casting the spell. Whoever drinks the potion is the target of the spell.</p><p>Any potion that stores a spell with a costly material component or an XP cost also carries a commensurate cost. In addition to the costs derived from the base price, you must expend the material component or pay the XP when creating the potion.</p>';
				break;
			case 	"Craft Magic Arms And Armor" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>Caster level 5th.</p><h5>Benefit</h5><p>You can create any magic weapon, armor, or shield whose prerequisites you meet. Enhancing a weapon, suit of armor, or shield takes one day for each 1,000 gp in the price of its magical features. To enhance a weapon, suit of armor, or shield, you must spend 1/25 of its features’ total price in XP and use up raw materials costing one-half of this total price.</p><p>The weapon, armor, or shield to be enhanced must be a masterwork item that you provide. Its cost is not included in the above cost.</p><p>You can also mend a broken magic weapon, suit of armor, or shield if it is one that you could make. Doing so costs half the XP, half the raw materials, and half the time it would take to craft that item in the first place.</p>';
				break;
			case 	"Craft Rod" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	Caster level 9th.</p><h5>Benefit</h5><p>You can create any rod whose prerequisites you meet. Crafting a rod takes one day for each 1,000 gp in its base price. To craft a rod, you must spend 1/25 of its base price in XP and use up raw materials costing one-half of its base price.</p><p>Some rods incur extra costs in material components or XP, as noted in their descriptions. These costs are in addition to those derived from the rod’s base price.</p>';
				break;
			case 	"Craft Staff" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	Caster level 12th.</p><h5>Benefit</h5><p>	You can create any staff whose prerequisites you meet.</p><p>	Crafting a staff takes one day for each 1,000 gp in its base price. To craft a staff, you must spend 1/25 of its base price in XP and use up raw materials costing one-half of its base price. A newly created staff has 50 charges.</p><p>	Some staffs incur extra costs in material components or XP, as noted in their descriptions. These costs are in addition to those derived from the staff’s base price.</p>';
				break;
			case 	"Craft Wand" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	Caster level 5th.</p><h5>Benefit</h5><p>	You can create a wand of any 4th-level or lower spell that you know. Crafting a wand takes one day for each 1,000 gp in its base price. The base price of a wand is its caster level &times; the spell level &times; 750 gp. To craft a wand, you must spend 1/25 of this base price in XP and use up raw materials costing one-half of this base price. A newly created wand has 50 charges.</p><p>	Any wand that stores a spell with a costly material component or an XP cost also carries a commensurate cost. In addition to the cost derived from the base price, you must expend fifty copies of the material component or pay fifty times the XP cost.</p>';
				break;
			case 	"Craft Wondrous Item" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	Caster level 3rd.</p><h5>Benefit</h5><p>	You can create any wondrous item whose prerequisites you meet. Enchanting a wondrous item takes one day for each 1,000 gp in its price. To enchant a wondrous item, you must spend 1/25 of the item’s price in XP and use up raw materials costing half of this price.</p><p>	You can also mend a broken wondrous item if it is one that you could make. Doing so costs half the XP, half the raw materials, and half the time it would take to craft that item in the first place.</p><p>	Some wondrous items incur extra costs in material components or XP, as noted in their descriptions. These costs are in addition to those derived from the item’s base price. You must pay such a cost to create an item or to mend a broken one.</p>';
				break;
			case 	"Forge Ring" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	Caster level 12th.</p><h5>Benefit</h5><p>	You can create any ring whose prerequisites you meet. Crafting a ring takes one day for each 1,000 gp in its base price. To craft a ring, you must spend 1/25 of its base price in XP and use up raw materials costing one-half of its base price.</p><p>	You can also mend a broken ring if it is one that you could make. Doing so costs half the XP, half the raw materials, and half the time it would take to forge that ring in the first place.</p><p>	Some magic rings incur extra costs in material components or XP, as noted in their descriptions. You must pay such a cost to forge such a ring or to mend a broken one.</p>';
				break;
			case 	"Scribe Scroll" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Prerequisite</h5><p>	Caster level 1st.</p><h5>Benefit</h5><p>	You can create a scroll of any spell that you know. Scribing a scroll takes one day for each 1,000 gp in its base price. The base price of a scroll is its spell level &times; its caster level &times; 25 gp. To scribe a scroll, you must spend 1/25 of this base price in XP and use up raw materials costing one-half of this base price.</p><p>	Any scroll that stores a spell with a costly material component or an XP cost also carries a commensurate cost. In addition to the costs derived from the base price, you must expend the material component or pay the XP when scribing the scroll.</p>';
				break;
			case 	"---Metamagic---" : 
				document.getElementById("featDisplayZone").innerHTML = '---';
				break;
			case 	"Empower Spell" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	All variable, numeric effects of an empowered spell are increased by one-half.</p><p>	<a href="/srd/combat/combatStatistics.htm#savingThrows">Saving throws</a> and opposed rolls are not affected, nor are spells without random variables. An empowered spell uses up a spell slot two levels higher than the spell’s actual level.</p>';
				break;
			case 	"Enlarge Spell" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	You can alter a spell with a range of close, medium, or long to increase its range by 100%. An enlarged spell with a range of close now has a range of 50 ft. + 5 ft./level, while medium-range spells have a range of 200 ft. + 20 ft./level and long-range spells have a range of 800 ft. + 80 ft./level. An enlarged spell uses up a spell slot one level higher than the spell’s actual level.</p><p>	Spells whose ranges are not defined by distance, as well as spells whose ranges are not close, medium, or long, do not have increased ranges.</p>';
				break;
			case 	"Extend Spell" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	An extended spell lasts twice as long as normal. A spell with a duration of concentration, instantaneous, or permanent is not affected by this feat. An extended spell uses up a spell slot one level higher than the spell’s actual level.</p>';
				break;
			case 	"Heighten Spell" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level (such as <a href="/srd/combat/combatStatistics.htm#savingThrows">saving throw</a> DCs and ability to penetrate a <a class="spell" href="/srd/spells/globeOfInvulnerabilityLesser.htm">lesser globe of invulnerability</a>) are calculated according to the heightened level. The heightened spell is as difficult to prepare and cast as a spell of its effective level.</p>';
				break;
			case 	"Maximize Spell" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	All variable, numeric effects of a spell modified by this feat are maximized. <a href="/srd/combat/combatStatistics.htm#savingThrows">Saving throws</a> and opposed rolls are not affected, nor are spells without random variables. A maximized spell uses up a spell slot three levels higher than the spell’s actual level.</p><p>	An empowered, maximized spell gains the separate benefits of each feat: the maximum result plus one-half the normally rolled result.</p>';
				break;
			case 	"Quicken Spell" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	Casting a quickened spell is an <a href="/srd/combat/actionsInCombat.htm#swiftActions">swift action</a>. You can perform another action, even casting another spell, in the same round as you cast a quickened spell. You may cast only one quickened spell per round. A spell whose casting time is more than 1 full round action cannot be quickened. A quickened spell uses up a spell slot four levels higher than the spell’s actual level. Casting a quickened spell doesn’t provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a>.</p><h5>Special</h5><p>	This feat can’t be applied to any spell cast spontaneously (including sorcerer spells, bard spells, and cleric or druid spells cast spontaneously), since applying a metamagic feat to a spontaneously cast spell automatically increases the casting time to a <a href="/srd/combat/actionsInCombat.htm#fullRoundActions">full-round action</a>.</p>';
				break;
			case 	"Silent Spell" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	A silent spell can be cast with no verbal components. Spells without verbal components are not affected. A silent spell uses up a spell slot one level higher than the spell’s actual level.</p><h5>Special</h5><p>	<a href="/srd/classes/bard.htm">Bard</a> spells cannot be enhanced by this metamagic feat.</p>';
				break;
			case 	"Still Spell" : 
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	A stilled spell can be cast with no somatic components.</p><p>	Spells without somatic components are not affected. A stilled spell uses up a spell slot one level higher than the spell’s actual level.</p>';
				break;
			case 	"Widen Spell" :
				document.getElementById("featDisplayZone").innerHTML = '<h5>Benefit</h5><p>	You can alter a burst, emanation, line, or spread shaped spell to increase its area. Any numeric measurements of the spell’s area increase by 100%.A widened spell uses up a spell slot three levels higher than the spell’s actual level.</p><p>	Spells that do not have an area of one of these four sorts are not affected by this feat.</p>';
				break;
		}
		}
	if (charClass == 'fighter') {
		var fighterFeat1 = document.getElementById("fighterFeatsSelect0").value;
		document.getElementById("fighterFeatDisplayZone").innerHTML = fighterFeat1;
	}
}

function getAllIds() {
	var ids = document.querySelectorAll('[id]');
	Array.prototype.forEach.call( ids, function( el, i ) {
    console.log( el.id );
});
}