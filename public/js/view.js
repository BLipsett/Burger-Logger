$(function () {
    $(".change-dev").on("click", function (event) {
        let id = $(this).data("id");
        let newDev = $(this).data("newdev");

        let newDevState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
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

    $(".delete-burger").on("click", function (event) {
        let gone = $(this).data("id");
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
            data: gone
        }).then(
            function () {
                console.log("deleted burger");
                location.reload();
            }
        );

    });

    $(".hungry-dev").on("click", function (event) {
        let id = $(this).data("id");
        let newDev = $(this).data("newdev");

        let newDevState = {
            devoured: 0
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevState
        }).then(
            function () {
                console.log("changed devoured");
                location.reload();
            }
        );
    });

});

