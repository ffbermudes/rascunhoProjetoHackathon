export class adressFind {
	constructor(elementClassOrId) {
		this.selectCepElement = document.querySelector(elementClassOrId);
	}

	// EVENTLISTENER >> APENAS NÚMEROS SERÃO PERMITIDOS NO CAMPO SELECIONADO.
	onlyNumbers() {
		this.selectCepElement.addEventListener("input", (e) => {
			const onlyNumbers = /\d$/;
			const value = e.target.value;
			console.log(value.length);
			if (!onlyNumbers.test(value)) {
				e.target.value = value.replace(/[^\d]/g, '');
			}
		});
	}

	// EVENTLISTENER >> APÓS 8 DIGITOS EXECUTAR API E TIRAR FOCO DO CAMPO.
	// APÓS AQUI AS FUNÇÕES SERÃO EXECUTADAS EM CADEIA.
	onAftereightDigits() {
		this.selectCepElement.addEventListener("input", (e) => {
			const valueCep = e.target.value;
			// if (valueCep.length === 8) this.getAddress(valueCep);
			const retornofunc = valueCep.length === 8 ? this.getAddress(valueCep) : false; //teste
			return retornofunc;
		});
	}

	async getAddress(valueCep) {
		console.log(valueCep);

		const apiUrl = `https://viacep.com.br/ws/${valueCep}/json/`;

		const response = await fetch(apiUrl);

		const data = await response.json();

		console.log(data);

		this.carregaDom(data);

		this.selectCepElement.blur();
	}

	carregaDom(objct) {
		const uf = objct.uf;
		const rua = objct.logradouro;
		const bairro = objct.bairro;
		const cidade = objct.localidade;

		document.querySelector("#adressStateText").value = uf;
		document.querySelector("#adressStreetText").value = rua;
		document.querySelector("#adressNeighborhoodText").value = bairro;
		document.querySelector("#adressCityText").value = cidade;
	}
}