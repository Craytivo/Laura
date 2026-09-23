import { test, expect } from "@playwright/test";

test("homepage renders primary booking CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Smooth skin/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /Book your Brazilian/i }).first()).toBeVisible();
});

test("mobile first viewport keeps booking action accessible", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".mobile-booking-bar")).toBeVisible();
  await expect(page.getByRole("button", { name: /Book/i }).last()).toBeVisible();
});
