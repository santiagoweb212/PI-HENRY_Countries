export const getPageNumber = (currentPage, totalPages) => {
  let pageNumbers = [];
  const MAX_PAGES = 5;
  const middlePage = Math.floor(MAX_PAGES / 2);

  if (totalPages <= MAX_PAGES) {
    pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);
    
  } else if (currentPage <= middlePage + 1) {
 
    pageNumbers = [...Array(MAX_PAGES - 1).keys()].map((num) => num + 1);
    pageNumbers.push("...");
    pageNumbers.push(totalPages);
  } else if (currentPage >= totalPages - middlePage) {
   
    pageNumbers.push(1);
    pageNumbers.push("...");
    pageNumbers = pageNumbers.concat(
      [...Array(MAX_PAGES - 1).keys()].map(
        (num) => num + totalPages - MAX_PAGES + 2
      )
    );
  } else {
   
    pageNumbers.push(1);
    pageNumbers.push("...");
    const startPage = currentPage - middlePage + 1;
    const endPage = currentPage + middlePage - 1;
   
    pageNumbers = pageNumbers.concat(
      [...Array(endPage - startPage + 1).keys()].map((num) => num + startPage)
    );
   
    pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
};
