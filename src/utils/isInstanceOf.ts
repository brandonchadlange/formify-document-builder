export function isInstanceOf(instance: any, type: any) {
  if (!instance || !instance.__proto__) return false;
  if (instance.__proto__.constructor.name !== type.name)
    return isInstanceOf(instance.__proto__, type);
  return true;
}
