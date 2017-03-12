myApp.filter( "customFilter", function () {
    return function ( text ) {
        return text + " UAH"
    }
})