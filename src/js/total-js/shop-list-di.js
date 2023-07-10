
const shopDiv = document.querySelector('.shop-background');


const infoBooks = [];
localStorage.setItem('infoBooks', JSON.stringify(infoBooks));




const test = {
  author:'dima',
  book_image:'bla-bla-bla.ua',
  title:'dream team',
  list_name:'fantastika',
  description:'there will be a lot of text for the book description field test…',
};

const куіе = {
  author:'dima',
  book_image:'bla-bla-bla.ua',
  title:'dream team',
  list_name:'fantastika',
  description:'there will be a lot of text for the book description field test…',
};






function saveLokalStor(info) {

   const infoBooksString = localStorage.getItem('infoBooks');
   const infoBooks = JSON.parse(infoBooksString) || [];

   infoBooks.push(info);

   localStorage.setItem('infoBooks', JSON.stringify(infoBooks));
    
}

saveLokalStor(test);
saveLokalStor(test);


// ховае блок через додавання класу
//  shopDiv.classList.add('displNan');




function drawingMarkings() {
  const infoBooksString = localStorage.getItem('infoBooks');
  const infoBooks = JSON.parse(infoBooksString);

  if (!infoBooks || infoBooks.length === 0) {
    console.log('Пусто');
  } else {
    console.log(infoBooks);
  }
}


drawingMarkings();