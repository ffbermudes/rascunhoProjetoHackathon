export class Conversor {
	constructor(objeto) {
		this.object = objeto;
	}

	converteToJSON() {
		const pessoaJson = JSON.stringify(this.object);
		return pessoaJson;
	}

	saveToLocalStorage() {
		localStorage.setItem("pessoa", this.converteToJSON());
	}
}