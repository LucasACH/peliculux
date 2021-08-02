function spareSpace(moviesLength, columnCount) {
  if (moviesLength % columnCount === 0) return 0;
  return columnCount - (moviesLength % columnCount) || 0;
}

export default spareSpace;
