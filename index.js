const { writeFile, readFile } = require('fs').promises;

const JSON_FILE = './data/input1.json';
const SUM_FILE = './data/sum.txt';

(async () => {
  try {
    const numberFromJson = JSON.parse(await readFile(JSON_FILE, 'utf8'));
    console.log(numberFromJson);

    const numbersFromAraySummed = numberFromJson.reduce(
      (accumulator, currentValue) => {
        console.log('The value of accumulator: ', accumulator);
        console.log('The value of currentValue: ', currentValue);
        return accumulator + currentValue;
      }
    );
    console.log(numbersFromAraySummed);

    await writeFile(SUM_FILE, numbersFromAraySummed.toString(), 'utf8');
    console.log('File is Saved');
  } catch (error) {
    console.log('Oh no', error);
  }
})();
