import { test, expect } from "@playwright/test";

test("entries page shows fetched entries", async ({ page }) => {
  await page.route("/api/entries", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        {
          id: "1",
          name: "Taro",
          email: "taro@example.com",
          message: "Hello",
        },
      ]),
    }),
  );

  await page.goto("/entries");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Entries");
  await expect(page.getByText("Taro")).toBeVisible();
  await expect(page.getByText("Hello")).toBeVisible();
});
