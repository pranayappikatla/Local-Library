function findbyID(array, id) {
  array.find((eachEntry) => eachEntry.id === id);
}

function findAccountById(accounts, id) {
  return findbyID(accounts, id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((person1, person2) =>
    person1.name.last > person2.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  count = 0;
  for (let book in books) {
    const borrows = books[book].borrows;
    for (let borrowNum in borrows) {
      if (borrows[borrowNum].id == account.id) {
        count += 1;
      }
    }
  }
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  //search books index 0 borrow for account id
  const booksBorrowed = books.filter((book) =>
    book.borrows.find((borrow) => borrow.id === account.id && !borrow.returned)
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
