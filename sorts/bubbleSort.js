//Сортировка пузырьком | Bubble sort. O(n^{2})

array = [1, 4, 6, 12, 3, 9, 10, 25];

const bubble = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i] < array[j]) {
				let tmp = array[i];
				array[i] = array[j];
				array[j] = tmp;
			}
		}
	}
	return array;
};
