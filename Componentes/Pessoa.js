export class Pessoa {
	constructor(firstName, lastName) {
		this.nome = firstName;
		this.sobrenome = lastName;
	}

	transformToJson() {
		console.log(this);
		return JSON.stringify(this);
	}
}