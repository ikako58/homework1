// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

function positiveNum(number) {
    if (number >= 0) {
        console.log('დადებითია')
    }else{
        console.log('უარყოფითია')
    }
}
positiveNum(-1)
// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე
function sumOfNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumOfNumbers());
// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი
function oddNumbers(number) {
    if (number % 2 === 0) {
        return 'ლუწია'
    }else{
        return 'კენტია'
    }
}
console.log(oddNumbers(20))
// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი
let car = {
    year: 2018 ,
    model: 'toyota camry',
}
function carAge(object) {
    let age = 2023 - object.year;
    return age;
}
console.log(carAge(car))
// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი
function findLargestNumber(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
  
    let largestNumber = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number' && !isNaN(numbers[i])) {
        if (numbers[i] > largestNumber) {
          largestNumber = numbers[i];
        }
      }
    }
  
    return largestNumber;
  }
  
  const numbers = [1, 4, 88, 99, 123];
  console.log(findLargestNumber(numbers));
// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი
function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
      return undefined;
    }
  
    let smallest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
  
    return smallest;
  }
  
  const smallestNumber = findSmallestNumber(numbers);
  console.log(`The smallest number is: ${smallestNumber}`);
// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"
function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  const originalWord = "one";
  const reversedWord = reverseWord(originalWord);
  console.log(`Original word: ${originalWord}`);
  console.log(`Reversed word: ${reversedWord}`);