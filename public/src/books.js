function findbyID(array, id) {
  array.find((eachEntry) => eachEntry.id === id);
}

function findAuthorById(authors, id) {
  return findbyID(authors, id);
}

function findBookById(books, id) {
  return findbyID(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const booksPartitioned = [];
  booksPartitioned.push(books.filter((book) => !book.borrows[0].returned));
  booksPartitioned.push(books.filter((book) => book.borrows[0].returned));
  return booksPartitioned;
}

function getBorrowersForBook(book, accounts) {
  const borrowersData = book.borrows;
  for (let eachBorrow in borrowersData) {
    const person = accounts.find(
      (account) => account.id === borrowersData[eachBorrow].id
    );
    console.log(person);
    Object.assign(borrowersData[eachBorrow], person);
  }
  const finalArray = [];
  borrowersData.forEach((entry) => finalArray.push(entry));
  finalArray.length = 10;
  return finalArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
