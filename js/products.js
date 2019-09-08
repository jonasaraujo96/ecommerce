$(function () {
  const theTemplateScript = $("#navbar-template").html();

  const theTemplate = Handlebars.compile(theTemplateScript);

  const context = {
    buttons: [
      {
        icon: 'home',
        name: 'Página inicial',
        link: '../index.html'
      },
      {
        icon: 'tshirt',
        name: 'Produtos',
        link: '#'
      },
      {
        icon: 'phone',
        name: 'Contato',
        link: 'contact.html'
      },
      {
        icon: 'info-circle',
        name: 'Sobre',
        link: 'about.html'
      },
    ]
  };

  const theCompiledHtml = theTemplate(context);

  $(document.body).append(theCompiledHtml);
});


$(function () {
  const theTemplateScript = $("#banner-template").html();
  const theTemplate = Handlebars.compile(theTemplateScript);
  const context = {};
  const theCompiledHtml = theTemplate(context);
  $(document.body).append(theCompiledHtml);
});

$(function () {
  const theTemplateScript = $("#grid-template").html();
  const theTemplate = Handlebars.compile(theTemplateScript);
  const context = {
    itens: [
      {
        name: 'Saia 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 50,00'
      },
      {
        name: 'Saia 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 30,00'
      },
      {
        name: 'Saia 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 25,90'
      },
      {
        name: 'Saia 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 19,99'
      },
      {
        name: 'Saia 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 63,00'
      },
      {
        name: 'Saia 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 19,90'
      },
      {
        name: 'Saia 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 21,90'
      },
      {
        name: 'Saia 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'R$ 19,90'
      },
    ]
  };
  const theCompiledHtml = theTemplate(context);
  $(document.body).append(theCompiledHtml);
});

$(function () {
  const theTemplateScript = $("#footer-template").html();

  const theTemplate = Handlebars.compile(theTemplateScript);

  const context = {
    socialNetwork: [
      {
        name: 'Facebook: ',
        text: '/ateliebalaustre',
        icon: 'facebook',
      },
      {
        name: 'Instagram: ',
        text: '@ateliebalaustre',
        icon: 'instagram'
      },
      {
        name: 'Whatsapp: ',
        text: '(16) 9999-9999',
        icon: 'whatsapp'
      },
    ],

    information: [
      {
        name: 'Endereço: ',
        text: 'Rua tal, 999',
        icon: 'map-marked-alt',
      },
      {
        name: 'E-mail: ',
        text: 'contato@ateliebalaustre.com.br',
        icon: 'at'
      },
    ]
  };

  const theCompiledHtml = theTemplate(context);

  $(document.body).append(theCompiledHtml);
});


function openMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}