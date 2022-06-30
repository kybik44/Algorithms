//Сортировка выбором | Selection sort. O(n^{2})

arr = [1, 4, 6, 12, 3, 9, 10, 25];

const selection = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		const tmp = arr[i];
		arr[i] = arr[min];
		arr[min] = tmp;
	}
	return arr;
};

console.log(selection(arr));
