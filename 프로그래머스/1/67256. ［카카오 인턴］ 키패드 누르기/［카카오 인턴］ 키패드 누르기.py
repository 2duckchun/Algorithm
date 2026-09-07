

def solution(numbers, hand):
    KEYPAD = { n: (((n - 1) // 3), ((n - 1) % 3)) for n in range(1, 10)}
    KEYPAD["*"] = (3, 0)
    KEYPAD[0] = (3, 1)
    KEYPAD["#"] = (3, 2)

    left_thumb = "*"
    right_thumb = "#"
    left_numbers = [1, 4, 7]
    right_numbers = [3, 6, 9]
    answer = []
    
    for num in numbers:
        if num in left_numbers:
            answer.append("L")
            left_thumb = num
        elif num in right_numbers:
            answer.append("R")
            right_thumb = num
        else:
            # 거리 추출
            num_row, num_col = KEYPAD[num]
            left_row, left_col = KEYPAD[left_thumb]
            right_row, right_col = KEYPAD[right_thumb]
            
            # 맨해튼거리
            left_distance = abs(num_row - left_row) + abs(num_col - left_col)
            right_distance = abs(num_row - right_row) + abs(num_col - right_col)
            
            if left_distance > right_distance:
                answer.append("R")
                right_thumb = num
                
            elif left_distance < right_distance:
                answer.append("L")
                left_thumb = num
                
            elif hand == "right":
                answer.append("R")
                right_thumb = num
            else:
                answer.append("L")
                left_thumb = num

    return "".join(answer)