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
            var task = prepareTaskForLocalstorage(getDateAndTime(), taskContent, false);

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

    var prepareTaskForLocalstorage = (create_date, content, isChecked) => {
        return {
            "create_date": create_date,
            "content": content,
            "checked": isChecked
        };
    };

    var saveTaskToLocalStorage = (task) => {
        localStorage.setItem("ToDoApp", JSON.stringify(task));
    };

    var listTasksFromLocalStorage = (ta) => {
        document.getElementById('list-of-todos').innerHTML = "";
        for (var i = 0; i < ta.length; i++) {
            if (ta.checked != false) {
                var li = document.createElement('li');
                var ul = document.querySelector('#list-of-todos');
                var div_check_box = document.createElement('div');
                div_check_box.className = 'check-box';
                var input_checkbox = document.createElement('input');
                input_checkbox.setAttribute("type", "checkBox");
                input_checkbox.id = 'checkBox';
                var label_for_checkbox = document.createElement('label');
                label_for_checkbox.setAttribute('for', 'checkBox');
                div_check_box.appendChild(input_checkbox);
                div_check_box.appendChild(label_for_checkbox);
                var div_task_text = document.createElement('div');
                div_task_text.className = 'task-text';
                var div_edit_delete_date_hour = document.createElement('div');
                div_edit_delete_date_hour.className = 'edit-delete-date-hour';
                var span_edit = document.createElement('span');
                span_edit.className = 'edit';
                span_edit.innerHTML = 'Edit ';
                var span_delete = document.createElement('span');
                span_delete.className = 'delete';
                span_delete.innerHTML = 'Delete';
                var span_date_hour = document.createElement('span');
                span_date_hour.className = 'date-hour';
                div_edit_delete_date_hour.appendChild(span_edit);
                div_edit_delete_date_hour.appendChild(span_delete);
                div_edit_delete_date_hour.appendChild(span_date_hour);
                div_task_text.innerHTML = ta[i].content;
                span_date_hour.innerHTML = ta[i].create_date;
                li.appendChild(div_check_box);
                li.appendChild(div_task_text);
                li.appendChild(div_edit_delete_date_hour);    
                ul.prepend(li);
            }
        }
    };
    listTasksFromLocalStorage(tasks);
    
} else {
    // Sorry! No Web Storage support..
    confirm.log('Niestety LocalStorage nie działa na twoim komputerze');
}

// DODAĆ USUWANIE, EDYTOWANIE TASKÓW