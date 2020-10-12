/**
 *  FishList which renders individual fish objects as HTML
 */

import { mostHolyFish, soldierFish, unHolyFish } from "./fishDataProvider.js"
import { Fish } from "./Fish.js"
// importing named functions from the module that the function is built from

// TODO: Import `useFish` from the data provider module

export const FishList = () => {
    const contentElement = document.querySelector(".fishList")
    
    
    const holyFishes = mostHolyFish()
    // stores the useFish function from the fishDataProvider in a variable called "fishes"

    let fishHTMLrepresentation = ""
    // creates an empty array called fishHTMLrepresentation
    for (const fishObjects of holyFishes) {
        // prepares an iteration of "fishes" called "fishObjects"
        fishHTMLrepresentation += Fish(fishObjects)
        // uses the function "Fish()" to add HTML rendering to "fishObjects" and puts them in the empty "fishHTMLrepresentation" array with +=
    }


    const soldierFishes = soldierFish()

    // let fishHTMLrepresentation = ""
  
    for (const fishObjects of soldierFishes) {
        fishHTMLrepresentation += Fish(fishObjects)
        
    }
    
    
    const unHolyFishes = unHolyFish()

    // let fishHTMLrepresentation = ""

    for (const fishObjects of unHolyFishes) {
        fishHTMLrepresentation += Fish(fishObjects)
    }




    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLrepresentation}
        </section>
    `
}