function solution(wallpaper) {
    const x = []
    const y = []
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                x.push(i)
                y.push(j)
            }
        }
    }
    
    const lux = Math.min(...x)
    const luy = Math.min(...y)
    const rux = (Math.max(...x)) + 1
    const ruy = (Math.max(...y)) + 1
    
    
    return [lux, luy, rux, ruy];
}