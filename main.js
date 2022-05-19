function putText() {
    var defaultName = document.getElementById('myname');
    var writeName = 'Hello! Daniel Kristiawan';
    defaultName.innerHTML = writeName;
}

function hideCookies() {
    const notif = document.getElementById('bg-notiftop')
    const btn = document.getElementById('btn-cookies')
    const banner = document.getElementById('bg-banner')
    btn.addEventListener('click', function handleClick() {
        notif.classList.add('btn-hide-cookies')
        banner.classList.add('bg-banner-top')
    })
}

function hideClose() {
    const contact = document.getElementById('bg-contact')
    const btnClose = document.getElementById('btn-close')
    btnClose.addEventListener('click', function handleClickClose() {
        contact.classList.add('bg-hide-contact')
    })
}