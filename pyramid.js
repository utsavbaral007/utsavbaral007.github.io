console.log(pyramid(6))
function pyramid(str) {
    var output = ""

    for (var a = 1; a <= 15; a++) {
        for (var i = 1; i <= str; i++) {
            for (var j = 1; j <= i; j++) {
                output += '*'
            }
            if (output.length <= str) {
                console.log(output)
                output = ""
            }
        }
        for (i = str - 1; i >= 1; i--) {
            for (j = 1; j <= i; j++) {
                output += '*'
            }
            if(output.length <= str)
            console.log(output)
            output = ""
        }
    }
}
