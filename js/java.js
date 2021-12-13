let formulario = document.getElementById("formulario");
let contenido = document.getElementById("contenido");
 let formas = [];
 form.addEventListener("submit", (event) =>{
     event.preventDefault();
     let data = new Formdata(form);
     formas.push({
         name: data.get("name"),
         figura: data.get("figura"),
         color: data.get("color"),
     });
     pintar_formas();
 });
  const pintar_formas = () => {
     content.innerHTML = "";
     formas.forEach(e =>{
         content.insertAdjacentHTML(
         'beforeend',
         `
         <div
         class=${e.figura}" 
         style="background: ${e.color};"
         >
         ${e.nombre}
         </div>
         `
     );
         });
 };