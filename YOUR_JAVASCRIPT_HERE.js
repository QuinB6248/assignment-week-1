// Write your JS here
const hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
};

function rest(object) {
    if (object.health === 10) {
        alert("You are topfit!")
    } else {
        object.health = 10
    };
     
     return object
};

function pickUpItem(hero, weapon) {
    weapon.type = "dagger";
    weapon.damage = 2;
    hero.inventory.push(weapon);

};

function equipWeapon(hero) {
    if (hero.inventory.length === 0) {
        return
    } else {
        hero.weapon = hero.inventory[0];
    }
    
};