$(".dtsb-button").on("click", () => {
    $(".truck-div").toggleClass("send1")
    $(".dtsb-button").toggleClass("button-height")

    setTimeout(() => {
        $(".dtsb-button").toggleClass("button-border-color")
    },250)

    setTimeout(() => {
        $(".box-img").toggleClass("send2")
    },1000)

    setTimeout(() => {
        $(".truck-div").toggleClass("send3")
    },2500)

    setTimeout(() => {
        $(".truck-div").toggleClass("send1")
        $(".dtsb-button").toggleClass("button-height")
        $(".dtsb-button").toggleClass("button-border-color")
    },4500)

    setTimeout(() => {
        $(".box-img").toggleClass("send2")
        $(".truck-div").toggleClass("send3")
    },5500)
})