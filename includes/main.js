// Parliamentary variables
var   approvalClergy;
var   approvalCommon;
var   approvalNobles;

// Event variables
const countEvt = 6;
var   idEvt;
var   idOp1;
var   idOp2;
var   txtBtnEvt1;
var   txtBtnEvt2;
var   txtSpanEvt;

// Economic variables
var   populationTotal;
var   nobles
var   incomePersonal;
var   loanCount;
const loanInterestRate = 0.05;
const loanValue = 0;
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
	populationTotal  = 21000000; // https://en.wikipedia.org/wiki/List_of_countries_by_population_in_1700
	populationNobles = 0;
	populationClergy = 0;
	populationCommon = 0;
	incomeNobles     = 3000; // This is the average seasonal income (in livres) of a governer in France in the year 1700, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	incomeClergy     = 600;  // This is the average seasonal income (in livres) of a mid-ranking official in France in the year 1700, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	incomeCommon     = 225;  // This is the average seasonal income (in livres) of a half-skilled worker in France in the year 1700, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
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
	// Update demographics
	populationGrowth = 1.0019; // Between 1600 and 1801, per https://en.wikipedia.org/wiki/Demographics_of_France#Historical_population_figures
	populationTotal *= populationGrowth; // https://en.wikipedia.org/wiki/List_of_countries_by_population_in_1700
	populationNobles = 0.01 * populationTotal;  // https://en.wikipedia.org/wiki/French_nobility
	populationClergy = 0.1  * populationTotal;   // Completely arbitrary;  based on the whole "10% tithe" thing.
	populationCommon = populationTotal - populationNobles - populationClergy;  // https://en.wikipedia.org/wiki/French_nobility
	
	// Update other stuff
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
	taxAmtNobles = taxPercentNobles * incomeNobles * populationNobles;
	taxAmtClergy = taxPercentClergy * incomeClergy * populationClergy;
	taxAmtCommon = taxPercentCommon * incomeCommon * populationCommon;
	taxAmtTotal = taxAmtNobles + taxAmtClergy + taxAmtCommon;
	receiptTotal = taxAmtTotal;
	outlayInterestTotal = loanCount * loanValue * loanInterestRate;
	outlayCorrupt = corruptPercentNobles * (1 - approvalNobles) * taxAmtNobles * 100
		      + corruptPercentClergy * (1 - approvalClergy) * taxAmtClergy * 100
		      + corruptPercentCommon * (1 - approvalCommon) * taxAmtCommon * 100;
}
