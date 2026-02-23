// fetch load and show category on html

//create load category
const loadCategories = () => {
  // console.log("load category");
  //fetch data
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
//create load images
const loadImages = () => {
  // console.log("load category");
  //fetch data
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayImages(data.pets))
    .catch((error) => console.log(error));
};

const loadCategoryImages = (id) => {
  //alert(id);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    //.then((data) => displayImages(data))
    .catch((error) => console.log(error));
};

//const cardDemo = {
//{
//    "petId": 8,
//    "breed": "Beagle",
//    "category": "Dog",
//    "date_of_birth": "2023-03-22",
//    "price": 1200,
//    "image": "https://i.ibb.co.com/MCDfNqN/pet-8.jpg",
//    "pet_details": "Born on March 22, 2023, this female Beagle is curious and loves outdoor adventures. Fully vaccinated, she enjoys playing with children and exploring new places. Priced at $1200, she's a perfect fit for families looking for a playful and affectionate dog.",
//    "vaccinated_status": "Fully",
//    "pet_name": "Luna"
//}
//{
//  "id": 2,
//  "category": "Dog",
//  "category_icon": "https://i.ibb.co.com/c8Yp1y7/dog.png"
//},

//}

const displayImages = (pets) => {
  //console.log(pets);
  const imageContainer = document.getElementById("images");
  pets.forEach((pets) => {
    console.log(pets);
    const card = document.createElement("div");
    card.classList = "card";
    card.innerHTML = `
   <figure class="px-10 pt-10 h-[350px]">
    <img
      src="${pets.image}"
      class="rounded-xl h-full w-full object-cover" />
  </figure>
  <div class="">
  <div class="ml-10 font-bold text-2xl">${pets.pet_name}</div>
  
        <div class="ml-10">     
    
 
        <div class="flex">
          <img class="size-5 mt-3" src="https://img.icons8.com/ios/50/left-view.png" alt=""/>
<p class="text-xl my-2"> Breed:${pets.breed}$ </p></div>  
    <div class="flex">
          <img class="size-5 mt-3" src="https://img.icons8.com/windows/50/calendar.png" alt=""/>
<p class="text-xl my-2"> Birth:${pets.date_of_birth}$ </p></div>

       <div class="flex">
          <img class="size-5 mt-3" src="https://img.icons8.com/emoji/48/dna.png" alt=""/>
<p class="text-xl my-2"> Gender:${pets.gender}$ </p></div>


 <div class="flex">
          <img class="size-5 mt-3" src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png" alt=""/>
<p class="text-xl my-2"> Price:${pets.price}$ </p></div>
</div>
   
  <div class="divider"></div>
 <div class="flex gap-5 justify-center">
<button class="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
<button class="btn btn-outline btn-accent">Adopt</button>
<button class="btn btn-outline btn-accent">Details</button>
 </div>

    
  </div>
  `;
    imageContainer.append(card);
  });
};

// create display category
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);
    //create a button
    //const button = document.createElement("button");
    // button.classList = "btn";
    //onlclick
    //button.onclick = alert("hello");

    //button.innerText = item.category;
    //  button.innerHTML = `

    //${item.category} <img src ="${item.category_icon}" class="size-6 ml-6"/>`;
    // console.log(data);
    // add button
    // for buttonConatiner part
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button onclick="loadCategoryImages(${item.id})" class="btn">
    ${item.category} <img src ="${item.category_icon}" class="size-6 ml-6"/>
    </button>`;
    categoryContainer.append(buttonContainer);
  });
};

loadCategories();
loadImages();
