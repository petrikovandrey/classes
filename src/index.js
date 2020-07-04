// На 1 повышает поле level;
// На 20% повышает показатели attack и defence;
// Приводит показатель health к значению 100.
export class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
    levelUp() {
        if(this.health ===0) {
            throw "нельзя повысить левел умершего"; 
        }
        this.level += 1;
        this.attack += this.attack*0.2; 
        this.health = 100;
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
    constructor(name, power) {
        super(name);
        this.power = power;
    }
}

export class Magician extends Character {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
}

export class Daemon extends Character {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
}

export class Undead extends Character {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
}

export class Zombie extends Character {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
}