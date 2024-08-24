// console.log("%c Hello", "color: line; font-size: 20px; font-weight: bold")

let game = {
    title: "Sonic",
    related: ["Sonic 1", "Sonic 2"],
    year: 1991,
    platform: "SEGA",
    showRelated: function(){
        this.related.forEach(function(relatedGame){
            console.log(`${this.title} - ${relatedGame}`)
        })
    },
    showRelated2: function(){
        this.related.forEach((relatedGame)=>{
            console.log(`${this.title} - ${relatedGame}`)
        })
    },
    showRelated3: () => {
        console.log(`${this.title}`)
    }
}
game.showRelated()
game.showRelated2()
game.showRelated3()