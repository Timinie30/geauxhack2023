let recipeListThing = [];

// adding and removing fields for the form
function addField(type) {
  const container = document.getElementById(type + "-container");
  const input = document.createElement("input");
  input.type = "text";
  input.name = type;

  container.appendChild(input);
}

function removeField(type) {
  const container = document.getElementById(type + "-container");
  if (container.childElementCount > 1) {
    container.removeChild(container.lastChild);
  }
}

function submitForm() {
  if (localStorage.getItem("recipeList") != null) {
    recipeListThing = JSON.parse(localStorage.getItem("recipeList"));
  }
  if (localStorage.getItem("recipeList") != null) {
    recipeListThing = JSON.parse(localStorage.getItem("recipeList"));
  }

  let recipe = {
    recipeTitle: "",
    pictureLink: "",
    ingredients: [],
    directions: [],
  };

  //query selectors for form elements
  const recipeTitle = document.getElementById("recipe-title").value;
  const pictureLink = document.getElementById("picture-link").value;
  const ingredients = Array.from(document.getElementsByName("ingredients")).map((input) => input.value);
  const directions = Array.from(document.getElementsByName("directions")).map((input) => input.value);

  //populating the recipe dictionary and adding it to the recipeList array
  recipe.recipeTitle = recipeTitle;
  recipe.pictureLink = pictureLink;
  recipe.ingredients = ingredients;
  recipe.directions = directions;

  recipeListThing.push(recipe);

  // resets the forms
  document.getElementById("recipe-title").value = "";
  document.getElementById("picture-link").value = "";
  document.getElementsByName("ingredients").forEach((input) => (input.value = ""));
  document.getElementsByName("directions").forEach((input) => (input.value = ""));

  JSONArray = JSON.stringify(recipeListThing);
  localStorage.setItem("recipeList", JSONArray);

  console.log(localStorage.getItem("recipeList"));

  window.location.href = "recipes-menu.html";
}

function backToMenu() {
  window.location.href = "recipes-menu.html";
}

function clearLocalStorage() {
  localStorage.clear("recipeList");
  console.log(localStorage.getItem("recipeList"));
}
