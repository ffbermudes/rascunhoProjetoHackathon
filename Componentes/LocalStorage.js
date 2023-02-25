export class navegadorCache {
	constructor(storage) {
		this.storage = storage;
	}
	save(key, value) {
		this.storage.setItem(key, value);
	}
	load(key) {
		return this.storage.getItem(key);
	}
}