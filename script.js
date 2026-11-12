// O formulário de contato está temporariamente oculto no HTML.
// Este script voltará a funcionar automaticamente quando você descomentar a seção.

const form = document.querySelector('form');
if(form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! A produção retornará em breve.');
  });
}