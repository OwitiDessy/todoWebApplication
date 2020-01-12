$(function() {
    // The taskHtml method takes in a JavaScript representation
    // of the task and produces an HTML representation using
    // <li> tags
    function taskHtml(task) {
      var checkedStatus = task.done ? "checked" : "";
      var liClass = task.done ? "completed" : "";
      var liElement = '<li id="listItem-' + task.id +'" class="' + liClass + '">' +
      '<div class="view"><input class="toggle" type="checkbox"' +
        " data-id='" + task.id + "'" +
        checkedStatus +
        '><label>' +
        task.title +
        '<span class="x" >X</span></label></div></li>';

      return liElement;
    }

    // bind the X to a new Javascript function 
    // that new function needs to hit a delete endpoint in the controller
    // so we need to add the delete endpoint to the controller
    // lastly, re-render all the items (which will no longer include the deleted one)

    // toggleTask takes in an HTML representation of the
    // an event that fires from an HTML representation of
    // the toggle checkbox and  performs an API request to toggle
    // the value of the `done` field
    function toggleTask(e) {
      var itemId = $(e.target).data("id");

      var doneValue = Boolean($(e.target).is(':checked'));

      $.post("/tasks/" + itemId, {
        _method: "PUT",
        task: {
          done: doneValue
        }

      }).success(function(data) {
        var liHtml = taskHtml(data);
        var $li = $("#listItem-" + data.id);
        $li.replaceWith(liHtml);
        $('.toggle').change(toggleTask);
      } );

    }

    function deleteTask(e) {
      console.log('CLICKED');
      //var itemId = $(e.target).data("id");
    // bind the X to a new Javascript function 
      //$.destroy("/tasks" + itemId, {type: "DELETE"}).success(function(data){ //when data is successfully retrieved we will be pinged
        //var htmlString = taskHtml(data); //goes through aka iterates through each item in taskHtml then and assign each item the variable name htmlString
        //var ulTodos = $('.todo-list'); //pulls aka extract todo list off page
        //$('#x').click(toggleTask); //we pull aka extract the x from the page $('#x')and then when x is clicked...
      
        //$.get("/tasks").success( function( data ) {
          //var htmlString = "";

          //$.each(data, function(index,  task) {
            //htmlString += taskHtml(task);
          //});
         // var ulTodos = $('.todo-list');
          //ulTodos.html(htmlString);

          //$('.toggle').change(toggleTask);

        //});
      //});
    }

    $.get("/tasks").success( function( data ) {
      var htmlString = "";

      $.each(data, function(index,  task) {
        htmlString += taskHtml(task);
      });
      var ulTodos = $('.todo-list');
      ulTodos.html(htmlString);

      $('.toggle').change(toggleTask);
      $('.x').click(deleteTask);
    });


    $('#new-form').submit(function(event) {
      event.preventDefault();
      var textbox = $('.new-todo');
      var payload = {
        task: {
          title: textbox.val()
        }
      };
      $.post("/tasks", payload).success(function(data) {
        var htmlString = taskHtml(data);
        var ulTodos = $('.todo-list');
        ulTodos.append(htmlString);
        $('.toggle').click(toggleTask);
        $('.new-todo').val('');
      });
      
    });

  });