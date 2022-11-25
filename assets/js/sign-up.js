document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.getElementsByClassName('data-input')
    const botonSubmit = document.getElementById('submit-btn')
    const signUpForm = document.forms['sign-up']
  
    const nombreRegex = /^[a-zA-ZÀ-ÿ]{1,}$/
    const apellidosRegex = /^[a-zA-ZÀ-ÿ\s]{1,}$/
    const emailRegex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/
    const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,}$/
  
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keyup', (e) => {
        const input = e.target
        const valor = input.value
        const nombre = input.name
  
        switch (nombre) {
          case 'nombre': {
            if (valor === '') input.style.backgroundColor = 'white'
            else if (nombreRegex.test(valor)) { input.style.backgroundColor = 'rgb(150, 255, 150)' } else input.style.backgroundColor = 'rgb(255, 150, 150)'
            break
          }
          case 'apellidos': {
            if (valor === '') input.style.backgroundColor = 'white'
            else if (apellidosRegex.test(valor)) { input.style.backgroundColor = 'rgb(150, 255, 150)' } else input.style.backgroundColor = 'rgb(255, 150, 150)'
            break
          }
          case 'email': {
            if (valor === '') input.style.backgroundColor = 'white'
            else if (emailRegex.test(valor)) { input.style.backgroundColor = 'rgb(150, 255, 150)' } else input.style.backgroundColor = 'rgb(255, 150, 150)'
            break
          }
          case 'password': {
            if (valor === '') input.style.backgroundColor = 'white'
            else if (contraseñaRegex.test(valor)) { input.style.backgroundColor = 'rgb(150, 255, 150)' } else input.style.backgroundColor = 'rgb(255, 150, 150)'
            const passCheck = document.getElementById('pass-check')
            if (passCheck.value === '' && passCheck.value === valor) { passCheck.style.backgroundColor = 'white' } else if (valor === passCheck.value) { passCheck.style.backgroundColor = 'rgb(150, 255, 150)' } else passCheck.style.backgroundColor = 'rgb(255, 150, 150)'
            break
          }
          case 'password-check': {
            const pass = document.getElementById('pass').value
            if (valor === pass) input.style.backgroundColor = 'rgb(150, 255, 150)'
            else input.style.backgroundColor = 'rgb(255, 150, 150)'
            break
          }
        }
      })
    }
  
    botonSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      const formData = new FormData(signUpForm)
      const nombre = formData.get('nombre')
      const apellidos = formData.get('apellidos')
      const email = formData.get('email')
      const pass = formData.get('password')
      const passCheck = formData.get('password-check')
  
      if (!nombreRegex.test(nombre)) return
      if (!apellidosRegex.test(apellidos)) return
      if (!emailRegex.test(email)) return
      if (!contraseñaRegex.test(pass)) return
      if (pass !== passCheck) return
  
      window.location.href = `log-in.html?email=${email}&password=${pass}`
    })
  })