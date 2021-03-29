export default (state = [], action) => {
  let idx;
  let upQuote;
  let downQuote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      upQuote = state.find(quote => quote.id === action.quoteId)
      upQuote.votes += 1;
      return [...state];

    case 'DOWNVOTE_QUOTE':
      downQuote = state.find(quote => quote.id === action.quoteId)
      if (downQuote.votes > 0) {
        downQuote.votes -= 1;
        return [...state]
      } else {
        return state;
      }

    default:
      return state;
  }
}
