$(document).ready(function () {
  $("#taskHider").click(function () {
    $("#taskHolder").toggle();
  });

  $(".task-adder").click(function () {
    $(".modal").show();
  });

  const taskForm = $("#taskForm");

  $(".add-btn").click(function (event) {
    event.preventDefault();

    const taskBoard = $("#taskBoard");

    const titleBox = $("#titleBox").val();

    const taskDescription = $("#taskDescription").val();

    const taskPinner = $(`<div class="task-display-board"></div>`);

    taskPinner.html(`<div class="task-holder" id="taskHolder">

     <div class="task-title-and-option-bar">

      <p class="task-title" id="taskTitle">${titleBox}</p>

      <img src="" alt="" srcset="">

     </div>

     <div class="task-details" id="taskDetails">${taskDescription}</div>

      <div class="category-color-and-task-marker">

        <div class="task-board-category-color">

        </div>

        <div class="task-maker">

          <label for=""><input type="checkbox" name="done" id="taskMarker" 
          class="task-marker">Done</label>

        </div>

      </div>

    </div>`);

    taskBoard.append(taskPinner);

    $(".modal").hide();

    taskForm.trigger("reset");
  });

  $(".cancel-btn").click(function (event) {
    event.preventDefault();

    $(".modal").hide();

    taskForm.trigger("reset");
  });

  $(document).on("click", ".task-marker", function () {
    // Find the parent task-holder of the clicked checkbox
    let taskHolder = $(this).closest(".task-holder");

    if ($(this).prop("checked")) {
      taskHolder
        .find(".task-title, .task-details")
        .css("text-decoration", "line-through");
    } else {
      taskHolder
        .find(".task-title, .task-details")
        .css("text-decoration", "none");
    }
  });

  function hideDoneTask() {
    const taskHider = $("#taskHider");
    const taskMarker = $("#taskMarker");
    const taskHolder = $("#taskHolder");

    if (taskHider.prop("checked") && taskMarker.prop("checked")) {
      taskHolder.hide();
    } else {
      taskHolder.show();
    }
  }

  $("#taskHider").click(function () {
    hideDoneTask();
  });
 });