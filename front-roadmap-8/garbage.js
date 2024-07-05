function buildFun1(n) {
  var res = [];
  for (let i = 0; i < n; i++) {
    res.push(() => i);
  }
  return res;
}

function buildFun2(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    let localValue = i;
    res.push(() => localValue);
  }
  return res;
}

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0;
  marks.forEach((element) => {
    sum += element;
  });
  return Math.floor(sum / marks.length);
}
