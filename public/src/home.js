function getTotalBooksCount(books) {
  return books.length;
}
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const counter = books.reduce((count, book) => {
    if (!book.borrows[0].returned) {
      count += 1;
    }
    return count;
  }, 0);
  return counter;
}

function getMostCommonGenres(books) {
  const BookGenresCount = books.map((book) => book.genre);
  let uniqueGenres = [];
  BookGenresCount.forEach((genreName) => {
    if (!uniqueGenres.includes(genreName)) {
      uniqueGenres.push(genreName);
    }
  });
  const finalArray = [];
  uniqueGenres.forEach((genreName) => {
    //filter through bookGenreCounts and find amount of repeats
    const genreCounter = BookGenresCount.filter((genre) => genre === genreName);
    let count = genreCounter.length;
    finalArray.push({ name: genreName, count: count });
    //push amount of name: amount of repeats as an object into finalArray
    //return final array
  });

  const finalArraySorted = finalArray.sort((genre1, genre2) =>
    genre1.count < genre2.count ? 1 : -1
  );
  finalArraySorted.length = 5;
  console.log(finalArraySorted);
  return finalArraySorted;
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  console.log(books);
  const library = books;
  library.forEach((book) => {
    popularBooks.push({ name: book.title, count: book.borrows.length });
  });
  console.log(popularBooks);
  popularBooks = popularBooks.sort((book1, book2) =>
    book1.count < book2.count ? 1 : -1
  );
  popularBooks.length = 5;
  console.log(popularBooks);
  return popularBooks;
}

function getMostPopularAuthors(books, authors) {
  //looks through authors and return list of authors no duplicated
  const uniqueAuthor = authors.filter(
    (author, index, array) =>
      array.findIndex((name) => name.id === author.id) === index
  );
  //for each author, go through books and count#of borrows in each book
  const finalArray = [];
  uniqueAuthor.forEach((author) => {
    let count = 0;
    for (let book in books) {
      if (books[book].authorId === author.id) {
        count += books[book].borrows.length;
      }
    }
    finalArray.push({
      name: `${author.name.first} ${author.name.last}`,
      count: count,
    });
  });
  finalArray.sort((author1, author2) =>
    author1.count < author2.count ? 1 : -1
  );
  finalArray.length = 5;
  return finalArray;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
