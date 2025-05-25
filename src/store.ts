export const seenTitles = new Set<string>();

export const isNewAnnouncement = (title: string): boolean => {
  return !seenTitles.has(title);
};

export const addAnnouncementTitle = (title: string): void => {
  seenTitles.add(title);
};
