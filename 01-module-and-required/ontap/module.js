class Dongvat {
    constructor(an, ngu, nghi) {
        this.an = an;
        this.ngu = ngu;
        this.nghi = nghi;
    }
}

var dongvat = new Dongvat('an', 'ngu', 'nghi');
console.log(dongvat.an);

module.exports = {
    classDV: Dongvat,
    dongvat: dongvat
} 