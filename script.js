const container = document.querySelector('#container');

function createGrid(size) {
    const percentage = 100 / size;
    console.log(percentage)
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.append(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        square.style.flex = `1 0 ${percentage}%`;
        square.style.height = `${percentage}%`;
    }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let size = prompt('Number of squares per side: ');
    size = Math.min(size, 100);
    container.innerHTML = '';
    createGrid(size);
})

createGrid(16);
