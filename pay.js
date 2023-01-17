const 안주값 = 73000
const 음료드신분 = {
    선아: [1, 0],
    희수: [2, 0],
    세원: [0, 1],
    재영: [2, 0],
    태수: [2, 0],
    민승: [2, 0]
}
const 맥주와콜라 = [6000, 3000]

const solution = (안주값, 음료드신분, 음료가격) => {
    const 안주값뿜빠이 = parseInt(안주값 / (Object.keys(음료드신분).length))
    const 음료마신사람 = Object.keys(음료드신분)

    음료마신사람.forEach((e) => {
        const 먹은음료 = 음료드신분[e]
        const 음료총값 = 먹은음료.reduce((acc, e, i) => {
            return acc + (e * 음료가격[i])
        }, 0)
        console.log(`${e}는 ${Math.floor((안주값뿜빠이 + 음료총값) / 10) * 10}을 계좌로 보내주세요!`)
    })
    console.log(`국민 김태수 250501-04-195443`)
}

solution(안주값, 음료드신분, 맥주와콜라)
