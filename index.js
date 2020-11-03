
// Toggle the display of our dropdown links
const burgerDropdown = document.querySelector('#burger')
const navbarMenu = document.querySelector('#nav-links')
const navbarItems = document.querySelectorAll('.navbar-item')

burgerDropdown.addEventListener('click', (e) => {
    navbarMenu.classList.toggle('is-active')

    navbarItems.forEach(navbarItem => {
        navbarItem.classList.toggle('has-text-black')
    })
    
    // The page automatically refreshes once the hamburger menu was clicked
    e.preventDefault()
})