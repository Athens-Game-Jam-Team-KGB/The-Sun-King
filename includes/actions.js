////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxPercentNobles() {
	taxPercentNobles = document.getElementById("slideTaxPercentNobles").value / 100;
	updateEconomy();
	updateControls();
}

function handleSlideTaxPercentClergy() {
	taxPercentClergy = document.getElementById("slideTaxPercentClergy").value / 100;
	updateEconomy();
	updateControls();
}

function handleSlideTaxPercentCommon() {
	taxPercentCommon = document.getElementById("slideTaxPercentCommon").value / 100;
	updateEconomy();
	updateControls();
}

////////////////////////////////////////////////////////////////////////////////
// Loans

function loanTake() {
	treasuryCurrent+= loanAmt;
	loanCount++;
	updateEconomy();
	updateControls();
}

function loanRepay() {
	treasuryCurrent-= loanAmt;
	loanCount--;
	updateEconomy();
	updateControls();
}
