////////////////////////////////////////////////////////////////////////////////
// Slider handlers

function handleSlideTaxPercentNobles() {
	taxPercentNobles = Document.getElementById("slideTaxPercentNobles").value / 100;
	updateControls();
}

function handleSlideTaxPercentClergy() {
	taxPercentClergy = Document.getElementById("slideTaxPercentClergy").value / 100;
	updateControls();
}

function handleSlideTaxPercentCommon() {
	taxPercentCommon = Document.getElementById("slideTaxPercentCommon").value / 100;
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
