(function(){
  let savedTheme = localStorage.getItem('siteTheme');

  if(!savedTheme){
    savedTheme = 'dark';
    localStorage.setItem('siteTheme', savedTheme);
  }

  document.documentElement.classList.add(savedTheme + '-mode');
})();