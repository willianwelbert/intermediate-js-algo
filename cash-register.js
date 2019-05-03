function checkCashRegister(price, cash, cid) {
  var change = {
    status: "",
    change: []
  };

  const changeTotal = cash - price;

  if (changeTotal > cid) {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
  } else if (changeTotal === cid) {
    change.status = "CLOSED";
    change.change = cid;
  } else {
    change.status = "OPEN";
    change.change = cid;
  }
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
