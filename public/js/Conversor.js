export class Conversor {
	arrayDeObjetos = [];
	object;

	converteToJSON() {
		this.arrayDeObjetos.push(this.object);
		return JSON.stringify(this.arrayDeObjetos);
	}

	saveToLocalStorage() {
		if(!localStorage.hasOwnProperty("Pessoa")){
			localStorage.setItem("Pessoa", this.converteToJSON());
		}
		else{
			const getArrayLocalStorage = JSON.parse(localStorage.getItem("Pessoa"));
			getArrayLocalStorage.push(this.object);
			console.log(getArrayLocalStorage);
			localStorage.setItem("Pessoa", JSON.stringify(getArrayLocalStorage));
		}
	}
}