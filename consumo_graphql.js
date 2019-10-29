const consulta = '{olaMundo}'

const opcoes = { // Enviando o request do tipo POST
	method: 'POST',
	headers: {
		'Content-Type': 'application/JSON',
	},
	body: JSON.stringify({
		query: consulta,
	}),
}

const createOlaMundo = string => {
	const body = document.querySelector('body')

	body.innerHTML = string
}

fetch('http://localhost:4000/graphql', opcoes)
	.then(resposta => resposta.json(resposta))
	.then(dados => createOlaMundo(dados.data.olaMundo))
