const openbtn = document.querySelector('#sidebar-open');
const sidebar = document.querySelector('#myLinks');

openbtn.addEventListener('click', function(){
  if(sidebar.style.display === 'block'){
    sidebar.style.display = 'none';
  }else{
    sidebar.style.display = 'block';
  }
});