
export class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
    levelUp() {
        console.log(this);
        if(this.health ===0) {
            return "нельзя повысить левел умершего"; 
        }
        this.level += 1;
        this.attack += this.attack*0.2; 
        this.defence += this.defence*0.2; 
        this.health = 100;
        console.log(this);
    }
}

export class Bowerman extends Character {
    constructor(name, attack, defence) {
        super(name);
        this.attack = attack;
        this.defence = defence;
    }
}

export class Swordsman extends Character {
    constructor(name, attack, defence) {
        super(name);
        this.attack = attack;
        this.defence = defence;
    }
}

export class Magician extends Character {
    constructor(name, attack, defence) {
        super(name);
        this.attack = attack;
        this.defence = defence;
    }
}

export class Daemon extends Character {
    constructor(name, attack, defence) {
        super(name);
        this.attack = attack;
        this.defence = defence;
    }
}

export class Undead extends Character {
    constructor(name, attack, defence) {
        super(name);
        this.attack = attack;
        this.defence = defence;
    }
}

export class Zombie extends Character {
    constructor(name, attack, defence) {
        super(name);
        this.attack = attack;
        this.defence = defence;
    }
}