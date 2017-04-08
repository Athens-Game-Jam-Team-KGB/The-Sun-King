// Parliamentary variables
var   approvalClergy;
var   approvalCommon;
var   approvalNobles;


// Event variables
const countEvt = 2;
var idEvt;
var idOp1;
var idOp2;

// Economic variables
var   estatePopulation;
var   netChange;
var   taxAmountNobles;
var   taxAmountClergy;
var   taxAmountCommon;
var   taxPercentNobles;
var   taxPercentClergy;
var   taxPercentCommon;
var   treasuryCurrent;
var   treasuryFuture;
const corruptPercentNobles = 1.0;
const corruptPercentClergy = 0.7;
const corruptPercentCommon = 0.3;
var   outlayCorrupt;
const outlayInterestPerLoan = 0;
var   outlayInterestTotal;

////////////////////////////////////////////////////////////////////////////////
// Main functions

function init() {
	// Parliamentary variables
	approvalClergy  = 50;
	approvalCommon  = 50;
	approvalNobles  = 50;
	
	// Economic variables
	estatePopulation = 21000000 / 3; // We're pretending each state has the same population count in order to simulate some estates having more money than others
	netChange        = 0;
	outlayCorrupt    = 0;
	outlayEvt        = 0;
	outlayInterest   = 0;
	outlayTotal      = 0;
	receiptTotal     = 0;
	taxAmountNobles  = 0;
	taxAmountClergy  = 0;
	taxAmountCommon  = 0;
	taxPercentNobles = 0.1;
	taxPercentClergy = 0.1;
	taxPercentCommon = 0.1;
	taxAmountTotal   = 0;
	treasuryCurrent  = 100000;
	treasuryFuture   = 0;
	
	// Start the first turn
	turn();
}

function turn() {
	// Update events
	genIdEvt();
	updateTxtEvt();
	
	// Update economy
}

function die() {
	
}

function help() {
	
}

function updateControls() {
	//Update Parliamentary
	document.getElementById("spanApprovalClergy").innerHTML = approvalClergy;
	document.getElementById("spanApprovalCommon").innerHTML = approvalCommon; 
	document.getElementById("spanApprovalNobles").innerHTML = approvalNobles; 	
}
