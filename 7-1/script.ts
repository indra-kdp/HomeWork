interface Enot {
    name: string;
    year?: number;
    weight?: number;
    image?: string;
}

function Generation() {
    const name = (document.getElementById('Enot') as HTMLInputElement).value;
    const year = Math.floor(Math.random() * 10);
    const weight = Math.floor(Math.random() * 10);

    let enot: Enot = {
        name: name,
        weight: weight,
        year: year,
    }

    let infoEnot = document.getElementById('card') as HTMLDivElement;
    infoEnot.innerHTML = `Имя: ${enot.name}; Возраст: ${enot.year}; Вес: ${enot.weight}кг`;
    
    let enotikArray = [];
    enotikArray.push(enot);
}
