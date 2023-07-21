$(".number").on("click", function(){
    $(this).addClass("clicked")
    setTimeout(function(){
        $(this).removeClass("clicked")
    },200)
})

$(".extra").on("click", function(){
    $(this).addClass("clicked2")
    setTimeout(function(){
        $(this).removeClass("clicked2")
    },200)
})

$(".operator").on("click", function(){
    $(this).addClass("clicked2")
    setTimeout(function(){
        $(this).removeClass("clicked2")
    },200)
})