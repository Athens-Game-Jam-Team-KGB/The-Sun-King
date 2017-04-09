////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxRateNobles() {
	playClick();
	var newRate = document.getElementById("slideTaxRateNobles").value / 100;
	approvalNobles-= newRate - taxRateNobles;
	taxRateNobles = newRate;
	updateEcon();
	updateControls();
}

function handleSlideTaxRateClergy() {
	playClick();
	var newRate = document.getElementById("slideTaxRateClergy").value / 100;
	approvalClergy-= 2 * (newRate - taxRateClergy);
	taxRateClergy = newRate;
	updateEcon();
	updateControls();
}

function handleSlideTaxRateCommon() {
	playClick();
	var newRate = document.getElementById("slideTaxRateCommon").value / 100;
	approvalCommon-= newRate - taxRateCommon;
	taxRateCommon = newRate;
	updateEcon();
	updateControls();
}

////////////////////////////////////////////////////////////////////////////////
// Loans

function loanTake() {
	playClick();
	treasuryCurrent+= loanAmt;
	loanCount++;
	updateEcon();
	updateControls();
}

function loanRepay() {
	playClick();
	treasuryCurrent-= loanAmt * (1 + loanInterestRate);
	loanCount--;
	updateEcon();
	updateControls();
}
