function addUpTo(n) {
    let total = 0;
    for (i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const t1 = performance.now()
addUpTo(1000000000)
const t2 = performance.now()
console.log(`${(t2 - t1) / 1000} time`);