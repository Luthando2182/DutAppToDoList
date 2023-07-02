$(function () {

    // DELETING ITEMS /////////////////////////////////////////
    $('#TodoList').on('click', 'li i.delete-item', function () {
        var $li = $(this).parent();
        var id = $li.attr('data-id');

        todoApp.todo.delete(id).then(function () {
            $li.remove();
            abp.notify.info('Deleted the todo item.');
        });
    });

    // EDITING ITEMS //////////////////////////////////////////
    $('#TodoList').on('click', 'li i.edit-item', function () {
        var $li = $(this).parent();
        var id = $li.attr('data-id');
        var text = $li.find('.todo-text').text();

        var newText = prompt('Enter the new text:', text);
        if (newText !== null) {
            todoApp.todo.UpdateAsync(id, newText).then(function (result) {
                $li.find('.todo-text').text(result.text);
                abp.notify.info('Updated the todo item.');
            });
        }
    });

    // CREATING NEW ITEMS /////////////////////////////////////
    $('#NewItemForm').submit(function (e) {
        e.preventDefault();

        var todoText = $('#NewItemText').val();
        todoApp.todo.create(todoText).then(function (result) {
            $('<li data-id="' + result.id + '">')
                .html('<span class="todo-text">' + result.text + '</span> ' +
                    '<i class="fa fa-trash-o delete-item"></i> ' +
                    '<i class="fa fa-pencil edit-item"></i>')
                .appendTo($('#TodoList'));
            $('#NewItemText').val('');
        });
    });
});
