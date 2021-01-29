export const paginatePlayerTableItems = (totalItems, startingIndex, displayAmount) => {
  return totalItems.slice(startingIndex, startingIndex + displayAmount)
}