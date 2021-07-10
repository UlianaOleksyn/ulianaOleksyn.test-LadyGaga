"use strict";

window.addEventListener('DOMContentLoaded', ()=>{
    const modal = document.querySelector(".modal"),
          modal_content = document.querySelector(".modal__content"),
          button_contact = document.getElementById("button_contact"),
          links_contact = document.querySelectorAll(".link_contact"),
          modal_close = document.querySelectorAll(".modal__close"),
          modal_dialog = document.querySelector(".modal__dialog"),
          modal_thanks = document.querySelector(".modal-thanks__content"),
          form = document.querySelector(".modal__form"),
          form_name = document.querySelector("input[name='name']"),
          form_email = document.querySelector("input[name='email']"),
          form_phone = document.querySelector("input[name='phone']"),
          form_text = document.querySelector("textarea[name='text']");
          
    let random,
        answer,
        button_send;  

          new WOW().init();

     // form questions
     class Questions{
        constructor(quest, answer1, answer2, answer3, answer_true, class_name){
            this.quest = quest;
            this.answer1 = answer1;
            this.answer2 = answer2;
            this.answer3 = answer3;
            this.answer_true = answer_true;
            this.class_name = class_name;
        }

        writeContent(){
            const fieldset = document.createElement("fieldset");
            fieldset.classList.add("form__questions", `${this.class_name}`);
            fieldset.setAttribute("required", '');
            fieldset.innerHTML = `
            <legend> Nie jestem robotem </legend>
            <p>${this.quest}</p>

            <div class="form__wrapper-answers">
            <label for="${this.answer1}">${this.answer1}
            <input type="radio" id="${this.answer1}" name="request${this.class_name}" value="${this.answer1}" required>
            </label>
            <label for="${this.answer2}">${this.answer2}
            <input type="radio" id="${this.answer2}" name="request${this.class_name}" value="${this.answer2}" required>
            </label>
            <label for="${this.answer3}">${this.answer3}
            <input type="radio" id="${this.answer3}" name="request${this.class_name}" value="${this.answer3}" required>
            </label>
            `;
            form_text.after(fieldset);

           answer = `${this.answer_true}`;
        }
    }

    const quest_1 = new Questions(
        'Beethovena, Mozarta, Bacha i Chopina łączy myzyka:',
        'klasyczna',
        'pop',
        'rock',
        'klasyczna',
        '1'
    );

    const quest_2 = new Questions(
        'Muzyka popularna, najbardziej rozpowszechniona:',
        'folk',
        'pop',
        'reggae',
        'pop',
        '2'
        );

    const quest_3 = new Questions(
        'Taneczna, łatwa w odbiorze muzyka:',
        'rap',
        'jazz',
        'disco',
        'disco',
        '3'
        );

    const quest_4 = new Questions(
        'Uroczysta pieśń, oficjalny narodowy symbol państwa:',
        'flag',
        'godło',
        'hymn',
        'hymn',
        '4'
    );

    function randomizeQuest(){
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
    }

    function showModal(){
        modal.classList.add("modal_active");
        modal_content.classList.add("modal__content_show");
        document.documentElement.style.overflow = "hidden";
        randomizeQuest();
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
        document.querySelector(".form__questions").remove();
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

    button_send = document.createElement("button");
    button_send.classList.add("button", "button_send");
    button_send.setAttribute("id", 'send');
    button_send.innerHTML = "Wyślij";
    form.append(button_send);

    button_send.addEventListener("click", (event)=>{
        const question_input = document.querySelectorAll(".form__wrapper-answers input");
        if (form_name.validity.valid && form_email.validity.valid && form_phone.validity.valid && form_text.validity.valid){
    
            question_input.forEach(i => {
                if (i.checked){
                    if (i.value == answer){

                        showThanksModal();
                        event.preventDefault();
                        form.reset();
                    }
                    else {
                        alert("wygląda na to, że jesteś botem :)");
                    }
                }
            });
        }            
    });


});