let getType = (function () {
    let typeMap = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    return function (target) {
        let type = Object.prototype.toString.call(target);
        return typeMap[type]
    }
})()

let className = (function () {
    let handle = {
        string(props) {
            return props
        },
        array(props) {
            return props.join(" ")
        },
        object(props) {
            return this.array(Object.keys(props).filter(key => props[key]))
        },
        other(props) {
            return props.toString()
        }
    }

    return function (props) {
        let type = getType(props)
        if (type in handle) {
            return handle[type](props)
        } else {
            return handle.other(props)
        }
    }
})()

module.exports = {
    className
}