
export class Character {
    constructor(name,type) {
        if (name.length < 2 || name.length > 10) {
            return new Error("Имя должно быть от 2 до 10 символов");
        }
        let typeCharacter = [
            "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
        ];
        if (!typeCharacter.includes(type)) {
            return new Error("Тип персонажа не найден");
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
    levelUp() {
        if (this.health === 0) {
            return "нельзя повысить левел умершего";
        }
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
    }
    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - defence / 100);
        }
    }
}

export class Bowerman extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
        // this.type = "Bowerman";
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
        this.type = "Swordsman";
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defence = 40;
        this.type = "Magician";
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defence = 40;
        this.type   =  "Daemon";
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
        this.type = "Undead";
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
        this.type = "Zombie";
    }
}