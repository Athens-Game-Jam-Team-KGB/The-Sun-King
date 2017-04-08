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
		updateBtnTxt1();
		updateBtnTxt2();
		updateControls();
}
////////////////////////////////////////////////////////////////////////////////
// Button handlers

function updateBtnTxt1(){
	idOp1 = Math.floor(Math.random() * 6)
	while(idOp1 < 1){
		idOp1 = Math.floor(Math.random() * 6);
	}	
	
	if(idEvt == 1){
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
}

function updateBtnTxt2(){
	idOp2 = Math.floor(Math.random() * 6)
	while(idOp2 == idOp1 || idOp2 < 1){	
		idOp2 = Math.floor(Math.random() * 6)
	}
	
	if(idEvt == 1){
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
}

function handleBtnEvt1() {
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
		updateControls();
}

function handleBtnEvt2() {
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
		updateControls();
}
