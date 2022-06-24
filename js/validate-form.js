var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate(".contacts-form", {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.input.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    colorWrong: '#D11616',
    messages: {
        name: {
            required: 'Как вас зовут?',
        },
        tel: {
            required: 'Укажите ваш телефон'
        },
    },
});
