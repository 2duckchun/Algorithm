#include <iostream>
#include <string>
using namespace std;

int main()
{
    int count[10] = {};
    int a, b, c;
    cin >> a >> b >> c;
    int res = a * b * c;
    string s = to_string(res);
    
    for (char ch : s) {
        count[ch - '0']++;
    }
    
    for (int v : count) {
        cout << v << endl;
    }
    return 0;
}