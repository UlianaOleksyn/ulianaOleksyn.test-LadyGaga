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
        counter = 0,
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
            answer =`${this.answer_true}`;
            form_text.after(fieldset);
        }
    }

    const quest_1 = new Questions(
        'Beethovena, Mozarta, Bacha i Chopina ????czy myzyka:',
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
        'Taneczna, ??atwa w odbiorze muzyka:',
        'rap',
        'jazz',
        'disco',
        'disco',
        '3'
        );

    const quest_4 = new Questions(
        'Uroczysta piosenka, oficjalny narodowy symbol pa??stwa:',
        'flag',
        'god??o',
        'hymn',
        'hymn',
        '4'
    );

    const quest_5 = new Questions(
        'Kt??ra piosenka nie nale??y do Ledi Gagy:',
        'despacito',
        'alejandro',
        'telephone',
        'despacito',
        '5'
    );

    const quest_6 = new Questions(
        'Kt??ra piosenka nale??y do Ledi Gagy:',
        'irreplaceable',
        'paparazzi',
        'life',
        'paparazzi',
        '6'
    );

    function randomizeQuest(){
        if (document.querySelector(".form__questions")){
            document.querySelector(".form__questions").remove();
            answer = "";
        }
        counter = 0;
        random = Math.floor(Math.random() * 6) + 1;
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
            case 4:
                quest_4.writeContent();
                break;
            case 5:
                quest_5.writeContent();
                break;
            default:
                quest_6.writeContent();
                break;
        }
    }

    function showModal(){
        randomizeQuest();
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

    

    button_send = document.createElement("button");
    button_send.classList.add("button", "button_send");
    button_send.setAttribute("id", 'send');
    button_send.innerHTML = "Wy??lij";
    form.append(button_send);

    button_send.addEventListener("click", (event)=>{
        const question_input = document.querySelectorAll(".form__wrapper-answers input");
        
        if (form_name.validity.valid && form_email.validity.valid && form_phone.validity.valid && form_text.validity.valid){
    
            question_input.forEach(i => {
             
                if (i.checked){
                    counter ++;
                    if (i.value == answer){
                        showThanksModal();
                        event.preventDefault();
                        form.reset();
                    }
                    else {
                        alert('Wygl??da na to, ??e jeste?? botem :) \n Spr??buj jeszcze raz :)');
                        event.preventDefault();
                        randomizeQuest();
                    }
                }
            });
        }            
    });

});