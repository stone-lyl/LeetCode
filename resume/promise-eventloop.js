var urls = [
    'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg',
    'https://www.kkkk1000.com/images/getImgData/gray.gif',
    'https://www.kkkk1000.com/images/getImgData/Particle.gif',
    'https://www.kkkk1000.com/images/getImgData/arithmetic.png',
    'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif',
    'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg',
    'https://www.kkkk1000.com/images/getImgData/arithmetic.gif',
    'https://www.kkkk1000.com/images/wxQrCode2.png'
];
/**
 *
 * @param {string} url
 * @returns {Promise<string>}
 */
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const tiemout = Math.random() * 1000;
        setTimeout(() => {
            const rnd = Math.random();
            if (rnd >= 0.7) {
                console.log(`success: ${url}`);
                resolve(url);
            } else {
                console.log(`failed: ${url}`);
                reject();
            }
        }, tiemout);
    });
}

/**
 *
 * @param {string} url
 * @param {number} i
 * @returns {() => Promise<number>}
 */
const ajax = (url, i) => () =>
    loadImg(url)
        .then(() => i)
        .catch(() => i);

const downloadTasks = urls.map((x, i) => [i, ajax(x, i)]);

/**
 *
 * @param {Map<number, Promise<number>} running
 * @param {number} finishedIndex
 */
const addTask = (running, finishedIndex) => {
    if (finishedIndex !== undefined) {
        running.delete(finishedIndex);
        const [key, newTask] = downloadTasks.pop();
        running.set(key, newTask());
    }

    console.log('Running tasks ' + running.size);

    if (downloadTasks.length > 0) {
        return Promise.race(running.values()).then(x => addTask(running, x));
    } else {
        return Promise.all(running.values());
    }
};

function loadImages() {
    const running = new Map(
        downloadTasks.splice(0, 3).map(([k, x]) => [k, x()])
    );

    return addTask(running).then(() => console.log('finished'));
}

loadImages();
