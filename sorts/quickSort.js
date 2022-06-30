const arr = [1, 4, 6, 12, 3, 9, 10, 25];

const quickSort = (arr) => {
	if (arr.length < 1) {
		return arr;
	}
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr[pivotIndex];
	let less = [];
	let greater = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === pivotIndex) {
			continue;
		}
		if (arr[i] < pivot) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}
	return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(arr));

const factorial = (n) => {
	if (n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
};

console.log(factorial(6));

const fibonachi = (n) => {
	if (n === 1 || n === 2) {
		return 1;
	}
	return fibonachi(n - 1) + fibonachi(n - 2);
};
console.log(fibonachi(7));
