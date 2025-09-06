import { test, expect } from "@playwright/test";

test("form submission leads to thanks page", async ({ page }) => {
  await page.route("/api/entries", (route) =>
    route.fulfill({ status: 201, body: "{}" }),
  );

  await page.goto("/");
  await page.fill('input[name="name"]', "Taro");
  await page.fill('input[name="email"]', "taro@example.com");
  await page.fill('textarea[name="message"]', "Hello");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/\/thanks$/);
  await expect(page.getByRole("heading")).toHaveText("送信ありがとうございます");
});

