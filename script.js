const container = document.querySelector('#container');

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function createGrid(size) {
    const percentage = 100 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.append(square);
        square.addEventListener('mouseover', () => {
            let colours = [];
            if (square.style.backgroundColor) {
                const bg = square.style.backgroundColor;
                colours = bg.slice(4).slice(0, bg.length - 5).split(', ');
                colours = colours.map((colour) => Math.max(0, colour - 25.5));
            } else {
                for (let i = 0; i < 3; i++) {
                    colours.push(randomColor());
                }
            }
            square.style.backgroundColor = `
                rgb(${colours[0]}, ${colours[1]}, ${colours[2]})
            `;
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
