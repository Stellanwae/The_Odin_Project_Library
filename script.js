const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")
const btn = document.getElementById("btn")
const addBtn = document.querySelector(".add-btn")
const submitBtn = document.querySelector("#submit-btn")
const modal = document.getElementById('modal')
const main = document.querySelector("main")

let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

addBtn.addEventListener('click', ()=>{
    openModal()
})
submitBtn.addEventListener('click', ()=>{
    closeModal()
})

function openModal(){
    modal.showModal()
}
function closeModal(){
    modal.close()
}

function addBookToLibrary(){
    let titleValue = title.value
    let authorValue = author.value
    let pagesValue = pages.value
    let readValue = read.checked ? "Yes" : "No"
    
    if(titleValue == "" && authorValue == "" && pagesValue == ""){
        alert("Please fill in the form")
    }

    let book = new Book(titleValue, authorValue, pagesValue, readValue)
    myLibrary.push(book)
    
    if(myLibrary.length > 0){
        createNewElement()
    }

    title.value = ""
    author.value = ""
    pages.value = ""
    read.checked = false
}

const newDiv = document.createElement("div")
newDiv.classList.add('books-div')
main.appendChild(newDiv)

function createNewElement(){
    newDiv.innerHTML =  ""

    newDiv.innerHTML =`
    <h2 class="books">Books</h2>
    <table>

        <thead>
            <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read Status</th>
                <th>Remove book</th>
            </tr>
        </thead>
        <tbody id="table-body"></tbody>
    </table>
    `

    const tableBody = document.getElementById("table-body")
    myLibrary.forEach((book, index)=>{
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class="read-button ${book.read === "Yes" ? "green": "red"}" id="book${index+1}">${book.read}</button></td>
        <td><button class="remove-button">Remove</button>
        `
        tableBody.appendChild(row)   
        const readButton = row.querySelector(".read-button")
        
        readButton.addEventListener("click", ()=>{toggleRead(readButton)})

        const removeButton = row.querySelector(".remove-button")
        removeButton.addEventListener("click", ()=>{
            row.remove()
            myLibrary.splice(index, 1)
        })
    })    
}

function toggleRead(btn){
        if (btn.textContent == "Yes"){
            btn.textContent = "No"
            btn.classList.add("red")
            btn.classList.remove("green")
        }else{
            btn.textContent = "Yes"
            btn.classList.add("green")
            btn.classList.remove("red")
        }    
}

submitBtn.addEventListener("click", function(){addBookToLibrary()})

