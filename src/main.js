const contactame=document.querySelector("#contactame");
const modal=document.querySelector(".formulario_contact");
// modal.style.display='none';

// function showForm(){
//       // modal.close();
//       console.log("click");
//       modal.style.display='';
// }
const buttonForm= document.querySelector(".btn__text");
buttonForm.addEventListener("click", function(){
      modal.classList.toggle("show-form");
      console.log('click show form');
})
// contactame.addEventListener("click", function(){
//       showForm();
// })

function showAlert(){
      const formRegister = document.querySelector("#formRegister");

      formRegister.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameUser = e.target.user_name.value.trim();
      const mailUser = e.target.user_mail.value.trim();
      const messageUser = e.target.user_message.value.trim();

      if (
            nameUser === "" ||
            mailUser === "" ||
            messageUser===""
            
      ) {
            alert("Es necesario llenar todos los campos");
      }
      else{
            alert("Se ha enviado correctamente");
      }
})
}



function showMenu() {
      const iconMenu = document.querySelector(".icon__menu");
      const menu = document.querySelector(".menu");
      
      iconMenu.addEventListener("click", function () {
      console.log("click hamburguer");
      menu.classList.toggle("menu__show");
      });

}

function closeMenu(){
      const menu = document.querySelector(".menu");
      menu.addEventListener("click", function(){
      
      menu.classList.toggle("menu__show");
      } )

}
showAlert();
showMenu();
closeMenu();

