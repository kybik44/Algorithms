//Сортировка Шелла | Shell sort. O(n log2 n) or O(n2)

let array = [3, 2, 5, 1, 44, 13, 55, 1, 0, 48, 54, 3, 99, 47, 13, 101];

const shellSort = (array) => {
	for (
		let step = Math.floor(array.length / 2);
		step > 0;
		step = Math.floor(step / 2)
	) {
		for (let pass = step; pass < array.length; pass++) {
			for (
				let replacment = pass - step;
				replacment >= 0 && array[replacment] > array[replacment + step];
				replacment -= step
			) {
				let tmp = array[replacment];
				array[replacment] = array[replacment + step];
				array[replacment + step] = tmp;
			}
		}
	}
	return array;
};

console.log(shellSort(array), countShell); //
