import { StringContext } from "./string";
import { Container } from "../elements/container";

describe("String Context", () => {
  test("Build Method returns string", () => {
    const element = StringContext(
      Container({
        innerText: "Hello Daddy!!!",
      })
    );
    expect(element).toEqual(`<div>Hello Daddy!!!</div>`);
  });
});
