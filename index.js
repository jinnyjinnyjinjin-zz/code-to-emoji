module.exports = codeToEmoji;


function codeToEmoji(code) {

    if (!code) {
        return Error('code cannot be null.');
    }

    if (typeof code != "string") {
        return Error('Iilegal argument.');
    }

    return String.fromCodePoint(parseInt(code, 16));
}

