window.onGatsbyRouteUpdate = function() {
// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.querySelectorAll('.menu-toggle');

for (var i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener('click', function(e){
    document.body.classList.toggle('menu--opened');
    e.preventDefault();
  },false);
}

document.body.classList.remove('menu--opened');

window.addEventListener('resize', function () {
  if (menuToggle[0].offsetParent === null) {
    document.body.classList.remove('menu--opened');
  }
}, true);

// Accordion
var faqAccordions = document.querySelectorAll('.handorgel');
Array.from(faqAccordions).forEach((faqAccordion) => {
  var accordion = new handorgel(faqAccordion, {
    multiSelectable: true
  });
});


if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp",
	  button: "#enviarMensagem",
	  erro: "<div id='form-erro' class='card card-feedback-form'><img src='images/wrong.svg' alt='Ícone Wrong - designed by Pixel Perfect/Flaticon' width='100' height='100'><h3>Erro ao enviar mensagem</h3><p>Por favor, tente enviar sua mensagem para o e-mail atendimento@clubebrasilseguros.com.</p></div>",
	  sucesso: "<div id='form-sucesso' class='card card-feedback-form'><img src='images/check.svg' alt='Ícone Check - designed by Pixel Perfect/Flaticon' width='100' height='100'><h3>Formulário enviado com sucesso</h3><p>Em breve entraremos em contato.</p></div>",
	});
}
};