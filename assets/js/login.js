document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search)
    const email = params.get('email') || 'alvaro12pm@gmail.com'
    const pass = params.get('password') || '1@2B3c4D5g'
    const submitBtn = document.getElementById('submit-btn')
    const form = document.forms['log-in-form']
  
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const currentEmail = formData.get('email')
      const currentPass = formData.get('password')
  
      if (currentPass === pass && currentEmail === email) {
        window.location.href = '/index.html?extras=true'
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Los datos introducidos no son correctos',
          theme: 'Dark'
        })
      }
    })
  })