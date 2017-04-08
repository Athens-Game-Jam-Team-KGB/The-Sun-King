////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxPercentNobles() {
	taxPercentNobles = document.getElementById("slideTaxPercentNobles").value / 100;
	updateControls();
}

function handleSlideTaxPercentClergy() {
	taxPercentClergy = document.getElementById("slideTaxPercentClergy").value / 100;
	updateControls();
}

function handleSlideTaxPercentCommon() {
	taxPercentCommon = document.getElementById("slideTaxPercentCommon").value / 100;
	updateControls();
}

////////////////////////////////////////////////////////////////////////////////
// Loans

function loanTake() {
	updateControls();
}

function loanRepay() {
	updateControls();
}
