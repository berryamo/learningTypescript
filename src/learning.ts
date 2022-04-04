// 型指定
let user_name: string;
// user_name = 1; error

// any なんでも代入可
let address; // any
let tweet: any;

// 既定の値のみ代入可
let favoriteFood: "ラーメン" | "牛タン";
// favoriteFood = "寿司"; error
// 複数の型指定
let birthYear: number | string;
// birthYear = null; error

// 型への命名
type ramenType = "醤油" | "味噌" | "塩"; // 型or値で定義可
const favoriteRamen: ramenType = "味噌";

function orderFood(ramen: ramenType) {
  // code
}
// オブジェクトへの属性の型定義
type Person = {
  name: string;
  favoriteBank: string;
  favoriteGyudon: string;
};

// 変数定義時にインタフェースを指定
const person: Person = {
  name: "Yoichi",
  favoriteBank: "Mizuho",
  favoriteGyudon: "Matsuya",
};


