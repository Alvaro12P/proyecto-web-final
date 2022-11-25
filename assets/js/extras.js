document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementsByClassName('buttons')
    const contentDate = document.getElementById('date')
    const contentDisplay = document.getElementById('display')
    const contentInfo = document.getElementById('info')
    const contentInfoContainer = document.getElementById('content-info')
    const contentNfts = document.getElementById('nfts')
    const infoSelect = document.querySelector('#info > select')
  
    const info = {
      nft1: {
        title: 'Título NFT 1',
        description: 'Descripción del NFT 1'
      },
      nft2: {
        title: 'Título NFT 2',
        description: 'Descripción del NFT 2'
      },
      nft3: {
        title: 'Título NFT 3',
        description: 'Descripción del NFT 3'
      }
    }
  
    infoSelect.addEventListener('change', addInfo)
  
    toggleDisplay('date')
    addDate()
  
    for (const button of buttons) {
      button.addEventListener('click', (e) => {
        const btn = e.target
        const id = btn.id
        const menu = id.split('-')[0]
  
        for (const b of buttons) b.disabled = b.id === id
        toggleDisplay(menu)
        console.log(menu)
        switch (menu) {
          case 'info':
            addInfo()
            break
          case 'date':
            addDate()
            break
          case 'display':
            addDisplaySize()
            break
  
          case 'nfts':
            addNfts()
            break
        }
      })
    }
  
    function toggleDisplay (menu) {
      contentInfo.style.display = menu === 'info' ? 'flex' : 'none'
      contentDisplay.style.display = menu === 'display' ? 'flex' : 'none'
      contentDate.style.display = menu === 'date' ? 'flex' : 'none'
      contentNfts.style.display = menu === 'nfts' ? 'flex' : 'none'
    }
  
    function addDate () {
      contentDate.innerHTML = ''
      const h1 = document.createElement('h1')
      h1.innerText = new Date().toLocaleString()
      contentDate.appendChild(h1)
    }
  
    function addDisplaySize () {
      contentDisplay.innerHTML = ''
      const h1 = document.createElement('h1')
      h1.innerText = `${window.innerWidth}px x ${window.innerHeight}px`
      contentDisplay.appendChild(h1)
    }
  
    function addInfo () {
      contentInfoContainer.innerHTML = ''
      const h1 = document.createElement('h1')
      h1.innerText = info[infoSelect.value].title
      const p = document.createElement('p')
      p.innerText = info[infoSelect.value].description
      contentInfoContainer.appendChild(h1)
      contentInfoContainer.appendChild(p)
    }
  
    function addNfts () {
      contentNfts.innerHTML = ''
      let userInput = ''
      const nfts = []
      while (userInput.toLowerCase() !== 'fin') {
        userInput = window.prompt('Introduzca el nombre de un NFT que conozcas. Fin para finalizar').trim()
        if (userInput.toLowerCase() !== 'fin') nfts.push(userInput)
      }
      const text = nfts.join(', ')
      const h1 = document.createElement('h1')
      h1.innerText = 'El usuario ha introducido:'
      const p = document.createElement('p')
      p.innerText = text
      const p2 = document.createElement('p')
      p2.innerText = `Número de carácteres: ${text.length}`
      const p3 = document.createElement('p')
      p3.innerText = `Número de palabras: ${nfts.length}`
  
      contentNfts.appendChild(h1)
      contentNfts.appendChild(p)
      contentNfts.appendChild(p2)
      contentNfts.appendChild(p3)
    }
  })