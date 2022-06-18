const build = (payload) => {
  const { sortBy, sortDesc } = payload;
  let { page } = payload;

  let customSort = '';
  let { itemsPerPage } = payload;

  if (typeof sortBy !== 'undefined') {
    Object.keys(sortBy).forEach((key) => {
      customSort += `&sort=${sortBy[key]}${sortDesc[key] ? ',desc' : ',asc'}`;
    });
  }
  let itemsPerPageParam = `&size=${itemsPerPage}`;
  if (itemsPerPage === undefined) {
    itemsPerPageParam = '';
  }

  const url = `?page=${page > 0 ? page - 1 : page}${itemsPerPageParam}${
    customSort || ''
  }`;

  return url;
};

export default build;
