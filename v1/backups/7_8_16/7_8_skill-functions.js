function getRanks(skillName) {
	var begin = skillName.value;
	document.getElementById("rankStart").value = begin;
}

function setRanks(skillName) {
	var begin = parseInt(document.getElementById("rankStart").value);
	var end = skillName.value;
	var bank = parseInt(document.getElementById("skillBank").value);
	if (begin == "0" && end == "1") {
		bank -= 1;
	} else if (begin == "1" && end == "2") {
		bank -= 1;
	} else if (begin == "2" && end == "3") {
		bank -= 1;
	} else if (begin == "3" && end == "4") {
		bank -= 1;
	} else if (begin == "4" && end == "3") {
		bank += 1;
	} else if (begin == "3" && end == "2") {
		bank += 1;
	} else if (begin == "2" && end == "1") {
		bank += 1;
	} else if (begin == "1" && end == "0") {
		bank += 1;
	}
	document.getElementById("skillBank").value = bank;
}

function updateSkills() {
	document.getElementById("appraiseSkillBonus").value = parseInt(document.getElementById("appraiseAbilityMod").value) + parseInt(document.getElementById("appraiseRank").value) + parseInt(document.getElementById("appraiseRaceSyn").value) + parseInt(document.getElementById("appraiseMisc").value);
	document.getElementById("balanceSkillBonus").value = parseInt(document.getElementById("balanceAbilityMod").value) + parseInt(document.getElementById("balanceRank").value) + parseInt(document.getElementById("balanceRaceSyn").value) + parseInt(document.getElementById("balanceMisc").value);
	document.getElementById("bluffSkillBonus").value = parseInt(document.getElementById("bluffAbilityMod").value) + parseInt(document.getElementById("bluffRank").value) + parseInt(document.getElementById("bluffRaceSyn").value) + parseInt(document.getElementById("bluffMisc").value);
	document.getElementById("climbSkillBonus").value = parseInt(document.getElementById("climbAbilityMod").value) + parseInt(document.getElementById("climbRank").value) + parseInt(document.getElementById("climbRaceSyn").value) + parseInt(document.getElementById("climbMisc").value);
	document.getElementById("concentrationSkillBonus").value = parseInt(document.getElementById("concentrationAbilityMod").value) + parseInt(document.getElementById("concentrationRank").value) + parseInt(document.getElementById("concentrationRaceSyn").value) + parseInt(document.getElementById("concentrationMisc").value);
	document.getElementById("decipherScriptSkillBonus").value = parseInt(document.getElementById("decipherScriptAbilityMod").value) + parseInt(document.getElementById("decipherScriptRank").value) + parseInt(document.getElementById("decipherScriptRaceSyn").value) + parseInt(document.getElementById("decipherScriptMisc").value);
	document.getElementById("diplomacySkillBonus").value = parseInt(document.getElementById("diplomacyAbilityMod").value) + parseInt(document.getElementById("diplomacyRank").value) + parseInt(document.getElementById("diplomacyRaceSyn").value) + parseInt(document.getElementById("diplomacyMisc").value);
	document.getElementById("disableDeviceSkillBonus").value = parseInt(document.getElementById("disableDeviceAbilityMod").value) + parseInt(document.getElementById("disableDeviceRank").value) + parseInt(document.getElementById("disableDeviceRaceSyn").value) + parseInt(document.getElementById("disableDeviceMisc").value);
	document.getElementById("disguiseSkillBonus").value = parseInt(document.getElementById("disguiseAbilityMod").value) + parseInt(document.getElementById("disguiseRank").value) + parseInt(document.getElementById("disguiseRaceSyn").value) + parseInt(document.getElementById("disguiseMisc").value);
	document.getElementById("escapeArtistSkillBonus").value = parseInt(document.getElementById("escapeArtistAbilityMod").value) + parseInt(document.getElementById("escapeArtistRank").value) + parseInt(document.getElementById("escapeArtistRaceSyn").value) + parseInt(document.getElementById("escapeArtistMisc").value);
	document.getElementById("forgerySkillBonus").value = parseInt(document.getElementById("forgeryAbilityMod").value) + parseInt(document.getElementById("forgeryRank").value) + parseInt(document.getElementById("forgeryRaceSyn").value) + parseInt(document.getElementById("forgeryMisc").value);
	document.getElementById("gatherInformationSkillBonus").value = parseInt(document.getElementById("gatherInformationAbilityMod").value) + parseInt(document.getElementById("gatherInformationRank").value) + parseInt(document.getElementById("gatherInformationRaceSyn").value) + parseInt(document.getElementById("gatherInformationMisc").value);
	document.getElementById("handleAnimalSkillBonus").value = parseInt(document.getElementById("handleAnimalAbilityMod").value) + parseInt(document.getElementById("handleAnimalRank").value) + parseInt(document.getElementById("handleAnimalRaceSyn").value) + parseInt(document.getElementById("handleAnimalMisc").value);
	document.getElementById("healSkillBonus").value = parseInt(document.getElementById("healAbilityMod").value) + parseInt(document.getElementById("healRank").value) + parseInt(document.getElementById("healRaceSyn").value) + parseInt(document.getElementById("healMisc").value);
	document.getElementById("hideSkillBonus").value = parseInt(document.getElementById("hideAbilityMod").value) + parseInt(document.getElementById("hideRank").value) + parseInt(document.getElementById("hideRaceSyn").value) + parseInt(document.getElementById("hideMisc").value);
	document.getElementById("intimidateSkillBonus").value = parseInt(document.getElementById("intimidateAbilityMod").value) + parseInt(document.getElementById("intimidateRank").value) + parseInt(document.getElementById("intimidateRaceSyn").value) + parseInt(document.getElementById("intimidateMisc").value);
	document.getElementById("jumpSkillBonus").value = parseInt(document.getElementById("jumpAbilityMod").value) + parseInt(document.getElementById("jumpRank").value) + parseInt(document.getElementById("jumpRaceSyn").value) + parseInt(document.getElementById("jumpMisc").value);
	document.getElementById("listenSkillBonus").value = parseInt(document.getElementById("listenAbilityMod").value) + parseInt(document.getElementById("listenRank").value) + parseInt(document.getElementById("listenRaceSyn").value) + parseInt(document.getElementById("listenMisc").value);
	document.getElementById("moveSilentlySkillBonus").value = parseInt(document.getElementById("moveSilentlyAbilityMod").value) + parseInt(document.getElementById("moveSilentlyRank").value) + parseInt(document.getElementById("moveSilentlyRaceSyn").value) + parseInt(document.getElementById("moveSilentlyMisc").value);
	document.getElementById("openLockSkillBonus").value = parseInt(document.getElementById("openLockAbilityMod").value) + parseInt(document.getElementById("openLockRank").value) + parseInt(document.getElementById("openLockRaceSyn").value) + parseInt(document.getElementById("openLockMisc").value);
	document.getElementById("rideSkillBonus").value = parseInt(document.getElementById("rideAbilityMod").value) + parseInt(document.getElementById("rideRank").value) + parseInt(document.getElementById("rideRaceSyn").value) + parseInt(document.getElementById("rideMisc").value);
	document.getElementById("searchSkillBonus").value = parseInt(document.getElementById("searchAbilityMod").value) + parseInt(document.getElementById("searchRank").value) + parseInt(document.getElementById("searchRaceSyn").value) + parseInt(document.getElementById("searchMisc").value);
	document.getElementById("senseMotiveSkillBonus").value = parseInt(document.getElementById("senseMotiveAbilityMod").value) + parseInt(document.getElementById("senseMotiveRank").value) + parseInt(document.getElementById("senseMotiveRaceSyn").value) + parseInt(document.getElementById("senseMotiveMisc").value);
	document.getElementById("sleightOfHandSkillBonus").value = parseInt(document.getElementById("sleightOfHandAbilityMod").value) + parseInt(document.getElementById("sleightOfHandRank").value) + parseInt(document.getElementById("sleightOfHandRaceSyn").value) + parseInt(document.getElementById("sleightOfHandMisc").value);
	document.getElementById("spellcraftSkillBonus").value = parseInt(document.getElementById("spellcraftAbilityMod").value) + parseInt(document.getElementById("spellcraftRank").value) + parseInt(document.getElementById("spellcraftRaceSyn").value) + parseInt(document.getElementById("spellcraftMisc").value);
	document.getElementById("spotSkillBonus").value = parseInt(document.getElementById("spotAbilityMod").value) + parseInt(document.getElementById("spotRank").value) + parseInt(document.getElementById("spotRaceSyn").value) + parseInt(document.getElementById("spotMisc").value);
	document.getElementById("survivalSkillBonus").value = parseInt(document.getElementById("survivalAbilityMod").value) + parseInt(document.getElementById("survivalRank").value) + parseInt(document.getElementById("survivalRaceSyn").value) + parseInt(document.getElementById("survivalMisc").value);
	document.getElementById("swimSkillBonus").value = parseInt(document.getElementById("swimAbilityMod").value) + parseInt(document.getElementById("swimRank").value) + parseInt(document.getElementById("swimRaceSyn").value) + parseInt(document.getElementById("swimMisc").value);
	document.getElementById("tumbleSkillBonus").value = parseInt(document.getElementById("tumbleAbilityMod").value) + parseInt(document.getElementById("tumbleRank").value) + parseInt(document.getElementById("tumbleRaceSyn").value) + parseInt(document.getElementById("tumbleMisc").value);
	document.getElementById("useMagicDeviceSkillBonus").value = parseInt(document.getElementById("useMagicDeviceAbilityMod").value) + parseInt(document.getElementById("useMagicDeviceRank").value) + parseInt(document.getElementById("useMagicDeviceRaceSyn").value) + parseInt(document.getElementById("useMagicDeviceMisc").value);
	document.getElementById("useRopeSkillBonus").value = parseInt(document.getElementById("useRopeAbilityMod").value) + parseInt(document.getElementById("useRopeRank").value) + parseInt(document.getElementById("useRopeRaceSyn").value) + parseInt(document.getElementById("useRopeMisc").value);
	document.getElementById("knowledgeArcanaSkillBonus").value = parseInt(document.getElementById("knowledgeArcanaAbilityMod").value) + parseInt(document.getElementById("knowledgeArcanaRank").value) + parseInt(document.getElementById("knowledgeArcanaRaceSyn").value) + parseInt(document.getElementById("knowledgeArcanaMisc").value);
	document.getElementById("knowledgeHistorySkillBonus").value = parseInt(document.getElementById("knowledgeHistoryAbilityMod").value) + parseInt(document.getElementById("knowledgeHistoryRank").value) + parseInt(document.getElementById("knowledgeHistoryRaceSyn").value) + parseInt(document.getElementById("knowledgeHistoryMisc").value);
	document.getElementById("knowledgeLocalSkillBonus").value = parseInt(document.getElementById("knowledgeLocalAbilityMod").value) + parseInt(document.getElementById("knowledgeLocalRank").value) + parseInt(document.getElementById("knowledgeLocalRaceSyn").value) + parseInt(document.getElementById("knowledgeLocalMisc").value);
	document.getElementById("knowledgePlanesSkillBonus").value = parseInt(document.getElementById("knowledgePlanesAbilityMod").value) + parseInt(document.getElementById("knowledgePlanesRank").value) + parseInt(document.getElementById("knowledgePlanesRaceSyn").value) + parseInt(document.getElementById("knowledgePlanesMisc").value);
	document.getElementById("knowledgeReligionSkillBonus").value = parseInt(document.getElementById("knowledgeReligionAbilityMod").value) + parseInt(document.getElementById("knowledgeReligionRank").value) + parseInt(document.getElementById("knowledgeReligionRaceSyn").value) + parseInt(document.getElementById("knowledgeReligionMisc").value);
}

function getThisID(element) {
	var id = element.id;
	alert("The ID is: " + id);
}
	
function getAllIds() {
	var ids = document.querySelectorAll('[id]');
	Array.prototype.forEach.call( ids, function( el, i ) {
    // "el" is your element
    console.log( el.id ); // log the ID
});
}