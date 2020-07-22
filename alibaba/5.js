// ==== 笔试题5
// 实现一个可以缓存其他函数的高阶函数memoize。能够实现：当入参相同时，可以不经过计算，直接返回结果。
function sqrt(n) { return Math.sqrt(n) }

const memoize = fn => {
  // 实现
    let cache = [];
    return (n) => {
        const cached = cache[n];
        if (cached) {
            console.log(cached, 'cached');
            return cached;
        }
        const result = fn(n);
        cache[n] = result;
        console.log(result, 'result');
        return result;
    }
}
const cachedSqrt = memoize(sqrt)
cachedSqrt(4) // 2
cachedSqrt(4) // 不经过计算，直接输出结果2
