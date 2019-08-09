$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var neweaten = $(this).data("neweaten");
        if (neweaten == false) {
            neweaten = true;
        } else {
            neweaten = false;
        }
        var newEatenState = {
            eaten: neweaten
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("Changed eaten to ", neweaten);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});