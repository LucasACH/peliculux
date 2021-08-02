function isLastRow(index, totalMovies, columnCount) {
  if (
    totalMovies % columnCount === 0 &&
    index > totalMovies - (columnCount + 1)
  )
    return false;
  if (
    totalMovies % columnCount === columnCount - 1 &&
    index > totalMovies - columnCount
  )
    return false;
  if (
    totalMovies % columnCount === columnCount - 2 &&
    index > totalMovies - (columnCount - 1)
  )
    return false;
  if (
    totalMovies % columnCount === columnCount - 3 &&
    index > totalMovies - (columnCount - 2)
  )
    return false;
  if (
    totalMovies % columnCount === columnCount - 4 &&
    index > totalMovies - (columnCount - 3)
  )
    return false;
  if (
    totalMovies % columnCount === columnCount - 5 &&
    index > totalMovies - (columnCount - 4)
  )
    return false;

  return true;
}

export default isLastRow;
