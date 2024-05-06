#include <string>
#include <vector>

using namespace std;

int solution(int a, int b, bool flag) {
    if (flag) return a + b;
    return a - b;
}