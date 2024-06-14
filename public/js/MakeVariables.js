export class MakeVariables {
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
