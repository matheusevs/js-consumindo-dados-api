async function buscarEndereco(cep)
{
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        const consultarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultarCepConvertida = await consultarCep.json();

        if (consultarCepConvertida.erro) {
            throw Error('CEP não existente.');
        }

        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');

        cidade.value = consultarCepConvertida.localidade;
        logradouro.value = consultarCepConvertida.logradouro;
        estado.value = consultarCepConvertida.uf;

    } catch (error) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(error);        
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));
