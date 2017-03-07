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
	document.getElementById("featZone").innerHTML = "";
	var featSlots = document.getElementById("featsAvailable").value;
	for (i=0; i<featSlots; i++) {
		var featZone = document.getElementById("featZone");
		//Create array of options to be added
		var array = ["---General Feat---","Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (Light)","Armor Proficiency (Medium)","Armor Proficiency (Heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip","Whirlwind Attack","Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","-Mobility","--Spring Attack","Endurance","Eschew Materials","Exotic Weapon Proficiency","-Diehard","Extra Turning","Great Fortitude","Improved Counterspell","Improved Critical","Improved Familiar","Improved Initiative","Improved Turning","Improved Unarmed Strike","-Deflect Arrows","-Improved Grapple","-Snatch Arrows","-Stunning Fist","Investigator","Iron Will","Leadership","Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","-Mounted Archery","-Ride-By Attack","--Spirited Charge","-Trample","Natural Spell","Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","-Far Shot","-Precise Shot","--Improved Precise Shot","-Rapid Shot","--Manyshot","-Shot On The Run","Power Attack","-Cleave","--Great Cleave","-Improved Bull Rush","-Improved Overrun","-Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","-Improved Shield Bash","-Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","-Greater Spell Focus","Spell Mastery","Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","-Two-Weapon Defense","-Improved Two-Weapon Fighting","-Greater Two-Weapon Fighting","Weapon Finesse","Weapon Focus","-Weapon Specialization","-Greater Weapon Focus","-Greater Weapon Specialization","---Item Creation---","Brew Potion","Craft Magic Arms And Armor","Craft Rod","Craft Staff","Craft Wand","Craft Wondrous Item","Forge Ring","Scribe Scroll","---Metamagic---","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell"];
		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "featsSelect";
		featZone.appendChild(selectList);
		//Create and append the options
		for (var x = 0; x < array.length; x++) {
		var option = document.createElement("option");
		option.value = array[x];
		option.text = array[x];
		selectList.appendChild(option);
		}
		var mybr = document.createElement('br');
		featZone.appendChild(mybr);
	}
}

function populateFighterFeats() {
	document.getElementById("fighterFeatZone").innerHTML = "";
	var fighterFeatSlots = document.getElementById("fighterFeatsAvailable").value;
	for (i=0; i<fighterFeatSlots; i++) {
		var fighterFeatZone = document.getElementById("fighterFeatZone");
		//Create array of options to be added
		var array = ["---Fighter Feat---","Blind-Fight","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip","Whirlwind Attack","Combat Reflexes","Dodge","Mobility","Spring Attack","Exotic Weapon Proficiency","Improved Critical","Improved Initiative","Improved Shield Bash","Improved Unarmed Strike","Deflect Arrows","Improved Grapple","Snatch Arrows","Stunning Fist","Mounted Combat","Mounted Archery","Ride-By Attack","Spirited Charge","Trample","Point Blank Shot","Far Shot","Precise Shot","Rapid Shot","Manyshot","Shot On The Run","Improved Precise Shot","Power Attack","Cleave","Great Cleave","Improved Bull Rush","Improved Overrun","Improved Sunder","Quick Draw","Rapid Reload","Two-Weapon Fighting","Two-Weapon Defense","Improved Two-Weapon Fighting","Greater Two-Weapon Fighting","Weapon Finesse","Weapon Focus","Weapon Specialization","Greater Weapon Focus","Greater Weapon Specialization"];
		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "fighterFeatsSelect";
		fighterFeatZone.appendChild(selectList);
		//Create and append the options
		for (var x = 0; x < array.length; x++) {
		var option = document.createElement("option");
		option.value = array[x];
		option.text = array[x];
		selectList.appendChild(option);
		}
		var mybr = document.createElement('br');
		fighterFeatZone.appendChild(mybr);
	}
}

function getAllIds() {
	var ids = document.querySelectorAll('[id]');
	Array.prototype.forEach.call( ids, function( el, i ) {
    console.log( el.id );
});
}