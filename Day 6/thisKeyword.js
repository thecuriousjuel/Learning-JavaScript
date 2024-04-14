const video = {
    title: "Flower",
    tags: ["A", "B", "C"],
    function(){
        console.log(this)
    }
}

this.key = "Key"
console.log(this)

video.function()