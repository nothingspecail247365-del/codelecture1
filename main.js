const numbersContainer = document.getElementById('numbers-container');
const generateButton = document.getElementById('generate-button');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Theme Logic
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
};

const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', toggleTheme);

const generateLottoRow = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
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
