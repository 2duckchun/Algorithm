def solution(arr):
    answer = []
    for element in arr:
        if not answer or element != answer[-1]:
            answer.append(element)
    return answer