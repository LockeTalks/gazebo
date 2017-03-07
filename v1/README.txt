Welcome! This is a little project that I'm working on to practice my Javascript. 

The goal of this project is to build a web application that makes it easy to create and manage a character sheet for the d20 tabletop gaming systemit started as just HTML, CSS, and Javascript, but now it also uses Bootstrap and jQuery. Eventually, to store/retrieve this information, we'll probably want to use PHP & MySQL or HTML5, but I'm gonna cross that bridge when I come to it.

For v1.0, I'm keeping things relatively simple. 
	-We're only building Level 1 characters for now, so by extension, we're not handling cross-class characters yet.
	-We're only using material that is available under the Open Game License; see LICENSE.txt for legal and copyright info. Homebrew, pathfinder, etc... could be added in the future.
	
Here's the TO-DO:
	
	***MAGIC - THIS IS PROBABLY GOING TO BE TOUGH***
	
	ABILITY SCORES:
		-Item bonuses
		-Temp bonuses

	SKILLS:
		-Cross class skills should cost 2 points per rank

	FEATS:
		-This is what I'm working on right now, 2/2/17
			-Tried a couple approaches. Right now is basically working on a points model, with various feats auto-checking and becoming available dependent on prerequisites (primarily class and ability scores)
		-Needs a reset button, maybe?
		
	Remaining Universal Fieldsets To Add:
		Starting Gold
		Inventory
		Equipment
		Special Abilities
		Crafting Skill
		Perform Skill
		Profession Skill
		Speak Language Skill
		Knowledge (Nature) Skill
		
	Remaining Class-Specific Fieldsets To Add:
	Bard
	Cleric:
		Deity
		Domains
		Cleric Spells
		Turn/Rebuke Undead
	Druid
		Animal companion
		Druid spells
		Wild shape
	Fighter
	Monk
	Paladin
		Mount
	Ranger
		Animal companion
		Specialization
	Rogue
		Sneak attack
	Sorcerer
		Sorcerer spells
	Wizard
		Wizard spells
		Wizard familiar

	Real CSS