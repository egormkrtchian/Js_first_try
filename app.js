// let answer1, answer2, answer3;

// answer1 = prompt("ksdj","Yes/no");
// answer2 = prompt("dsf","Yes/no");
// answer3 = prompt("dsf","Yes/no");

// console.log("resalts");
// console.log('1. ' + answer1);
// console.log('2. ' + answer2);
// console.log('3. ' + answer3);

const readline = require('readline');
// фукнція reateInterface створює інтерфейс для счітування введення та виведення результатів
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
}); 
// використовуємо методо question який очікує результатів
rl.question('Was is das ', (answer1) => {
	rl.question('Wiss du ', (answer2) => {
		rl.question('Und du ', (answer3) => {
            // після отримання результатів программа записує їх в консоль
			console.log(`answer ist:?\n1. ${answer1}\n2. ${answer2}\n3. ${answer3}`);
			rl.close();
		});
	});
});
