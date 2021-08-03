function formatReleaseDate(releaseDate) {
  let year = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(releaseDate);
  let month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
    releaseDate
  );
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    releaseDate
  );

  return `${year}-${month}-${day}`;
}

export default formatReleaseDate;
