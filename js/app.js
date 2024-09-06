// console.log(dados);
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

let resultados = ""

for (let personagen of personagens) {

  resultados += `
<div class="item-resultado">
                <h2>
                    <a href="#">${personagen.titulo}</a>
                </h2>
                <p class="descricao-meta">${personagen.descricao}</p>
                <a href=${personagen.link} target="_blank">Mais informações</a>
            </div>
            ` 
}

section.innerHTML = resultados
}



