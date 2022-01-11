'use strict'

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
    }


    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let index = 0; index<formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_name')){
                if(nameTest(input)){
                    formAddError(input);
                    error++;
                }

            } 

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }

            }
            if(input.classList.contains('_phone')){
                if(phoneTest(input)){
                    formAddError(input);
                    error++;
                }

            } 
            else {
                if(input.value===''){
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }


    //функция теста имя
    function nameTest(input){
        return !/^[a-zA-Zа-яА-Я' ']{3,15}$/.test(input.value);
    }
    //функция теста емаил
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,8})+$/.test(input.value);
    }
    //функция теста телефона
    function phoneTest(input){
    return !/^(1\s|1|)?((\(\d{1,3}\))|\d{1,3})(\-|\s)?(\d{1,3})(\-|\s)?(\d{3})$/.test(input.value)
    }
});