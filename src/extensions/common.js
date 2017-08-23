function clone(object) {
  if (object instanceof Date) {
    return new Date().setTime(object.getTime());
  }

  if (object instanceof Array) {
    return object.map(element => clone(element));
  }

  if (object instanceof Object) {
    return Object.keys(object).reduce((result, key) => ({
      ...result,
      [key]: clone(object[key]),
    }), {});
  }

  return object;
}


export function deepCopy() {
  return clone(this);
}
