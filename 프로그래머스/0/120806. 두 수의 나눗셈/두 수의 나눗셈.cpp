#include <string>
#include <vector>

using namespace std;

int solution(int num1, int num2) {
    double answer = static_cast<double>(num1) / num2;
    return answer * 1000;
}