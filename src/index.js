module.exports = function check(str, bracketsConfig) {

    var arr = [];

    do {
        var in_loop = false;

        bracketsConfig.forEach((bracketPattern) => {

            arr = str.split(bracketPattern[0] + bracketPattern[1]);

            if (arr.length > 1) {

                str = arr.join('');
                in_loop = true;
            }
        });

    } while (in_loop);


    return !arr.join('').length;
}
