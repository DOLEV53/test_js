// עמודה ראשונה
let firstNumbers = [7, 4, 1, 0];

let myList = document.getElementById('main-div');

myList.innerHTML = "<ul id='my-list'>";
for (let x = 0; x < firstNumbers.length; x++) {
  myList.innerHTML += '<li class="my-number">' + firstNumbers[x] + "</li>";
}
myList.innerHTML += "</ul>";


// עמודה שנייה
let secondNumbers = [8, 5, 2, "."];

let myList2 = document.getElementById('main-div2');

myList2.innerHTML = "<ul id='my-list2'>";
for (let x = 0; x < secondNumbers.length; x++) {
  myList2.innerHTML += '<li class="my-number2">' + secondNumbers[x] + "</li>";
}
myList2.innerHTML += "</ul>";

// עמודה שלישית
let thirdNumbers = [9, 6, 3, "+/-"];

let myList3 = document.getElementById('main-div3');

myList3.innerHTML = "<ul id='my-list3'>";
for (let x = 0; x < thirdNumbers.length; x++) {
  myList3.innerHTML += '<li class="my-number3">' + thirdNumbers[x] + "</li>";
}
myList3.innerHTML += "</ul>";


