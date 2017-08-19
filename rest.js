class Tripple{
    static tripple(n){
        n = n || 1;
        return n*3;
    }
}

class BiggerTripple extends Tripple{
    static tripple(n){
        return super.tripple(n)*super.tripple(n);
    }
}

console.log(Tripple.tripple());
console.log(Tripple.tripple(6));

let tp = new Tripple();

console.log(BiggerTripple.tripple(3));

// z