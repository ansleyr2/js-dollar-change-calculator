import { elements } from './base.js';

// Get the total bill value
export const getTotalBillAmount = () =>{
  return elements.total_bill_input.value;
};

// Get the paid amount value
export const getPaidAmountInput = () =>{
  return elements.paid_amount_input.value;
};

// Display the bils
export const setBills = (selector, amountPhrase)=>{
  elements[selector].innerHTML = amountPhrase;
};

export const displayError = (selector, err) =>{
  elements[selector].innerHTML = err;
};

export const validateNumberInput = (input) =>{
  const regex = /^\d+(\.\d{1,2})?$/;
  if(regex.test(input)){
    return true;
  }else{
    return false;
  }
};
