#include <iostream>
#include <string>

using namespace std;

void static swap(string &a) {
	if (a.length() != 3) {
		cerr << "범위 초과";
		throw invalid_argument("숫자 범위가 초과되었습니다.");
	}
	char temp = a.front();
	a.front() = a.back();
	a.back() = temp;
}

int main()
{
	string a, b;
	cin >> a >> b;

	swap(a);
	swap(b);

	int answer = (stoi(a) > stoi(b)) ? stoi(a) : stoi(b);

	cout << answer;
	return 0;
}
