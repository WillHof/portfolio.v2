$("#gForm").on("submit", function (e) {
    $("#gForm *").fadeOut(2000);
    $("#gForm").prepend("Your submission has been processed!")
})