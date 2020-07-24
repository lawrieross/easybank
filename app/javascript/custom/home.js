var hamburger = document.getElementById('hamburger-icon')
var close = document.getElementById('close-icon')
var mask = document.querySelector('.b-mask')
var menu = document.querySelector('.b-nav__menu')

hamburger.addEventListener('click', function() {
  hamburger.style.display = 'none'
  menu.style.display = 'block'
  mask.style.display = 'block'
  close.style.display = 'block'
  document.body.style.overflowY = 'hidden'
})

close.addEventListener('click', function() {
  hamburger.style.display = 'block'
  menu.style.display = 'none'
  mask.style.display = 'none'
  close.style.display = 'none'
  document.body.style.overflowY = 'unset'
})
