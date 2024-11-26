async function carregarMemes() {
    const url = 'https://66fc5dddc3a184a84d16e0c4.mockapi.io/api/memes'
    const resposta = await fetch(url)
    const informacoesMemes = await resposta.json()
    const divGaleria = document.querySelector('#galeria')
    divGaleria.innerHTML = ''
    informacoesMemes.forEach(meme => {
        const htmlDoMeme = `
         <div class="card">
            <h3>${meme.titulo}</h3>
            <img src="${meme.linkImagem}" alt="">
            <p>${meme.dataCadastro}</p>
        <p>${meme.likes}</p>
        <button class="btn-editar">Editar</button>
        <button class="btn-apagar" onclick= "apagarMeme('${meme.id}')">Apagar</button>
    </div>
        `
        divGaleria.innerHTML +=htmlDoMeme
    });

    
}

async function apagarMeme(id) {
    const url = `https://66fc5dddc3a184a84d16e0c4.mockapi.io/api/memes/${id}`
    const resposta = await fetch(url,{
        method: 'DELETE'
    })
    alert('Seu meme foi excluído com sucesso!')
    await carregarMemes ()
    
}



carregarMemes()  //Carrega os memes ao iniciar a pagina 