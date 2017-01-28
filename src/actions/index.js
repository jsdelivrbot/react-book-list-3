export function selectBook(book) {
  // selectBook is an Action Creator
  // it needs to return an Action (an obj with a type property)
  // type is always an uppercase string
  // payload is an optional prop
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}