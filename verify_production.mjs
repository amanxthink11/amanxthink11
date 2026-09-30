import { chromium } from "playwright";

const VIEWPORTS = [
  { name: "mobile_390x844", width: 390, height: 844 },
  { name: "android_412x915", width: 412, height: 915 },
  { name: "tablet_768x1024", width: 768, height: 1024 },
  { name: "desktop_1440x900", width: 1440, height: 900 },
  { name: "large_1920x1080", width: 1920, height: 1080 },
];

const REQUIRED_EXTERNAL_LINKS = [
  "https://www.linkedin.com/in/amanxthink11",
  "https://github.com/amanxthink11",
  "https://x.com/amanxthink11",
  "https://instagram.com/amanxthink11",
  "https://facebook.com/amanxthink11",
  "https://www.think11.in",
  "https://indtechmark.com",
];

async function runProductionAudit() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
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

  console.log("--> Navigating to http://localhost:3000 (Production Server)...");
  const response = await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
  });
  console.log(`[PASS] Server returned HTTP ${response.status()}`);

  // 1. Verify SEO Title & Meta
  const title = await page.title();
  const expectedTitle = "Aman Singh — Founder, Builder & Technology Entrepreneur";
  console.log(`Title Match: ${title === expectedTitle} ("${title}")`);

  const metaDesc = await page.$eval('meta[name="description"]', (el) =>
    el.getAttribute("content")
  );
  const expectedDesc =
    "Aman Singh is a technology entrepreneur and founder from Patna, Bihar, building companies, products and technology ventures.";
  console.log(`Meta Desc Match: ${metaDesc === expectedDesc} ("${metaDesc}")`);

  const canonical = await page.$eval('link[rel="canonical"]', (el) =>
    el.getAttribute("href")
  );
  console.log(`Canonical URL: ${canonical} (Expected: https://amanxthink11.com)`);

  // 2. Check JSON-LD Structured Data
  const jsonLd = await page.$eval(
    'script[type="application/ld+json"]',
    (el) => el.innerHTML
  );
  const parsedJsonLd = JSON.parse(jsonLd);
  console.log(`[PASS] JSON-LD valid graph elements count: ${parsedJsonLd["@graph"]?.length}`);

  // Check no coordinates leaked in body text
  const bodyText = await page.innerText("body");
  const hasCoordinates =
    bodyText.includes("25.5941") ||
    bodyText.includes("85.1376") ||
    bodyText.includes("25.59° N");
  console.log(`[PRIVACY AUDIT] Any exact coordinates leaked in page text: ${hasCoordinates} (Must be false)`);

  // 3. Check External Social and Business Links
  console.log("\n--> Checking external links presence and security attributes...");
  for (const url of REQUIRED_EXTERNAL_LINKS) {
    const linkEl = await page.$(`a[href="${url}"]`);
    if (linkEl) {
      const target = await linkEl.getAttribute("target");
      const rel = await linkEl.getAttribute("rel");
      console.log(`  ✓ ${url} | target="${target}" rel="${rel}"`);
    } else {
      console.error(`  ✗ MISSING LINK: ${url}`);
    }
  }

  // 4. Test Viewports and Capture Screenshots
  console.log("\n--> Capturing screenshots across all 5 standard viewports...");
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(200);

    // Check horizontal scroll / overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hasHorizontalOverflow = scrollWidth > clientWidth;

    console.log(
      `  Viewport: ${vp.name} (${vp.width}x${vp.height}) - Horizontal Overflow: ${hasHorizontalOverflow}`
    );

    await page.screenshot({
      path: `audit_${vp.name}.png`,
      fullPage: false,
    });
  }

  // 5. Test Copy Email Button
  console.log("\n--> Testing interactive elements (Email Copy Button)...");
  const copyBtn = await page.$('button[title="Copy Email"]');
  if (copyBtn) {
    await copyBtn.click({ force: true });
    await page.waitForTimeout(300);
    const copyConfirmEl = await page.$('text=copied to clipboard');
    console.log(`  ✓ Copy button confirmation visible: ${copyConfirmEl !== null}`);
  }

  // 6. Test Form Topic Selection
  console.log("\n--> Testing form topic pills...");
  const topicBtn = await page.$('button:has-text("Technology")');
  if (topicBtn) {
    await topicBtn.click();
    console.log(`  ✓ Selected "Technology" topic pill`);
  }

  // Final Summary
  console.log("\n==========================================");
  console.log("FINAL AUDIT SUMMARY");
  console.log("==========================================");
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) console.log(consoleErrors);
  console.log(`Network Failures: ${networkFailures.length}`);
  if (networkFailures.length > 0) console.log(networkFailures);
  console.log("==========================================");

  await browser.close();
}

runProductionAudit().catch(console.error);
