$(function () {
  const theTemplateScript = $("#navbar-template").html();

  const theTemplate = Handlebars.compile(theTemplateScript);

  const context = {
    buttons: [
      {
        icon: 'home',
        name: 'Página inicial',
        link: ''
      },
      {
        icon: 'tshirt',
        name: 'Produtos',
        link: ''
      },
      {
        icon: 'phone',
        name: 'Contato',
        link: ''
      },
      {
        icon: 'info-circle',
        name: 'Sobre',
        link: ''
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
        name: 'Roupa 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Roupa 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Roupa 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Roupa 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Roupa 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Roupa 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Roupa 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Roupa 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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