export class Conversor {
	arrayDeObjetos = [];
	object;

	converteToJSON() {
		this.arrayDeObjetos.push(this.object);
		return JSON.stringify(this.arrayDeObjetos);
	}

	saveToLocalStorage() {
		localStorage.setItem("Pessoa", this.converteToJSON());
	}
}