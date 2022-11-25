let myLibrary = [];

const form = document.querySelectorAll("input");
const bookGrid = document.querySelector("#book-grid");
const formOpen = document.querySelector("#book-form");
const sidebar = document.querySelector("#sidebar");

form[3].addEventListener("click", addBookToLibrary);
formOpen.addEventListener("click", function () {
  if (sidebar.className === "retracted")
  {
    sidebar.classList.remove("retracted")
  }
  else
  {
    sidebar.className = "retracted";
  }

})

const isReadDropdown = document.querySelector("select");

class Book {
  constructor(title, author, pages, isRead) 
{
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
}





function addBookToLibrary()
{
    if (form[0].value != '' && form[1].value != '' && form[2].value != '')
    {
      let isReadText;
      if (isReadDropdown.value === "no")
      {
       isRead = "Not read"
      }
      else {
       isRead = "Read"
      }
      myLibrary[myLibrary.length] = new Book(form[0].value, form[1].value, form[2].value, isRead);
    }
    displayBooks();
    for (i = 0; i < 3; i++)
    {
      form[i].value = '';
    }
  }

function displayBooks()
{
    //display the book in DOM grid with pertinent info
   let bookCard = document.createElement("div");
   bookCard.className = "book-card";
   let bookTitle = document.createElement("h4");
   bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
   let bookAuthor = document.createElement("h4");
   bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
   let bookPages = document.createElement("h4");
   bookPages.textContent = myLibrary[myLibrary.length - 1].pages; + " pages";

   let bookIsRead = document.createElement("button");
   bookIsRead.textContent = myLibrary[myLibrary.length - 1].isRead;

   if (bookIsRead.textContent === "Not read")
   {
      bookIsRead.className = "unread"  
   }
   else
   {
      bookIsRead.className = "read";
   }


   bookIsRead.addEventListener("click", function() {
    if (bookIsRead.textContent === "Not read")
    {
      bookIsRead.textContent = "Read";
      bookIsRead.className = "read";
    }
    else
    {
      bookIsRead.textContent = "Not read";
      bookIsRead.className = "unread" 
    }
   })


   let deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
   deleteBtn.className = "del-btn";
   deleteBtn.addEventListener("click", deleteBookFromLibrary)
   
   bookGrid.appendChild(bookCard);
   bookCard.appendChild(bookTitle);
   bookCard.appendChild(bookAuthor);
   bookCard.appendChild(bookPages);
   bookCard.appendChild(bookIsRead);
   bookCard.appendChild(deleteBtn);
}

function deleteBookFromLibrary(e)
{
  let cardToRemove = e.target.parentElement;
  cardToRemove.parentNode.removeChild(cardToRemove);
}
