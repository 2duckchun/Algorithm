#include <string>
#include <vector>

using namespace std;

int solution(int a, int b) {
    int first = stoi(to_string(a) + to_string(b));
    int second = 2 * a * b;
    return max(first, second);
}