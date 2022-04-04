/**
 * ジェネリクスの実装
 */

function multiply<T>(value: T): Array<T> {
  const result: Array<T> = [];
  result.push(value);
  return result;
}

const value = multiply<number>(999);
console.log(value);

const lang = multiply("PHP");
// or const lang = multiply<string>("PHP");
console.log(lang);
