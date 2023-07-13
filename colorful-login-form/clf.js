$(".show-button").on("click", function(event){
    event.preventDefault()
    var input = $("#password")

    if(input.attr("type") === "password"){
        input.attr("type", "text")
    } else {
        input.attr("type", "password")
    }
})