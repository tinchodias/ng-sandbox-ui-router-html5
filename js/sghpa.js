// Inspired in https://github.com/csuwildcat/sghpa/blob/master/index.html
(function(){
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();