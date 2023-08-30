function toggleMode(){
  //html é igual a documentElement//
  const html = document.documentElement
  html.classList.toggle('light')

  //if(html.classList.contains('light')){
  // html.classList.remove('light')
  //} else {
  //  html.classList.add('light')}
  //} TODA ESSA FUNÇÃO PODE SER TROCADA PELA FUNÇÃO ACIMA!!
  
  //PEGAR A TAG IMG
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    // SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
    img.setAttribute('src', "IMG/assets/avatar-light.png")
  } else {
    // SE TIVER SE LIGHT MODE, MANTER A IMAGEM NORMAL 
    img.setAttribute('src', "IMG/assets/avatar.png")}
}