count = 1;
outstring = "";
while (count <= 100) {
  if (count % 3 == 0 && count % 5 == 0) {
    outstring += " Fizz Buzz ";
    count++;
    continue;
  } else if (count % 3 == 0) {
    outstring += " Fizz";
    count++;
    continue;
  } else if (count % 5 == 0) {
    outstring += " Buzz ";
    count++;
    continue;
  } else {
    outstring += " " + count;
  }
  count++;
}

console.log(outstring);
