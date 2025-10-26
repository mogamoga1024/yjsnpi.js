const yjsnpi = {
  nickname: "野獣先輩",
  name: "田所浩二",
  tdnNotation: "YJSNPI",
  sex: "male",
  age: 24,
  height: 170,
  weight: 74,
  valueOf() {
    return 810;
  },
  toString() {
    return "野獣先輩";
  },
  toDate() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return new Date(year, 7, 10);
  }
};
export {
  yjsnpi as default
};
