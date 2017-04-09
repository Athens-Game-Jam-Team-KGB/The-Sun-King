////////////////////////////////////////////////////////////////////////////////
// Core event functions

function genIdEvt() {
	idEvt = Math.floor(Math.random() * countEvt);
	while(idEvt >= countEvt) {
		idEvt = Math.floor(Math.random() * countEvt);
		switch(idEvt) {
			case 21:
			case 22:
			idEvt = countEvt;
		}
	}
}

function updateTxtEvt(){ 
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
		
		updateBtnTxt1();
		updateBtnTxt2();
		updateControls();
}
////////////////////////////////////////////////////////////////////////////////
// Button handlers

function updateBtnTxt1(){
	//Crop Yield Event
	if(idEvt == 1){
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
		else{
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
}

function updateBtnTxt2(){
	if(idEvt == 1){
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
}

function handleBtnEvt1() {
		document.getElementById("btnTurn").style.display = "inline";
		document.getElementById("ulBtnEvt").style.display = "none";
		document.getElementById("liEvtOpt").style.display = "inline";
		document.getElementById("spanEvtOpt").innerHTML = document.getElementById("btnEvt1").innerHTML
		if(idEvt == 1){
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
		updateControls();
}

function handleBtnEvt2() {
		document.getElementById("btnTurn").style.display = "inline";
		document.getElementById("ulBtnEvt").style.display = "none";
		document.getElementById("liEvtOpt").style.display = "inline";
		document.getElementById("spanEvtOpt").innerHTML = document.getElementById("btnEvt2").innerHTML; 
		if(idEvt == 1){
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
		updateControls();
}
