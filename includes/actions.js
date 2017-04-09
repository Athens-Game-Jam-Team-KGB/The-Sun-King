////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxPercentRateNobles() {
	taxPercentRateNobles = document.getElementById("slideTaxPercentRateNobles").value / 100;
	updateEcon();
	updateControls();
}

function handleSlideTaxPercentRateClergy() {
	taxPercentRateClergy = document.getElementById("slideTaxPercentRateClergy").value / 100;
	updateEcon();
	updateControls();
}

function handleSlideTaxPercentRateCommon() {
	taxPercentRateCommon = document.getElementById("slideTaxPercentRateCommon").value / 100;
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
