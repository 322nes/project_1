//Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк на английском языке. Каждая из дат представлена массивом [2001, 10, 18], в котором первый элемент — это год, второй — месяц, и третий — число. 
//Функция на вход должна принимать любое количество параметров. Если в функцию ничего не было передано, она должна вернуть пустой массив. Экспортируйте функцию по умолчанию.

import _ from 'lodash';

function chelData(...date) {
	const format = [];
	for (const fill of date) {
		const data = new Date(fill);
		const fdata = data.toDateString();
		format.push(fdata);
	}
	return format;
}

console.log(chelData(1993, 3, 24, 1));
