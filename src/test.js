
import * as say from "../src/index.js";
import Character from "../../constructors/src/index.js";

test("new Bowerman", () => {
    const result = new Bowerman("Gena", 25, 25);
    const expected =
        { "health": 100, "level": 1, "name": "Gena", "attack": 25, "defends": 25 };
    expect(result).toEqual(expected);
})
test("levelUp Bowerman heakth =0 ", () => {
    const person = new Bowerman("Gena", 25, 25);
    person.health = 0;
    const result = person.levelUp();
    const expected = "нельзя повысить левел умершего";
    expect(result).toThrow(expected);
})
test("level up Bowerman", () => {
    const person = new Bowerman("Gena", 25, 25);
    const result = person.levelUp();
    const expected =
        { "health": 100, "level": 2, "name": "Gena", "attack": 30, "defends": 30 };
    expect(result).toEqual(expected);
})
