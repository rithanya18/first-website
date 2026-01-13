const districtsDiv = document.getElementById("districts");
const hotelsDiv = document.getElementById("hotels");
const menuDiv = document.getElementById("menu");

/* DATA */
const data = {
  Chennai: {
    image: "images/chennai.jpg",
    hotels: {
      "Anjappar": ["Biryani", "Chicken 65", "Parotta"],
      "Sangeetha": ["Idli", "Dosa", "Veg Meals"],
      "Saravana Bhavan": ["Pongal", "Vada", "Coffee"],
      "Barbeque Nation": ["Grill Chicken", "Starters", "Dessert"],
      "A2B": ["Mini Tiffin", "Poori", "Kesari"]
    }
  },

  Coimbatore: {
    image: "images/coimbatore.jpg",
    hotels: {
      "Junior Kuppanna": ["Mutton Biryani", "Chicken Chukka"],
      "Haribhavanam": ["Kovai Biryani", "Pepper Chicken"],
      "Geetha Canteen": ["Meals", "Sambar Rice"],
      "Annapoorna": ["Dosa", "Coffee"],
      "Cock Ra Co": ["Grill Chicken", "Shawarma"]
    }
  },

  Madurai: {
    image: "images/madurai.jpg",
    hotels: {
      "Kumar Mess": ["Mutton Chukka", "Meals"],
      "Amma Mess": ["Non-Veg Meals", "Chicken Fry"],
      "Murugan Idli": ["Idli", "Vada"],
      "Sri Sabarees": ["Parotta", "Salna"],
      "Konar Mess": ["Kari Dosa"]
    }
  },

  Trichy: {
    image: "images/trichy.jpg",
    hotels: {
      "Banana Leaf": ["Meals", "Veg Curry"],
      "Kannappa": ["Biryani", "Chicken Fry"],
      "Mathura": ["North Indian Meals"],
      "Royal Biryani": ["Chicken Biryani"],
      "Hot Chips": ["Snacks"]
    }
  },

  Salem: {
    image: "images/salem.jpg",
    hotels: {
      "Selvi Mess": ["Meals"],
      "Sri Saravana": ["Dosa", "Idli"],
      "Annapoorna": ["Veg Meals"],
      "Barbeque": ["Grill Items"],
      "SS Hyderabad": ["Biryani"]
    }
  },

  Erode: {
    image: "images/erode.jpg",
    hotels: {
      "Erode Amman Mess": ["Meals"],
      "Annapoorna": ["Tiffin"],
      "Hotel Gowri": ["South Indian"],
      "KFC": ["Fried Chicken"],
      "Dominos": ["Pizza"]
    }
  },

  Tirunelveli: {
    image: "images/tirunelveli.jpg",
    hotels: {
      "Nellai Saravana": ["Halwa", "Meals"],
      "Aryas": ["Veg Meals"],
      "Hotel Blue Moon": ["Non-Veg"],
      "Annapoorna": ["Tiffin"],
      "Hotel Vairamalai": ["Parotta"]
    }
  },

  Vellore: {
    image: "images/vellore.jpg",
    hotels: {
      "Darling Residency": ["Multi Cuisine"],
      "Aryas": ["Veg Meals"],
      "Hotel Alankar": ["South Indian"],
      "Zaitoon": ["Arabian"],
      "Dominos": ["Pizza"]
    }
  },

  Thanjavur: {
    image: "images/thanjavur.jpg",
    hotels: {
      "Sathars": ["Biryani"],
      "Hotel Gnanam": ["Multi Cuisine"],
      "Sri Krishna": ["Veg Meals"],
      "Banana Leaf": ["Traditional Meals"],
      "Hotel Parisutham": ["South Indian"]
    }
  },

  Kanyakumari: {
    image: "images/kanyakumari.jpg",
    hotels: {
      "Hotel Sea View": ["Sea Food"],
      "Triveni": ["South Indian"],
      "Sangam": ["Meals"],
      "Leela Cafe": ["Snacks"],
      "Taj Restaurant": ["Multi Cuisine"]
    }
  }
};

/* LOAD DISTRICTS */
for (let district in data) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${data[district].image}">
    <h3>${district}</h3>
  `;
  card.onclick = () => showHotels(district);
  districtsDiv.appendChild(card);
}

/* SHOW HOTELS */
function showHotels(district) {
  hotelsDiv.innerHTML = "";
  menuDiv.classList.add("hidden");
  hotelsDiv.classList.remove("hidden");

  for (let hotel in data[district].hotels) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${hotel}</h3>`;
    card.onclick = () => showMenu(district, hotel);
    hotelsDiv.appendChild(card);
  }
}

/* SHOW MENU */
function showMenu(district, hotel) {
  menuDiv.innerHTML = "";
  menuDiv.classList.remove("hidden");

  data[district].hotels[hotel].forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.textContent = item;
    menuDiv.appendChild(div);
  });
}

