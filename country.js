class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


// test.innertext +="test of the broadcast station";



function SwitchCountry() { 
   
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        let countryname = document.getElementById("CountryName");
        countryname.innerText = "USA";
        let lang = document.getElementById("OfficialLanguage");
        lang.innerText = "Murican";
        let greeting = document.getElementById("HelloWorld");
        greeting.innerText = "Why Hello there world! Have some McDonalds";
       
    }
    else if (input === "Mexico") {
        country = mexico;
        let countryname = document.getElementById("CountryName");
        countryname.innerText = "Mexico";
        let lang = document.getElementById("OfficialLanguage");
        lang.innerText = "Spanish";
        let greeting = document.getElementById("HelloWorld");
        greeting.innerText = "Hola mundo";
        
    }
    else if (input === "Algeria") {
        country = algeria;
        let countryname = document.getElementById("CountryName");
        countryname.innerText = "Algeria";
        let lang = document.getElementById("OfficialLanguage");
        lang.innerText = "Arabic and Berber";
        let greeting = document.getElementById("HelloWorld");
        greeting.innerText = "Sup";
    }

}
   





 
function DisplayColors()
    {
        let input = document.getElementById("CountryList").value;
        if (input === "USA") {
            country = usa; 
            let colors = document.getElementById(["Color1", "Color2", "Color3"]);
        }
       else if (input === "Mexico") {
           country = mexico;
        }
        else if (input === "Algeria") {
           country = algeria;
         }
 }


  
  

// let lightbulbNode = document.querySelector(".lightbulb");
// function ToggleLight(){
//     if(lightbulbNode.style.backgroundColor == "yellow"){
//         lightbulbNode.style.backgroundColor = "gray";
//     }
//     else if (lightbulbNode.style.backgroundColor == "gray"){
//         lightbulbNode.style.backgroundColor = "yellow";
//     }
//     else{
//         lightbulbNode.style.backgroundColor = "yellow";
//     }
// }
