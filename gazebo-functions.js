/* --- BEGIN ability score point-buy system --- */

function buyAb(thisAb) {
	charPoints = parseInt(document.getElementById("pointBank").value);
	charAb = thisAb.value;
	if (charAb <= 13 && charPoints >= 1) {
		thisAb.value++;
		charPoints--;
	} else if (charAb == 14  && charPoints >= 2 || charAb == 15 && charPoints >= 2) {
		thisAb.value++;
		charPoints -= 2;
	} else if (charAb == 16 && charPoints >= 3 || charAb == 17 && charPoints >= 3) {
		thisAb.value++;
		charPoints -= 3;
	}
	document.getElementById("pointBank").value = charPoints;
}

function sellAb(thisAb) {
	charPoints = parseInt(document.getElementById("pointBank").value);
	charAb = thisAb.value;
	if (charAb >= 9 && charAb <= 14 && charPoints < 25 && charPoints >= 0) {
		thisAb.value--;
		charPoints++;
	} else if (charAb == 15 || charAb == 16) {
		thisAb.value--;
		charPoints += 2;
	} else if (charAb == 17 || charAb == 18) {
		thisAb.value--;
		charPoints += 3;
	} 
	document.getElementById("pointBank").value = charPoints;
}

function setFullAbs() {
	document.getElementById("strFull").value = parseInt(document.getElementById("strBase").value) + parseInt(document.getElementById("strRaceMod").value);
	document.getElementById("dexFull").value = parseInt(document.getElementById("dexBase").value) + parseInt(document.getElementById("dexRaceMod").value);
	document.getElementById("conFull").value = parseInt(document.getElementById("conBase").value) + parseInt(document.getElementById("conRaceMod").value);
	document.getElementById("intFull").value = parseInt(document.getElementById("intBase").value) + parseInt(document.getElementById("intRaceMod").value);
	document.getElementById("wisFull").value = parseInt(document.getElementById("wisBase").value) + parseInt(document.getElementById("wisRaceMod").value);
	document.getElementById("chaFull").value = parseInt(document.getElementById("chaBase").value) + parseInt(document.getElementById("chaRaceMod").value);
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

/* --- END ability score point-buy system --- */


/* --- BEGIN race and class features system --- */

function setRaceFeatures() {
	
	//Get relevant info from the form
	race = document.getElementById("raceSelect").value;
	
	//Set values of ability score modifiers and base land speed dependent on selected race
	switch (race) {
		case "human":
			document.getElementById("strRaceMod").value = 0;
			document.getElementById("dexRaceMod").value = 0;
			document.getElementById("conRaceMod").value = 0;
			document.getElementById("intRaceMod").value = 0;
			document.getElementById("wisRaceMod").value = 0;
			document.getElementById("chaRaceMod").value = 0;
			document.getElementById("baseSpeed").value = 30;
		break;
		case "dwarf":
			document.getElementById("strRaceMod").value = 0;
			document.getElementById("dexRaceMod").value = 0;
			document.getElementById("conRaceMod").value = "2";
			document.getElementById("intRaceMod").value = 0;
			document.getElementById("wisRaceMod").value = 0;
			document.getElementById("chaRaceMod").value = "-2";
			document.getElementById("baseSpeed").value = 20;
		break;
		case "elf":
			document.getElementById("strRaceMod").value = 0;
			document.getElementById("dexRaceMod").value = "2";
			document.getElementById("conRaceMod").value = "-2";
			document.getElementById("intRaceMod").value = 0;
			document.getElementById("wisRaceMod").value = 0;
			document.getElementById("chaRaceMod").value = 0;
			document.getElementById("baseSpeed").value = 30;
		break;
		case "gnome":
			document.getElementById("strRaceMod").value = "-2";
			document.getElementById("dexRaceMod").value = 0;
			document.getElementById("conRaceMod").value = "2";
			document.getElementById("intRaceMod").value = 0;
			document.getElementById("wisRaceMod").value = 0;
			document.getElementById("chaRaceMod").value = 0;
			document.getElementById("baseSpeed").value = 20;
		break;
		case "halfElf":
			document.getElementById("strRaceMod").value = 0;
			document.getElementById("dexRaceMod").value = 0;
			document.getElementById("conRaceMod").value = 0;
			document.getElementById("intRaceMod").value = 0;
			document.getElementById("wisRaceMod").value = 0;
			document.getElementById("chaRaceMod").value = 0;
			document.getElementById("baseSpeed").value = 30;
		break;
		case "halfOrc":
			document.getElementById("strRaceMod").value = "2";
			document.getElementById("dexRaceMod").value = 0;
			document.getElementById("conRaceMod").value = 0;
			document.getElementById("intRaceMod").value = "-2";
			document.getElementById("wisRaceMod").value = 0;
			document.getElementById("chaRaceMod").value = "-2";
			document.getElementById("baseSpeed").value = 30;
		break;
		case "halfling":
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
		break;
	}
}

function setClassFeatures() {
	
	//Get relevant info from the form
  class1 = document.getElementById("classSelect").value;
	conMod = parseInt(document.getElementById("conMod").value);
	intMod = parseInt(document.getElementById("intMod").value);
		
	//Set values of some variables dependent on what class has been selected
	switch (class1) {
		case "noneSelected":
			fort = "0";
			ref = "0";
			will = "0";
			hpBase = "0";
			attack = "0";
			skillBank = "0";
		break;
		case "barbarian":
			fort = "2";
			ref = "0";
			will = "0";
			hpBase = "12";
			attack = "1";
			skillBank = (4 + intMod) * 4;
		break;
		case "bard":
			fort = "0";
			ref = "2";
			will = "2";
			hpBase = "6";
			attack = "0";
			skillBank = (6 + intMod) * 4;
		break;
		case "cleric":
			fort = "2";
			ref = "0";
			will = "2";
			hpBase = "8";
			attack = "0";
			skillBank = (2 + intMod) * 4;
		break;
		case "druid":
			fort = "2";
			ref = "0";
			will = "2";
			hpBase = "8";
			attack = "0";
			skillBank = (4 + intMod) * 4;
		break;	
		case "fighter":
			fort = "2";
			ref = "0";
			will = "0";
			hpBase = "10";
			attack = "1";
			skillBank = (2 + intMod) * 4;
		break;
		case "monk":
			fort = "2";
			ref = "2";
			will = "2";
			hpBase = "8";
			attack = "0";
			skillBank = (4 + intMod) * 4;
		break;
		case "paladin":
			fort = "2";
			ref = "0";
			will = "0";
			hpBase = "10";
			attack = "1";
			skillBank = (2 + intMod) * 4;
		break;
		case "ranger":
			fort = "2";
			ref = "0";
			will = "0";
			hpBase = "8";
			attack = "1";
			skillBank = (6 + intMod) * 4;
		break;
		case "rogue":
			fort = "2";
			ref = "2";
			will = "0";
			hpBase = "6";
			attack = "0";
			skillBank = (8 + intMod) * 4;
		break;
		case "sorcerer":
			fort = "0";
			ref = "0";
			will = "2";
			hpBase = "4";
			attack = "0";
			skillBank = (2 + intMod) * 4;
		break;
		case "wizard":
			fort = "0";
			ref = "0";
			will = "2";
			hpBase = "4";
			attack = "0";
			skillBank = (2 + intMod) * 4;
		break;
	}
		
	//Take values determined by class switch statement and add them to the form
	document.getElementById("hpCon").value = (+conMod);
	document.getElementById("hpClass").value = (+hpBase);
	document.getElementById("hpTotal").value = (+hpBase) + (+conMod);
  document.getElementById("fortClass").value = fort;
  document.getElementById("refClass").value = ref;
  document.getElementById("willClass").value = will;
	document.getElementById("baseAttack").value = attack;
	document.getElementById("skillBank").value = (+skillBank);
	
}

function setHP() {
	// Even though this is also done by setClassFeatures(), I wanted to include a smaller function to run whenever conBase is changed. This way all class-related stuff doesn't get reset each time conBase changes. Could also be used in other cases, potentially? 
	conMod = document.getElementById("conMod").value;
	hpBase = document.getElementById("hpClass").value;
	document.getElementById("hpCon").value = (+conMod);
	document.getElementById("hpTotal").value = (+hpBase) + (+conMod);
}

function setInit() {
	dex = document.getElementById("dexMod").value;
	other = "0"; // Placeholder value until feats and special items are incorporated
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

/* --- END race and class features system --- */


/* --- BEGIN skill buy system --- */

function resetSkillBank() {
	// In case user changes INT scores after selecting class.
	// Maybe create an alert/confirm for this?
	level = parseInt(document.getElementById("level").value);
	class1 = document.getElementById("classSelect").value;
	intMod = parseInt(document.getElementById("intMod").value);
	switch(class1) {
		case "barbarian" :
			skillBank = (4 + intMod) * 4;
			break;
		case "bard" :
			skillBank = (6 + intMod) * 4;
			break;
		case "cleric" :
			skillBank = (2 + intMod) * 4;
			break;
		case "druid" :
			skillBank = (4 + intMod) * 4;
			break;
		case "fighter" :
			skillBank = (2 + intMod) * 4;
			break;
		case "monk" :
			skillBank = (4 + intMod) * 4;
			break;
		case "paladin" :
			skillBank = (2 + intMod) * 4;
			break;
		case "ranger" :
			skillBank = (6 + intMod) * 4;
			break;
		case "rogue" :
			skillBank = (8 + intMod) * 4;
			break;
		case "sorcerer" :
			skillBank = (2 + intMod) * 4;
			break;
		case "wizard" :
			skillBank = (2 + intMod) * 4;
	}
	document.getElementById("skillBank").value = (+skillBank);
	document.getElementById("maxRanksClass").value = (+level) + 3;
	document.getElementById("maxRanksCrossClass").value = (+level) + 1;
	
	// Zero out the ranks themselves
	allSkillRanks = document.getElementsByClassName("skillRank");
	for (i = 0; i < allSkillRanks.length; i++) {
		document.getElementsByClassName("skillRank")[i].value = 0;
	}
	
}

function buySkill(thisSkill) {
	className = thisSkill.className;
	skillBank = parseInt(document.getElementById("skillBank").value);
	maxRanksClass = parseInt(document.getElementById("maxRanksClass").value);
	maxRanksCrossClass = parseInt(document.getElementById("maxRanksCrossClass").value);
	if (className.includes("classSkill") && thisSkill.value < maxRanksClass && skillBank > 0) {
		skillBank--;
		thisSkill.value++;
	} else if (className.includes("crossClassSkill") && thisSkill.value < maxRanksCrossClass && skillBank >1) {
		skillBank -= 2;
		thisSkill.value++;
	}
	document.getElementById("skillBank").value = skillBank;
}

function sellSkill(thisSkill) {
	className = thisSkill.className;
	skillBank = parseInt(document.getElementById("skillBank").value);
	maxRanksClass = parseInt(document.getElementById("maxRanksClass").value);
	maxRanksCrossClass = parseInt(document.getElementById("maxRanksCrossClass").value);
	if (className.includes("classSkill") && thisSkill.value > 0) {
		skillBank++;
		thisSkill.value--;
	} else if (className.includes("crossClassSkill") && thisSkill.value > 0) {
		skillBank += 2;
		thisSkill.value--;
	}
	document.getElementById("skillBank").value = skillBank;
}

function setSkillBonus(skillBonus, abilityMod, skillRanks, raceSyn, miscMod, favoredEnemy, armorCheck) {
	skillBonus, abilityMod, skillRanks, raceSyn, miscMod, favoredEnemy, armorCheck
}

/* --- END skill buy system --- */