//Сортировка вставкой | Insertion sort. O(n^{2})

const firstCaseInsertionSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		let current = array[i];
		let j = i - 1;
		while (j > -1 && current < array[j]) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = current;
	}
	return array;
};

//while
const secondCaseInsertionSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		let current = array[i];
		let j;
		for (j = i - 1; j >= 0 && array[j] > current; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = current;
	}
	return array;
};
