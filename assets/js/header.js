document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
  const mobileMenu = document.querySelector('#mobile-menu')
  const mobileCloseMenuBtn = document.querySelector('#mobile-menu-close-btn')

  let menuState = false

  function toggleMenu() {
    mobileMenuBtn.style.display = menuState ? 'flex' : 'none'
    mobileCloseMenuBtn.style.display = menuState ? 'none' : 'flex'
    mobileMenu.animate([{ width: menuState ? '150px' : '0' }, { width: menuState ? '0' : '150px' }], { duration: 200, iterations: 1 })
    mobileMenu.style.width = menuState ? '0' : '150px'
    menuState = !menuState
  }

  mobileMenuBtn.addEventListener('click', toggleMenu)
  mobileCloseMenuBtn.addEventListener('click', toggleMenu)

  window.addEventListener('resize', (e) => {
    const w = e.target.innerWidth
    if (w >= 768) {
      mobileMenuBtn.style.display = 'none'
      mobileCloseMenuBtn.style.display = 'none'
    } else {
      mobileMenuBtn.style.display = menuState ? 'none' : 'flex'
      mobileCloseMenuBtn.style.display = menuState ? 'flex' : 'none'
    }
  })
})