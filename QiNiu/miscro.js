setTimeout(() => {
    console.log(1);
}, 0);

const promise = new Promise((resolve, reject) => {
    resolve();
    console.log(2);
});

promise.then(() => {
    console.log(3);
    setTimeout(() => {
        console.log(5);
    }, 0);
})

console.log(4);