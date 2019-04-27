// Write your JS here

const hero = {
    name: "hero",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
};

const enemy = {
    name: "enemy",
    heroic: true,
    inventory: [
        { type: "fist", damage: 1,},
        { type: "dagger", damage: 2,},
        { type: "bow_and_arrow", damage: 3,},
        { type: "sword", damage: 4,},
        { type: "missed", damage: 0,},
    ],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }

}

// change the name of HERO into submitted name, store that name in object hero
function submitName() {
    const nameInput = document.getElementById("hero_name");
    const nameHero = nameInput.value;
    document.getElementById("change_name").textContent = nameHero.toUpperCase();
    hero.name = nameHero;
    nameInput.value = null;
}

// restore health to 10 inside hero object
function rest(object) {
    if (object.health === 10) {
        alert("You are topfit!")
    } else {
        object.health = 10
    };
    displayStats (hero);
     return object
};

// change weapon type to dagger and damage to 2, push this object in invemntory array of hero object
function pickUpItem(hero, weapon) {
    weapon.type = "dagger";
    weapon.damage = 2;
    hero.inventory.push(weapon);
    
    //displayStats (hero);
    

};

// weapon becomes the first item of the inventory array of hero object
function equipWeapon(hero) {
    if (hero.inventory.length === 0) {
        return
    } else {
        hero.weapon = hero.inventory[0];
    }
    displayStats (hero);
};


function fightEnemy(hero, enemy) {
    const indexNum = Math.floor(Math.random()*enemy.inventory.length);
    enemy.weapon = enemy.inventory[indexNum];
    hero.health -= enemy.weapon.damage;
    if (hero.health <= 0) {
        document.getElementById('win').innerHTML = "YOU LOST";
    } else {
        enemy.health -= hero.weapon.damage;
        hero.inventory.pop();
        console.log(hero.inventory)
        if (enemy.health <= 0) {
            document.getElementById('win').innerHTML = "YOU WIN";
        }
    }
    displayStats (hero);
}

function displayStats (hero) {
    
    document.getElementById("stats_name").textContent = hero.name;
    document.getElementById("stats_health").textContent = hero.health;
    document.getElementById("stats_type").textContent = hero.weapon.type;
    document.getElementById("stats_damage").textContent = hero.weapon.damage;

}