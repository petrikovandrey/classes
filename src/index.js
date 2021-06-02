
export class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя должно быть от 2 до 10 символов");
        }
        let typeCharacter = [
            "Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
        ]
        if (!typeCharacter.includes(type)) {
            throw new Error("Тип персонажа не найден");
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
        this.type = type;
    }
    levelUp() {
        if (this.health <= 0) {
            throw new Error("нельзя повысить левел умершего");
        }
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
    }
    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

export class Bowerman extends Character {
    constructor(name){
        super(name,"Bowerman");
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name,"Swordsman");
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name,"Magician");
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name,"Daemon");
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name,"Undead");
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name,"Zombie");
        this.attack = 40;
        this.defence = 10;
    }
}
