/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */


const fishCollection = [
    {
        name: "Kyle",
        species: "Butterfly Fish",
        diet: "Algea, Corals, and Sponges",
        length: 18,
        harvestLocation: "Indian Ocean",
        image: "https://www.thesprucepets.com/thmb/EcwXL_b2vz1zDqGsvlK6CPEPBRE=/1806x1200/filters:fill(auto,1)/butterflyfish-588a0a803df78caebcc08582.jpg"

    },
    {
        name: "Kyle 2",
        species: "Butterfly Fish",
        diet: "Algea, Corals, and Sponges",
        length: 20,
        harvestLocation: "Indian Ocean",
        image: "https://www.thesprucepets.com/thmb/EcwXL_b2vz1zDqGsvlK6CPEPBRE=/1806x1200/filters:fill(auto,1)/butterflyfish-588a0a803df78caebcc08582.jpg"

    },
    {
        name: "Kyle the III",
        species: "Butterfly Fish",
        diet: "Algea, Corals, and Sponges",
        length: 21,
        harvestLocation: "Indian Ocean",
        image: "https://www.thesprucepets.com/thmb/EcwXL_b2vz1zDqGsvlK6CPEPBRE=/1806x1200/filters:fill(auto,1)/butterflyfish-588a0a803df78caebcc08582.jpg"

    },
    {
        name: "Kyle Cuatro",
        species: "Butterfly Fish",
        diet: "Algea, Corals, and Sponges",
        length: 20,
        harvestLocation: "Indian Ocean",
        image: "https://www.thesprucepets.com/thmb/EcwXL_b2vz1zDqGsvlK6CPEPBRE=/1806x1200/filters:fill(auto,1)/butterflyfish-588a0a803df78caebcc08582.jpg"

    },
    {
        name: "Kyle.5",
        species: "Butterfly Fish",
        diet: "Algea, Corals, and Sponges",
        length: 17,
        harvestLocation: "Indian Ocean",
        image: "https://www.thesprucepets.com/thmb/EcwXL_b2vz1zDqGsvlK6CPEPBRE=/1806x1200/filters:fill(auto,1)/butterflyfish-588a0a803df78caebcc08582.jpg"

    }
]

export const useFish = () => {
    return fishCollection.slice()
    // this ^^^ has just created a function to be exported. It is spliced, which is acting as a copy of the original on this page
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    // creates an empty array to hold the "perfectly divisible by 3" fish
    for (const fish of fishCollection) {
        // a for..of loop to iterate through all the fish inside "fishCollection"
        if (fish.length % 3 === 0) {
            // "Divide the length of each fish by 3 and if the remainder is equal to 0..."
            holyFish.push(fish)
            // "push that fish into the "holyFish" array
        }
    }
    // console.log(holyFish)
    return holyFish
    // always return the function, and do it at the very end
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
    }
    // console.log(soldiers)
    return soldiers
}

export const unHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}

