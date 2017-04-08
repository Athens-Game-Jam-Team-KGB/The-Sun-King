var   approvalClergy;
var   approvalCommon;
var   approvalNoble;
const countEvt = 0;
var   idEvt;

function init() {
	approvalClergy = 0.5;
	approvalCommon = 0.5;
	approvalNoble  = 0.5;
	turn();
}

function turn() {
	genIdEvt();
	updateTxtEvt();
}

function genIdEvt() {
	idEvt = Math.floor(Math.random() * countEvt);
}

function updateTxtEvt() {
	switch(idEvt) {
		default:
		break;
	}
}

function handleBtnEvt1() {
	switch(idEvt) {
		default:
		break;
	}
}

function handleBtnEvt2() {
	switch(idEvt) {
		default:
		break;
	}
}
