/* ============================================================
   Utility Functions
   ============================================================ */

/**
 * Checks if Noosh Grill is currently open.
 * Hours: Every day 11:00 AM – 10:00 PM (660–1320 minutes from midnight)
 */
export function getOpenStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();

  const OPEN_TIME = 660; // 11:00 AM
  const CLOSE_TIME = 1320; // 10:00 PM

  const isOpen = minutesSinceMidnight >= OPEN_TIME && minutesSinceMidnight < CLOSE_TIME;

  return {
    isOpen,
    label: isOpen ? 'Open Now' : 'Closed',
  };
}

/**
 * Constructs the image path for a menu item based on its name.
 * Convention: lowercase, spaces → hyphens, .jpg extension
 * e.g., "Chicken Schnitzel" → "/images/chicken-schnitzel.jpg"
 */
export function getMenuItemImagePath(itemName: string): string {
  const filename = itemName.toLowerCase().replace(/ /g, '-');
  return `/images/${filename}.jpg`;
}

/**
 * Formats a price for display.
 * Matches live site format: 8, 11, 8.5, 11.5, 8.75 (no trailing zeros)
 */
export function formatPrice(price: number): string {
  return price.toString();
}
