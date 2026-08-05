export function formatRelativeDate(date: string): string {
  const now = new Date();
  const updated = new Date(date);

  const diffMs = now.getTime() - updated.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) {
    return "today";
  }

  if (diffDays === 1) {
    return "1 day ago";
  }

  if (diffDays < 30) {
    return `${diffDays} days ago`;
  }

  const months = Math.floor(diffDays / 30);

  if (months === 1) {
    return "1 month ago";
  }

  if (months < 12) {
    return `${months} months ago`;
  }

  const years = Math.floor(months / 12);

  if (years === 1) {
    return "1 year ago";
  }

  return `${years} years ago`;
}