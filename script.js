const btn = document.querySelector('.enviarEmail');

const callback = async (e, text) => {
  e.preventDefault();

  const fetchEmail = await fetch(
    'https://email-transportadora.onrender.com/api/data',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'rodrigoccattoi@gmail.com',
        subject: `Novo Contato`,
        name: 'Rodrigo',
        message: 'mensagem de teste',
        reply_to: 'felipehgn@gmail.com',
      }),
    }
  );

  const json = await fetchEmail.json();
  console.log(json);
  console.log(json);

  // const name = document.querySelector('.name').value;
  // emailjs
  //   .send('service_dzoqy8o', 'template_2akyqfb', {
  //     to: 'rodrigoccattoi@gmail.com',
  //     subject: `Novo Contato`,
  //     name: 'Rodrigo',
  //     message: 'mensagem de teste',
  //     reply_to: 'felipehgn@gmail.com',
  //   })
  //   .then(function (response) {
  //     console.log('Email sent successfully:', response);
  //   })
  //   .catch(function (error) {
  //     console.error('Email sending failed:', error);
  //   });
};

btn.addEventListener('click', callback);
