class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let x = Math.ceil((this.min + this.max) / 2);
        return x;
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
