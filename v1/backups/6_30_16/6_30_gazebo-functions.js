var charStr;
var charDex;
var charCon;
var charInt;
var charWis;
var charCha;
var charRace;
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
	if (charStr>0 && charStr<=14 && charPoints<25) {
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
	if (charDex>0 && charDex<=14 && charPoints<25) {
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
	if (charCon>0 && charCon<=14 && charPoints<25) {
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
	if (charInt>0 && charInt<=14 && charPoints<25) {
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
	if (charWis>0 && charWis<=14 && charPoints<25) {
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
	if (charCha>0 && charCha<=14 && charPoints<25) {
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
	if(charRace == "human" || charRace == "halfElf") {
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
	} else if (charRace == "dwarf") {
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = "2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = "-2";
	} else if (charRace == "elf") {
		document.getElementById("strRaceMod").value = 0;
		document.getElementById("dexRaceMod").value = "2";
		document.getElementById("conRaceMod").value = "-2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
	} else if (charRace == "gnome") {
		document.getElementById("strRaceMod").value = "-2";
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = "2";
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
	} else if (charRace == "halfOrc") {
		document.getElementById("strRaceMod").value = "2";
		document.getElementById("dexRaceMod").value = 0;
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = "-2";
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = "-2";
	} else if (charRace == "halfling") {
		document.getElementById("strRaceMod").value = "-2";
		document.getElementById("dexRaceMod").value = "2";
		document.getElementById("conRaceMod").value = 0;
		document.getElementById("intRaceMod").value = 0;
		document.getElementById("wisRaceMod").value = 0;
		document.getElementById("chaRaceMod").value = 0;
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
	} else if (charStr==18) {
		document.getElementById("strMod").value = "4";
	} 
	if (charDex==8 || charDex==9) {
		document.getElementById("dexMod").value = "-1";
	} else if (charDex==10 || charDex==11) {
		document.getElementById("dexMod").value = "0";
	} else if (charDex==12 || charDex==13) {
		document.getElementById("dexMod").value = "1";
	} else if (charDex==14 || charDex==15) {
		document.getElementById("dexMod").value = "2";
	} else if (charDex==16 || charDex==17) {
		document.getElementById("dexMod").value = "3";
	} else if (charDex==18) {
		document.getElementById("dexMod").value = "4";
	}
	if (charCon==8 || charCon==9) {
		document.getElementById("conMod").value = "-1";
	} else if (charCon==10 || charCon==11) {
		document.getElementById("conMod").value = "0";
	} else if (charCon==12 || charCon==13) {
		document.getElementById("conMod").value = "1";
	} else if (charCon==14 || charCon==15) {
		document.getElementById("conMod").value = "2";
	} else if (charCon==16 || charCon==17) {
		document.getElementById("conMod").value = "3";
	} else if (charCon==18) {
		document.getElementById("conMod").value = "4";
	}
	if (charInt==8 || charInt==9) {
		document.getElementById("intMod").value = "-1";
	} else if (charInt==10 || charInt==11) {
		document.getElementById("intMod").value = "0";
	} else if (charInt==12 || charInt==13) {
		document.getElementById("intMod").value = "1";
	} else if (charInt==14 || charInt==15) {
		document.getElementById("intMod").value = "2";
	} else if (charInt==16 || charInt==17) {
		document.getElementById("intMod").value = "3";
	} else if (charInt==18) {
		document.getElementById("intMod").value = "4";
	}
	if (charWis==8 || charWis==9) {
		document.getElementById("wisMod").value = "-1";
	} else if (charWis==10 || charWis==11) {
		document.getElementById("wisMod").value = "0";
	} else if (charWis==12 || charWis==13) {
		document.getElementById("wisMod").value = "1";
	} else if (charWis==14 || charWis==15) {
		document.getElementById("wisMod").value = "2";
	} else if (charWis==16 || charWis==17) {
		document.getElementById("wisMod").value = "3";
	} else if (charWis==18) {
		document.getElementById("wisMod").value = "4";
	}
	if (charCha==8 || charCha==9) {
		document.getElementById("chaMod").value = "-1";
	} else if (charCha==10 || charCha==11) {
		document.getElementById("chaMod").value = "0";
	} else if (charCha==12 || charCha==13) {
		document.getElementById("chaMod").value = "1";
	} else if (charCha==14 || charCha==15) {
		document.getElementById("chaMod").value = "2";
	} else if (charCha==16 || charCha==17) {
		document.getElementById("chaMod").value = "3";
	} else if (charCha==18) {
		document.getElementById("chaMod").value = "4";
	}
}