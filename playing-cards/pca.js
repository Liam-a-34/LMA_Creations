$("#card1").on("click", () => {

    for(let i = 1; i < 5; i++){
        $(`#card${i}`).removeClass("move")
        $(`#card${i}`).removeClass("selected")
    }

    for(let i = 2; i < 5; i++){
        $(`#card${i}`).addClass("move")
    }

    $("#card1").addClass("selected")
})
$("#card2").on("click", () => {

    for(let i = 1; i < 5; i++){
        $(`#card${i}`).removeClass("move")
        $(`#card${i}`).removeClass("selected")
    }

    $("#card3").addClass("move")
    $("#card4").addClass("move")

    $("#card2").addClass("selected")
})
$("#card3").on("click", () => {

    for(let i = 1; i < 5; i++){
        $(`#card${i}`).removeClass("move")
        $(`#card${i}`).removeClass("selected")
    }
    $("#card4").addClass("move")

    $("#card3").addClass("selected")
})
$("#card4").on("click", () => {

    for(let i = 1; i < 5; i++){
        $(`#card${i}`).removeClass("move")
        $(`#card${i}`).removeClass("selected")
    }
    
    $("#card4").addClass("selected")
})