
export class Character {
    constructor(name) {
        if (name.length < 2 || name.length > 10) {
            return "Имя должно быть от 2 до 10 символов";
        }
        let typeCharacter = [
            "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
        ];
        if (!typeCharacter.includes(type)) {
            return "Тип персонажа не найден";
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
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
    }
}