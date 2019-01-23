export const DOMStrings = {
  "total_bill":"total_bill",
  "paid_amount":"paid_amount",
  "calc_btn":"calc_btn",
  "clear_btn":"clear_btn",
  "total_change":"total_change",
  "hundred_bills":"hundred_bills",
  "fifty_bills":"fifty_bills",
  "twenty_bills":"twenty_bills",
  "ten_bills":"ten_bills",
  "five_bills":"five_bills",
  "one_bills":"one_bills",
  "quarter_coins":"quarter_coins",
  "dime_coins":"dime_coins",
  "nickel_coins":"nickel_coins",
  "penny_coins":"penny_coins",
  "total_bill_err":"total_bill--err",
  "paid_amount_err":"paid_amount--err"
};

export const elements = {
  "total_bill_input": document.querySelector(`.${DOMStrings.total_bill}`),
  "paid_amount_input": document.querySelector(`.${DOMStrings.paid_amount}`),
  "calculate_btn": document.querySelector(`.${DOMStrings.calc_btn}`),
  "clear_btn": document.querySelector(`.${DOMStrings.clear_btn}`),
  "total_change_div": document.querySelector(`.${DOMStrings.total_change}`),
  "hunderd_bills_div": document.querySelector(`.${DOMStrings.hundred_bills}`),
  "fifty_bills_div": document.querySelector(`.${DOMStrings.fifty_bills}`),
  "twenty_bills_div": document.querySelector(`.${DOMStrings.twenty_bills}`),
  "ten_bills_div": document.querySelector(`.${DOMStrings.ten_bills}`),
  "five_bills_div": document.querySelector(`.${DOMStrings.five_bills}`),
  "one_bills_div": document.querySelector(`.${DOMStrings.one_bills}`),
  "quarter_coins_div": document.querySelector(`.${DOMStrings.quarter_coins}`),
  "dime_coins_div": document.querySelector(`.${DOMStrings.dime_coins}`),
  "nickle_coins_div": document.querySelector(`.${DOMStrings.nickel_coins}`),
  "penny_coins_div": document.querySelector(`.${DOMStrings.penny_coins}`),
  "total_bill_err_div":document.querySelector(`.${DOMStrings.total_bill_err}`),
  "paid_amount_err_div":document.querySelector(`.${DOMStrings.paid_amount_err}`)
};