////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxRateNobles() {
	var newRate = document.getElementById("slideTaxRateNobles").value / 100;
	approvalNobles+= newRate - taxRateNobles;
	taxRateNobles = newRate;
	updateEcon();
	updateControls();
}

function handleSlideTaxRateClergy() {
	var newRate = document.getElementById("slideTaxRateClergy").value / 100;
	approvalClergy+= newRate - taxRateClergy;
	taxRateClergy = newRate;
	updateEcon();
	updateControls();
}

function handleSlideTaxRateCommon() {
	var newRate = document.getElementById("slideTaxRateCommon").value / 100;
	approvalCommon+= newRate - taxRateCommon;
	taxRateCommon = newRate;
	updateEcon();
	updateControls();
}

////////////////////////////////////////////////////////////////////////////////
// Loans

function loanTake() {
	treasuryCurrent+= loanAmt;
	loanCount++;
	updateEcon();
	updateControls();
}

function loanRepay() {
	treasuryCurrent-= loanAmt;
	loanCount--;
	updateEcon();
	updateControls();
}
