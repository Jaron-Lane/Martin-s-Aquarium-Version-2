console.log("Welcome to the main module")


import { useFish } from './fishDataProvider.js'
// this ^^^ imports from fishDataProvider.js 

const allTheFish = useFish()
//  this ^^^ stores the variable from useFish function from the fishDataProvider page

for (const fish of allTheFish) {
    console.log(fish)
}
// this ^^^ iterates through the items made by fishDataProvider that have been stored in the allTheFish variable


