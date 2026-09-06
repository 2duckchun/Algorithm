def solution(nums):
    kind = len(set(nums))
    half = len(nums) // 2
    result = 0
    if kind > half: result = half
    else: result = kind
    return result