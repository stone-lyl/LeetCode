/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    let preArr = [...Array(numCourses)].map(r => []);
    let seen = new Set();
    let seeing = new Set();
    for (let [a, b] of prerequisites) {
        preArr[b].push(a);
    }
    for (let index = 0; index < numCourses; index++) {
        if (!dfs(index)) {
            return false;
        }
    }
    function dfs(v) {
        if (seeing.has(v)) return false;
        if (seen.has(v)) return true;
        seeing.add(v);
        for (const i of preArr[v]) {
            if (!dfs(i)) {
                return false;
            }
        }
        seeing.delete(v);
        seen.add(v);
        return true;
    };
    return true;
};

let numCourses = 5;
let prerequisites = [[0, 2], [1, 2], [4, 0], [3, 1], [2, 4]];
console.log('result: ', canFinish(numCourses, prerequisites));