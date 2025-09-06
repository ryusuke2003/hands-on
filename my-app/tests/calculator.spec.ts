import { test, expect } from "@playwright/test";

test("calculator adds two numbers", async ({ page }) => {
  await page.goto("/calculator");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Calculator",
  );
  await page.getByPlaceholder("First number").fill("2");
  await page.getByPlaceholder("Second number").fill("3");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.getByText("Result: 5")).toBeVisible();
});
