"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i of items) {
    console.log(i);
  }

}

// const items = ['cat','dog','fish','unicorn'];
// printIndices(items)


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = []

  for (const i in items) {
    if (i % 2 === 0)
      result.push(items[i])
  }
  console.log(result)
}


// everyOtherItem(items)

const items=[1, 30, 4, 21, 100000];

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  items.sort((a, b) => a - b);
  console.log(items)
  const nSlice = items.slice(0, n);
  console.log(nSlice)
  nSlice.reverse();
  console.log(nSlice)


}

smallestNItems(items,3)
