import { test, expect } from "@playwright/test";

test.describe("RU Sugaring homepage", () => {
  test("renders the core experience without console errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", message => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Smooth skin.");
    await expect(page.locator("#services")).toBeVisible();
    await expect(page.locator(".gallery-section")).toBeVisible();
    await expect(page.locator("#faq")).toBeVisible();
    await expect(page.locator(".hero-photo")).toHaveAttribute("alt", /RU Sugaring Edmonton studio/i);
    await expect(page.getByRole("button", { name: /Book your Brazilian/i }).first()).toBeVisible();
    expect(consoleErrors).toEqual([]);
  });

  test("booking links point to the configured Acuity schedule", async ({ page }) => {
    await page.goto("/");
    const bookingLinks = page.locator('a[href*="rusugar.as.me"]');
    await expect(bookingLinks.first()).toBeVisible();
    await expect(bookingLinks.first()).toHaveAttribute("href", /rusugar\.as\.me\/schedule/);
  });

  test("mobile has no horizontal overflow and keeps booking accessible", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator(".mobile-booking-bar")).toBeVisible();
    await expect(page.locator(".mobile-booking-bar button")).toBeVisible();

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.viewport + 1);
  });

  test("mobile navigation opens and closes accessibly", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open navigation" }).click();
    await expect(page.getByRole("button", { name: "Close navigation" })).toBeVisible();
    await expect(page.locator("#site-navigation")).toHaveClass(/open/);

    await page.getByRole("button", { name: "Close navigation" }).click();
    await expect(page.locator("#site-navigation")).not.toHaveClass(/open/);
  });

  test("service selection updates the selected state", async ({ page }) => {
    await page.goto("/");
    const serviceButton = page.getByRole("button", { name: /View Underarms/i });
    await serviceButton.click();

    await expect(page.locator(".service-card.selected")).toContainText("Underarms");
    await expect(page.locator(".service-select").filter({ hasText: "Selected" })).toBeVisible();
  });
});
