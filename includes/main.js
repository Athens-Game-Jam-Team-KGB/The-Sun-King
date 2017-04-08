// Parliamentary variables
var   approvalClergy;
var   approvalCommon;
var   approvalNobles;

// Event variables
const countEvt = 2;
var   idEvt;
var   idOp1;
var   idOp2;

// Economic variables
var   estatePopulation;
var   netChange;
var   personalIncome;
var   receiptTotal;
var   taxAmountNobles;
var   taxAmountClergy;
var   taxAmountCommon;
var   taxAmountTotal;
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
	approvalClergy  = .50;
	approvalCommon  = .50;
	approvalNobles  = .50;
	
	// Event variables
	idEvt = 0;
	idOp1 = 0;
	idOp2 = 0;
	
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
	taxAmountTotal   = 0;
	taxPercentNobles = 0.10;
	taxPercentClergy = 0.10;
	taxPercentCommon = 0.10;
	treasuryCurrent  = 100000;
	treasuryFuture   = 0;
	
	// Start the first turn
	turn();
}

function turn() {
	// Update events
	genIdEvt();
	updateTxtEvt();  // Already calls updateControls()
	updateEcon();
}

function die() {
	
}

function help() {
	
}

function updateControls() {
	//Update Parliamentary
	document.getElementById("spanApprovalNobles").innerHTML = approvalNobles * 100;
	document.getElementById("spanApprovalClergy").innerHTML = approvalClergy * 100;
	document.getElementById("spanApprovalCommon").innerHTML = approvalCommon * 100;
	document.getElementById("spanTaxPercentNobles").innerHTML = Math.round(taxPercentNobles * 100);
	document.getElementById("spanTaxPercentClergy").innerHTML = Math.round(taxPercentClergy * 100);
	document.getElementById("spanTaxPercentCommon").innerHTML = Math.round(taxPercentCommon * 100);
}

function updateEcon() {
	taxAmountNobles = taxPercentNobles * personalIncome * estatePopulation;
	taxAmountClergy = taxPercentClergy * personalIncome * estatePopulation;
	taxAmountCommon = taxPercentCommon * personalIncome * estatePopulation;
	taxAmountTotal = taxAmountNobles + taxAmountClergy + taxAmountCommon;
	receiptTotal = taxAmountTotal;
	outlayInterestTotal = loanCount * loanInterestRate;
	outlayCorrupt = corruptPercentNobles * (1 - approvalNobles) * taxAmountNobles
		      + corruptPercentClergy * (1 - approvalClergy) * taxAmountClergy
		      + corruptPercentCommon * (1 - approvalCommon) * taxAmountCommon;
}
