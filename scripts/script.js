if (typeof(Storage) !== "undefined") {

    var AddTaskButton = document.querySelector("#add-task-text");
    
	var tasks = (JSON.parse(localStorage.getItem('ToDoApp')) != null) ? JSON.parse(localStorage.getItem('ToDoApp')) : [];
    
    AddTaskButton.addEventListener('click', () => {
        addTask();
    });
   
   

    var addTask = () => {
        var taskContent = document.querySelector('#add-task-input').value;
        taskContent = taskContent.replace(/^\s+|\s+$/g, '');
        taskContent = taskContent.trim();
        
        if(taskContent != 0 ){
            var task = prepareTaskForLocalstorage(getDateAndTime(), taskContent);

            tasks.push(task);
            saveTaskToLocalStorage(tasks);

            listTasksFromLocalStorage(tasks);
        }
    };

    var getDateAndTime = () => {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
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

    var prepareTaskForLocalstorage = (create_date, content) => {
        return {
            "create_date": create_date,
            "content": content
        };
    };

    var saveTaskToLocalStorage = (task) => {
        localStorage.setItem("ToDoApp", JSON.stringify(task));
    };

    var listTasksFromLocalStorage = (ta) => {
        document.getElementById('list-of-todos').innerHTML = "";
        for (var i = 0; i < ta.length; i++) {
            var ul = document.querySelector('#list-of-todos');
            var li = document.createElement('li');
            var div_structure = `
                <div class="check-box">
                    <input id="checkBox" type="checkbox">
                    <label for="checkBox"></label>
                </div>
                <div class="task-text">` + ta[i].content + `</div>
                <div class="edit-delete-date-hour">
                    <span class="edit">Edit</span>
                    <span class="delete">Delete</span>
                    <span class="date-hour">` + ta[i].create_date + `</span>
                </div>
                `;
            li.innerHTML = div_structure;
            ul.prepend(li);
        }
    };
    listTasksFromLocalStorage(tasks);

    $(document).on('click', '.delete', function(){
        deleteTask(this);
    });

    var deleteTask = (t) => {
        var clickedElement = t.parentNode.parentNode;
        var taskContent = clickedElement.getElementsByClassName('task-text')[0].innerHTML;
        var obj = tasks.find(o => o.content === taskContent);
        tasks.splice(tasks.indexOf(obj), 1);
        saveTaskToLocalStorage(tasks);
        listTasksFromLocalStorage(tasks);
    };
  
    
} else {
    // Sorry! No Web Storage support..
    confirm.log('Niestety LocalStorage nie działa na twoim komputerze');
}

// DODAĆ USUWANIE, EDYTOWANIE TASKÓW