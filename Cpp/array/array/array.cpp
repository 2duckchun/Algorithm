#include <iostream>
#include <array>

int main(void)
{
	try {
		std::array<int, 10> array = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

		for (int i = 0; i < array.size(); i++) {
			std::cout << array[i] << " ";
		}

		std::cout << "끝 & 에러유발" << std::endl;
		std::cout << array.at(12) << "범죄현장" << std::endl;
		
	}
	catch (const std::out_of_range& ex)
	{
	std::cerr << ex.what() << std::endl;
	}
	
	// array 장단점은?
	// 장점 : 캐시 지역성이 좋고 단일 원소에 대한 접근이 용이함.
	// 단점 : 구조 내 가운데 부분 등에 원소를 추가할 경우, O(n)이 나옴.

	return 0;
}