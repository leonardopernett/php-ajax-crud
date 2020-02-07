$(function () {
let edit =false;

    $('#task-result').hide();
    $('#search').keyup(function () {
        if ($('#search').val()) {
            let search = $('#search').val();
            $.ajax({
                url: 'search.php',
                type: 'POST',
                data: {
                    search
                },
                success: function (res) {
                    let tasks = JSON.parse(res);
                    let template = '';

                    tasks.forEach(task => {
                        template +=
                            `
                      <li>${task.name}</li>
                   `
                    });

                    $('#container').html(template)
                    $('#task-result').show();


                }
            })
        }
    })


    $('#task-form').submit(function (e) {
        e.preventDefault();

        let name = $('#name').val();
        let description = $('#description').val();
        let id = $('#id').val();

        const newTask = {
            name,
            description,
            id
             
        }

        let url = edit=== false ? 'add.php':'edit.php'

        $.post(url, newTask, function (res) {
            console.log(res);
            getTask();
            $('#task-form').trigger("reset");
        })


    })

    getTask();

    function getTask() {
        $.ajax({
            url: 'lists.php',
            type: 'GET',
            success: function (res) {
                let tasks = JSON.parse(res);
                let = template = '';

                tasks.forEach(task => {
                    template += `
                  <tr taskId=${task.id}>
                   <td >${task.id}</td>
                   <td><a href="#" class="task-item" >${task.name} </a></td>
                   <td>${task.description}</td>
                   <td><button class="task-delete btn btn-danger">delete</button></td>
                  <tr>
                 `
                });

                $('#tasks').html(template);
            }
        })
    }


    $(document).on('click', '.task-delete', function () {

            if (confirm("are you sure want delete it")) {
                let element = $(this)[0].parentElement.parentElement;
                let id = $(element).attr('taskId');

                $.post('delete.php', {
                    id
                }, function (res) {
                    console.log(res);
                    getTask();
                })
            }
    })

    $(document).on('click', '.task-item', function(e){
        let element =  $(this)[0].parentElement.parentElement;
        let id =  $(element).attr('taskId')
         $.post('getOne.php', {id}, function(res){
            let task = JSON.parse(res);
            $('#name').val(task[0].name);
            $('#description').val(task[0].description);
            $('#id').val(task[0].id);
            edit=true;
         })
    })

})