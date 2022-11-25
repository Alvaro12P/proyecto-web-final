document.addEventListener('DOMContentLoaded', () => {
  const extras = document.getElementsByClassName('extras')
  const noExtras = document.getElementsByClassName('no-extras')
  const extrasMenu = document.getElementById('header-menu-extras')
  const params = new URLSearchParams(window.location.search)

  if (window.innerWidth <= 768 && params.get('extras') === 'true') {
    extrasMenu.style.display = 'none'
  }

  if (params.get('extras') === 'true') {
    for (const extra of extras) extra.style.display = 'flex'
    for (const noExtra of noExtras) noExtra.style.display = 'none'
  }

  window.addEventListener('resize', (e) => {
    const w = e.target.innerWidth
    if (w <= 768 && params.get('extras') === 'true') {
      extrasMenu.style.display = 'none'
    } else if (params.get('extras') === 'true') {
      extrasMenu.style.display = 'flex'
    }
  })
})