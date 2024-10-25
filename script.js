// Завдання 1: Зміна кольору елементів
function getElements() {
    const elements = document.querySelectorAll("*"); // Отримуємо всі елементи на сторінці
    const firstElement = elements[10]; // 11-й елемент (індекс 10)
    const nextElement = firstElement ? firstElement.nextElementSibling : null;
    return {
        firstElement,
        nextElement,
    };
}

const { firstElement, nextElement } = getElements();

// Функція рандомного кольору
function getRandomColor() {
    let color = '#';
    const letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("click", function (event) {
    const target = event.target;

    if (target === firstElement) {
        target.style.backgroundColor = getRandomColor();
        target.style.color = getRandomColor();
    } else if (target === nextElement) {
        target.style.backgroundColor = getRandomColor();
        target.style.color = getRandomColor();
    }
});

// Завдання 2: Взаємодія з зображенням
const imageContainer = document.querySelector("a");
const image = document.getElementById("lviv-image");
const imageStack = [];

// Додати зображення, якщо його немає
document.getElementById("add").addEventListener("click", function () {
    const newImage = document.createElement("img");
    newImage.src = image.src;
    newImage.height = image.height;
    imageContainer.appendChild(newImage);
    imageStack.push(newImage);
});

// Збільшити розмір зображення
document.getElementById("increase").addEventListener("click", function() {
    if (image && image.height) {
        image.height += 30;
        for (let i = 0; i < imageStack.length; i++) {
            imageStack[i].height += 30;
        }
    }
});

// Зменшити розмір зображення
document.getElementById("decrease").addEventListener("click", function() {
    if (image && image.height > 30) {
        image.height -= 30;
        for (let i = 0; i < imageStack.length; i++) {
            imageStack[i].height -= 30;
        }
    }
});

// Видалити зображення
document.getElementById("remove").addEventListener("click", function () {
    if (imageStack.length > 0) {
        const lastImage = imageStack.pop();
        lastImage.parentNode.removeChild(lastImage);
    }
});