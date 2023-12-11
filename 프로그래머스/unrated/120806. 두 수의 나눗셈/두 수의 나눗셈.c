#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    // double 타입에 int를 곱하면 int 타입으로 변환된다.
    // double 타입을 그대로 반환하고 싶다면 1000.0과 같이 형을 변환한 후 곱해줘야 한다.
    
    int answer = (double)num1 / (double)num2 * 1000; 
    
    return answer;
}