/**
 * アクセサの実装
 */
class Tax {
    private _money: number;

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value * 1.1;
    }
}

const tax = new Tax();
// setter
tax.money = 1000;
// getter
console.log(tax.money);
