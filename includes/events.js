////////////////////////////////////////////////////////////////////////////////
// Core event functions

function genIdEvt() {
	idEvt = Math.floor(Math.random() * countEvt);
}

function updateTxtEvt(){ 
		if(idEvt == -4){
			
		}
		else if(idEvt == -3){
		
		}
		else if(idEvt == -2){
		
		}
		else if(idEvt == -1){
			document.getElementById("evtTxt").innerHTML = "You have run out of money, you can no longer afford to pay the bureaucrats, people are getting restless; your minister of finance arrived this morning has informed you that the state of France has just declared bankruptcy";
		}
		if(idEvt == 0){
			document.getElementById("evtTxt").innerHTML = "In a foolish decision of faith over economy, a neighboring country banished all protestants living on their land, they want to settle in our land";
		} else if(idEvt == 1){
			document.getElementById("evtTxt").innerHTML = "Commoner rebel against you due to extreme weather hurting crop yield";
		}
		else if(idEvt == 2){
			document.getElementById("evtTxt").innerHTML = "A comet has brightened your country's sky";
		}
		else if(idEvt == 3){
			document.getElementById("evtTxt").innerHTML = "The Clergymen demanded to enforce god on nobility, the organization is worried that the nobility might cause great sin with all their wealth";
		}
		else if(idEvt == 4){
			document.getElementById("evtTxt").innerHTML = "A colony is rebelling against your empire, this could make you lose support of nobles if you don't do anything";
		}
		else if(idEvt == 5){
			document.getElementById("evtTxt").innerHTML = "Explorers have discovered a mine that could contain gold";
		}
		else if(idEvt == 6){
			document.getElementById("evtTxt").innerHTML = "There is a shortage of worker in the factory industry, a politician has proposed to put women into work for cheap price, the clergy believe women should stay at home";
		}
		else if(idEvt == 7){
			document.getElementById("evtTxt").innerHTML = "A group of commoners have become upset, claiming a noble killed one of them with his carriage, and are demanding justice. The noble denies this and requests help to control the angry mob";
		}
		else if(idEvt == 8){
			document.getElementById("evtTxt").innerHTML = "There are plans to reduce the land held by several churches have been halted by extreme opposition from the Clergy, claiming that the land is necessary to survival of the churches. However, the nobles in the areas near the churches say that they would be able to put the land to much greater use";
		}
		else if(idEvt == 9){
			document.getElementById("evtTxt").innerHTML = "A neighboring county want to want you to lower your trade restrictions";
		}
		else if(idEvt == 10){
			document.getElementById("evtTxt").innerHTML = "It is your birthday, also a national holiday";
		}
		else if(idEvt == 11){
			document.getElementById("evtTxt").innerHTML = "A wanted criminal has escaped to a neighboring country with classified intel";
		}
		else if(idEvt == 12){
			document.getElementById("evtTxt").innerHTML = "The Clergy believe that a small group of their members are converting to Protestantism and are demanding that they be exiled for herecy. However, the commoners strongly oppose this because of the aid these members provide their communities";
		}
		else if(idEvt == 13){
			document.getElementById("evtTxt").innerHTML = "A noble accused a commoner of plotting a revolt against him and demands you execute him, but the commoner says that there is no proof and that the noble is trying to take his land";
		}
		else if(idEvt == 14){
			document.getElementById("evtTxt").innerHTML = "A town crier has just been convicted of violating lèse-majesté, the law that prevents slandering the crown";
		}
		else if(idEvt == 15){
			document.getElementById("evtTxt").innerHTML = "There are riots against the church because most believe that the church has become corrupted";
		}
		else if(idEvt == 16){
			document.getElementById("evtTxt").innerHTML = "An island discovered has been discovered in the pacific ocean, whom should we name it after";
		}
		else if(idEvt == 17){
			document.getElementById("evtTxt").innerHTML = "Pirates have blocked trade from overseas, one of them was once a nobleman from your country. The politicians demand something be done about this";
		}
		else if(idEvt == 18){
			document.getElementById("evtTxt").innerHTML = "A hitman was caught sneaking around your palace, he is now safely apprehended and placed under custody of your household guards";
		}
		else if(idEvt == 19){
			document.getElementById("evtTxt").innerHTML = "A neighboring country has just increased the length of its bayonets, how should we respond";
		}
		updateBtnTxt1();
		updateBtnTxt2();
		updateControls();
}
////////////////////////////////////////////////////////////////////////////////
// Button handlers

function updateBtnTxt1(){

	//Bankrupt Event
	if(idEvt == -1){
		idOp1 = Math.floor(Math.random() * 3);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 3);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Oh! I knew I should have been more careful";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "I will take care of this shortly.....";
		}
	}
	
	//Crop Yield Event
	else if(idEvt == 1){
		idOp1 = Math.floor(Math.random() * 6);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 6);
		}	
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Let them eat cake!";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Send out gendarmerie! Supress this insurrection!";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Silence them by giving a morale boosting speech";
		}
		else if(idOp1 == 4){
			document.getElementById("btnEvt1").innerHTML = "Partially subsidize the price of bread for the people";
		}
		else if(idOp1 == 5){
			document.getElementById("btnEvt1").innerHTML = "Go to the food storage and hand out food to the citizens";
		}
	}
	
	//Comet Event
	else if(idEvt == 2){
		idOp1 = Math.floor(Math.random() * 3);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 3);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "To get power of sky itself, we must understand it";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "God's will shall not be perverted by the nobility";
		}
	}
	
	//Clergy Enforcement Event
	else if(idEvt == 3){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "The nobles have sined for too long";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "God should not interfere with the nobles lives";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Bah, screw the church, Take their belongings and give to the rich";
		}
	}
	
	//Cost of war event
	else if(idEvt == 4){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Send soldiers to that colony, force the commoners to join the army";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Do nothing, let the colony rot to death";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Use propoganda to recruit soldiers in the name of god";
		}
	}
	
	//Gold mine event
	else if(idEvt == 5){
		idOp1 = Math.floor(Math.random() * 3);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 3);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Do nothing, ignore the mine";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "You may give tax breaks for the wealthy to help them establish the mine(50% chance to find gold)";
		}
	}
	
	//Women in the factory event
	else if(idEvt == 6){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Wealth comes before god and there is an opportunity that factories can't miss";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Women should not work in the factories, they should stay at home instead";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Terrible idea! Off with his head!" ;
		}
	}
	
	//Noble Murder Event
	else if(idEvt == 7){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Arrest the noble and put him on trial";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Send in troops to subdue the commoners";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Order the noble to pay the commoners" ;
		}
	}
	
	//Land Debate Event
	else if(idEvt == 8){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Continue the plans";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Reduce the amount of land taken from the churches";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Cancel the plans" ;
		}
	}
	
	//Trade event
	else if(idEvt == 9){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Raise tariffs";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Do nothing";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Lower tarrifs";
		}
	}
	
	//Birthday event
	else if(idEvt == 10){
		idOp1 = Math.floor(Math.random() * 5);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 5);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Unite the country by giving a national speech";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Throw a lavish party that only the nobles can attend";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Raise taxes on everyone";
		}
		else if(idOp1 == 4){
			document.getElementById("btnEvt1").innerHTML = "Throw a lavish party that only the commoners can attend";
		}
	}
	
	//Wanted Criminal Event
	else if(idEvt == 11){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Do nothing, and wait";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Give in and pardon the criminal to get him back";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Your heir gets assasinated due to leaked information";
		}
	}
	
	//Protestant Event
	else if(idEvt == 0){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Let them settle in";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Drive them away";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Accept them temporarily";
		}
	}
	
	//Protestant Converting Event
	else if(idEvt == 12){
		idOp1 = Math.floor(Math.random() * 6);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 6);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Execute the clergymen for herecy";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Exile the clergymen";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Pay the Clergy to keep quiet";
		}
		else if(idOp1 == 4){
			document.getElementById("btnEvt1").innerHTML = "Send in troops to subdue the commoners and arrest the heretic clergymen";
		}
		else if(idOp1 == 5){
			document.getElementById("btnEvt1").innerHTML = "Give funds to the clergy";
		}
	}
	
	//Commoner Revolt Event
	else if(idEvt == 13){
		idOp1 = Math.floor(Math.random() * 5);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 5);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Arrest the commoner and put him on trial";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Execute the commoner";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Ignore the noble's demands";
		}
		else if(idOp1 == 4){
			document.getElementById("btnEvt1").innerHTML = "Sentence the commoner to life imprisonment in the Bastille";
		}
	}
	
	//Town Crier Event
	else if(idEvt == 14){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Execute him as should be because of lèse-majesté ";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Let him live in exile";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Allow him to be the exception to the law";
		}
	}
	
	//Corrupted Church Event
	else if(idEvt == 15){
		idOp1 = Math.floor(Math.random() * 5);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 5);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Replace key church figures and assign new ones based on your preference";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Ignore the claims";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Investigate the church to further understand the situation";
		}
		else if(idOp1 == 4){
			document.getElementById("btnEvt1").innerHTML = "Help the church to silence their enemies";
		}
	}

	//Island event
	else if(idEvt == 16){
		idOp1 = Math.floor(Math.random() * 5);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 5);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Why me of course!";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "The Clergy";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "The Nobles";
		}
		else if(idOp1 == 4){
			document.getElementById("btnEvt1").innerHTML = "A prominent businessman";
		}
	}

	//Pirates event
	else if(idEvt == 17){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Send in the navy to deal with these pesky pirates";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Send diplomats to negotiate with the pirates, these were once noblemen and will be treated as such";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Too much work, don't bother with them";
		}
	}

	//Hitman event
	else if(idEvt == 18){
		idOp1 = Math.floor(Math.random() * 6);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 6);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Interrogate the hitman on his intentions";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "Immediately execute this fool";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Let the Clergy take care of this";
		}
		else if(idOp1 == 4){
			document.getElementById("btnEvt1").innerHTML = "Let the Nobles take care of this";
		}
		else if(idOp1 == 5){
			document.getElementById("btnEvt1").innerHTML = "Let the people decide";
		}
	}

	//Bayonet event
	else if(idEvt == 19){
		idOp1 = Math.floor(Math.random() * 4);
		while(idOp1 < 1){
			idOp1 = Math.floor(Math.random() * 4);
		}
		if(idOp1 == 1){
			document.getElementById("btnEvt1").innerHTML = "Nobody should have bayonets longer than ours, we must make ours longer than theirs!";
		}
		else if(idOp1 == 2){
			document.getElementById("btnEvt1").innerHTML = "We should match our bayonet length with theirs, can't fall behind";
		}
		else if(idOp1 == 3){
			document.getElementById("btnEvt1").innerHTML = "Our bayonet length is fine as it is";
		}
	}
	
}

function updateBtnTxt2(){

	//Bankrupt Event
	if(idEvt == -1){
		idOp2 = Math.floor(Math.random() * 3);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 3);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt1").innerHTML = "Oh! I knew I should have been more careful";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt1").innerHTML = "I will take care of this shortly.....";
		}
	}
	
	//Crop yield event
	else if(idEvt == 1){
		idOp2 = Math.floor(Math.random() * 6)
		while(idOp2 == idOp1 || idOp2 < 1){	
			idOp2 = Math.floor(Math.random() * 6)
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Let them eat cake!";
		}
		else if(idOp2 == 2){

			document.getElementById("btnEvt2").innerHTML = "Send out gendarmerie! Supress this insurrection!";
		}
		else if(idOp2 == 3){

			document.getElementById("btnEvt2").innerHTML = "Silence them by giving a morale boosting speech";
		}
		else if(idOp2 == 4){
			
			document.getElementById("btnEvt2").innerHTML = "Partially subsidize the price of bread for the people";
		}
		else if(idOp2 == 5){

			document.getElementById("btnEvt2").innerHTML = "Go to the food storage and hand out food to the citizens";
		}
	}
	//Comet Event
	else if(idEvt == 2){
		idOp2 = Math.floor(Math.random() * 3);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 3);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "To get power of sky itself, we must understand it";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "God's will shall not be perverted by the nobility";
		}
	}
	
	//Clergy Enforcement Event
	else if(idEvt == 3){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "The nobles have sined for too long";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "God should not interfere with the nobles lives";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Bah, screw the church, Take their belongings and give to the rich";
		}
	}
	
	//Cost of war event
	else if(idEvt == 4){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Send soldiers to that colony, force the commoners to join the army";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Do nothing, let the colony rot to death";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Use propoganda to recruit soldiers in the name of god";
		}
	}
	
	//Gold mine event
	else if(idEvt == 5){
		idOp2 = Math.floor(Math.random() * 3);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 3);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Do nothing, ignore the mine";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "You may give tax breaks for the wealthy to help them establish the mine(50% chance to find gold)";
		}
	}
	
	//Women in the factory event
	else if(idEvt == 6){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Wealth comes before god and there is an opportunity that factories can't miss";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Women should not work in the factories, they should stay at home instead";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Terrible idea! Off with his head!" ;
		}
	}
	
	//Noble Murder Event
	else if(idEvt == 7){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Arrest the noble and put him on trial";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Send in troops to subdue the commoners";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Order the noble to pay the commoners" ;
		}
	}
	
	//Land Debate Event
	else if(idEvt == 8){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp1 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Continue the plans";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Reduce the amount of land taken from the churches";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Cancel the plans" ;
		}
	}
	
	//Trade event
	else if(idEvt == 9){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Raise tariffs";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Do nothing";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Lower tarrifs";
		}
	}
	
	//Birthday event
	else if(idEvt == 10){
		idOp2 = Math.floor(Math.random() * 5);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 5);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Unite the country by giving a national speech";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Throw a lavish party that only the nobles can attend";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Raise taxes on everyone";
		}
		else if(idOp2 == 4){
			document.getElementById("btnEvt2").innerHTML = "Throw a lavish party that only the commoners can attend";
		}
	}
	
	//Wanted Criminal Event
	else if(idEvt == 11){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Do nothing, and wait";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Give in and pardon the criminal to get him back";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Your heir gets assasinated due to leaked information";
		}
	}
	
	//Protestant Event
	else if(idEvt == 0){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Let them settle in";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Drive them away";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Accept them temporarily";
		}
	}
	
	//Protestant Converting Event
	else if(idEvt == 12){
		idOp2 = Math.floor(Math.random() * 6);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 6);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Execute the clergymen for herecy";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Exile the clergymen";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Pay the Clergy to keep quiet";
		}
		else if(idOp2 == 4){
			document.getElementById("btnEvt2").innerHTML = "Send in troops to subdue the commoners and arrest the heretic clergymen";
		}
		else if(idOp2 == 5){
			document.getElementById("btnEvt2").innerHTML = "Give funds to the clergy";
		}
	}
	
	//Commoner Revolt Event
	else if(idEvt == 13){
		idOp2 = Math.floor(Math.random() * 5);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 5);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Arrest the commoner and put him on trial";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Execute the commoner";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Ignore the noble's demands";
		}
		else if(idOp2 == 4){
			document.getElementById("btnEvt2").innerHTML = "Sentence the commoner to life imprisonment in the Bastille";
		}
	}

	//Town Crier Event
	else if(idEvt == 14){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Execute him as should be because of lèse-majesté ";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Let him live in exile";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Allow him to be the exception to the law";
		}
	}
	
	//Corrupted Church Event
	else if(idEvt == 15){
		idOp2 = Math.floor(Math.random() * 5);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 5);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Replace key church figures and assign new ones based on your preference";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Ignore the claims";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Investigate the church to further understand the situation";
		}
		else if(idOp2 == 4){
			document.getElementById("btnEvt2").innerHTML = "Help the church to silence their enemies";
		}
	}

	//Island event
	else if(idEvt == 16){
		idOp2 = Math.floor(Math.random() * 5);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 5);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Why me of course!";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "The Clergy";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "The Nobles";
		}
		else if(idOp2 == 4){
			document.getElementById("btnEvt2").innerHTML = "A prominent businessman";
		}
	}

	//Pirates event
	else if(idEvt == 17){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Send in the navy to deal with these pesky pirates";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Send diplomats to negotiate with the pirates, these were once noblemen and will be treated as such";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Too much work, don't bother with them";
		}
	}

	//Hitman event
	else if(idEvt == 18){
		idOp2 = Math.floor(Math.random() * 6);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 6);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Interrogate the hitman on his intentions";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "Immediately execute this fool";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Let the Clergy take care of this";
		}
		else if(idOp2 == 4){
			document.getElementById("btnEvt2").innerHTML = "Let the Nobles take care of this";
		}
		else if(idOp2 == 5){
			document.getElementById("btnEvt2").innerHTML = "Let the people decide";
		}
	}

	//Bayonet event
	else if(idEvt == 19){
		idOp2 = Math.floor(Math.random() * 4);
		while(idOp2 == idOp1 || idOp2 < 1){
			idOp2 = Math.floor(Math.random() * 4);
		}
		if(idOp2 == 1){
			document.getElementById("btnEvt2").innerHTML = "Nobody should have bayonets longer than ours, we must make ours longer than theirs!";
		}
		else if(idOp2 == 2){
			document.getElementById("btnEvt2").innerHTML = "We should match our bayonet length with theirs, can't fall behind";
		}
		else if(idOp2 == 3){
			document.getElementById("btnEvt2").innerHTML = "Our bayonet length is fine as it is";
		}
	}	
}

function handleBtnEvt1() {
		document.getElementById("btnTurn").style.display = "initial";
		document.getElementById("ulBtnEvt").style.display = "none";
		document.getElementById("liEvtOpt").style.display = "initial";
		document.getElementById("spanEvtOpt").innerHTML = document.getElementById("btnEvt1").innerHTML
		
		if (idEvt == -1){
			if(idOp1 == 1){
				approvalNobles -= .25;
				approvalClergy -= .25;
				approvalCommon -= .25;
				treasuryCurrent = 0;
				treasuryFuture = 0;
				outlayInterest = 0;
				taxRateNobles = 0;
				taxRateClergy = 0;
				taxRateCommon = 0;
			}
			else if(idOp1 == 2){
				approvalNobles -= .25;
				approvalClergy -= .25;
				approvalCommon -= .25;
				treasuryCurrent = 0;
				treasuryFuture = 0;
				outlayInterest = 0;
				taxRateNobles = 0;
				taxRateClergy = 0;
				taxRateCommon = 0;
			}
		}
		else if(idEvt == 1){
			if(idOp1 == 1){
				//Commoner Opinion drop by 10%
				approvalCommon -= .10;
			}	
			else if(idOp1 == 2){
				//Commoner Opinion drop by 5$
				approvalCommon -= .05;
				outlayEvt += 10000000;
			}
			else if(idOp1 == 3){
				//Commoner Opinion drop by 5$
				approvalCommon -= .05;
			}
			else if(idOp1 == 4){
				//Neutral Option
				outlayEvt += 100000000;
			}
			else if(idOp1 == 5){
				//Commoner Opinion go up by 5%
				approvalCommon += .05;
			}
		}
		
		else if(idEvt == 2){
			if(idOp1 == 1){
				approvalNobles += .05;
				approvalClergy -= .1;
			}
			else if(idOp1 == 2){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
		}
		
		else if(idEvt == 3){
			if(idOp1 == 1){
				approvalNobles -= .1;
				approvalClergy += .1;
			}
			else if(idOp1 == 2){
				approvalClergy += .05;
			}
			else if(idOp1 == 3){
				approvalNobles += .1;
				approvalClergy -= .15;
			}
		}
		
		else if(idEvt == 4){
			if(idOp1 == 1){
				approvalNobles += .15;
				approvalCommon -= .05;
			}
			else if(idOp1 == 2){
				approvalNobles -= .1;
			}
			else if(idOp1 == 3){
				approvalNobles += .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 5){
			if(idOp1 == 1){
				//Neutral
			}
			else if(idOp1 == 2){
				approvalNobles += .05;
				approvalCommon -= .1;
				outlayEvt += 30000000;
				
				var gold = Math.floor(Math.random() * 4);
				if(gold > 1){
					approvalNobles += .1;
					approvalCommon += .2;
					receiptEvt += 300000000;   
				}
				else{
					approvalCommon -= .05;
				}
			}
		}
		
		else if(idEvt == 6){
			if(idOp1 == 1){
				approvalNobles += .05;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
			else if(idOp1 == 2){
				approvalNobles -= .1;
				approvalClergy += .05;
			}
			else if(idOp1 == 3){
				approvalNobles -= .05;
				approvalClergy += .1;
			}
		}
		
		else if(idEvt == 7){
			if(idOp1 == 1){
				approvalNobles -= .1;
				approvalCommon += .1;
			}
			else if(idOp1 == 2){
				approvalNobles += .1;
				approvalClergy -= .1;
			}
			else if(idOp1 == 3){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
		}
		
		else if(idEvt == 8){
			if(idOp1 == 1){
				approvalNobles += .1;
				approvalClergy -= .1;
			}
			else if(idOp1 == 2){
				approvalClergy += .05;
			}
			else if(idOp1 == 3){
				approvalNobles -= .1;
				approvalClergy += .1;
			}
		}
		
		else if(idEvt == 9){
			if(idOp1 == 1){
				approvalNobles += .05;
				approvalCommon -= .05;
			}
			else if(idOp1 == 2){
				//Neutral
			}
			else if(idOp1 == 3){
				approvalNobles -= .05;
				approvalCommon += .05;
			}
		}
		
		else if(idEvt == 10){
			if(idOp1 == 1){
				approvalNobles += .05;
				approvalCommon += .05;
				approvalClergy += .05;
			}
			else if(idOp1 == 2){
				approvalNobles += .1;
			}
			else if(idOp1 == 3){
				approvalNobles -= .05;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
			else if(idOp1 == 4){
				approvalNobles -= .05;
				approvalCommon += .1;
			}
		}
		
		else if(idEvt == 11){
			if(idOp1 == 1){
				//Neutral
			}
			else if(idOp1 == 2){
				approvalNobles -= .1;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
			else if(idOp1 == 3){
				approvalNobles -= .15;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 0){
			if(idOp1 == 1){
				approvalNobles += .05;
				approvalClergy -= .1;
			}
			else if(idOp1 == 2){
				approvalNobles -= .05;
				approvalClergy += .1;
			}
			else if(idOp1 == 3){
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 12){
			if(idOp1 == 1){
				approvalClergy -= .1;
			}
			else if(idOp1 == 2){
				approvalNobles += .05;
				approvalClergy -= .1;
			}
			else if(idOp1 == 3){
				//Neutral
			}
			else if(idOp1 == 4){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
			else if(idOp1 == 5){
				approvalCommon += .05
			}
		}
		
		else if(idEvt == 13){
			if(idOp1 == 1){
				approvalCommon -= .05;
				approvalNobles += .05;
			}
			else if(idOp1 == 2){
				approvalCommon -= .1;
				approvalNobles += .1;
			}
			else if(idOp1 == 3){
				approvalNobles -= .1;
			}
			else if(idOp1 == 4){
				approvalCommon -= .1;
				approvalNobles += .05;
			}
		}
		
		else if(idEvt == 14){
			if(idOp1 == 1){
				approvalCommon -= .05;
				approvalNobles += .05;
				approvalClergy += .05;
			}
			else if(idOp1 == 2){
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
			else if(idOp1 == 3){
				approvalCommon += .05;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 15){
			if(idOp1 == 1){
				approvalCommon += .05;
				approvalNobles += .05;
				approvalClergy -= .15;
			}
			else if(idOp1 == 2){
				approvalCommon -= .1;
				approvalNobles -= .1;
				approvalClergy += .1;
			}
			else if(idOp1 == 3){
				approvalClergy -= .05;
			}
			else if(idOp1 == 4){
				approvalCommon -= .15;
				approvalNobles -= .15;
				approvalClergy += .15;
			}
		}
		
		else if(idEvt == 16){
			if(idOp1 == 1){
				approvalCommon -= .05;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
			else if(idOp1 == 2){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
			else if(idOp1 == 3){
				approvalNobles += .05;
				approvalClergy -= .05;
			}
			else if(idOp1 == 4){
				approvalCommon += .05;
				approvalNobles -= .1;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 17){
			if(idOp1 == 1){
				approvalCommon += .05;
				approvalNobles += .05;
				approvalClergy += .05;
			}
			else if(idOp1 == 2){
				approvalNobles -= .05;
				approvalCommon -= .05;
			}
			else if(idOp1 == 3){
				approvalCommon -= .05;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 18){
			if(idOp1 == 1){
				approvalCommon += .05;
			}
			else if(idOp1 == 2){
				approvalCommon += .05;
			}
			else if(idOp1 == 3){
				approvalNobles -= .05;
			}
			else if(idOp1 == 4){
				approvalNobles += .05;
			}
			else if(idOp1 == 5){
				approvalCommon += .1;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 19){
			if(idOp1 == 1){
				approvalCommon += .05;
				approvalClergy += .05;
				approvalNobles += .05;
			}
			else if(idOp1 == 2){
				//Neutral
			}
			else if(idOp1 == 3){
				approvalCommon -= .05;
				approvalClergy -= .05;
				approvalNobles -= .05;
			}
		}
		updateControls();
}

function handleBtnEvt2() {
		document.getElementById("btnTurn").style.display = "initial";
		document.getElementById("ulBtnEvt").style.display = "none";
		document.getElementById("liEvtOpt").style.display = "initial";
		document.getElementById("spanEvtOpt").innerHTML = document.getElementById("btnEvt2").innerHTML; 
		if (idEvt == -1){
			if(idOp2 == 1){
				approvalNobles -= .25;
				approvalClergy -= .25;
				approvalCommon -= .25;
				treasuryCurrent = 0;
				treasuryFuture = 0;
				outlayInterest = 0;
				taxRateNobles = 0;
				taxRateClergy = 0;
				taxRateCommon = 0;
			}
			else if(idOp2 == 2){
				approvalNobles -= .25;
				approvalClergy -= .25;
				approvalCommon -= .25;
				treasuryCurrent = 0;
				treasuryFuture = 0;
				outlayInterest = 0;
				taxRateNobles = 0;
				taxRateClergy = 0;
				taxRateCommon = 0;
			}
		}
		else if(idEvt == 1){
			if(idOp2 == 1){
				//Commoner Opinion drop by 10%
				approvalCommon -= .10;
			}	
			else if(idOp2 == 2){
				//Commoner Opinion drop by 5$
				approvalCommon -= .05;
				outlayEvt += 10000000;
			}
			else if(idOp2 == 3){
				//Commoner Opinion drop by 5$
				approvalCommon -= .05;
			}
			else if(idOp2 == 4){
				//Neutral Option
				outlayEvt += 100000000;
			}
			else if(idOp2 == 5){
				//Commoner Opinion go up by 5%
				approvalCommon += .05;
			}
		}
		else if(idEvt == 2){
			if(approvalCommon < .4){
				approvalCommon -= .05;
			}
			else{
				approvalCommon -= .05;
			}
			if(approvalClergy < .4){
				approvalClergy -= .05;
			}
			else{
				approvalClergy -= .05;
			}
			if(idOp2 == 1){
				approvalNobles += .05;
				approvalClergy -= .1;
			}
			else if(idOp2 == 2){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
		}
		
		else if(idEvt == 3){
			if(idOp2 == 1){
				approvalNobles -= .1;
				approvalClergy += .1;
			}
			else if(idOp2 == 2){
				approvalClergy -= .05;
			}
			else if(idOp2 == 3){
				approvalNobles += .1;
				approvalClergy -= .15;
			}
		}
		
		else if(idEvt == 4){
			if(idOp2 == 1){
				approvalNobles += .15;
				approvalCommon -= .1;
			}
			else if(idOp2 == 2){
				approvalNobles -= .1;
			}
			else if(idOp2 == 3){
				approvalNobles += .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 5){
			if(idOp2 == 1){
				//Neutral
			}
			else if(idOp2 == 2){
				approvalNobles += .05;
				approvalCommon -= .1;
				outlayEvt += 30000000;
				
				var gold = Math.floor(Math.random() * 4);
				if(gold > 1){
					approvalNobles += .1;
					approvalCommon += .2;
					receiptEvt += 300000000;   
				}
				else{
					approvalCommon -= .05;
				}
			}
		}
		
		else if(idEvt == 6){
			if(idOp2 == 1){
				approvalNobles += .05;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
			else if(idOp2 == 2){
				approvalNobles -= .1;
				approvalClergy += .05;
			}
			else if(idOp2 == 3){
				approvalNobles -= .05;
				approvalClergy += .1;
			}
		}
		
		else if(idEvt == 7){
			if(idOp2 == 1){
				approvalNobles -= .1;
				approvalCommon += .1;
			}
			else if(idOp2 == 2){
				approvalNobles += .1;
				approvalClergy -= .1;
			}
			else if(idOp2 == 3){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
		}
		
		else if(idEvt == 8){
			if(idOp2 == 1){
				approvalNobles += .1;
				approvalClergy -= .1;
			}
			else if(idOp2 == 2){
				approvalClergy += .05;
			}
			else if(idOp2 == 3){
				approvalNobles -= .1;
				approvalClergy += .1;
			}
		}
		
		else if(idEvt == 9){
			if(idOp2 == 1){
				approvalNobles += .05;
				approvalCommon -= .05;
			}
			else if(idOp2 == 2){
				//Neutral
			}
			else if(idOp2 == 3){
				approvalNobles -= .05;
				approvalCommon += .05;
			}
		}
		
		else if(idEvt == 10){
			if(idOp2 == 1){
				approvalNobles += .05;
				approvalCommon += .05;
				approvalClergy += .05;
			}
			else if(idOp2 == 2){
				approvalNobles += .1;
			}
			else if(idOp2 == 3){
				approvalNobles -= .05;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
			else if(idOp2 == 4){
				approvalNobles -= .05;
				approvalCommon += .1;
			}
		}
		
		else if(idEvt == 11){
			if(idOp1 == 1){
				//Neutral
			}
			else if(idOp1 == 2){
				approvalNobles -= .1;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
			else if(idOp1 == 3){
				approvalNobles -= .15;
				approvalCommon -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 0){
			if(idOp1 == 1){
				approvalNobles += .05;
				approvalClergy -= .1;
			}
			else if(idOp1 == 2){
				approvalNobles -= .05;
				approvalClergy += .1;
			}
			else if(idOp1 == 3){
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 12){
			if(idOp2 == 1){
				approvalClergy -= .1;
			}
			else if(idOp2 == 2){
				approvalNobles += .05;
				approvalClergy -= .1;
			}
			else if(idOp2 == 3){
				//Neutral
			}
			else if(idOp2 == 4){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
			else if(idOp2 == 5){
				approvalCommon += .05
			}
		}
		
		else if(idEvt == 13){
			if(idOp2 == 1){
				approvalCommon -= .05;
				approvalNobles += .05;
			}
			else if(idOp2 == 2){
				approvalCommon -= .1;
				approvalNobles += .1;
			}
			else if(idOp2 == 3){
				approvalNobles -= .1;
			}
			else if(idOp2 == 4){
				approvalCommon -= .1;
				approvalNobles += .05;
			}
		}
		
		else if(idEvt == 14){
			if(idOp2 == 1){
				approvalCommon -= .05;
				approvalNobles += .05;
				approvalClergy += .05;
			}
			else if(idOp2 == 2){
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
			else if(idOp2 == 3){
				approvalCommon += .05;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 15){
			if(idOp2 == 1){
				approvalCommon += .05;
				approvalNobles += .05;
				approvalClergy -= .15;
			}
			else if(idOp2 == 2){
				approvalCommon -= .1;
				approvalNobles -= .1;
				approvalClergy += .1;
			}
			else if(idOp2 == 3){
				approvalClergy -= .05;
			}
			else if(idOp2 == 4){
				approvalCommon -= .15;
				approvalNobles -= .15;
				approvalClergy += .15;
			}
		}
		
		else if(idEvt == 16){
			if(idOp2 == 1){
				approvalCommon -= .05;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
			else if(idOp2 == 2){
				approvalNobles -= .05;
				approvalClergy += .05;
			}
			else if(idOp2 == 3){
				approvalNobles += .05;
				approvalClergy -= .05;
			}
			else if(idOp2 == 4){
				approvalCommon += .05;
				approvalNobles -= .1;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 17){
			if(idOp2 == 1){
				approvalCommon += .05;
				approvalNobles += .05;
				approvalClergy += .05;
			}
			else if(idOp2 == 2){
				approvalNobles -= .05;
				approvalCommon -= .05;
			}
			else if(idOp2 == 3){
				approvalCommon -= .05;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 18){
			if(idOp2 == 1){
				approvalCommon += .05;
			}
			else if(idOp2 == 2){
				approvalCommon += .05;
			}
			else if(idOp2 == 3){
				approvalNobles -= .05;
			}
			else if(idOp2 == 4){
				approvalNobles += .05;
			}
			else if(idOp2 == 5){
				approvalCommon += .1;
				approvalNobles -= .05;
				approvalClergy -= .05;
			}
		}
		
		else if(idEvt == 19){
			if(idOp2 == 1){
				approvalCommon += .05;
				approvalClergy += .05;
				approvalNobles += .05;
			}
			else if(idOp2 == 2){
				//Neutral
			}
			else if(idOp2 == 3){
				approvalCommon -= .05;
				approvalClergy -= .05;
				approvalNobles -= .05;
			}
		}
		updateControls();
}
