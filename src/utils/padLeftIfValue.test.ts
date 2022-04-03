import { padLeftIfValue } from "./padLeftIfValue";

describe("Pad Left If Value", () => {
  it("should return an empty string if no value is empty", () => {
    expect(padLeftIfValue("")).toEqual("");
  });

  it("should return an string with a single leading character space if not empty", () => {
    expect(padLeftIfValue("cake")).toEqual(" cake");
  });
});
