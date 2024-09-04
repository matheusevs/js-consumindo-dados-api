async function buscarEndereco(cep)
{
    try {
        const consultarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultarCepConvertida = await consultarCep.json();
        console.log(consultarCepConvertida)

        if (consultarCepConvertida.erro) {
            throw Error('CEP não existente.');
        }
    } catch (error) {
        console.log(error);        
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));
