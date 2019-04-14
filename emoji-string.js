exports.toUniString = function (input_string) {
    return input_string.split('').map(function (value, index, array) {
        var temp = value.charCodeAt(0).toString(16).toUpperCase();
        if (temp.length > 2) {
            return '\\u' + temp;
        }
        return value;
    }).join('');
}

exports.emoji_length = function (input_string) {
    try {
        return Array.from(input_string).length
    } catch (e) {
        console.log(e)
        return -1
    }
}

exports.isEmoji = function (input_string) {
    var reg = RegExp(/[\uD83C-\uD83F][\uDC00-\uDFFF]/)
    return reg.test(input_string)
}

exports.findEmoji = function (input_string) {
    var reg = RegExp(/[\uD83C-\uD83F][\uDC00-\uDFFF]/g)
    result = reg.exec(input_string)
    return input_string.search(reg)
}

exports.findLastEmoji = function (input_string) {
    var reg = RegExp(/[\uD83C-\uD83F][\uDC00-\uDFFF]/g)
    lastindex = 0

    while ((result = reg.exec(input_string)) !== null) {
        lastindex = result['index']
    }

    return lastindex
}

exports.findAllEmoji = function (input_string) {
    var reg = RegExp(/[\uD83C-\uD83F][\uDC00-\uDFFF]/g)
    var result, results = []

    while ((result = reg.exec(input_string)) !== null) {
        results.push({ emoji: `${result[0]}`, index: `${result['index']}` })
    }

    return results
}

exports.RemoveEmoji = function (input_string) {
    return input_string.replace(/[\uD83C-\uD83F][\uDC00-\uDFFF]/g, "")
}

exports.RemoveEmojiIndex = function (input_string, index) {
    var temp = input_string.slice(0, index)
    var handle = input_string.slice(index)
    handle = handle.replace(/[\uD83C-\uD83F][\uDC00-\uDFFF]/g, "")

    return temp + handle
}

//emoji range ref : https://unicode.org/emoji/charts-12.0/full-emoji-list.html