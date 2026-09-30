import { chromium } from "playwright";

async function runVerification() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const consoleErrors = [];
  const networkFailures = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("requestfailed", (request) => {
    networkFailures.push(`${request.url()} - ${request.failure()?.errorText}`);
  });

  console.log("Navigating to http://localhost:3000...");
  const response = await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
  });

  console.log(`Page HTTP status: ${response.status()}`);

  // Check title & description
  const title = await page.title();
  console.log(`Page Title: "${title}"`);

  const metaDesc = await page.$eval('meta[name="description"]', (el) =>
    el.getAttribute("content")
  );
  console.log(`Meta Description: "${metaDesc}"`);

  // Check JSON-LD
  const jsonLd = await page.$eval(
    'script[type="application/ld+json"]',
    (el) => el.innerHTML
  );
  console.log(`JSON-LD present: ${jsonLd.includes("Aman Singh")}`);

  // Check hero image
  const heroImage = await page.$('img[alt="Aman Singh - Technology Entrepreneur and Founder"]');
  const isImageVisible = await heroImage.isVisible();
  console.log(`Hero image rendered & visible: ${isImageVisible}`);

  // Test anchor links
  const navLinks = ["#about", "#ventures", "#products", "#journey", "#code", "#focus", "#philosophy", "#contact"];
  for (const href of navLinks) {
    const el = await page.$(href);
    console.log(`Section anchor ${href} exists: ${el !== null}`);
  }

  // Test mobile menu at 390px
  await page.setViewportSize({ width: 390, height: 844 });
  const menuBtn = await page.$('button[aria-label="Open menu"]');
  console.log(`Mobile menu button visible: ${await menuBtn?.isVisible()}`);
  if (menuBtn) {
    await menuBtn.click();
    const closeBtn = await page.$('button[aria-label="Close menu"]');
    console.log(`Mobile menu opened (close button visible): ${await closeBtn?.isVisible()}`);
    await page.screenshot({ path: "mobile_menu_open.png" });
    await closeBtn.click();
    console.log(`Mobile menu closed successfully`);
  }

  console.log("\n--- Verification Summary ---");
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log(consoleErrors);
  }
  console.log(`Network Failures: ${networkFailures.length}`);
  if (networkFailures.length > 0) {
    console.log(networkFailures);
  }

  await browser.close();
}

runVerification().catch(console.error);
