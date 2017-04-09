// Parliamentary variables
var   approvalClergy;
var   approvalCommon;
var   approvalNobles;

// Event variables
const countEvt = 20;
var turnCount = 0;
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
const loanAmt = 100000000;
var   netChange;
var   receiptEvt;
var   receiptTotal;
var   taxAmtNobles;
var   taxAmtClergy;
var   taxAmtCommon;
var   taxAmtTotal;
var   taxRateNobles;
var   taxRateClergy;
var   taxRateCommon;
var   taxRateDefault;
var   treasuryCurrent;
var   treasuryFuture;
const corruptRateNobles = 1.50;
const corruptRateClergy = 1.25;
const corruptRateCommon = 1.00;
var   outlayCorrupt;
var   outlayEvt;
var   outlayInterestTotal;
////////////////////////////////////////////////////////////////////////////////
// Main functions

function init() {
	// Parliamentary variables
	approvalNobles  = 0.67;
	approvalClergy  = 0.50;
	approvalCommon  = 0.33;
	
	// Event variables
	idEvt = 0;
	idOp1 = 0;
	idOp2 = 0;
	
	// Demographic variables
	populationTotal  = 21000000; // https://en.wikipedia.org/wiki/List_of_countries_by_population_in_1700
	populationNobles = 0;
	populationClergy = 0;
	populationCommon = 0;
	
	// Economic variables
	loanCount        =       0;
	incomeNobles     =    3000;   // This is the average seasonal income (in livres) of a governer in France in the year 1700, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	incomeClergy     =     487.5; // This is the average seasonal income (in livres) of a mid-ranking official in France in the year 1700, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	incomeCommon     =     225;   // This is the average seasonal income (in livres) of a half-skilled worker in France in the year 1700, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	netChange        =       0;
	outlayCorrupt    =       0;
	outlayEvt        =       0;
	outlayInterest   =       0;
	outlayTotal      =       0;
	receiptEvt       =       0;
	receiptTotal     =       0;
	taxAmtNobles     =       0;
	taxAmtClergy     =       0;
	taxAmtCommon     =       0;
	taxAmtTotal      =       0;
	taxRateNobles    =       0.10;
	taxRateClergy    =       0.00;
	taxRateCommon    =       0.10;
	treasuryCurrent  = 1000000;
	treasuryFuture   = treasuryCurrent;
	
	// Reset UI
	document.getElementById("body").style.backgroundImage = "resources/background.png";
	document.getElementById("slideTaxRateNobles").value = 10;
	document.getElementById("slideTaxRateClergy").value =  0;
	document.getElementById("slideTaxRateCommon").value = 10;
	document.getElementById("divGame").style.display = "initial";
	document.getElementById("btnGame").style.display = "none";
	document.getElementById("divHelp").style.display = "none";
	document.getElementById("btnHelp").style.display = "initial";
	document.getElementById("divGameOver").style.display = "none";
	
	// Start the first turn
	turn();
}

function newTurn() {
	playClick();
	turn();
}

function turn() {
	//Increment turns
	turnCount++;
	
	document.getElementById("spanTurnCount").innerHTML = turnCount;
	// Update demographics
	populationGrowth = 1.0019; // Between 1600 and 1801, per https://en.wikipedia.org/wiki/Demographics_of_France#Historical_population_figures
	populationTotal *= populationGrowth; // https://en.wikipedia.org/wiki/List_of_countries_by_population_in_1700
	populationNobles = 0.01 * populationTotal;  // https://en.wikipedia.org/wiki/French_nobility
	populationClergy = 0.05 * populationTotal;  // Completely arbitrary.
	populationCommon = populationTotal - populationNobles - populationClergy;  // https://en.wikipedia.org/wiki/French_nobility
	
	// Update economy
	updateEcon();
	treasuryCurrent = treasuryFuture;
	outlayEvt = 0;
	receiptEvt = 0;
	incomeNobles+= 0.0;  // Average seasonal growth in income between 1700 and 1750, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	incomeClergy+= 2.25; // Average seasonal growth in income between 1700 and 1750, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	incomeCommon+= 1.5;  // Average seasonal growth in income between 1700 and 1750, per:  http://freepages.genealogy.rootsweb.ancestry.com/~unclefred/MONETARY.htm
	updateEcon();
	
	// Update misc
	document.getElementById("btnTurn").style.display = "none";
	document.getElementById("ulBtnEvt").style.display = "initial";
	document.getElementById("liEvtOpt").style.display = "none";
	if(approvalNobles < .25 || approvalClergy < .25 || approvalCommon < .25){
		gameOver();
	}
	genIdEvt();
	if(treasuryCurrent < 0){
		idEvt = -1;
	}
	updateTxtEvt();
	updateControls();
}

function gameOver() {
	document.getElementById("spanTurnsReigned").innerHTML = turnCount;
	var guillotine = new Audio("resources/guillotine.ogg");
	guillotine.play();
	document.getElementById("body").style.backgroundImage = "../resources/gameOver.png";
	document.getElementById("divGame").style.display = "none";
	document.getElementById("btnGame").style.display = "none";
	document.getElementById("divHelp").style.display = "none";
	document.getElementById("btnHelp").style.display = "none";
	document.getElementById("divGameOver").style.display = "block";
}

function help() {
	playClick();
	document.getElementById("divGame").style.display = "none";
	document.getElementById("divHelp").style.display = "block";
	document.getElementById("btnHelp").style.display = "none";
	document.getElementById("btnGame").style.display = "initial";
}

function handleBtnGame() {
	playClick();
	document.getElementById("divGame1").style.display = "initial";
	document.getElementById("divGame2").style.display = "initial";
	document.getElementById("divHelp").style.display = "none";
	document.getElementById("btnHelp").style.display = "initial";
	document.getElementById("btnGame").style.display = "none";
}


function updateControls() {
	// Show/Hide the repay loan button
	if(loanCount > 0)
		document.getElementById("btnLoanRepay").style.display = "initial";
	else	document.getElementById("btnLoanRepay").style.display = "none";
	
	//Update parliament
	/*if*/ if(approvalNobles > 100) {
		document.getElementById("spanApprovalNobles").innerHTML = 100;
	} else if(approvalNobles < 0) {
		document.getElementById("spanApprovalNobles").innerHTML =   0;
	} else {
		document.getElementById("spanApprovalNobles").innerHTML = Math.round(approvalNobles * 100);
	}
	/*if*/ if(approvalClergy > 100) {
		document.getElementById("spanApprovalClergy").innerHTML = 100;
	} else if(approvalClergy < 0) {
		document.getElementById("spanApprovalClergy").innerHTML =   0;
	} else {
		document.getElementById("spanApprovalClergy").innerHTML = Math.round(approvalClergy * 100);
	}
	/*if*/ if(approvalCommon > 100) {
		document.getElementById("spanApprovalCommon").innerHTML = 100;
	} else if(approvalCommon < 0) {
		document.getElementById("spanApprovalCommon").innerHTML =   0;
	} else {
		document.getElementById("spanApprovalCommon").innerHTML = Math.round(approvalCommon * 100);
	}
	
	// Update tax sliders
	document.getElementById("spanTaxRateNobles").innerHTML = Math.round(taxRateNobles * 100);
	document.getElementById("spanTaxRateClergy").innerHTML = Math.round(taxRateClergy * 100);
	document.getElementById("spanTaxRateCommon").innerHTML = Math.round(taxRateCommon * 100);
	
	// Update receipts
	document.getElementById("spanTaxAmtNobles").innerHTML = Math.round(taxAmtNobles);
	document.getElementById("spanTaxAmtClergy").innerHTML = Math.round(taxAmtClergy);
	document.getElementById("spanTaxAmtCommon").innerHTML = Math.round(taxAmtCommon);
	document.getElementById("spanTaxAmtTotal").innerHTML  = "<b>" + Math.round(taxAmtTotal) + "</b>";
	document.getElementById("spanReceiptEvt").innerHTML   = "<b>" + Math.round(receiptEvt) + "</b>";
	
	// Update expenses
	document.getElementById("spanOutlayCorrupt").innerHTML  = Math.round(outlayCorrupt);
	document.getElementById("spanOutlayInterest").innerHTML = Math.round(outlayInterest);
	document.getElementById("spanOutlayEvt").innerHTML      = Math.round(outlayEvt);
	
	// Update totals
	document.getElementById("spanReceiptTotal").innerHTML = Math.round(receiptTotal);
	document.getElementById("spanOutlayTotal").innerHTML  = Math.round(outlayTotal);
	document.getElementById("spanNetChange").innerHTML    = "<b>" + Math.round(netChange) + "</b>";
	
	// Update treasury
	document.getElementById("spanTreasuryCurrent").innerHTML = "<b>" + Math.round(treasuryCurrent) + "</b>";
	document.getElementById("spanTreasuryFuture").innerHTML  = "<b>" + Math.round(treasuryFuture) + "</b>";
}

function updateEcon() {
	// Validate tax-rates
	if(taxRateNobles > 100) taxRateNobles = 100;
	if(taxRateClergy > 100) taxRateClergy = 100;
	if(taxRateCommon > 100) taxRateCommon = 100;
	if(taxRateNobles <   0) taxRateNobles =   0;
	if(taxRateClergy <   0) taxRateClergy =   0;
	if(taxRateCommon <   0) taxRateCommon =   0;
	
	// Calculate economy
	taxAmtNobles   = taxRateNobles * incomeNobles * populationNobles;
	taxAmtClergy   = taxRateClergy * incomeClergy * populationClergy;
	taxAmtCommon   = taxRateCommon * incomeCommon * populationCommon;
	taxAmtTotal    = taxAmtNobles  + taxAmtClergy + taxAmtCommon;
	receiptTotal   = taxAmtTotal   + receiptEvt;
	outlayCorrupt  = corruptRateNobles   * (1 - approvalNobles) * taxAmtNobles
		       + corruptRateClergy   * (1 - approvalClergy) * taxAmtClergy
		       + corruptRateCommon   * (1 - approvalCommon) * taxAmtCommon;
	outlayInterest = loanCount * loanAmt * loanInterestRate;
	outlayTotal    = outlayInterest  + outlayEvt + outlayCorrupt;
	netChange      = receiptTotal    - outlayTotal;
	treasuryFuture = treasuryCurrent + netChange;
}

function playMusic() {
	var music = new Audio("resources/music.ogg");
	music.loop = true;
	music.play();
}

function playClick() {
	var click = new Audio("resources/click.ogg");
	click.play();
}
