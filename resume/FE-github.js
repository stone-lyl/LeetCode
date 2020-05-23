function deepClone(obj) {
    let toString = Object.prototype.toString;
    if (!obj || typeof obj !== 'object') {
        return obj;
    }

    if (obj.nodeType && 'cloneNode' in obj) {
        return obj.cloneNode(true);
    }

    
}