if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.

    var tekst = [
        {
            "create_date": "05-05-2018",
            "content": "John",
            "checked": true
        },
        {
            "create_date": "06-11-1999",
            "content": "Noah",
            "checked": false
        },
    ];

    var tekst2 = {
        "create_date": "11-01-2018",
        "content": "Adam",
        "checked": false
    };

    
    //localStorage.setItem("ToDoApp", JSON.stringify(tekst));
    //console.log(JSON.parse(tekst));

    
//console.log(JSON.parse(localStorage.getItem('ToDoApp')));


// JAK dodajemy do localstorage to trzeba zmienić na JSON.stringidy(teskt)
// JAK pobieramy localsotrage to parsujemy to na JSON.parse(tekst)

} else {
    // Sorry! No Web Storage support..
    confirm.log('Niestety LocalStorage nie działa na twoim komputerze');
}