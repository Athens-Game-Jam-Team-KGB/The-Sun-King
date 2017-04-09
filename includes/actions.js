////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxRateNobles() {
	taxRateNobles = document.getElementById("slideTaxRateNobles").value / 100;
	updateEcon();
	updateControls();
}

function handleSlideTaxRateClergy() {
	taxRateClergy = document.getElementById("slideTaxRateClergy").value / 100;
	updateEcon();
	updateControls();
}

function handleSlideTaxRateCommon() {
	taxRateCommon = document.getElementById("slideTaxRateCommon").value / 100;
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
