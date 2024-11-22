//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    name: "Aniket",
    age: 21,
    profession: "cricketer",
    hobby: "playing cricket",

    introduce: function() 
    {
        alert("My name is " + this.name + " and I am a " + this.profession + ".");

    }
};
console.log(meObject.name); 
meObject.introduce();
