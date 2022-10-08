const reducer = (누산값, 현재요소, 인덱스, 기존배열) => {
    console.log(누산값, 현재요소, 인덱스, 기존배열)
    let div = ''
    if (인덱스 >= 기존배열.length - 1) {
        div = '</div>'
    }
    return 누산값 + 현재요소 + div
}

const a = ['제주','알고리즘','베이스캠프♥'].reduce(reducer, '<div>')
console.log(a);












