////////////////////////////////////////////////////////////////////////////////
// Core event functions

function genIdEvt() {
	idEvt = Math.floor(Math.random() * countEvt);
	
	while(idEvt < 1)
		idEvt = Math.floor(Math.random() * countEvt);
}

function updateTxtEvt() {
		if(idEvt == 1){
			document.getElementById("evtTxt").innerHTML = "Commoner rebel against you due to extreme weather hurting crop yield";
		}
		else if(idEvt == 2){
			document.getElementById("evtTxt").innerHTML = "A comet has brightened your country's sky";
		}
		else if(idEvt == 3){
			document.getElementById("evtTxt").innerHTML = "The Clergymen demanded to enforce god on nobility, the organization is worried that the nobility might cause great sin with all their wealth.";
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
			}
			else if(idOp1 == 3){
				//Commoner Opinion drop by 5$
				approvalCommon -= .05;
			}
			else if(idOp1 == 4){
				//Neutral Option
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
			}
			else if(idOp2 == 3){
				//Commoner Opinion drop by 5$
				approvalCommon -= .05;
			}
			else if(idOp2 == 4){
				//Neutral Option
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
				approvalClergy += .05;
			}
			else if(idOp2 == 3){
				approvalNobles += .1;
				approvalClergy -= .15;
			}
		}
		updateControls();
}
