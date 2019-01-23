// Import stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
// other imports
import { elements, DOMStrings } from './base.js';
import * as view from './view.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Dollar change calculator</h1>`;

const validateBillInput = () =>{
  return view.validateNumberInput(view.getTotalBillAmount());
};

const validatePaidInput = () =>{
  return view.validateNumberInput(view.getPaidAmountInput());
};

// Calculate button event handler
const controlCalculate = () => {
  // Clear the bill divs
  clearBillDivs();

  let price = 0;
  let paid = 0;

  const isInputValidBill = validateBillInput();
  if(!isInputValidBill){
    view.displayError('total_bill_err_div', `Invalid bill amount`);
  }
  const isInputValidPaid = validatePaidInput();
  if(!isInputValidPaid){
    view.displayError('paid_amount_err_div',`Invalid paid amount`);
  }

  if(!isInputValidBill || !isInputValidPaid){
    return;
  }

  price = parseFloat(view.getTotalBillAmount());
  price = parseFloat(price.toFixed(2));
  paid = parseFloat(view.getPaidAmountInput());
  paid = parseFloat(paid.toFixed(2));

  let correctDue = paid - price;
  const dollarDue = correctDue.toFixed(2);

  if (paid < price) {
    view.setBills('total_change_div', `Paid amount is less than bill amount.`);
    return;
  }
  if (paid == price) {
    view.setBills('total_change_div', `No change back because paid amount is the same as price amount`);
    return;
  }
  if (paid > price) {
    view.setBills('total_change_div', `<b>Correct Change Back = \$${dollarDue}</b>`);
  }

  let amountDue = parseFloat(correctDue.toFixed(2));
  amountDue = amountDue * 100;

  const hundredCheck = Math.floor(amountDue / 10000);
  if (hundredCheck > 0) {
    const hundredBill = hundredCheck;
    amountDue = amountDue - (hundredCheck * 10000);
    view.setBills('hunderd_bills_div', `Hundred Dollar Bills = ${hundredBill}`);
  }
  const fiftyCheck = Math.floor(amountDue / 5000);
  if (fiftyCheck > 0) {
    const fiftyBill = fiftyCheck;
    amountDue = amountDue - (fiftyCheck * 5000);
    view.setBills('fifty_bills_div', `Fifty Dollar Bills = ${fiftyBill}`);
  }
  const twentyCheck = Math.floor(amountDue / 2000);
  if (twentyCheck > 0) {
    const twentyBill = twentyCheck;
    amountDue = amountDue - (twentyCheck * 2000);
    view.setBills('twenty_bills_div', `Twenty Dollar Bills = ${twentyBill}`);
  }
  const tenCheck = Math.floor(amountDue / 1000);
  if (tenCheck > 0) {
    const tenBill = tenCheck;
    amountDue = amountDue - (tenCheck * 1000);
    view.setBills('ten_bills_div', `Ten Dollar Bills = ${tenBill}`);
  }
  const fiveCheck = Math.floor(amountDue / 500);
  if (fiveCheck > 0) {
    const fiveBill = fiveCheck;
    amountDue = amountDue - (fiveCheck * 500);
    view.setBills('five_bills_div', `Five Dollar Bills = ${fiveBill}`);
  }
  const oneCheck = Math.floor(amountDue / 100);
  if (oneCheck > 0) {
    const oneBill = oneCheck;
    amountDue = amountDue - (oneCheck * 100);
    view.setBills('one_bills_div', `One Dollar Bills = ${oneBill}`);
  }
  const quarterCheck = Math.floor(amountDue / 25);
  if (quarterCheck > 0) {
    const quarterCoin = quarterCheck;
    amountDue = amountDue - (quarterCheck * 25);
    view.setBills('quarter_coins_div', `Quarters = ${quarterCoin}`);
  }
  const dimeCheck = Math.floor(amountDue / 10);
  if (dimeCheck > 0) {
    const dimeCoin = dimeCheck;
    amountDue = amountDue - (dimeCheck * 10);
    view.setBills('dime_coins_div', `Dimes = ${dimeCoin}`);
  }
  const nickelCheck = Math.floor(amountDue / 5);
  if (nickelCheck > 0) {
    const nickelCoin = nickelCheck;
    amountDue = amountDue - (nickelCheck * 5);
    view.setBills('nickle_coins_div', `Nickels = ${nickelCoin}`);
  }
  const centCheck = Math.floor(amountDue / 1);
  if (centCheck > 0) {
    const centCoin = centCheck;
    amountDue = amountDue - (centCheck * 1);
    view.setBills('penny_coins_div', `Pennies = ${centCoin}`);
  }
};

// Clear event handler
const controlClear = () => {
  // clear the inputs
  elements.total_bill_input.value = '';
  elements.paid_amount_input.value = '';

  clearBillDivs();

  // Set back the focus to bill ammount text field
  elements.total_bill_input.focus();
};

const clearBillDivs = () => {
  // selecting all divs
  // Returns a NodeList
  const divs = document.querySelectorAll(`.${DOMStrings.total_change},.${DOMStrings.hundred_bills},.${DOMStrings.fifty_bills},.${DOMStrings.twenty_bills},.${DOMStrings.ten_bills},.${DOMStrings.five_bills},.${DOMStrings.one_bills},.${DOMStrings.quarter_coins},.${DOMStrings.dime_coins},.${DOMStrings.nickel_coins},.${DOMStrings.penny_coins},.${DOMStrings.total_bill_err},.${DOMStrings.paid_amount_err}`);

  // convert the NodeList to an Array
  const array = Array.from(divs);

  // iterating through each div to set the innnerHTML to ''
  array.forEach(div => div.innerHTML = '');
};
// Event listeners for buttons
elements.calculate_btn.addEventListener('click', controlCalculate);
elements.clear_btn.addEventListener('click', controlClear);

