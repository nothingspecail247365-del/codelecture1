const numbersContainer = document.getElementById('numbers-container');
const generateButton = document.getElementById('generate-button');

const generateLottoRow = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
};

const displayNumbers = (rows) => {
    numbersContainer.innerHTML = '';
    rows.forEach(row => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('number-row');
        row.forEach(number => {
            const numberCircle = document.createElement('div');
            numberCircle.classList.add('number-circle');
            numberCircle.textContent = number;
            rowContainer.appendChild(numberCircle);
        });
        numbersContainer.appendChild(rowContainer);
    });
};

generateButton.addEventListener('click', () => {
    const lottoRows = [];
    for (let i = 0; i < 5; i++) {
        lottoRows.push(generateLottoRow());
    }
    displayNumbers(lottoRows);
});

// Display initial set of numbers on page load
const initialRows = [];
for (let i = 0; i < 5; i++) {
    initialRows.push(generateLottoRow());
}
displayNumbers(initialRows);
