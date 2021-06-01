
import * as index from "../src/index.js";

test("new Bowerman", () => {
    const result = new index.Bowerman("Gena","Bowerman");
    const expected =
        { "health": 100, "level": 1, "name": "Gena", "attack": 25, "defence": 25 };
    expect(result).toEqual(expected);
})
test("levelUp Bowerman health = 0 ", () => {
    const person = new index.Bowerman("Gena", "Bowerman");
    person.health = 0;
    const result = person.levelUp();
    const expected = "нельзя повысить левел умершего";
    expect(result).toEqual(expected);
})
test("level up Bowerman", () => {
    const person = new index.Bowerman("Gena", "Bowerman");
    person.levelUp();
    const expected =
        { "health": 100, "level": 2, "name": "Gena", "attack": 30, "defence": 30 };
    expect(person).toEqual(expected);
})
test("error name Character", () => {
    const result = new Character("G", "Daemon");
    const expected = "Имя должно быть от 2 до 10 символов";
    expect(result).toThrow(expected);
})
test("error type Character", () => {
    const result = new Character("Gena", "Мечник");
    const expected = "Тип персонажа не найден";
    expect(result).toThrow(expected);
})
test("damage ", () => {
    const person = new Character("Тор", "Daemon");
    person.damage(99);
    const result = person.health;
    const expected = 40.6;
    expect(result).toBe(expected);
})