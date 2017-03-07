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
	document.getElementById("feat1Select").disabled = false;
	document.getElementById("feat1Select").value = "noneSelected";
	document.getElementById("feat2Select").value = "noneSelected";
	document.getElementById("feat1Info").innerHTML = '';
	document.getElementById("feat2Info").innerHTML = "";
	if (charRace == "human") {
		document.getElementById("feat2Select").disabled = false;
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Any";
	} else if (charRace == "dwarf") {
		document.getElementById("feat2Select").disabled = true;
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = "2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = "-2";
		document.getElementById("baseSpeed").value = 20;
		document.getElementById("favoredClass").value = "Fighter";
	} else if (charRace == "elf") {
		document.getElementById("feat2Select").disabled = true;
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = "2";
		document.getElementById("conRaceMod").value = "-2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Wizard";
	} else if (charRace == "gnome") {
		document.getElementById("feat2Select").disabled = true;
		document.getElementById("strRaceMod").value = "-2";
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = "2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 20;
		document.getElementById("favoredClass").value = "Bard";
	} else if (charRace == "halfElf") {
		document.getElementById("feat2Select").disabled = true;
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Any";
	} else if (charRace == "halfOrc") {
		document.getElementById("feat2Select").disabled = true;
		document.getElementById("strRaceMod").value = "2";
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = "-2";
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = "-2";
		document.getElementById("baseSpeed").value = 30;
		document.getElementById("favoredClass").value = "Barbarian";
	} else if (charRace == "halfling") {
		document.getElementById("feat2Select").disabled = true;
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
  class1 = document.getElementById("classSelect").value;
	conMod = document.getElementById("conMod").value;
	intMod = parseInt(document.getElementById("intMod").value);
	document.getElementById("fighterFeatSelect").disabled = true;
	document.getElementById("fighterFeatSelect").value = "noneSelected";
	document.getElementById("fighterFeatInfo").innerHTML = "";
	document.getElementById("feat1Select").value = "noneSelected";
	document.getElementById("feat1Info").innerHTML = "";
	document.getElementById("feat2Select").value = "noneSelected";
	document.getElementById("feat2Info").innerHTML = "";
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
    fort = "2";
    ref = "0";
    will = "0";
		hpBase = "10";
		attack = "1";
		document.getElementById("fighterFeatSelect").disabled = false;
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

function evaluateFeats() {
	var class1 = document.getElementById("classSelect").value;
	var charRace = document.getElementById("raceSelect").value;
	var selectedFeat1 = document.getElementById("feat1Select").value;
	var selectedFeat2 = document.getElementById("feat2Select").value;
	var selectedFighterFeat = document.getElementById("fighterFeatSelect").value;
	var charStr = parseInt(document.getElementById("strFull").value);
	var charDex = parseInt(document.getElementById("dexFull").value);
	var charCon = parseInt(document.getElementById("conFull").value);
	var charInt = parseInt(document.getElementById("intFull").value);
	var charWis = parseInt(document.getElementById("wisFull").value);
	var charCha = parseInt(document.getElementById("chaFull").value);
	var baseAttack = document.getElementById("baseAttack").value;
	var rideRanks = document.getElementById("rideRanks").value;
	switch(selectedFeat1) {
		case "noneSelected" :
			document.getElementById("feat1Info").innerHTML = '';
			break;
		case "acrobatic" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/jump.htm">Jump</a> checks and <a href="/srd/skills/tumble.htm">Tumble</a> checks.';
			break;
		case "agile" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/balance.htm">Balance</a> checks and <a href="/srd/skills/escapeArtist.htm">Escape Artist</a> checks.';
			break;
		case "alertness" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/listen.htm">Listen</a> checks and <a href="/srd/skills/spot.htm">Spot</a> checks.<br>Special: The master of a <a href="/srd/classes/sorcererWizard.htm#familiars">familiar</a> gains the benefit of the Alertness feat whenever the familiar is within arm’s reach.';
			break;
		case "animalAffinity" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/handleAnimal.htm">Handle Animal</a> checks and <a href="/srd/skills/ride.htm">Ride</a> checks.';
			break;
		case "armorProficiencyHeavy" :
			if (class1 == "fighter" || class1 == "paladin" || class1 == "cleric") {
				document.getElementById("feat1Info").innerHTML = 'All characters of your class are automatically <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with heavy armor; you do not need to select this feat.';
			} else if (class1 == "barbarian" || class1 == "druid" || class1 == "bard" && selectedFeat2 == "armorProficiencyLight") {
				document.getElementById("feat1Info").innerHTML = '<p>You are <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with heavy armor.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You do not meet the prerequisites for this feat. Either change your class, or select Armor Proficiency (Medium) as your other feat, if possible.';
			}
			break;
		case "armorProficiencyLight" :
			if (class1 == "monk" || class1 == "sorcerer" || class1 == "wizard") {
			document.getElementById("feat1Info").innerHTML = 'You are <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with light armor.';
			} else {
				document.getElementById("feat1Info").innerHTML = 'All characters of your class are automatically <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with light armor; you do not need to select this feat.';
			}
			break;
		case "armorProficiencyMedium" :
			if (class1 == "fighter" || class1 == "barbarian" || class1 == "paladin" || class1 == "cleric" || class1 == "druid" || class1 == "bard") {
				document.getElementById("feat1Info").innerHTML = 'All characters of your class are automatically <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with medium armor; you do not need to select this feat.';
			} else if (selectedFeat2 == "armorProficiencyLight") {
				document.getElementById("feat1Info").innerHTML = 'You are <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with medium armor.';
			} else {
			document.getElementById("feat1Info").innerHTML = 'You do not meet the prerequisites for this feat. Either change your class, or select Armor Proficiency (Light) as your other feat, if possible.';
			}
			break;	
		case "athletic" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/climb.htm">Climb</a> checks and <a href="/srd/skills/swim.htm">Swim</a> checks.';
			break;	
		case "augmentSummoning" :
			if (selectedFeat2 == "spellFocus") {
			document.getElementById("feat1Info").innerHTML = 'Each creature you conjure with any summon spell gains a +4 <a href="/srd/theBasics.htm#enhancementBonus">enhancement bonus</a> to Strength and Constitution for the duration of the spell that summoned it.';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You must first select the Spell Focus feat before you can select this feat.';
			}
			break;
		case "blindFight" :
			document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	In melee, every time you miss because of <a href="/srd/combat/combatModifiers.htm#concealment">concealment</a>, you can reroll your miss chance percentile roll one time to see if you actually hit.</p><p>An <a href="/srd/conditionSummary.htm#invisible">invisible</a> attacker gets no advantages related to hitting you in melee. That is, you don’t lose your Dexterity bonus to Armor Class, and the attacker doesn’t get the usual +2 bonus for being invisible. The invisible attacker’s bonuses do still apply for ranged attacks, however.</p><p>You take only half the usual penalty to speed for being unable to see. Darkness and poor visibility in general reduces your speed to three-quarters normal, instead of one-half.</p><h5>Normal</h5><p>Regular <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> modifiers for invisible attackers trying to hit you apply, and you lose your Dexterity bonus to AC. The speed reduction for darkness and poor visibility also applies.</p><h5>Special</h5><p>The Blind-Fight feat is of no use against a character who is the subject of a <a class="spell" href="/srd/spells/blink.htm">blink</a> spell.</p><p>A <a href="/srd/classes/fighter.htm">fighter</a> may select Blind-Fight as one of his fighter bonus feats.</p>';
			break;	
		case "cleave" :
			if (selectedFeat2 == "powerAttack" && charStr >= 13) {
				document.getElementById("feat1Info").innerHTML = '<p>	If you deal a creature enough damage to make it drop (typically by dropping it to below 0 hit points or killing it), you get an immediate, extra melee attack against another creature within reach. You cannot take a 5-foot step before making this extra attack. The extra attack is with the same weapon and at the same bonus as the attack that dropped the previous creature. You can use this ability once per round.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Cleave as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need the Power Attack feat and a Strength score of at least 13 to select this feat.';	
			}
			break;	
		case "combatCasting" :
			document.getElementById("feat1Info").innerHTML = 'You get a +4 bonus on <a href="/srd/skills/concentration.htm">Concentration</a> checks made to cast a spell or use a <a href="/srd/specialAbilities.htm#spellLikeAbilities">spell-like ability</a> while on the defensive or while you are <a href="/srd/conditionSummary.htm#grappling">grappling</a> or <a href="/srd/conditionSummary.htm#pinned">pinned</a>.';
			break;	
		case "combatExpertise" :
			if (charInt >= 13) {
				document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>When you use the attack action or the <a href="/srd/combat/actionsInCombat.htm#fullAttack">full attack</a> action in melee, you can take a penalty of as much as -5 on your <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> and add the same number (+5 or less) as a <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to your Armor Class. This number may not exceed your base attack bonus. The changes to attack rolls and Armor Class last until your next action.</p><h5>Normal</h5><p>A character without the Combat Expertise feat can <a href="/srd/combat/actionsInCombat.htm#fightingDefensivelyasaStandardAction">fight defensively</a> while using the attack or full attack action to take a -4 penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> and gain a +2 <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to Armor Class.</p><h5>Special</h5><p>A <a href="/srd/classes/fighter.htm">fighter</a> may select Combat Expertise as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need an Intelligence score of at least 13 to select this feat.';
			}
			break;	
		case "combatReflexes" :
			document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>You may make a number of additional <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> equal to your Dexterity bonus.</p><p>With this feat, you may also make <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> while <a href="/srd/conditionSummary.htm#flatFooted">flat-footed</a>.</p><h5>Normal</h5><p>A character without this feat can make only one <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> per round and can’t make attacks of opportunity while <a href="/srd/conditionSummary.htm#flatFooted">flat-footed</a>.</p><h5>Special</h5><p>The Combat Reflexes feat does not allow a <a href="/srd/classes/rogue.htm">rogue</a> to use her opportunist ability more than once per round.</p><p>A <a href="/srd/classes/fighter.htm">fighter</a> may select Combat Reflexes as one of his fighter bonus feats.</p><p>A <a href="/srd/classes/monk.htm">monk</a> may select Combat Reflexes as a bonus feat at 2nd level.</p>';
			break;	
		case "deceitful" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/disguise.htm">Disguise</a> checks and <a href="/srd/skills/forgery.htm">Forgery</a> checks.';
			break;	
		case "deflectArrows" :
			if (charDex >= 13 && selectedFeat2 == "improvedUnarmedStrike") {
				document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not <a href="/srd/conditionSummary.htm#flatFooted">flat-footed</a>.</p><p>	Attempting to deflect a ranged weapon doesn’t count as an action. Unusually massive ranged weapons and ranged attacks generated by spell effects can’t be deflected.</p><h5>Special</h5><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Deflect Arrows as a bonus feat at 2nd level, even if she does not meet the prerequisites.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Deflect Arrows as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a Dexterity score of 13 and the Improved Unarmed Strike feat to select this feat.';
			}
			break;	
		case "deftHands" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/sleightOfHand.htm">Sleight of Hand</a> checks and <a href="/srd/skills/useRope.htm">Use Rope</a> checks.';
			break;	
		case "diehard" :
			if (selectedFeat2 == "endurance") {
				document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	When reduced to between -1 and -9 hit points, you automatically become <a href="/srd/conditionSummary.htm#stable">stable</a>. You don’t have to roll to see if you lose 1 hit point each round.</p><p>	When reduced to negative hit points, you may choose to act as if you were <a href="/srd/conditionSummary.htm#disabled">disabled</a>, rather than <a href="/srd/conditionSummary.htm#dying">dying</a>. You must make this decision as soon as you are reduced to negative hit points (even if it isn’t your turn). If you do not choose to act as if you were disabled, you immediately fall <a href="/srd/conditionSummary.htm#unconscious">unconscious</a>.</p><p>	When using this feat, you can take either a single move or <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a> each turn, but not both, and you cannot take a full round action. You can take a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a> without further injuring yourself, but if you perform any standard action (or any other action deemed as strenuous, including some <a href="/srd/combat/actionsInCombat.htm#freeActions">free actions</a>, <a href="/srd/combat/actionsInCombat.htm#swiftActions">swift actions</a>, or <a href="/srd/combat/actionsInCombat.htm#immediateActions">immediate actions</a>, such as casting a <a href="#quickenSpell">quickened spell</a>) you take 1 point of damage after completing the act. If you reach -10 hit points, you immediately die.</p><h5>Normal</h5><p>	A character without this feat who is reduced to between -1 and -9 hit points is unconscious and <a href="/srd/conditionSummary.htm#dying">dying</a>.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need the Endurance feat to select this feat.'
			}
			break;	
		case "diligent" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/appraise.htm">Appraise</a> checks and <a href="/srd/skills/decipherScript.htm">Decipher Script</a> checks.';
			break;	
		case "dodge" :
			if (charDex >= 13) {
				document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	During your action, you designate an opponent and receive a +1 <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to Armor Class against attacks from that opponent. You can select a new opponent on any action.</p><p>	A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose <a href="/srd/theBasics.htm#dodgeBonus">dodge bonuses</a>. Also, dodge bonuses stack with each other, unlike most other types of bonuses.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Dodge as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a Dexterity score of at least 13 to select this feat.';
			}
			break;	
		case "endurance" :
			document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	You gain a +4 bonus on the following checks and saves: <a href="/srd/skills/swim.htm">Swim</a> checks made to resist <a href="/srd/combat/injuryandDeath.htm#nonlethalDamage">nonlethal damage</a>, Constitution checks made to continue running, Constitution checks made to avoid nonlethal damage from a forced march, Constitution checks made to hold your breath, Constitution checks made to avoid nonlethal damage from starvation or thirst, <a href="/srd/combat/combatStatistics.htm#fortitude">Fortitude saves</a> made to avoid nonlethal damage from hot or cold environments, and Fortitude saves made to resist damage from suffocation. Also, you may sleep in light or medium armor without becoming <a href="/srd/conditionSummary.htm#fatigued">fatigued</a>.</p><h5>Normal</h5><p>	A character without this feat who sleeps in medium or heavier armor is automatically fatigued the next day.</p><h5>Special</h5><p>	A <a href="/srd/classes/ranger.htm">ranger</a> automatically gains Endurance as a bonus feat at 3rd level. He need not select it.</p>';
			break;	
		case "eschewMaterials" :
			document.getElementById("feat1Info").innerHTML = '<p>	You can cast any spell that has a material component costing 1 gp or less without needing that component. (The casting of the spell still provokes <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> as normal.) If the spell requires a material component that costs more than 1 gp, you must have the material component at hand to cast the spell, just as normal.</p>';
			break;	
		case "exoticWeaponProficiency" :
			if (baseAttack >= 1) {
			document.getElementById("feat1Info").innerHTML = '<p>	Choose a type of <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">exotic weapon</a>. You understand how to use that type of exotic weapon in combat.</p><h5>Prerequisite</h5><p>	Base attack bonus +1 (plus Str 13 for <a href="/srd/equipment/weapons.htm#swordBastard">bastard sword</a> or <a href="/srd/equipment/weapons.htm#waraxeDwarven">dwarven waraxe</a>).</p><h5>Benefit</h5><p>	You make <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> with the weapon normally.</p><h5>Normal</h5><p>	A character who uses a weapon with which he or she is not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> takes a -4 penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>.</p><h5>Special</h5><p>	You can gain Exotic Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of exotic weapon. Proficiency with the bastard sword or the dwarven waraxe has an additional prerequisite of Str 13.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Exotic Weapon Proficiency as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a Base Attack Bonus of at least 1 to select this feat.';
			}
			break;	
		case "extraTurning" :
			if (class1 == "cleric") {
			document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	Each time you take this feat, you can use your ability to turn or rebuke creatures four more times per day than normal.</p><p>If you have the ability to turn or rebuke more than one kind of creature each of your turning or rebuking abilities gains four additional uses per day.</p><h5>Normal</h5><p>	Without this feat, a character can typically <a href="/srd/combat/specialAttacks.htm#turnOrRebukeUndead">turn or rebuke undead</a> (or other creatures) a number of times per day equal to 3 + his or her Charisma modifier.</p><h5>Special</h5><p>	You can gain Extra Turning multiple times. Its effects stack. Each time you take the feat, you can use each of your turning or rebuking abilities four additional times per day.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'Only clerics may select this feat.';
			}
			break;	
		case "farShot" :
			if (selectedFeat2 == "pointBlankShot") {
			document.getElementById("feat1Info").innerHTML = '<p>	When you use a <a href="/srd/equipment/weapons.htm#projectileWeapons">projectile weapon</a>, such as a bow, its range increment increases by one-half (multiply by 1&frac12;). When you use a <a href="/srd/equipment/weapons.htm#thrownWeapons">thrown weapon</a>, its range increment is doubled.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Far Shot as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need the <a href="#pointBlankShot">Point Blank Shot</a> feat before you can select this feat.</p>';
			}
			break;	
		/*
		
		1st-level characters can't meet the prereqs for this feat.
		
		case "greatCleave" :
			if (charStr => 13 && selectedFeat2 == "powerAttack" && selectedFighterFeat == "cleave") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#cleave">Cleave</a>, <a href="#powerAttack">Power Attack</a>, base attack bonus +4.</p><h5>Benefit</h5><p>	This feat works like <a href="#cleave">Cleave</a>, except that there is no limit to the number of times you can use it per round.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Great Cleave as one of his fighter bonus feats.</p>';
			} else if (charStr => 13 && selectedFeat2 == "cleave" && selectedFighterFeat == "powerAttack") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#cleave">Cleave</a>, <a href="#powerAttack">Power Attack</a>, base attack bonus +4.</p><h5>Benefit</h5><p>	This feat works like <a href="#cleave">Cleave</a>, except that there is no limit to the number of times you can use it per round.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Great Cleave as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a Strength score of at least 13, the <a href="#powerAttack">Power Attack</a> feat, and the <a href="#cleave">Cleave</a> feat before you can select this feat.';
			}
			break;
		*/
		case "greaterSpellFocus" :
			if (selectedFeat2 == "spellFocus") {
			document.getElementById("feat1Info").innerHTML = '<p>	Choose a school of magic to which you already have applied the <a href="#spellFocus">Spell Focus</a> feat.</p><h5>Benefit</h5><p>	Add +1 to the Difficulty Class for all <a href="/srd/combat/combatStatistics.htm#savingThrows">saving throws</a> against spells from the school of magic you select. This bonus stacks with the bonus from <a href="#spellFocus">Spell Focus</a>.</p><h5>Special</h5><p>	You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic to which you already have applied the <a href="#spellFocus">Spell Focus</a> feat.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need the <a href="#spellFocus">Spell Focus</a> feat before you can select this feat.';
			}
			break;	
		case "greaterSpellPenetration" :
			if (selectedFeat2 == "spellPenetration") {
			document.getElementById("feat1Info").innerHTML = '<p>	You get a +2 bonus on <a href="/srd/magicOverview/castingSpells.htm#casterLevelChecks">caster level checks</a> (1d20 + caster level) made to overcome a creature’s <a href="/srd/specialAbilities.htm#spellResistance">spell resistance</a>. This bonus stacks with the one from <a href="#spellPenetration">Spell Penetration</a>.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need the <a href="#spellPenetration">Spell Penetration</a> feat before you can select this feat.';
			}
			break;
		/*
		
		1st-level characters can't meet the prereqs for this feat.
		
		case "greaterTwoWeaponFighting" :
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Dex 19, <a href="#improvedTwoWeaponFighting">Improved Two-Weapon Fighting</a>, <a href="#twoWeaponFighting">Two-Weapon Fighting</a>, base attack bonus +11.</p><h5>Benefit</h5><p>	You get a third attack with your off-hand weapon, albeit at a -10 penalty. See the <a href="/srd/combat/specialAttacks.htm#twoWeaponFighting">Two-Weapon Fighting</a> special attack.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Greater Two-Weapon Fighting as one of his fighter bonus feats.</p><p>	An 11th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the two-weapon combat style is treated as having Greater Two-Weapon Fighting, even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
			break;	
		*/
		/*
		
		1st-level characters can't meet the prereqs for this feat.
		
		case "greaterWeaponFocus" :
			document.getElementById("feat1Info").innerHTML = '<p>	Choose one type of weapon for which you have already selected <a href="#weaponFocus">Weapon Focus</a>. You can also choose <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a> or <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> as your weapon for purposes of this feat.</p><h5>Prerequisites</h5><p>	Proficiency with selected weapon, <a href="#weaponFocus">Weapon Focus</a> with selected weapon, <a href="/srd/classes/fighter.htm">fighter</a> level 8th.</p><h5>Benefit</h5><p>	You gain a +1 bonus on all <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including the one from <a href="#weaponFocus">Weapon Focus</a> (see below).</p><h5>Special</h5><p>	You can gain Greater Weapon Focus multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> must have Greater Weapon Focus with a given weapon to gain the <a href="#greaterWeaponSpecialization">Greater Weapon Specialization</a> feat for that weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Greater Weapon Focus as one of his fighter bonus feats.</p>';
			break;	
		*/
		/*
		
		1st-level characters can't meet the prereqs for this feat.
		
		case "greaterWeaponSpecialization" :
			document.getElementById("feat1Info").innerHTML = '<p>	Choose one type of weapon for which you have already selected <a href="#weaponSpecialization">Weapon Specialization</a>. You can also choose <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a> or <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> as your weapon for purposes of this feat.</p><h5>Prerequisites</h5><p>	Proficiency with selected weapon, <a href="#greaterWeaponFocus">Greater Weapon Focus</a> with selected weapon, <a href="#weaponFocus">Weapon Focus</a> with selected weapon, <a href="#weaponSpecialization">Weapon Specialization</a> with selected weapon, <a href="/srd/classes/fighter.htm">fighter</a> level 12th.</p><h5>Benefit</h5><p>	You gain a +2 bonus on all damage rolls you make using the selected weapon. This bonus stacks with other bonuses on damage rolls, including the one from <a href="#weaponSpecialization">Weapon Specialization</a> (see below).</p><h5>Special</h5><p>	You can gain Greater Weapon Specialization multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Greater Weapon Specialization as one of his fighter bonus feats.</p>';
			break;	
		*/
		case "greatFortitude" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/combat/combatStatistics.htm#fortitude">Fortitude saving throws</a>.';
			break;	
		case "improvedBullRush" :
			if (charStr >= 13 && selectedFeat2 == "powerAttack") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you perform a <a href="/srd/combat/specialAttacks.htm#bullRush">bull rush</a> you do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> from the defender. You also gain a +4 bonus on the opposed Strength check you make to push back the defender.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Bull Rush as one of his fighter bonus feats.</p>';
			} else if (charStr >= 13 && selectedFighterFeat == "powerAttack") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you perform a <a href="/srd/combat/specialAttacks.htm#bullRush">bull rush</a> you do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> from the defender. You also gain a +4 bonus on the opposed Strength check you make to push back the defender.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Bull Rush as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a strength score of at least 13 and the <a href="#powerAttack">Power Attack</a> feat before you can select this feat.';
			}
			break;	
		case "improvedCounterspell" :
			document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell.</p><h5>Normal</h5><p>	Without this feat, you may counter a spell only with the same spell or with a spell specifically designated as countering the target spell.</p>';
			break;	
		case "improvedCritical" :
			document.getElementById("feat1Info").innerHTML = '<p>	Choose one type of weapon.</p><h5>Prerequisite</h5><p>	Proficient with weapon, base attack bonus +8.</p><h5>Benefit</h5><p>	When using the weapon you selected, your threat range is doubled.</p><h5>Special</h5><p>	You can gain Improved Critical multiple times. The effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p><p>	This effect doesn’t stack with any other effect that expands the threat range of a weapon.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Critical as one of his fighter bonus feats.</p>';
			break;	
		case "improvedDisarm" :
			if (charInt >= 13 && selectedFeat2 == "combatExpertise") {
				document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#disarm">disarm</a> an opponent, nor does the opponent have a chance to disarm you. You also gain a +4 bonus on the opposed <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> you make to disarm your opponent.</p><h5>Normal</h5><p>	See the normal <a href="/srd/combat/specialAttacks.htm#disarm">disarm</a> rules.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Disarm as one of his fighter bonus feats.</p><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Improved Disarm as a bonus feat at 6th level, even if she does not meet the prerequisites.</p>';
			} else if (charInt >= 13 && selectedFighterFeat == "combatExpertise") {
				document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#disarm">disarm</a> an opponent, nor does the opponent have a chance to disarm you. You also gain a +4 bonus on the opposed <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> you make to disarm your opponent.</p><h5>Normal</h5><p>	See the normal <a href="/srd/combat/specialAttacks.htm#disarm">disarm</a> rules.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Disarm as one of his fighter bonus feats.</p><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Improved Disarm as a bonus feat at 6th level, even if she does not meet the prerequisites.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need an intelligence score of at least 13 and the <a href="#combatExpertise">Combat Expertise</a> feat in order to select this feat.';
			}
			break;
		/*
		
		1st-level characters can't meet the prereqs for this feat.
		
		case "improvedFamiliar" :
			document.getElementById("feat1Info").innerHTML = '<p>	This feat allows spellcasters to acquire a new <a href="/srd/classes/sorcererWizard.htm#familiars">familiar</a> from a nonstandard list, but only when they could normally acquire a new familiar.</p><h5>Prerequisites</h5><p>	Ability to acquire a new familiar, compatible <a href="/srd/description.htm#alignment">alignment</a>, sufficiently high level (see below).</p>';
			break;	
		*/
		case "improvedFeint" :
			if (charInt >= 13 && selectedFeat2 == "combatExpertise") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You can make a <a href="/srd/skills/bluff.htm">Bluff</a> check to <a href="/srd/combat/specialAttacks.htm#feint">feint</a> in combat as a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a>.</p><h5>Normal</h5><p>	<a href="/srd/combat/specialAttacks.htm#feint">Feinting</a> in combat is a <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a>.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Feint as one of his fighter bonus feats.</p';
			} else if (charInt >= 13 && selectedFighterFeat == "combatExpertise") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You can make a <a href="/srd/skills/bluff.htm">Bluff</a> check to <a href="/srd/combat/specialAttacks.htm#feint">feint</a> in combat as a <a href="/srd/combat/actionsInCombat.htm#moveActions">move action</a>.</p><h5>Normal</h5><p>	<a href="/srd/combat/specialAttacks.htm#feint">Feinting</a> in combat is a <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a>.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Feint as one of his fighter bonus feats.</p';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need an intelligence score of at least 13 and the <a href="#combatExpertise">Combat Expertise</a> feat before you can select this feat.';
			}
				break;	
		case "improvedGrapple" :
			if (charDex >= 13 && selectedFeat2 == "improvedUnarmedStrike") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#improvedUnarmedStrike">Improved Unarmed Strike</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you make a <a href="/srd/combat/combatStatistics.htm#touchAttacks">touch attack</a> to start a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a>. You also gain a +4 bonus on all <a href="/srd/combat/specialAttacks.htm#grappleChecks">grapple checks</a>, regardless of whether you started the grapple.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you make a <a href="/srd/combat/combatStatistics.htm#touchAttacks">touch attack</a> to start a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a>.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Grapple as one of his fighter bonus feats.</p><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Improved Grapple as a bonus feat at 1st level, even if she does not meet the prerequisites.</p>';
			} else if (charDex >= 13 && selectedFighterFeat == "improvedUnarmedStrike") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#improvedUnarmedStrike">Improved Unarmed Strike</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you make a <a href="/srd/combat/combatStatistics.htm#touchAttacks">touch attack</a> to start a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a>. You also gain a +4 bonus on all <a href="/srd/combat/specialAttacks.htm#grappleChecks">grapple checks</a>, regardless of whether you started the grapple.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you make a <a href="/srd/combat/combatStatistics.htm#touchAttacks">touch attack</a> to start a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a>.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Grapple as one of his fighter bonus feats.</p><p>	A <a href="/srd/classes/monk.htm">monk</a> may select Improved Grapple as a bonus feat at 1st level, even if she does not meet the prerequisites.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a dexterity score of at least 13 and the <a href="#improvedUnarmedStrike">Improved Unarmed Strike</a> feat before you can select this feat.';
			}
				break;	
		case "improvedInitiative" :
			document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	You get a +4 bonus on initiative checks.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Initiative as one of his fighter bonus feats.</p>';
			break;	
		case "improvedOverrun" :
			if (charStr >= 13 && selectedFeat2 == "powerAttack") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you attempt to <a href="/srd/combat/specialAttacks.htm#overrun">overrun</a> an opponent, the target may not choose to avoid you. You also gain a +4 bonus on your Strength check to knock down your opponent.</p><h5>Normal</h5><p>	Without this feat, the target of an <a href="/srd/combat/specialAttacks.htm#overrun">overrun</a> can choose to avoid you or to block you.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Overrun as one of his fighter bonus feats.</p>';
			} else if (charStr >= 13 && selectedFighterFeat == "powerAttack") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you attempt to <a href="/srd/combat/specialAttacks.htm#overrun">overrun</a> an opponent, the target may not choose to avoid you. You also gain a +4 bonus on your Strength check to knock down your opponent.</p><h5>Normal</h5><p>	Without this feat, the target of an <a href="/srd/combat/specialAttacks.htm#overrun">overrun</a> can choose to avoid you or to block you.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Overrun as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a strength score of at least 13 and the <a href="#powerAttack">Power Attack</a> feat before you can select this feat.';
			}
			break;
		/*
		
		1st-level characters can't meet the prereqs for this feat.
		
		case "improvedPreciseShot" :
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Dex 19, <a href="#pointBlankShot">Point Blank Shot</a>, <a href="#preciseShot">Precise Shot</a>, base attack bonus +11.</p><h5>Benefit</h5><p>	Your ranged attacks ignore the AC bonus granted to targets by anything less than <a href="/srd/combat/combatModifiers.htm#totalCover">total cover</a>, and the miss chance granted to targets by anything less than <a href="/srd/combat/combatModifiers.htm#totalConcealment">total concealment</a>. Total cover and total concealment provide their normal benefits against your ranged attacks.</p><p>	In addition, when you shoot or throw ranged weapons at a <a href="/srd/conditionSummary.htm#grappling">grappling</a> opponent, you automatically strike at the opponent you have chosen.</p><h5>Normal</h5><p>	See the normal rules on the effects of <a href="/srd/combat/combatModifiers.htm#cover">cover</a> and <a href="/srd/combat/combatModifiers.htm#concealment">concealment</a>. Without this feat, a character who shoots or throws a ranged weapon at a target involved in a <a href="/srd/combat/specialAttacks.htm#grapple">grapple</a> must roll randomly to see which grappling combatant the attack strikes.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Precise Shot as one of his fighter bonus feats.</p><p>	An 11th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the archery combat style is treated as having Improved Precise Shot, even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
			break;	
		*/
		case "improvedShieldBash" :
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisite</h5><p><a href="#shieldProficiency">Shield Proficiency</a>.</p><h5>Benefit</h5><p>	When you perform a <a href="/srd/combat/specialAttacks.htm#shieldBashAttacks">shield bash</a>, you may still apply the shield’s <a href="/srd/theBasics.htm#shieldBonus">shield bonus</a> to your AC.</p><h5>Normal</h5><p>	Without this feat, a character who performs a <a href="/srd/combat/specialAttacks.htm#shieldBashAttacks">shield bash</a> loses the shield’s <a href="/srd/theBasics.htm#shieldBonus">shield bonus</a> to AC until his or her next turn.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Shield Bash as one of his fighter bonus feats';
			break;	
		case "improvedSunder" :
			if (charStr >= 13 && selectedFeat2 == "powerAttack") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you <a href="/srd/combat/specialAttacks.htm#sunder">strike at an object held or carried by an opponent</a> (such as a weapon or shield), you do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a>.</p><p>	You also gain a +4 bonus on any <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> made to attack an object held or carried by another character.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you strike at an object held or carried by another character.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Sunder as one of his fighter bonus feats.</p>';
			} else if (charStr >= 13 && selectedFighterFeat == "powerAttack") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Str 13, <a href="#powerAttack">Power Attack</a>.</p><h5>Benefit</h5><p>	When you <a href="/srd/combat/specialAttacks.htm#sunder">strike at an object held or carried by an opponent</a> (such as a weapon or shield), you do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a>.</p><p>	You also gain a +4 bonus on any <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> made to attack an object held or carried by another character.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you strike at an object held or carried by another character.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Sunder as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a strength score of at least 13 and the <a href="#powerAttack">Power Attack</a> feat before you can select this feat.';
			}
			break;	
		case "improvedTrip" :
			if (charInt >= 13 && selectedFeat2 == "combatExpertise") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#trip">trip</a> an opponent while you are unarmed. You also gain a +4 bonus on your Strength check to trip your opponent.</p><p>	If you trip an opponent in melee combat, you immediately get a melee attack against that opponent as if you hadn’t used your attack for the trip attempt.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#trip">trip</a> an opponent while you are unarmed.</p><h5>Special</h5><p>	At 6th level, a <a href="/srd/classes/monk.htm">monk</a> may select Improved Trip as a bonus feat, even if she does not have the prerequisites.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Trip as one of his fighter bonus feats.</p>';
			} else if (charInt >= 13 && selectedFighterFeat == "combatExpertise") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Int 13, <a href="#combatExpertise">Combat Expertise</a>.</p><h5>Benefit</h5><p>	You do not provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#trip">trip</a> an opponent while you are unarmed. You also gain a +4 bonus on your Strength check to trip your opponent.</p><p>	If you trip an opponent in melee combat, you immediately get a melee attack against that opponent as if you hadn’t used your attack for the trip attempt.</p><h5>Normal</h5><p>	Without this feat, you provoke an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> when you attempt to <a href="/srd/combat/specialAttacks.htm#trip">trip</a> an opponent while you are unarmed.</p><h5>Special</h5><p>	At 6th level, a <a href="/srd/classes/monk.htm">monk</a> may select Improved Trip as a bonus feat, even if she does not have the prerequisites.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Trip as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need an intelligence score of at least 13 and the <a href="#combatExpertise">Combat Expertise</a> feat before you can select this feat.';
			}
			break;	
		case "improvedTurning" :
			if (class1 == "cleric") {
				document.getElementById("feat1Info").innerHTML = '<p>You turn or rebuke creatures as if you were one level higher than you are in the class that grants you the ability.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'Only clerics may select this feat.';
			}
			break;	
		case "improvedTwoWeaponFighting" :
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Dex 17, <a href="#twoWeaponFighting">Two-Weapon Fighting</a>, base attack bonus +6.</p><h5>Benefit</h5><p>	In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty.  See the <a href="/srd/combat/specialAttacks.htm#twoWeaponFighting">Two-Weapon Fighting</a> special attack.</p><h5>Normal</h5><p>	Without this feat, you can only get a single extra attack with an off-hand weapon.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Two-Weapon Fighting as one of his fighter bonus feats.</p><p>	A 6th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the two-weapon combat style is treated as having Improved Two-Weapon Fighting, even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
			break;	
		case "improvedUnarmedStrike" :
			document.getElementById("feat1Info").innerHTML = '<h5>Benefit</h5><p>	You are considered to be armed even when unarmed —that is, you do not provoke attacks or opportunity from armed opponents when you attack them while unarmed. However, you still get an <a href="/srd/combat/attacksOfOpportunity.htm">attack of opportunity</a> against any opponent who makes an unarmed attack on you.</p><p>	In addition, your <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strikes</a> can deal lethal or <a href="/srd/combat/injuryandDeath.htm#nonlethalDamage">nonlethal damage</a>, at your option.</p><h5>Normal</h5><p>	Without this feat, you are considered unarmed when attacking with an <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strike</a>, and you can deal only <a href="/srd/combat/injuryandDeath.htm#nonlethalDamage">nonlethal damage</a> with such an attack.</p><h5>Special</h5><p>	A <a href="/srd/classes/monk.htm">monk</a> automatically gains Improved Unarmed Strike as a bonus feat at 1st level. She need not select it.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Improved Unarmed Strike as one of his fighter bonus feats.</p>';
			break;	
		case "investigator" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/gatherInformation.htm">Gather Information</a> checks and <a href="/srd/skills/search.htm">Search</a> checks.';
			break;	
		case "ironWill" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/combat/combatStatistics.htm#reflex">Will saving throws</a>.';
			break;
		/* 
		
		This feat is too complicated to implement just yet. -AL 	
		
		case "leadership" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		*/
		case "lightningReflexes" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/combat/combatStatistics.htm#reflex">Reflex saving throws</a>';
			break;	
		case "magicalAptitude" :
			document.getElementById("feat1Info").innerHTML = '<p>	You get a +2 bonus on all <a href="/srd/skills/spellcraft.htm">Spellcraft</a> checks and <a href="/srd/skills/useMagicDevice.htm">Use Magic Device</a> checks.</p>';
			break;
		/*
		
		1st-level characters can't meet the prereqs for this feat.
		
		case "manyshot" :
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Dex 17, <a href="#pointBlankShot">Point Blank Shot</a>, <a href="#rapidShot">Rapid Shot</a>, base attack bonus +6</p><h5>Benefit</h5><p>As a <a href="/srd/combat/actionsInCombat.htm#standardActions">standard action</a>, you may fire two arrows at a single opponent within 30 feet. Both arrows use the same <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> (with a -4 penalty) to determine success and deal damage normally (but see Special).</p><p>	For every five points of base attack bonus you have above +6, you may add one additional arrow to this attack, to a maximum of four arrows at a base attack bonus of +16. However, each arrow after the second adds a cumulative -2 penalty on the <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a> (for a total penalty of -6 for three arrows and -8 for four).</p><p>	<a href="/srd/specialAbilities.htm#damageReduction">Damage reduction</a> and other resistances apply separately against each arrow fired.</p><h5>Special</h5><p>	Regardless of the number of arrows you fire, you apply precision-based damage only once. If you score a <a href="/srd/combat/actionsInCombat.htm#criticalHits">critical hit</a>, only the first arrow fired deals critical damage; all others deal regular damage.</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Manyshot as one of his fighter bonus feats.</p><p>	A 6th-level <a href="/srd/classes/ranger.htm">ranger</a> who has chosen the archery combat style is treated as having Manyshot even if he does not have the prerequisites for it, but only when he is wearing light or no armor.</p>';
			break;
		*/
		case "martialWeaponProficiency" :
			document.getElementById("feat1Info").innerHTML = '<p>	Choose a type of <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">martial weapon</a>. You understand how to use that type of martial weapon in combat.</p><h5>Benefit</h5><p>	You make <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> with the selected weapon normally.</p><h5>Normal</h5><p>	When using a weapon with which you are not <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a>, you take a -4 penalty on <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>.</p><h5>Special</h5><p>	<a href="/srd/classes/barbarian.htm">Barbarians</a>, <a href="/srd/classes/fighter.htm">fighters</a>, <a href="/srd/classes/paladin.htm">paladins</a>, and <a href="/srd/classes/ranger.htm">rangers</a> are <a href="/srd/combat/combatModifiers.htm#weaponArmorAndShieldProficiency">proficient</a> with all <a href="/srd/equipment/weapons.htm#simpleMartialandExoticWeapons">martial weapons</a>. They need not select this feat.</p><p>	You can gain Martial Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of weapon.</p><p>	A <a href="/srd/classes/cleric.htm">cleric</a> who chooses the War domain automatically gains the Martial Weapon Proficiency feat related to his deity’s favored weapon as a bonus feat, if the weapon is a martial one. He need not select it.</p>';
			break;	
		case "mobility" :
			if (charDex >= 13) {
				document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Dex 13, <a href="#dodge">Dodge</a>.</p><h5>Benefit</h5><p>	You get a +4 <a href="/srd/theBasics.htm#dodgeBonus">dodge bonus</a> to Armor Class against <a href="/srd/combat/attacksOfOpportunity.htm">attacks of opportunity</a> caused when you move out of or within a threatened area. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses.</p><p>	<a href="/srd/theBasics.htm#dodgeBonus">Dodge bonuses</a> stack with each other, unlike most types of bonuses.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Mobility as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a dexterity score of at least 13 to select this feat.';
			}
			break;
		case "mountedArchery" :
			if (rideRanks >= 1 && selectedFeat2 == "mountedCombat") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank, <a href="#mountedCombat">Mounted Combat</a>.</p><h5>Benefit</h5><p>	The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Mounted Archery as one of his fighter bonus feats.</p>';
			} else if (rideRanks >= 1 && selectedFighterFeat == "mountedCombat") {
				document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank, <a href="#mountedCombat">Mounted Combat</a>.</p><h5>Benefit</h5><p>	The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Mounted Archery as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank, <a href="#mountedCombat">Mounted Combat</a>';
			}
				break;	
		case "mountedCombat" :
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisite</h5><p>	<a href="/srd/skills/ride.htm">Ride</a> 1 rank.</p><h5>Benefit</h5><p>	Once per round when your mount is hit in combat, you may attempt a <a href="/srd/skills/ride.htm">Ride</a> check (as a reaction) to negate the hit. The hit is negated if your <a href="/srd/skills/ride.htm">Ride</a> check result is greater than the opponent’s <a href="/srd/combat/combatStatistics.htm#attackRoll">attack roll</a>. (Essentially, the <a href="/srd/skills/ride.htm">Ride</a> check result becomes the mount’s Armor Class if it’s higher than the mount’s regular AC.)</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Mounted Combat as one of his fighter bonus feats.</p>';
			break;	
		case "naturalSpell" :
			if (charWis >= 13 && class1 == "druid") {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisites</h5><p>	Wis 13, wild shape ability.</p><h5>Benefit</h5><p>	You can complete the verbal and somatic components of spells while in a wild shape. You substitute various noises and gestures for the normal verbal and somatic components of a spell.</p><p>	You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while in a wild shape.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'Only druids with a wisdom score of 13 or higher can select this feat.'
			}
			break;	
		case "negotiator" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/diplomacy.htm">Diplomacy</a> checks and <a href="/srd/skills/senseMotive.htm">Sense Motive</a> checks.';
			break;	
		case "nimbleFingers" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/disableDevice.htm">Disable Device</a> checks and <a href="/srd/skills/openLock.htm">Open Lock</a> checks.';
			break;	
		case "persuasive" :
			document.getElementById("feat1Info").innerHTML = 'You get a +2 bonus on all <a href="/srd/skills/bluff.htm">Bluff</a> checks and <a href="/srd/skills/intimidate.htm">Intimidate</a> checks.';
			break;	
		case "pointBlankShot" :
			document.getElementById("feat1Info").innerHTML = 'You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.</p><h5>Special</h5><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Point Blank Shot as one of his fighter bonus feats';
			break;	
		case "powerAttack" :
			if (charStr >= 13) {
			document.getElementById("feat1Info").innerHTML = '<h5>Prerequisite</h5><p>	Str 13.</p><h5>Benefit</h5><p>	On your action, before making <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a> for a round, you may choose to subtract a number from all melee attack rolls and add the same number to all melee damage rolls. This number may not exceed your base attack bonus. The penalty on attacks and bonus on damage apply until your next turn.</p><h5>Special</h5><p>	If you attack with a two-handed weapon, or with a one-handed weapon wielded in two hands, instead add twice the number subtracted from your <a href="/srd/combat/combatStatistics.htm#attackRoll">attack rolls</a>. You can’t add the bonus from Power Attack to the damage dealt with a light weapon (except with <a href="/srd/equipment/weapons.htm#unarmedStrike">unarmed strikes</a> or <a href="/srd/specialAbilities.htm#naturalWeapons">natural weapon</a> attacks), even though the penalty on attack rolls still applies. (Normally, you treat a <a href="/srd/equipment/weapons.htm#doubleWeapons">double weapon</a> as a one-handed weapon and a light weapon. If you choose to use a double weapon like a two-handed weapon, attacking with only one end of it in a round, you treat it as a two-handed weapon.)</p><p>	A <a href="/srd/classes/fighter.htm">fighter</a> may select Power Attack as one of his fighter bonus feats.</p>';
			} else {
				document.getElementById("feat1Info").innerHTML = 'You need a strength score of at least 13 to select this feat.';
			}
				break;	
		case "preciseShot" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "quickDraw" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "rapidReload" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "rapidShot" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "rideByAttack" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "run" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "selfSufficient" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "shieldProficiency" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "shotOnTheRun" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "simpleWeaponProficiency" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "skillFocus" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "snatchArrows" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "spellFocus" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "spellMastery" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "spellPenetration" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "spiritedCharge" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "springAttack" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "stealthy" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "stunningFist" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "toughness" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "towerShieldProficiency" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "track" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "trample" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "twoWeaponDefense" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "twoWeaponFighting" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "weaponFinesse" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "weaponFocus" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "weaponSpecialization" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "whirlwindAttack" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "brewPotion" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "craftMagicArmsAndArmor" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "craftRod" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "craftStaff" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "craftWand" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "craftWondrousItem" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "forgeRing" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "scribeScroll" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "empowerSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "enlargeSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "extendSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "heightenSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "maximizeSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "quickenSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "silentSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "stillSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
		case "widenSpell" :
			document.getElementById("feat1Info").innerHTML = '';
			break;	
	}
	
	//document.getElementById("feat1Info").innerHTML = selectedFeat1;
	//document.getElementById("feat2Info").innerHTML = selectedFeat2;
	//document.getElementById("fighterFeatInfo").innerHTML = selectedFighterFeat;
}

function getAllIds() {
	var ids = document.querySelectorAll('[id]');
	Array.prototype.forEach.call( ids, function( el, i ) {
    console.log( el.id );
});
}