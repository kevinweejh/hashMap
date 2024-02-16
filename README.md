## HashMap Implementation in JavaScript

### Purpose
This repository contains a simple implementation of a hash map (or hash table) in JavaScript. It offers efficient key-based retrieval of values. This implementation includes basic functionalities such as adding (set), retrieving (get), checking existence (has), removing (remove), and other utility functions. 

As a bonus, I created a hash set as well, which behaves similarly as a hash map, but stores only `keys` and not `values`.

### Key Features
- Dynamic resizing to maintain efficient operations as the number of elements grows.
- Support for basic operations like set, get, has, remove, and more.
- Methods to retrieve keys, values, and key-value pairs.

### Methods
- `hash(key)`: Returns a hash code based on hash function.
- `set(key, value)`: Adds a new key-value pair or updates an existing one.
- `get(key)`: Retrieves the value associated with the given key.
- `has(key)`: Checks whether a key exists in the map.
- `remove(key)`: Removes a key-value pair by key.
- `keys()`: Returns an array of all keys in the map.
- `values()`: Returns an array of all values in the map.
- `entries()`: Returns an array of all entries (key-value pairs) in the map.
- `clear()`: Clears the map of all key-value pairs.
- `length()`: Returns the number of key-value pairs stored in the map.
- `resize()`: Doubles the hash map buckets and rehashes the key-value pairs.

### Usage
To use the HashMap class, first import it into your JavaScript file. Then, create instances of the map and use the provided methods to manipulate it.

```javascript
import { HashMap } from './hashMap';

const myMap = new HashMap();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

const value = myMap.get('key1'); // returns 'value1'
const exists = myMap.has('key3'); // returns false if 'key3' is not in the map
const size = myMap.length(); // returns the number of key-value pairs in the map

myMap.remove('key1'); // removes the key 'key1' from the map

const keys = myMap.keys(); // returns an array of all keys in the map
const values = myMap.values(); // returns an array of all values in the map
const entries = myMap.entries(); // returns an array of all [key, value] pairs

myMap.clear(); // removes all key-value pairs from the map
```

## Contribution and Support

### Contributing

While this project is primarily a personal learning exercise, I welcome anyone interested in using it for their learning or experimenting. Feel free to fork the repository, replicate it as you will, and share your findings. 

If you have suggestions for improvements, feel free to submit a pull request.

### Support

For support or to report issues, contact me at [hello@codebykevin.dev](mailto:hello@codebykevin.dev). 
