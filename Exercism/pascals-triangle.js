export const rows = (numb) => {
  var i, j, temp, main, sum;
  temp = [1];
  main = [];
  sum = [];

  for (i = 1; i <= numb; i++) {
    for (j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        main[j] = 1;
      } else {
        main[j] = temp[j] + temp[j - 1];
      }
    }
    sum.push(temp);
    temp = Object.assign([], main);
  }

  return sum;
};
