$(function () {
    $("change-dev").on("click", function (event) {
        let id = $(this).data("id");
        let newDev = $(this).data("newdev");

        let newDevState = {
            devoured: newDev
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevState
        }).then(
            function () {
                console.log("changed devoured");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurg = {
            burger_name: $("#bur").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                console.log("Added new burger!");
                location.reload();
            }
        );

        
    });
});

