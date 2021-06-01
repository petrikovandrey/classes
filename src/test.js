import * as index from "../src/index.js";

test("new Bowerman", () => {
    const result = new index.Bowerman("Gena", "Bowerman");
    const expected =
    {
        "attack": 25,
        "defence": 25,
        "health": 100,
        "level": 1,
        "name": "Gena",
        "type": "Bowerman"
    };
    expect(result).toEqual(expected);
})

test("levelUp Bowerman health = 0 ", () => {
    const person = new index.Bowerman("Gena", "Bowerman");
    person.health = 0;
    const result = person.levelUp();
    const expected = "нельзя повысить левел умершего";
    expect(result).toBe(expected);
})
test("level up Bowerman", () => {
    const person = new index.Bowerman("Gena", "Bowerman");
    person.levelUp();
    const expected =
        { "health": 100, "level": 2, "name": "Gena", "attack": 30, "defence": 30 ,"type": "Bowerman"};
    expect(person).toEqual(expected);
})
test("error name Character", () => {
    const result = new index.Character("G", "Daemon");
    expect(result).toThrow();
})
test("error type Character", () => {
    const result = new index.Character("Gena", "Мечник");
     expect(result).toThrow();
})
test("damage point", () => {
    const person = new index.Daemon("Тор", "Daemon");
    person.damage(99);
    const result = person.health;
    const expected = 40.6;
    expect(result).toBe(expected);
})