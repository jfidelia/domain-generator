let pronoun = ['the','our'];
let adj = ['great','big'];
let noun = ['jogger','racoon'];
let item = "";

pronoun.forEach((pronoun) =>{
    adj.forEach((adj) =>{
        noun.forEach((noun) =>{ 
            console.log(pronoun + adj + noun);
            item += pronoun + adj + noun + '.com' + '<br>';
        });
    });
});

document.querySelector("p").innerHTML = item;