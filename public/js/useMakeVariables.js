import { MakeVariables } from "./MakeVariables.js";
import { tagName } from "./tagName.js";
export function resultVariables() {
  const arr = [];
  tagName.forEach((item) => {
    arr.push(new MakeVariables(item, item));
  });
  return arr;
}
