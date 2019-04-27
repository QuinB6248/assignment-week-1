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
        { type: "sword", damage: 3,},
        { type: "knife", damage: 1,}     
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
    displayStats(hero);
     return object
};

// change weapon type to dagger and damage to 2, push this object in invemntory array of hero object
function pickUpItem(heroObj, weaponObj) {
    weaponObj.type = "dagger";
    weaponObj.damage = 2;
    heroObj.inventory.push(weaponObj);
    
    displayStats(hero);   
};

// weapon becomes the first item of the inventory array of hero object
function equipWeapon(heroObj) {
    if (heroObj.inventory.length === 0) {
        return
    } else {
        heroObj.weapon = heroObj.inventory[0];
    }
    displayStats(hero);
};

// Get damage from a random weapon+damage from enemy object, and damage enemy if health = 0 then someone wins
function fightEnemy(heroObj, enemyObj) {
    if (heroObj.health <= 0 || enemyObj.health <= 0) {
        return   
   }
    const indexNum = Math.floor(Math.random() * enemyObj.inventory.length);
    enemyObj.weapon = enemyObj.inventory[indexNum];
    heroObj.health -= enemyObj.weapon.damage;
    if (heroObj.health <= 0) {
         document.getElementById('win').innerHTML = "YOU LOST";    
    } else {
        enemyObj.health -= heroObj.weapon.damage;
        heroObj.inventory.pop();  
        if (enemyObj.health <= 0) {
          document.getElementById('win').innerHTML = "YOU WIN";     
        }
    }
    displayStats(hero);
}

// Removes picture of enemy
function removePicture() {
    const image = document.getElementById("angry_enemy");
    image.parentNode.removeChild(image);
}

// Show status of hero
function displayStats(heroObj) {
    document.getElementById("stats_name").textContent = heroObj.name;
    document.getElementById("stats_health").textContent = heroObj.health;
    document.getElementById("stats_type").textContent = heroObj.weapon.type;
    document.getElementById("stats_damage").textContent = heroObj.weapon.damage;
    document.getElementById("stats_inventory").textContent = heroObj.inventory.length;
}