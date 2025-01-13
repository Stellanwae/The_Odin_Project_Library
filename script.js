const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")
const btn = document.getElementById("btn")


let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary(){
    let titleValue = title.value
    let authorValue = author.value
    let pagesValue = pages.value
    let readValue = read.value
    let book = new Book(titleValue, authorValue, pagesValue, readValue)
    myLibrary.push(book)
    console.log(myLibrary)

    title.value = ""
    author.value = ""
    pages.value = ""
    read.value = ""
}

function createNewElement(title, author, pages, read){
    myLibrary.forEach(book=>{
        
    })
}

btn.addEventListener("click", function(){addBookToLibrary()})

