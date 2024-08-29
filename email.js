const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_f99pqmn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });
    function muestra_oculta(id) {
        let div = document.getElementById(id);
        if (div.style.display == "none"){
            div.style.display = "flex";
        }
        else {
            div.style.display = "none";
        }  
    }