let previous;
const next = async (fn) => {
  previous = previous ? previous.then(() => fn()) : fn();
  previous.catch((err) => {
    console.error(err);
    previous = null;
  });
};

const clear = () => {};

const unixToDate = (unix) => {
  return moment.unix(unix).format('YYYY-MM-DD HH:mm:ss');
};

const precision = 10 ** 2;
const bnToNumber = (bn) => {
if(bn._isBigNumber){
  return (test = Number(bn.mul(precision).div(toUnit(1)).toString()) / precision);
}
return bn
};

exports.next = next;
exports.clear = clear;
exports.bnToNumber = bnToNumber;
exports.unixToDate = unixToDate;
