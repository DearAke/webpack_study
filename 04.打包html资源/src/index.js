var myInstanceof = (target, func) => {
  let targetType = target.__proto__;
  let prototype = func.prototype;
  while (target) {
    if (targetType === prototype) return true;
    targetType = targetType.__proto__;
  }
  return false;
};
console.log(myInstanceof([], Array));
