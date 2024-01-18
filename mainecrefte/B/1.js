function* funcaoGer() {
    yield 'v1';
    yield 'v2';
    yield 'v3';
}
const f1 = funcaoGer()
console.log(f1.next())
console.log(f1.next())
console.log(f1.next())