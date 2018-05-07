if (typeof(Storage) !== "undefined") {

    var AddTaskButton = document.querySelector("#add-task-text");

    var tasks = JSON.parse(localStorage.getItem('ToDoApp'));

    AddTaskButton.addEventListener('click', function() {
        addTask();
    });

    var addTask = function() {
        var taskContent = document.querySelector('#add-task-input').value;
        taskContent = taskContent.replace(/^\s+|\s+$/g, '');
        taskContent = taskContent.trim();
        
        if(taskContent != 0 ){
            //console.log(taskContent);

            var task = prepareTaskForLocalstorage(getDateAndTime(), taskContent, false);

            tasks.push(task);
            saveTaskToLocalStorage(tasks);
            
            //console.log(tasks);
        }
    };

    var getDateAndTime = function() {
        var d = new Date();
        var year = d.getFullYear(); // 2018
        var month = d.getMonth(); // 4
        month += month;
        
        if (month < 10) {
            month = '0' + month;
        }
      
        var day = d.getDate();
        if(day < 10) {
            day = '0' + day;
        }

        var hour = d.getHours();
        var minutes = d.getMinutes();

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        var fullDateAndTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;

        return fullDateAndTime;
    };

    var prepareTaskForLocalstorage = function(create_date, content, isChecked) {
        return {
            "create_date": create_date,
            "content": content,
            "checked": isChecked
        };
    };

    var saveTaskToLocalStorage = function(task) {
        localStorage.setItem("ToDoApp", JSON.stringify(task));
    };

    var prepareTaskForWebPage = function() {
        //console.log(tasks.length);

        for(var i = 0; i < tasks.length; i++) {
            console.log(tasks[i].create_date);
            console.log(tasks[i].content);
            console.log(tasks[i].checked);
        }
        // TUTAJ ZROBIĆ APPENDY CZYLI ZŁOŻYĆ STRUKTURĘ TASKA Z DIVÓW
        // DODAWANIE TASKA JUŻ DZIAŁA

    }();

   

    // Code for localStorage/sessionStorage.
    var tekst = [
        {
            "create_date": "05-05-2018",
            "content": "John",
            "checked": true
        }
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