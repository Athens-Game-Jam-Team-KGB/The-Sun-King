////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxPercentNobles() {
	taxPercentNobles = document.getElementById("slideTaxPercentNobles").value / 100;
	updateEcon();
	updateControls();
}

function handleSlideTaxPercentClergy() {
	taxPercentClergy = document.getElementById("slideTaxPercentClergy").value / 100;
	updateEcon();
	updateControls();
}

function handleSlideTaxPercentCommon() {
	taxPercentCommon = document.getElementById("slideTaxPercentCommon").value / 100;
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
