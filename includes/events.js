var approvalClergy;
var approvalCommon;
var approvalNoble;
var countEvt = 2;
var idEvt
var idOp1;
var idOp2;

/*function init() {
	genIdEvt();
	
	turn();
}*/

/*function turn() {
	genIdEvt();
}*/

////////////////////////////////////////////////////////////////////////////////
// Core event functions

function genIdEvt() {
		idEvt = Math.floor(Math.random() * countEvt);
}

function updateTxtEvt() {
		if(idEvt == 1){
			document.getElementById("evtText").value = "Commoner rebel against you due to extreme weather hurting crop yield";
		}
		handleBtnEvt1();
		handleBtnEvt2();
		updateControls();
}
////////////////////////////////////////////////////////////////////////////////
// Button handlers

function handleBtnEvt1() {
	if(idEvt == 1){
		idOp1 = Math.floor(Math.random() * 6)
		if(idOp1 == 1){
			//Commoner Opinion drop by 10%
			approvalCommon -= 10;
			document.getElementById("btnEvt1").value = "Let them eat cake!";
		}
		else if(idOp1 == 2){
			//Commoner Opinion drop by 5$
			approvalCommon -= 5;
			document.getElementById("btnEvt1").value = "Send out gendarmerie! Supress this insurrection!";
		}
		else if(idOp1 == 3){
			//Commoner Opinion drop by 5$
			approvalCommon -= 5;
			document.getElementById("btnEvt1").value = "Silence them by giving a morale boosting speech";
		}
		else if(idOp1 == 4){
			//Neutral Option
			document.getElementById("btnEvt1").value = "Partially subsidize the price of bread for the people";
		}
		else if(idOp1 == 5){
			//Commoner Opinion go up by 5%
			approvalCommon += 5;
			document.getElementById("btnEvt1").value = "Go to the food storage and hand out food to the citizens";
		}
	}
}

function handleBtnEvt2() {
	idOp2 = Math.floor(Math.random() * 6)
	while(idOp2 == idOp1){	
		idOp2 = Math.floor(Math.random() * 6)
	}
	
	if(idEvt == 1){
		idOp2 = Math.floor(Math.random() * 6)
		if(idOp2 == 1){
			//Commoner Opinion drop by 10%
			approvalCommon -= 10;
			document.getElementById("btnEvt2").value = "Let them eat cake!";
		}
		else if(idOp2 == 2){
			//Commoner Opinion drop by 5$
			approvalCommon -= 5;
			document.getElementById("btnEvt2").value = "Send out gendarmerie! Supress this insurrection!";
		}
		else if(idOp2 == 3){
			//Commoner Opinion drop by 5$
			approvalCommon -= 5;
			document.getElementById("btnEvt2").value = "Silence them by giving a morale boosting speech";
		}
		else if(idOp2 == 4){
			//Neutral Option
			document.getElementById("btnEvt2").value = "Partially subsidize the price of bread for the people";
		}
		else if(idOp2 == 5){
			//Commoner Opinion go up by 5%
			approvalCommon += 5;
			document.getElementById("btnEvt2").value = "Go to the food storage and hand out food to the citizens";
		}
	}
}

