const form = document.querySelector('.contact-form');

if(form){

  form.addEventListener('submit', function(e){

    e.preventDefault();

    alert('Message Sent Successfully!');

    form.reset();

  });

}