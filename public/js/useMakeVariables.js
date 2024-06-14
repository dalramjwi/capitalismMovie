import { MakeVariables } from "./MakeVariables.js";
import { tagName } from "./tagName.js";
/**
 * 배열을 이용해 객체를 만드는 함수
 */
export function resultVariables() {
  const arr = [];
  tagName.forEach((item) => {
    arr.push(new MakeVariables(item, item));
  });
  return arr;
}
