import capitalize from "./capitalize";

const normalizeString = string =>
  string
    .split("-")
    .map(capitalize)
    .join(" ");

export default normalizeString;
