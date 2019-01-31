function deepEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || typeof a !== "object" || b == null || typeof b !== "object")
        return false;
    let keyA = Object.keys(a);
    let keyB = Object.keys(b);
    if (keyA.length != keyB.length) return false;
    for (let key of keyA) {
        if (!keyB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}
let obj1 = { P: { a: "z" }, o: 2 };
console.log(deepEqual(obj1, obj1));
console.log(deepEqual(obj1, { P: 1, o: 2 }));
console.log(deepEqual(obj1, { P: { a: "z" }, o: 2 }));