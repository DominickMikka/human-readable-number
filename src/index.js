module.exports = function toReadable (number) {
  let arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr3 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arr4 = ['hundred', 'thousand', 'million'];
  let oneArgument = 0;
  let twoArgument = 0;
  let threeArgument = 0;
  let fourArgument = 0;

  if (number === 0) {
    return 'zero';
  }

  if (number < 20) {
    return arr[number];
  }

  if ((number >= 20) && (number <= 99)) {
    oneArgument = Math.trunc(number / 10);
    twoArgument = number % 10;
    return `${arr3[oneArgument]} ${arr[twoArgument]}`.trim();
  }

  if ((number >= 100) && (number <= 999)) {
    oneArgument = Math.trunc(number / 100);
    twoArgument = number % 100;
    threeArgument = Math.trunc(twoArgument / 10);
    fourArgument = twoArgument % 10;

    if ((twoArgument >= 1) && (twoArgument <= 19)) {
      return `${arr[oneArgument]} hundred ${arr[twoArgument]}`.trim();
    } else {
      return `${arr[oneArgument]} hundred ${arr3[threeArgument]} ${arr[fourArgument]}`.trim();
    }

  }
}
