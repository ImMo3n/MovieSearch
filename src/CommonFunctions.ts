import { ImageWidths, imgBaseURL } from "./CommonVariables";

export const getImageURL = (imgPath: string | null, width?: ImageWidths) => {
  if (!imgPath) return;
  if (!width) width = ImageWidths.L;

  const posterURL = new URL(imgBaseURL);
  posterURL.pathname = `t/p/${width}/${imgPath}`;
  return posterURL.toString();
};

export const getBackdropURL = (imgPath: string | null) => {
  if (!imgPath) return;
  const width = ImageWidths.MAX;

  const backdropURL = new URL(imgBaseURL);
  backdropURL.pathname = `t/p/${width}${imgPath}`;
  return backdropURL.toString();
};

export function prefersDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

// export function getPreferredTheme() {
//   if (prefersDarkMode() === true) return Theme.dark;
//   return Theme.light;
// }

export function getTimeAgo(date: Date) {
  const currentDate = new Date();
  const inputDate = new Date(date);

  // Calculate the difference in milliseconds
  const timeDiff = currentDate.getTime() - inputDate.getTime();

  // Convert milliseconds to days, months, and years
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(daysDiff / 365);

  if (isNaN(daysDiff) || isNaN(monthsDiff) || isNaN(yearsDiff)) return "";

  if (daysDiff < 0) {
    return `To be released in ${daysDiff * -1} days`;
  }
  if (daysDiff === 0) {
    return "Released Today";
  } else if (daysDiff < 30) {
    return `Released ${daysDiff} day${daysDiff > 1 ? "s" : ""} ago`;
  } else if (yearsDiff > 5) {
    return `Released ${yearsDiff} year${yearsDiff > 1 ? "s" : ""} ago`;
  } else if (yearsDiff >= 1) {
    const remainingMonths = monthsDiff - yearsDiff * 12;
    return `Released ${yearsDiff} year${
      yearsDiff > 1 ? "s" : ""
    } ${remainingMonths} month${remainingMonths > 1 ? "s" : ""} ago`;
  } else {
    return `Released ${monthsDiff} month${monthsDiff > 1 ? "s" : ""} ago`;
  }
}

export function calculateAge(dateOfBirth: Date) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
