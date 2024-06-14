export class MakeVariables {
  /**
   * 변수의 이름과 id 를 객체로 만들어준다.
   * @param {string} name 변수의 이름
   * @param {string} id id의 이름
   */
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.error("문자열 아님");
    }
  }
  get name() {
    return this._name;
  }
  set id(value) {
    if (typeof value === "string") {
      this._id = value;
    } else {
      console.error("문자열 아님");
    }
  }
  get id() {
    return this._id;
  }
}
