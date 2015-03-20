export default (Parent, ...mixins) => {
  class Mixed extends Parent {}
  Object.assign(Mixed.prototype, ...mixins);
  return Mixed;
}
