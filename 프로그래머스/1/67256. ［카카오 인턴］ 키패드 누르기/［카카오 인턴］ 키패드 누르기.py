KEYPAD = {
    1: (0, 0), 2: (0, 1), 3: (0, 2),
    4: (1, 0), 5: (1, 1), 6: (1, 2),
    7: (2, 0), 8: (2, 1), 9: (2, 2),
    "*": (3, 0), 0: (3, 1), "#": (3, 2)
}

def solution(numbers, hand):
    # 손 위치 상태 선언 : 손 위치는 계속 움직인다.
    left, right = "*", "#"
    answer = []
    
    # 숫자 순회를 돈다.
    for num in numbers:
        # 무조건 왼쪽, 무조건 오른쪽을 거른다.
        if num in (1, 4, 7):
            answer.append("L")
            left = num # 손가락의 위치 상태 관리는 필수
        elif num in (3, 6, 9):
            answer.append("R")
            right = num # 손가락의 위치 상태 관리는 필수
        else:
            # 2, 5, 8, 0의 경우 거리를 계산한다.
            # 맨해튼 거리 기준 각각의 행, 열 값을 절대값으로 구한 후 더하면 기준 대비 얼마나 이동해야 하는지 알 수 있다.
            row, col = KEYPAD[num]
            left_num = abs(row - KEYPAD[left][0]) + abs(col - KEYPAD[left][1])
            right_num = abs(row - KEYPAD[right][0]) + abs(col - KEYPAD[right][1])
            if left_num > right_num: # 오른쪽의 거리가 더 짧으면 오른쪽 손가락 선택
                answer.append("R")
                right = num
            elif left_num < right_num: # 왼쪽의 거리가 더 짧으면 왼쪽 손가락 선택
                answer.append("L")
                left = num
            elif hand == "right": # 두 거리가 같을 경우, 오른손 잡이는 오른쪽
                answer.append("R")
                right = num
            else: 
                answer.append("L") # 최종적으로 왼쪽
                left = num
                
    return "".join(answer)