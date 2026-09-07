def solution(answers):
    first = [1, 2, 3, 4, 5]
    second = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]
    third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    bullshits = [first, second, third]
    bullshits_shit = []
    
    for bullshit in bullshits:
        score = 0
        for i, answer in enumerate(answers):
             if answer == bullshit[i % len(bullshit)]:
                score += 1
        bullshits_shit.append(score)
    
    max_score = max(bullshits_shit)
    result = []
    
    for i, bull in enumerate(bullshits_shit):
        if max_score == bull:
            result.append(i + 1)
    
    return result