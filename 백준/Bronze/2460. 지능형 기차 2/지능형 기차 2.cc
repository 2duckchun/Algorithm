#include <iostream>
#include <string>
using namespace std;


int main()
{
	int cnt = 0;
	int max = 0;
	for (int i = 0; i < 10; i++) {
		int in, out;
		cin >> out >> in;
		cnt = cnt + in - out;
		if (cnt > max) {
			max = cnt;
		}
	}
	cout << max;
	return 0;
}