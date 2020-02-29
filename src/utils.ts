import { User } from "./redux/types";

/**
 * Returns window object. Wrapped for easier testing
 */
export function win() {
  return window;
}

/**
 * Returns full name of the user
 */
export function getUserFullName(user: User) {
  return `${user.name.title} ${user.name.first} ${user.name.last}`;
}

/**
 * Returns filtered users
 * @param users - user list
 * @param text - filter text
 */
export function filterUsers(users: User[], text: string) {
  if (text.length === 0) {
    return users;
  }

  const lowerText = text.toLowerCase();

  return users.filter(
    u => `${u.name.first} ${u.name.last}`.toLowerCase().indexOf(lowerText) > -1
  );
}

/**
 * Returns if element is visible in view port by checking it vertically
 * @param el - element to check
 * @param threshold - pixel count of the threshold
 */
export function elementInViewport(el: HTMLElement, threshold = 0) {
  const rect = el.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    win().innerHeight
  );

  return rect.top - viewHeight - threshold < 0;
}
