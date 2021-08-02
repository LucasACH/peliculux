function formatMoviesDate(releaseDate) {
  try {
    if (releaseDate !== undefined) {
      const date = new Date(releaseDate);

      let year = new Intl.DateTimeFormat("en", {
        year: "numeric",
      }).format(date);
      let month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
      let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

      return `${month} ${day}, ${year}`;
    } else {
      return "";
    }
  } catch {
    return "";
  }
}

export default formatMoviesDate;
