export const Fish = (fish) => {
    return `
        <section>
            <div><img class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.harvestLocation}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `
}
// this ^^^ renders individual fish objects as HTML