#include <iostream>
#include <array>

int main(void)
{
	try {
		std::array<int, 10> array = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

		for (int i = 0; i < array.size(); i++) {
			std::cout << array[i] << " ";
		}

		std::cout << "�� & ��������" << std::endl;
		std::cout << array.at(12) << "��������" << std::endl;
		
	}
	catch (const std::out_of_range& ex)
	{
	std::cerr << ex.what() << std::endl;
	}
	
	// array �������?
	// ���� : ĳ�� �������� ���� ���� ���ҿ� ���� ������ ������.
	// ���� : ���� �� ��� �κ� � ���Ҹ� �߰��� ���, O(n)�� ����.

	return 0;
}