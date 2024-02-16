const BUCKETS = 16;

export class HashMap {
    constructor() {
        this.buckets = new Array(BUCKETS).fill(null);
    }

    hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % BUCKETS;
    }
}