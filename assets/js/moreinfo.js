document.addEventListener("DOMContentLoaded", () => {
    const moreInfoBtns = document.getElementsByClassName('more-info-btn')

    for(const btn of moreInfoBtns){
        btn.addEventListener('click', (e) => {
            const target = e.target
            const extraText = target.previousElementSibling
            const parent = target.parentElement
            const imgContainer = parent.previousElementSibling
            const img = imgContainer.firstElementChild
            Swal.fire({
              title: "NFT",
              html: `<img src=${img.currentSrc} style="width:100%" alt=""/><p>${extraText.innerText}</p>`
            });
        })
    }
})