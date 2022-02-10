const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    price: "$15.99",
    image: "images/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    category: "breakfast",
  },
  
  {
    id: 2,
    title: "Diner Double",
    price: "$13.99",
    image: "images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    category: "lunch",
  },

  {
    id: 3,
    title: "Godzilla Milkshake",
    price: "$6.99",
    image: "images/item-3.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    category: "shakes",
  },

  {
    id: 4,
    title: "Country Delight",
    price: "$20.99",
    image: "images/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
    category: "breakfast",
  },

  {
    id: 5,
    title: "Egg Attack",
    price: "$22.99",
    image: "images/item-5.jpeg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    category: "lunch",
  },

  {
    id: 6,
    title: "Oreo Dream",
    price: "$18.99",
    image: "images/item-6.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    category: "shakes",
  },

  {
    id: 7,
    title: "Bacon Overflow",
    price: "$8.99",
    image: "images/item-7.jpeg",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    category: "breakfast",
  },

  {
    id: 8,
    title: "American Classic",
    price: "$12.99",
    image: "images/item-8.jpeg",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    category: "lunch",
  },

  {
    id: 9,
    title: "Quarantine Buddy",
    price: "$16.99",
    image: "images/item-9.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: "shakes",
  },

  {
    id: 10,
    title: "Bison Steak",
    price: "$22.99",
    image: "images/item-10.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: "dinner",
  },
]

let createMenu = (menuItem) => `
<div class="menu">
  <img src=${menuItem.image} alt="">
  <div class="item-info">
    <header>
      <h6>${menuItem.title}</h6>
      <p class="price">${menuItem.price}</p>
    </header>
    <div class="item-line"></div>
    <p class="food-info">${menuItem.desc}</p>
  </div>
</div>
`

// ALL BUTTON
let content = document.querySelector(".content")
let allBtn = document.querySelector("#allBtn")

allBtn.addEventListener("click", all)
function all() {
  let allMenu = "";
  menu.forEach(food => {
    allMenu += createMenu(food)
    content.innerHTML = allMenu;
  })
}

all()

// BREAKFAST BUTTON
let breakfastBtn = document.querySelector("#breakfastBtn")
breakfastBtn.addEventListener("click", function() {
  let breakfastMenu = "";
  let filterBreakfastMenu = menu.filter(food => 
    food.category === "breakfast"
  )
  
  filterBreakfastMenu.forEach(item => {
    //console.log(item)
    //console.log(createMenu(item))
    breakfastMenu += createMenu(item)
    content.innerHTML = breakfastMenu;
  })
  
})

// LUNCH BUTTON
let lunchBtn = document.querySelector("#lunchBtn")

lunchBtn.addEventListener("click", function() {
  let lunchMenu = "";
  let filterLunchMenu = menu.filter(food => 
    food.category === "lunch"
  )

  filterLunchMenu.forEach(item => {
    lunchMenu += createMenu(item)
    content.innerHTML = lunchMenu;
  })

})

// SHAKES BUTTON
let shakesBtn = document.querySelector("#shakesBtn")

shakesBtn.addEventListener("click", function() {
  let shakesMenu = "";
  let filterShakesMenu = menu.filter(food =>
    food.category === "shakes"
  )

  filterShakesMenu.forEach(item => {
    shakesMenu += createMenu(item)
    content.innerHTML = shakesMenu;
  })
})

// DINNER BUTTON
let dinnerBtn = document.querySelector("#dinnerBtn")

dinnerBtn.addEventListener("click", function() {
  let dinnerMenu = "";
  let filterDinnerMenu = menu.filter(food => 
    food.category === "dinner"
  )

  filterDinnerMenu.forEach(item => {
    dinnerMenu += createMenu(item)
    content.innerHTML = dinnerMenu;
  })
})