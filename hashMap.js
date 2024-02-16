const BUCKETS = 16;

export class HashMap {
    constructor() {
        this.buckets = Array.from({ length: BUCKETS }, () => []);
    }

    hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % BUCKETS;
    }

    set = (key, value) => {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        // Update value if key exists in bucket
        for (let i = 0; i < bucket.length; i++) {
            const [currentKey] = bucket[i]; // Array destructuring to get key
            if (currentKey === key) {
                bucket[i][1] = value; 
                return;
            }
        }

        bucket.push([key, value]);
    }

    get = (key) => {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        for (let i = 0; i < bucket.length; i++) {
            const [currentKey, currentValue] = bucket[i];
            if (currentKey === key) {
                return currentValue;
            }
        }

        return null; // Return null if key not found
    }
}