export class HashMap {
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
        this.buckets = newBuckets; // Restructure hash map with new buckets

        oldBuckets.forEach((oldBucket) => {
            oldBucket.forEach(([key, value]) => {
                this.set(key, value); // Rehash and set all kv pairs from oldBuckets
            })
        })
    }

    set = (key, value) => {
        // Resize hash map if hash map loading exceeds threshold
        const loading = this.count / this.buckets.length;
        if (loading >= this.loadFactor) {
            this.resize();
        }
        
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
        this.count++;
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
            bucket.forEach(([key, value]) => {
                keyArr.push(key);
            })
        }

        return keyArr;
    }

    values = () => {
        let valuesArr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            bucket.forEach(([key, value]) => {
                valuesArr.push(value);
            })
        }

        return valuesArr;
    }

    entries = () => {
        let kvArr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            bucket.forEach(([key, value]) => {
                kvArr.push([key, value]);
            })
        }

        return kvArr;
    }
}