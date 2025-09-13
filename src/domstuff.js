console.log("domstuff.js loaded");

function paragraphTagUpdater() {
    const targetPtag = document.querySelector("p");

    console.log(targetPtag);

    targetPtag.innerText = "Some cool message here!";
}

paragraphTagUpdater();

// Breakfast menu renderer

const breakfastMenuItems = [
    "Pancakes",
    "blueberry pancakes",
    "bacon and eggs",
    "omelette",
    "avo smash",
];

function breakfastRenderer() {
    const targetParentContainer = document.querySelector("body");

    const menuContainer = document.createElement("section");
    console.log(menuContainer);
    menuContainer.id = "breakfastmenu";

    targetParentContainer.appendChild(menuContainer);

    // for (let i = 0; i < breakfastMenuItems.length; i++) {
    //     const individualMenuItem = breakfastMenuItems[i];
    //     console.log(individualMenuItem);
    // }

    // for (const item of breakfastMenuItems) {
    //     console.log(item);
    // }

    // for (const key in breakfastMenuItems) {
    //     const element = breakfastMenuItems[key];

    //     console.log(key, element);
    // }

    // breakfastMenuItems.forEach((item) => {
    //     console.log(item);
    //     const menuItemCard = document.createElement("section");
    //     menuItemCard.className = "menuitem";
    //     const menuItemTitle = document.createElement("h2");
    //     menuItemTitle.innerText = item;
    //     menuItemCard.appendChild(menuItemTitle);

    //     menuContainer.appendChild(menuItemCard);
    // });

    const menuItemCards = breakfastMenuItems.map((item) => {
        console.log(item);

        const menuItemCard = document.createElement("section");
        menuItemCard.className = "menuitem";
        const menuItemTitle = document.createElement("h2");
        menuItemTitle.innerText = item;
        menuItemCard.appendChild(menuItemTitle);

        return menuItemCard;
    });

    menuItemCards.length && menuContainer.append(...menuItemCards);
}

//breakfastRenderer();

const menuToggleButton = document.getElementById("menuToggleButton");
menuToggleButton.addEventListener("click", breakfastRenderer);
