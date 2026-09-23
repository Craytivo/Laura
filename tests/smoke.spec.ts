import { test, expect } from "@playwright/test";

test("homepage renders the primary booking CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Smooth skin/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /Book your Brazilian/i }).first()).toBeVisible();
  await expect(page.locator(".hero-photo")).toHaveAttribute("alt", /RU Sugaring Edmonton studio/i);
});

test("mobile keeps booking action accessible without horizontal overflow", async ({ page }) => {
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

  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();

  await expect(page.getByRole("button", { name: "Close navigation" })).toBeVisible();
  await expect(page.locator("#site-navigation")).toHaveClass(/open/);

  await page.getByRole("button", { name: "Close navigation" }).click();
  await expect(page.locator("#site-navigation")).not.toHaveClass(/open/);
});

test("service selection updates the booking summary", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Underarms/i }).first().click();

  await expect(page.locator(".selected-service")).toContainText("Underarms");
  await expect(page.locator(".selected-service")).toContainText("$20");
});
