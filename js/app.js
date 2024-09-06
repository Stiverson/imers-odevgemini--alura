// console.log(dados);
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    
let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.InnerHtml = "<p>Esse personagen ainda não esta cadastrado na nossa base de dados<p>"
        return
    }
    
    
let resultados = ""

for (let personagen of personagens) {

   if (personagen.titulo.includes(campoPesquisa)){
         resultados += `
<div class="item-resultado">
                <h2>
                    <a href="#">${personagen.titulo}</a>
                </h2>
                <p class="descricao-meta">${personagen.descricao}</p>
                <a href=${personagen.link} target="_blank">Mais informações</a>
            </div>
            ` ;
   }

}

section.innerHTML = resultados
}



