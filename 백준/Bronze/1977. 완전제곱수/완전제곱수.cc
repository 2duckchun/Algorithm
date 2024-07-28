#include <string>
#include <iostream>
using namespace std;

int main() {
	int n, m;
	
	cin >> n;
	cin >> m;
	
	int now = 0, sum = 0, min = 0;
	
	while (now * now <= m) {
		int pow = now * now;
		if (pow >= n) {
			sum += pow;
			if (min == 0) min = pow;
		}
		now++;
	}

	if (sum == 0) {
		cout << -1;
		return 0;
	}

	cout << sum << endl;
	cout << min;
	return 0;
}