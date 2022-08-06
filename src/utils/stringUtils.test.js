import { formatPrice, truncate, capitalize, formatDate } from "./stringUtils";

describe("formatPrice", () => {
  test("it correctly adds two decimal places to the total", () => {
    expect(formatPrice(100)).toBe("$100.00");
  });
  test("it correctly adds a $ sign to the total", () => {
    expect(formatPrice(20)).toBe("$20.00");
  });
  test("it correctly adds only one decimal place to the total if one exists already", () => {
    expect(formatPrice(2.9)).toBe("$2.90");
  });
});

describe("truncate", () => {
  test("it shortens text to the limit provided", () => {
    expect(
      truncate(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada id tortor at accumsan. Integer dapibus, ante condimentum gravida efficitur, orci elit aliquet tellus, a euismod risus velit eget nisl tristique.",
        10
      )
    ).toBe("Lorem ipsu...");
  });
  test("it doesn't shorten text that is already shorter than the limit", () => {
    expect(truncate("Lorem", 10)).toBe("Lorem...");
  });
});

describe("capitalize", () => {
  test("it correctly capitalizes a string", () => {
    expect(
      capitalize("lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    ).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  });
  test("it correctly amends the rest of the string to lowercase", () => {
    expect(capitalize("i am a string THAT IS UPPERCASE AT THE END")).toBe(
      "I am a string that is uppercase at the end"
    );
  });
});

describe("format date", () => {
  test("it correctly formats a date", () => {
    expect(formatDate("2022-08-06T07:28:15.503Z")).toBe("6 Aug, 17:28");
  });
});
