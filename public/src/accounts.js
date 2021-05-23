function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((person1, person2) =>
    person1.name.last > person2.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  count = 0;
  for (let book in books) {
    const thisBook = books[book];
    for (let borrowNum in thisBook.borrows) {
      if (thisBook.borrows[borrowNum].id == account.id) {
        count += 1;
      }
    }
  }
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  //search books index 0 borrow for account id
  const booksBorrowed = books.filter(
    (book) => book.borrows[0].id == account.id
  );
  for (let book in booksBorrowed) {
    booksBorrowed[book].author = authors.find(
      (author) => booksBorrowed[book].authorId === author.id
    );
  }
  return booksBorrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
