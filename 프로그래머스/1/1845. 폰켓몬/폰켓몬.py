def solution(nums):
    kind = len(set(nums))
    half = len(nums) // 2
    result = 0
    return min(kind, half)