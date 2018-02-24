var dem = (arr) => {
    console.log('Mang dai ' + arr.length);
}

var chao = () => {
    console.log('Hello World');
}

var tinh = (a, b) => {
    console.log(`Result ${a + b}`);
}

class Dongvat {
    constructor(an, uong) {
        this.an = an;
        this.uong = uong;
    }
}

class Heo extends Dongvat {
    constructor(an, uong, ngu) {
        super(an, uong);
        this.ngu = ngu;
    }
}

module.exports = {
    dem: dem,
    chao: chao,
    tinh: tinh
};

module.exports.classdv = Dongvat;
module.exports.classheo = Heo;