let circle = {
    _radius: 2,
    get radius(){
        return this._radius
    },
    set radius(r){
        this._radius = r
    },
    get area(){
        return Math.PI * this.radius ** 2
    }
}

console.log(circle.area) 