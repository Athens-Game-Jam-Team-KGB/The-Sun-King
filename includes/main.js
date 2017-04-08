// Parliamentary variables
var   approvalClergy;
var   approvalCommon;
var   approvalNobles;

// Event variables
const countEvt = 4;
var   idEvt;
var   idOp1;
var   idOp2;
var   txtBtnEvt1;
var   txtBtnEvt2;
var   txtSpanEvt;

// Economic variables
var   estatePopulation;
var   incomePersonal;
var   loanCount;
const loanInterestRate = 0.05;
const loanValue        = 0;
var   netChange;
var   receiptEvt;
var   receiptTotal;
var   taxAmtNobles;
var   taxAmtClergy;
var   taxAmtCommon;
var   taxAmtTotal;
var   taxPercentNobles;
var   taxPercentClergy;
var   taxPercentCommon;
var   treasuryCurrent;
var   treasuryFuture;
const corruptPercentNobles = 1.0;
const corruptPercentClergy = 0.7;
const corruptPercentCommon = 0.3;
var   outlayCorrupt;
var   outlayEvt;
var   outlayInterestTotal;

////////////////////////////////////////////////////////////////////////////////
// Main functions

function init() {
	// Parliamentary variables
	approvalClergy  = 0.50;
	approvalCommon  = 0.50;
	approvalNobles  = 0.50;
	
	// Event variables
	idEvt = 0;
	idOp1 = 0;
	idOp2 = 0;
	
	// Economic variables
	estatePopulation = Math.round(21000000 / 3); // We're pretending each state has the same population count in order to simulate some estates having more money than others
	incomePersonal   = 337.5;  // We're going by season.  This is the average seasonal pay (in livres) of a skilled worker in France in the year 1700, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	netChange        = 0;
	outlayCorrupt    = 0;
	outlayEvt        = 0;
	outlayInterest   = 0;
	outlayTotal      = 0;
	receiptEvt       = 0;
	receiptTotal     = 0;
	taxAmtNobles     = 0;
	taxAmtClergy     = 0;
	taxAmtCommon     = 0;
	taxAmtTotal      = 0;
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
	document.getElementById("btnTurn").style.display = "none";
	document.getElementById("ulBtnEvt").style.display = "inline";
	document.getElementById("liEvtOpt").style.display = "none";
	updateEcon();
	genIdEvt();
	updateTxtEvt();
	updateControls();
}

function die() {
	
}

function help() {
	
}

function updateControls() {
	//Update parliament
	document.getElementById("spanApprovalNobles").innerHTML = Math.round(approvalNobles * 100);
	document.getElementById("spanApprovalClergy").innerHTML = Math.round(approvalClergy * 100);
	document.getElementById("spanApprovalCommon").innerHTML = Math.round(approvalCommon * 100);
	
	// Update tax sliders
	document.getElementById("spanTaxPercentNobles").innerHTML = Math.round(taxPercentNobles * 100);
	document.getElementById("spanTaxPercentClergy").innerHTML = Math.round(taxPercentClergy * 100);
	document.getElementById("spanTaxPercentCommon").innerHTML = Math.round(taxPercentCommon * 100);
	
	// Update tax amounts
	document.getElementById("spanTaxAmtNobles").innerHTML = Math.round(taxAmtNobles * 100);
	document.getElementById("spanTaxAmtClergy").innerHTML = Math.round(taxAmtClergy * 100);
	document.getElementById("spanTaxAmtCommon").innerHTML = Math.round(taxAmtCommon * 100);
	document.getElementById("spanTaxAmtTotal").innerHTML = "<b>" + Math.round(taxAmtTotal * 100) + "</b>";
	
	// Update expenses
	document.getElementById("spanOutlayCorrupt").innerHTML = Math.round(outlayCorrupt);
	document.getElementById("spanOutlayInterest").innerHTML = Math.round(outlayInterest);
	document.getElementById("spanOutlayEvt").innerHTML = Math.round(outlayEvt);
}

function updateEcon() {
	taxAmtNobles = taxPercentNobles * incomePersonal * estatePopulation;
	taxAmtClergy = taxPercentClergy * incomePersonal * estatePopulation;
	taxAmtCommon = taxPercentCommon * incomePersonal * estatePopulation;
	taxAmtTotal = taxAmtNobles + taxAmtClergy + taxAmtCommon;
	receiptTotal = taxAmtTotal;
	outlayInterestTotal = loanCount * loanValue * loanInterestRate;
	outlayCorrupt = corruptPercentNobles * (1 - approvalNobles) * taxAmtNobles
		      + corruptPercentClergy * (1 - approvalClergy) * taxAmtClergy
		      + corruptPercentCommon * (1 - approvalCommon) * taxAmtCommon;
}
