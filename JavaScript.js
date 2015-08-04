$(function () {
    var array = [6, 8, 3, 11, 10, 1, 9, 2, 5, 7]
    var n = 10;
    array.sort(function (a, b) { return a - b });

    function findNumber() {
        
        for (i = 0; i < n - 1; i++) {
            if (i + 1 != array[i]) {
                $('span').append(i+1);
                break;
            }
        }
    }
    findNumber();
})