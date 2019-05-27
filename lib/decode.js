var decode = function (content, input, output) {

// console.log("encoding",encoding);
// console.log("content",content);
    var buff;
    if (Buffer.from && Buffer.from !== Uint8Array.from) {
        buff = Buffer.from(content, input);
    } else {
        if (typeof content === 'number') {
            throw new Error('The "size" argument must be not of type number.');
        }
        buff = new Buffer(content, input);
    }

    var text = buff.toString(output);

    return text;
};
