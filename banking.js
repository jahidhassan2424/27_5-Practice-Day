let depositInputField = document.getElementById('deposit-field');
let withdrawInputField = document.getElementById('withdraw-field');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
let overviewDeposit = document.getElementById('overview-deposit');
let overviewWithdraw = document.getElementById('overview-withdraw');
let overviewBalance = document.getElementById('overview-balance');

// Deposit Area
depositBtn.addEventListener('click', function () {
    if (depositInputField.value == 0 || depositInputField == "" || depositInputField.value <= 0) {
        document.getElementById('popup-error-deposit').style.display = 'block';

    }
    else {
        let currentOverviewDeposit = parseInt(overviewDeposit.innerText);
        overviewDeposit.innerText = currentOverviewDeposit + parseInt(depositInputField.value);

        let currentOverviewBalance = parseInt(overviewBalance.innerText);
        overviewBalance.innerText = currentOverviewBalance + parseInt(depositInputField.value);
        depositInputField.value = "";
    }
})

// Withdraw Area
let currentOverviewLocal = overviewWithdraw.innerText = localStorage.getItem('overviewWithdrawLocal');
withdrawBtn.addEventListener('click', function () {
    if (withdrawInputField.value == 0 || withdrawInputField.value == "" || withdrawInputField.value <= 0) {
        document.getElementById('popup-error-withdraw').style.display = 'block';
    }
    else {

        let currentOverviewBalance = parseInt(overviewBalance.innerText);
        if (currentOverviewBalance <= 0) {
            document.getElementById('popup-error-no-balance').style.display = 'block';
        }
        else {
            let currentOverviewWithdraw = parseInt(overviewWithdraw.innerText);
            localStorage.setItem("overviewWithdrawLocal", currentOverviewWithdraw + parseInt(withdrawInputField.value));

            // let getLocalWithdraw =
            overviewWithdraw.innerText = localStorage.getItem('overviewWithdrawLocal');
            overviewBalance.innerText = currentOverviewBalance - parseInt(withdrawInputField.value);
            withdrawInputField.value = "";
        }


    }
})

// Error Popup Close
document.getElementById('popup-error-deposit').addEventListener('click', function () {
    document.getElementById('popup-error-deposit').style.display = 'none';
    depositInputField.value = "";
})
document.getElementById('popup-error-withdraw').addEventListener('click', function () {
    document.getElementById('popup-error-withdraw').style.display = 'none';
    withdrawInputField.value = "";
})
document.getElementById('popup-error-no-balance').addEventListener('click', function () {
    document.getElementById('popup-error-no-balance').style.display = 'none';
    withdrawInputField.value = "";
})

