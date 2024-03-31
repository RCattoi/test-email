import USERID from './email-key.js';
const btn = document.querySelector('.enviarEmail');

emailjs.init(USERID); // Your user ID esconder na aplicação
const callback = (e, text) => {
  e.preventDefault();
  // const name = document.querySelector('.name').value;
  emailjs
    .send('service_dzoqy8o', 'template_2akyqfb', {
      to: 'rodrigoccattoi@gmail.com',
      subject: `Novo Contato`,
      name: 'Rodrigo',
      text: 'mensagem de teste',
      reply_to: 'felipehgn@gmail.com',
    })
    .then(function (response) {
      console.log('Email sent successfully:', response);
    })
    .catch(function (error) {
      console.error('Email sending failed:', error);
    });
};
btn.addEventListener('click', callback);
