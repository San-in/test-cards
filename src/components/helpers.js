export const createNextUsers = (users, displayedUsers, perPage) =>
  users.slice(displayedUsers.length, displayedUsers.length + perPage);
