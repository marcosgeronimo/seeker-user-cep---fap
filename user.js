async function getUserById(contactId) {
    const url = `https://jsonplaceholder.typicode.com/users/${contactId}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erro na consulta da API');
        }

        const data = await response.json();

        
        console.log(`Nome: ${data.name}`);
        console.log(`Username: ${data.username}`);
        console.log(`Email: ${data.email}`);
        console.log(`Endereço: ${data.address.street}, ${data.address.suite}, ${data.address.city}`);
        console.log(`Telefone: ${data.phone}`);
        console.log(`Website: ${data.website}`);
        console.log(`Empresa: ${data.company.name}`);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
}


getUserById(1);
