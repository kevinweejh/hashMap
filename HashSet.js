export class HashSet {
    constructor(initialCap = 16, loadFactor = 0.75) {
        this.buckets = Array.from({ length: initialCap }, () => []);
        this.loadFactor = loadFactor;
        this.count = 0;
    }

    hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        
        // Controlled hash function to ensure calculated indices always within bounds
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }

    resize = () => {
        const newCap = this.buckets.length * 2;
        const newBuckets = Array.from({ length: newCap }, () => []);

        const oldBuckets = this.buckets; // For reference when transfering old -> new
        this.buckets = newBuckets; // Restructure hash set with new buckets

        oldBuckets.forEach((oldBucket) => {
            oldBucket.forEach((key) => {
                this.set(key); // Rehash and set all keys from oldBuckets
            })
        })
    }

    set = (key) => {
        // Resize hash set if hash set loading exceeds threshold
        const loading = this.count / this.buckets.length;
        if (loading >= this.loadFactor) {
            this.resize();
        }
        
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        bucket.push(key);
        this.count++;
    }

    has = (key) => {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        for (let i = 0; i < bucket.length; i++) {
            const [currentKey] = bucket[i];
            if (currentKey === key) {
                return true;
            }
        }

        return false; // Return false if key not found
    }

    remove = (key) => {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        for (let i = 0; i < bucket.length; i++) {
            const [currentKey] = bucket[i];
            if (currentKey === key) {
                bucket.splice(i, 1); // Remove array item if key matches
                return true;
            }
        }

        return false; // Return false if key not found
    }

    length = () => {
        let keyCount = 0;
        
        this.buckets.forEach((bucket) => {
            keyCount += bucket.length;
        })
        
        return keyCount; 
    }

    clear = () => {
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
    }

    keys = () => {
        let keyArr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            bucket.forEach((key) => {
                keyArr.push(key);
            })
        }

        return keyArr;
    }
}