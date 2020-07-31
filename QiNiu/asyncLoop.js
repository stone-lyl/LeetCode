const asyncLoop = async () => {
    const delay = (i) => {
        return new Promise(resolve => setTimeout(() => {
            console.log(i);
            resolve();
        }, 500));
    };
    
    
    const promiseList = [1, 2, 3, 4, 5].map(delay);
    await Promise.all(promiseList);
    console.log('Done!');
}

asyncLoop();