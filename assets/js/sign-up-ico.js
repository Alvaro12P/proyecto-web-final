document.addEventListener("DOMContentLoaded", () => {
  const passwordsToggles = document.querySelectorAll('.password-eye')
  console.log(passwordsToggles)
  function togglePassword(e) {
    const eye = e.target
    const state = eye.className.includes('fa-eye-slash')
    const inp = e.target.parentElement.previousElementSibling
    eye.className = `fa-solid ${state ? 'fa-eye' : 'fa-eye-slash'}`
    inp.setAttribute('type', state ? 'password' : 'text')
  }

  for (const p of passwordsToggles) p.addEventListener('click', togglePassword)
})