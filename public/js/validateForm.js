const campCep = document.querySelector("#adressCepText");

campCep.addEventListener("keypress", (e) => {
	const onlyNumbers = /\D/;
	const key = e.key;
	if (onlyNumbers.test(key)) {
		chamaVar(key);
		e.preventDefault();
		return;
	}
});

campCep.addEventListener("keyup", (e) => {
	const valueCep = e.target.value;
	if (valueCep.length === 8) getAddress(valueCep);
})

const getAddress = async (cep) => {
	console.log(cep);
	campCep.blur();

	const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

	const response = await fetch(apiUrl);

	const data = await response.json();

	carregaDom(data);

}

const carregaDom = (objct)=>{
	const uf = objct.uf;
	const rua = objct.logradouro;
	const bairro = objct.bairro;
	const cidade = objct.localidade;

	const campUf = document.querySelector("#adressStateText").value = uf;
	const campRua = document.querySelector("#adressStreetText").value = rua;
	const campBairro = document.querySelector("#adressNeighborhoodText").value = bairro;
	const campCidade = document.querySelector("#adressCityText").value = cidade;

	console.log(`${uf} ${rua} ${bairro} ${cidade}`);
}