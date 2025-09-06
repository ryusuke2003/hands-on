import { test, expect } from "@playwright/test";

test("entries page filters entries by search query", async ({ page }) => {
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
          createdAt: "2024-01-01T00:00:00Z",
        },
        {
          id: "2",
          name: "Jiro",
          email: "jiro@example.com",
          message: "World",
          createdAt: "2024-01-02T00:00:00Z",
        },
      ]),
    }),
  );

  await page.goto("/entries");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Entries");
  await expect(page.getByText("Taro")).toBeVisible();
  await expect(page.getByText("Jiro")).toBeVisible();
  await page.getByPlaceholder("Search entries").fill("World");
  await expect(page.getByText("Jiro")).toBeVisible();
  await expect(page.getByText("Taro")).toHaveCount(0);
});
