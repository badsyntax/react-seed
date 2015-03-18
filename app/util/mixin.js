export default (Parent, ...mixins) => {
  class Mixed extends Parent {}
  for (let mixin of mixins) {
    for (let prop of Object.keys(mixin)) {
      Mixed.prototype[prop] = mixin[prop];
    }
  }
  return Mixed;
}
