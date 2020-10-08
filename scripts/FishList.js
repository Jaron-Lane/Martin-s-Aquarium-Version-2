
/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from "./fishDataProvider.js"
import { Fish } from "./Fish.js"

// TODO: Import `useFish` from the data provider module

export const FishList = () => {
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    let fishHTMLrepresentation = ""
    for (const fishObjects of fishes) {
        fishHTMLrepresentation += Fish(fishObjects)
    }

    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLrepresentation}
        </section>
    `
}