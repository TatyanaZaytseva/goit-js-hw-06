const categoryEl = document.querySelectorAll('.item')

console.log(`Number of categories:`, categoryEl.length)

const getContent = categoryEl.forEach((element) => {
    const titleEl = element.firstElementChild
    const titleContent = titleEl.textContent
        console.log(`Category:`, titleContent)
    const amountItem = element.querySelectorAll('li').length
    console.log(`Elements:`,amountItem)
})

