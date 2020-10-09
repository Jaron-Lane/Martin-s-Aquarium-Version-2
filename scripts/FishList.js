/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from "./fishDataProvider.js"
import { Fish } from "./Fish.js"
// importing named functions from the module that the function is built from

// TODO: Import `useFish` from the data provider module

export const FishList = () => {
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()
    // stores the useFish function from the fishDataProvider in a variable called "fishes"

    let fishHTMLrepresentation = ""
    // creates an empty array called fishHTMLrepresentation
    for (const fishObjects of fishes) {
        // prepares an iteration of "fishes" called "fishObjects"
        fishHTMLrepresentation += Fish(fishObjects)
        // uses the function "Fish()" to add HTML rendering to "fishObjects" and puts them in the empty "fishHTMLrepresentation" array with +=
    }

    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLrepresentation}
        </section>
    `
}