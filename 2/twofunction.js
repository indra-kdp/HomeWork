function firstFunction(s) {
    console.log("Я не знаю никакого " + s);
}

const N = Math.random()

secondFunction("word", N);

function secondFunction(s, N) {
    if (N > 0.5) {
        console.log("Я знаю некое " + s);
    } else {
        console.log("Я не знаю никакого " + s);
        console.log("firstFunction, а ты знаешь " + s + "?");
        firstFunction(s);
    }
}