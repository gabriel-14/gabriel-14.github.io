const showDropdown = () => {
    console.log('clicked.')
    document.getElementById('dropdown-menu').classList.toggle('show')
}

const toggleArticle = e => {
    console.log(e)
    e.parentElement.classList.toggle('shown-article')
    console.log('Toggled shown-article.')
    e.parentElement.classList.toggle('article-snippet')
    console.log('Toggled article-snippet.')
}