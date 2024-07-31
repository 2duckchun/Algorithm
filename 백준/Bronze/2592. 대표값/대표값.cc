#include <iostream>
using namespace std;
int main() {
	int a[10];
	int b[1001]{ 0 };
	int sum = 0;
	for (int i = 0; i < 10; i++) {
		cin >> a[i];
		sum += a[i];
		b[a[i]]++;
	}
	int max = 0;
	int num = 0;
	for (int i = 0; i <= 1000; i++) {
		if (b[i] > max) {
			max = b[i];
			num = i;
		}
	}
	cout << sum / 10 << "\n";
	cout << num;
}