"use strict";

window.addEventListener('DOMContentLoaded', ()=>{
    const modal = document.querySelector(".modal"),
          modal_content = document.querySelector(".modal__content"),
          button_contact = document.getElementById("button_contact"),
          links_contact = document.querySelectorAll(".link_contact"),
          modal_close = document.querySelectorAll(".modal__close"),
          modal_dialog = document.querySelector(".modal__dialog"),
          button_send = document.getElementById("send"),
          modal_thanks = document.querySelector(".modal-thanks__content"),
          form_name = document.querySelector("input[name='name']"),
          form_email = document.querySelector("input[name='email']"),
          form_phone = document.querySelector("input[name='phone']"),
          form_text = document.querySelector("textarea[name='text']");


        //   new WOW().init();

    function showModal(){
        modal.classList.add("modal_active");
        modal_content.classList.add("modal__content_show");
        document.documentElement.style.overflow = "hidden";
    }

    function showThanksModal(){
        modal_content.classList.remove("modal__content_show");
        modal_thanks.classList.add("modal-thanks__content_active");
    }

    function hideModal(){
        modal_content.classList.remove("modal__content_show");
        modal.classList.remove("modal_active");
        document.documentElement.style.overflow = "";
        modal_thanks.classList.remove("modal-thanks__content_active");
    }
    
    button_contact.addEventListener('click', ()=>{
        showModal();
    });

    links_contact.forEach(e => {
        e.addEventListener("click", ()=>{
            showModal();
        });
    });

    modal_close.forEach(event =>{
        event. addEventListener("click", ()=>{
            hideModal();
        });
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

    button_send.addEventListener("click", (event)=>{
        
        if (form_name.validity.valid && form_email.validity.valid && form_phone.validity.valid && form_text.validity.valid){
            alert("jf");
        showThanksModal();
        event.preventDefault();
        }
    });
    


});