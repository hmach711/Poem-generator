

function displayRecipe (response){


    new Typewriter("#recipe-element", {
        strings:response.data.answer ,
        autoStart: true,
        delay:50,
        cursor:"",
    
      });
    }



function generateRecipe (event) {
event.preventDefault ();


let userSearch=document.querySelector ("#user-instruction");

let apiKey= "df33e33bd04657eta6o8f2efea2aa5fb";
let prompt=`provide a simple recipe based on the ${userSearch.value} display recipe steps on seperate lines always`;
let context="You specialise in simple short and tasty recipes. Display recipe title in BOLD always. EVERY method step on seperate line in html format";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement=document.querySelector ("#recipe-element");
recipeElement.innerHTML=`Generating your recipe on ${userSearch.value}...`;

axios.get (apiUrl).then (displayRecipe);
displayRecipe(response.data.answer);
}

let recipeGenerator=document.querySelector ("#recipe-generator");
recipeGenerator.addEventListener ("submit", generateRecipe);