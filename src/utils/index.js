export function isArrayOrString(variable) {
    if (typeof variable === typeof [] || typeof variable === typeof '') {
        return true
    }
    return false
}

export function isArray(variable) {
    if (typeof variable === typeof []) {
        return true
    }
    return false
}