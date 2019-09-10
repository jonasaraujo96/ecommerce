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
        link: 'products.html'
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
      {
        icon: 'users-cog',
        name: 'Painel',
        link: '#'
      },
    ]
  };

  const theCompiledHtml = theTemplate(context);

  $(document.body).append(theCompiledHtml);
});


$(function () {
  const theTemplateScript = $("#panel-template").html();
  const theTemplate = Handlebars.compile(theTemplateScript);
  const context = { 
    buttons: [
      {
        icon: 'tshirt',
        name: 'Cadastrar produto',
        link: '#'
      },
      {
        icon: 'user',
        name: 'Cadastrar cliente',
        link: '#'
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