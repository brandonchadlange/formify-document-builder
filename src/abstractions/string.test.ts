import { StringElement } from "./string";

let div = new StringElement("div");
let paragraph = new StringElement("p");

describe("String Element Abstraction", () => {
  beforeEach(() => {
    div = new StringElement("div");
  });

  describe("Instantiated", () => {
    test("Render Method", () => {
      expect(div.render).toBeDefined();
      expect(div.render()).toEqual("<div></div>");
    });

    test("Append Method", () => {
      expect(div.append).toBeDefined();
      div.append(paragraph);
      expect(div.render()).toEqual("<div><p></p></div>");
      div.append(paragraph);
      expect(div.render()).toEqual("<div><p></p><p></p></div>");
    });

    describe("Classlist", () => {
      test("it should be defined", () => {
        expect(div.classList).toBeDefined();
      });

      test("add", () => {
        expect(div.classList.add).toBeDefined();
        div.classList.add("container");
        expect(div.classList.value).toEqual("container");
        expect(div.classList.length).toBe(1);
        div.classList.add("active");
        expect(div.classList.value).toEqual("container active");
        expect(div.classList.length).toBe(2);
      });

      test("length", () => {
        expect(div.classList.length).toBeDefined();
        expect(div.classList.length).toEqual(0);
        div.classList.add("container", "cake");
        expect(div.classList.length).toEqual(2);
      });

      test("value", () => {
        expect(div.classList.value).toBeDefined();
        expect(div.classList.value).toEqual("");
        div.classList.add("container", "cake");
        expect(div.classList.value).toEqual("container cake");
        expect(div.render()).toEqual(`<div class="container cake"></div>`);
      });
    });
  });
});
