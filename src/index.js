function generatePoem (event) {
event.preventDefault ();

let poemElement=document.querySelector ("poem-element");


new Typewriter("#poem-element", {
    strings: "Waves come crashing to grey sullen shores",
    autoStart: true,
    delay:50,
    cursor:"",

  });





}



let poemGenerator=document.querySelector ("#poem-generator");
poemGenerator.addEventListener ("submit", generatePoem);