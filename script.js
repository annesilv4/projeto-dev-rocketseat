function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('Light')

    // pegar a tag img
    const image = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('Light')) {
        // se tiver light mode, adicionar a iamgem light
        image.setAttribute('src', 'Imagens/anne1.png')
    } else {
        // se tiver sem light mode, manter a imagem normal
        image.setAttribute('src', 'Imagens/anne.png')
    }

    // substituir a informação da imagem
    if(html.classList.contains('Light')) {
        // se tiver light mode, adicionar a descrição
        image.setAttribute('alt', 'Imagem de Anne Carolayne, usando um cropt cor de saumão, cabelo amarrado.')
    } else {
        // se tiver sem o light mode, manter a mesma descrição
        image.setAttribute('alt', 'Imagem de Anne Carolayne com uma camiseta cinza, e cabelo solto.')
    }
}