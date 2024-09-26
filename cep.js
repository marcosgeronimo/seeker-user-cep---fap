async function getAddressByCep(cep) {
    
    const formattedCep = cep.replace(/\D/g, '');

    
    const url = `https://viacep.com.br/ws/${formattedCep}/json/`;

    try {
       
        const response = await fetch(url);

        
        if (!response.ok) {
            throw new Error('Erro na consulta da API');
        }

        
        const data = await response.json();

        
        if (data.erro) {
            throw new Error('CEP inválido');
        }

        
        console.log(`Logradouro: ${data.logradouro}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Cidade: ${data.localidade}`);
        console.log(`Estado: ${data.uf}`);
    } catch (error) {
       
        console.error(`Erro: ${error.message}`);
    }
}


getAddressByCep('56330210');
