"use strict";

window.addEventListener('DOMContentLoaded', ()=>{

    const modal = document.querySelector(".modal"),
          modal_content = document.querySelector(".modal__content"),
          button_contact = document.querySelector("#button_contact"),
          links_contact = document.querySelectorAll(".link_contact"),
          modal_close = document.querySelector(".modal__close"),
          modal_dialog = document.querySelector(".modal__dialog");


    function showModal(){
        modal.classList.add("show");
        modal_content.classList.add("modal__content_show");
        document.documentElement.style.overflow = "hidden";
    }

    function hideModal(){
        modal_content.classList.remove("modal__content_show");
        modal.classList.remove("show");
        document.documentElement.style.overflow = "";
    }
    
    button_contact.addEventListener('click', ()=>{
        showModal();
    });

    links_contact.forEach(e => {
        e.addEventListener("click", ()=>{
            showModal();
        });
    });

    modal_close.addEventListener("click", ()=>{
        hideModal();
    });

    modal_dialog.addEventListener('click', (event) =>{
        if (event.target == modal_dialog){
            hideModal();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.code == "Escape" && modal.classList.contains("show")) {
            hideModal();
        }
    });
    


});