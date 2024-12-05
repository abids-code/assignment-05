// Donation for donation 1
document.getElementById('btn-donation-one')
    .addEventListener('click', function () {
        const donationAmountOne = getInputFieldValueById('input-donation-one');
        const accountBalance = getTextFieldValueById('account-balance');

        if (donationAmountOne > 0 && isNaN != true && accountBalance >= donationAmountOne) {
            const donatedAmountOne = getTextFieldValueById('donated-amount-one');

            const newAccountBalance = accountBalance - donationAmountOne;
            const newDonatedAmount = donationAmountOne + donatedAmountOne;

            document.getElementById('donated-amount-one').innerText = newDonatedAmount;
            document.getElementById('account-balance').innerText = newAccountBalance;

            
            const dateTime = new Date().toString();
            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg','p-5', 'space-y-3', 'w-full');
            div.innerHTML = `
                <h3 class="text-2xl font-semibold"> ${donationAmountOne}$ is Donated for Relief for Families in Gaza </h3>
                <p class="border-gray-400 font-light"> Date : ${dateTime} </p>
            `;
            document.getElementById('history-container').appendChild(div);

        }

        else {
            alert('Enter a valid Amount');
        }
    })

// Donation Work For Donation 2
document.getElementById('btn-donation-two')
    .addEventListener('click', function () {
        const donationAmountTwo = getInputFieldValueById('input-donation-two');
        const accountBalance = getTextFieldValueById('account-balance');

        if (donationAmountTwo > 0 && isNaN != true && accountBalance >= donationAmountTwo) {
            const donatedAmountTwo = getTextFieldValueById('donated-amount-two');

            const newAccountBalance = accountBalance - donationAmountTwo;
            const newDonatedAmount = donationAmountTwo + donatedAmountTwo;

            document.getElementById('donated-amount-two').innerText = newDonatedAmount;
            document.getElementById('account-balance').innerText = newAccountBalance;

            const dateTime = new Date().toString();
            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg','p-5', 'space-y-3', 'w-full');
            div.innerHTML = `
                <h3 class="text-2xl font-semibold"> ${donationAmountTwo}$ is Donated for Relief for Families in Gaza </h3>
                <p class="border-gray-400 font-light"> Date : ${dateTime} </p>
            `;
            document.getElementById('history-container').appendChild(div);
        }
        else {
            alert('Enter a valid Amount');
        }
    })

// Donation work for donation 3
document.getElementById('btn-donation-three')
    .addEventListener('click', function () {
        const donationAmountThree = getInputFieldValueById('input-donation-three');
        const accountBalance = getTextFieldValueById('account-balance');

        if (donationAmountThree > 0 && isNaN != true && accountBalance >= donationAmountThree) {
            const donatedAmountThree = getTextFieldValueById('donated-amount-three');

            const newAccountBalance = accountBalance - donationAmountThree;
            const newDonatedAmount = donationAmountThree + donatedAmountThree;

            document.getElementById('donated-amount-three').innerText = newDonatedAmount;
            document.getElementById('account-balance').innerText = newAccountBalance;

            const dateTime = new Date().toString();
            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg','p-5', 'space-y-3', 'w-full');
            div.innerHTML = `
                <h3 class="text-2xl font-semibold"> ${donationAmountThree}$ is Donated for Relief for Families in Gaza </h3>
                <p class="border-gray-400 font-light"> Date : ${dateTime} </p>
            `;
            document.getElementById('history-container').appendChild(div);
        }
        else {
            alert('Enter a valid Amount');
        }
    })