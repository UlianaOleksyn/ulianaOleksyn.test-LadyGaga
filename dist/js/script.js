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
          form = document.querySelector(".modal__form"),
          form_name = document.querySelector("input[name='name']"),
          form_email = document.querySelector("input[name='email']"),
          form_phone = document.querySelector("input[name='phone']"),
          form_text = document.querySelector("textarea[name='text']"),
          form_questions = document.querySelector(".form__questions");
         
    
    let random;  

          new WOW().init();

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
        showThanksModal();
        event.preventDefault();
        }
    });

    // form questions
    class Questions{
        constructor(quest, answer1,  answer1_boolean, answer2, answer2_boolean, answer3, answer3_boolean, class_name){
            this.quest = quest;
            this.answer1 = answer1;
            this.answer1_boolean = answer1_boolean;
            this.answer2 = answer2;
            this.answer2_boolean = answer2_boolean;
            this.answer3 = answer3;
            this.answer3_boolean = answer3_boolean;
            this.class_name = class_name;
        }

        writeContent(){
            const div = document.createElement("div");
            div.classList.add("form__questions", `${this.class_name}`);
            div.innerHTML = 
            // <legend> Nie jestem robotem </legend>
           ` <p>${this.quest}</p>

            <div class="form__wrapper-answers">
            <label for="${this.answer1}">${this.answer1}
            <input type="radio" id="${this.answer1}" name="drone" value="${this.answer1}">
            </label>
            <label for="${this.answer2}">${this.answer2}
            <input type="radio" id="${this.answer2}" name="drone" value="${this.answer2}">
            </label>
            <label for="${this.answer3}">${this.answer3}
            <input type="radio" id="${this.answer3}" name="drone" value="${this.answer3}">
            </label>
            `;
           form.append(div);
          
        }
    }

    const quest_1 = new Questions(
        'Beethovena, Mozarta, Bacha i Chopina łączy myzyka:',
        'klasyczna',
        'true',
        'pop',
        'false',
        'rock',
        'false',
        '1'
    );
    // quest_1.writeContent();

    const quest_2 = new Questions(
        'Muzyka popularna, najbardziej rozpowszechniona:',
            'folk',
            'false',
            'pop',
            'true',
            'reggae',
            'false',
            '2'
        );

    const quest_3 = new Questions(
        'Taneczna, łatwa w odbiorze muzyka:',
            'rap',
            'false',
            'jazz',
            'false',
            'disco',
            'true',
            '3'
        );
    // quest_3.writeContent();

    const quest_4 = new Questions(
        'Uroczysta pieśń, oficjalny narodowy symbol państwa:',
            'flag',
            'false',
            'godło',
            'false',
            'hymn',
            'true',
            '4'
        );
    // quest_4.writeContent();

    random = Math.floor(Math.random() * 4) + 1;
     switch (random) {
        case 1:
            quest_1.writeContent();
          break;
        case 2:
            quest_2.writeContent();
            break;
        case 3:
            quest_3.writeContent();
            break;
        default:
            quest_4.writeContent();
            break;
     }
    


    


});