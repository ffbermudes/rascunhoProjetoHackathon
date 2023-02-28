export class adressFind {
	constructor(elementClassOrId) {
		this.selectCepElement = document.querySelector(elementClassOrId);
	}

	//EVENTLISTENER >> APENAS NÚMEROS SERÃO PERMITIDOS NO CAMPO SELECIONADO.
	onlyNumbers() {
		this.selectCepElement.addEventListener("keypress", (e) => {
			const onlyNumbers = /\D/;
			const key = e.key;
			if (onlyNumbers.test(key)) {
				e.preventDefault();
				return;
			}
		});
	}

	//EVENTLISTENER >> APÓS 8 DIGITOS BLOQUEAR CAMPO.
	//APÓS AQUI AS FUNÇÕES SERÃO EXECUTADAS EM CADEIA.
	onAftereightDigits() {
		this.selectCepElement.addEventListener("keyup", (e) => {
			const valueCep = e.target.value;
			if (valueCep.length === 8) this.getAddress(valueCep);
		})
	}

	async getAddress(valueCep) {
		console.log(valueCep);
		this.selectCepElement.blur();

		const apiUrl = `https://viacep.com.br/ws/${valueCep}/json/`;

		const response = await fetch(apiUrl);

		const data = await response.json();

		console.log(data);

		this.carregaDom(data);

	}

	carregaDom(objct) {
		const uf = objct.uf;
		const rua = objct.logradouro;
		const bairro = objct.bairro;
		const cidade = objct.localidade;

		const campUf = document.querySelector("#adressStateText").value = uf;
		const campRua = document.querySelector("#adressStreetText").value = rua;
		const campBairro = document.querySelector("#adressNeighborhoodText").value = bairro;
		const campCidade = document.querySelector("#adressCityText").value = cidade;
	}

}