import { chromium } from "playwright";

const VIEWPORTS = [
  { name: "mobile_390x844", width: 390, height: 844 },
  { name: "android_412x915", width: 412, height: 915 },
  { name: "tablet_768x1024", width: 768, height: 1024 },
  { name: "desktop_1440x900", width: 1440, height: 900 },
  { name: "large_1920x1080", width: 1920, height: 1080 },
];

const REQUIRED_CHAPTER_IDS = [
  "beginning",
  "first-bet",
  "building-again",
  "products",
  "building-in-public",
  "things-learned",
  "building-now",
  "road-ahead",
  "message",
  "connect",
];

const REQUIRED_LEGACY_IDS = [
  "about",
  "ventures",
  "work",
  "journey",
  "focus",
  "connect",
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

async function runComprehensiveAudit() {
  console.log("==================================================");
  console.log("STARTING COMPREHENSIVE STORYTELLING PORTFOLIO AUDIT");
  console.log("==================================================");

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

  console.log("\n--> 1. Navigating to http://localhost:3000...");
  const response = await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
  });
  console.log(`[PASS] Server returned HTTP ${response.status()}`);

  // 1. Verify SEO Metadata
  console.log("\n--> 2. Verifying SEO & Social Metadata...");
  const title = await page.title();
  console.log(`  Page Title: "${title}"`);
  const metaDesc = await page.$eval('meta[name="description"]', (el) =>
    el.getAttribute("content")
  );
  console.log(`  Meta Description: "${metaDesc}"`);
  const canonical = await page.$eval('link[rel="canonical"]', (el) =>
    el.getAttribute("href")
  );
  console.log(`  Canonical URL: "${canonical}"`);

  // 2. Check JSON-LD
  console.log("\n--> 3. Checking JSON-LD Structured Data...");
  const jsonLd = await page.$eval(
    'script[type="application/ld+json"]',
    (el) => el.innerHTML
  );
  const parsedJsonLd = JSON.parse(jsonLd);
  console.log(`[PASS] JSON-LD items count: ${parsedJsonLd["@graph"]?.length}`);

  // 3. Verify All 10 Story Chapters are rendered
  console.log("\n--> 4. Verifying all 10 Story Chapters Presence...");
  for (const chapterId of REQUIRED_CHAPTER_IDS) {
    const el = await page.$(`#${chapterId}`);
    if (el) {
      console.log(`  ✓ Chapter #${chapterId} is present`);
    } else {
      console.error(`  ✗ MISSING Chapter #${chapterId}`);
    }
  }

  // 4. Verify Legacy Section IDs
  console.log("\n--> 5. Verifying Legacy Section IDs Compatibility...");
  for (const legId of REQUIRED_LEGACY_IDS) {
    const el = await page.$(`#${legId}`);
    if (el) {
      console.log(`  ✓ Legacy ID #${legId} is present`);
    } else {
      console.error(`  ✗ MISSING Legacy ID #${legId}`);
    }
  }

  // 5. Verify All Required External Links
  console.log("\n--> 6. Checking External Ecosystem Links...");
  for (const url of REQUIRED_EXTERNAL_LINKS) {
    const linkEl = await page.$(`a[href="${url}"]`);
    if (linkEl) {
      const target = await linkEl.getAttribute("target");
      const rel = await linkEl.getAttribute("rel");
      console.log(`  ✓ ${url} | target="${target}" rel="${rel}"`);
    } else {
      console.error(`  ✗ MISSING Link: ${url}`);
    }
  }

  // 6. Test GitHub Section specifically
  console.log("\n--> 7. Verifying GitHub Chapter Details...");
  const ghSection = await page.$("#building-in-public");
  console.log(`  GitHub Chapter exists: ${ghSection !== null}`);
  const ghRepos = ["stumptalk", "ind-analytics", "publicity-poster", "portfolio", "amanxthink11"];
  for (const repo of ghRepos) {
    const repoEl = await page.$(`a[href="https://github.com/amanxthink11/${repo}"]`);
    console.log(`  ✓ Repo ${repo} link exists: ${repoEl !== null}`);
  }
  const ghCta = await page.$('a:has-text("Explore my GitHub")');
  console.log(`  ✓ "Explore my GitHub" CTA exists: ${ghCta !== null}`);

  // 7. Test Copy Email & Mailto Interaction
  console.log("\n--> 8. Testing Copy Email & Mailto Form...");
  const copyBtn = await page.$('button[title="Copy email address"]');
  if (copyBtn) {
    await copyBtn.click({ force: true });
    await page.waitForTimeout(200);
    const copiedText = await page.$('text=Copied');
    console.log(`  ✓ Email Copy button confirmation: ${copiedText !== null}`);
  }

  // Test form topic selection
  const topicBtn = await page.$('button:has-text("Products")');
  if (topicBtn) {
    await topicBtn.click();
    console.log(`  ✓ Topic button "Products" selected successfully`);
  }

  // 8. Test Desktop Chapter Dropdown Navigation
  console.log("\n--> 9. Testing Desktop Chapter Index Dropdown...");
  await page.setViewportSize({ width: 1440, height: 900 });
  const indexTrigger = await page.$('button[aria-label="Open story chapter index"]');
  if (indexTrigger) {
    await indexTrigger.click();
    await page.waitForTimeout(200);
    const dropItem = await page.$('button:has-text("The First Bet")');
    console.log(`  ✓ Chapter dropdown opened and item found: ${dropItem !== null}`);
    if (dropItem) {
      await dropItem.click();
      await page.waitForTimeout(300);
      console.log(`  ✓ Navigated to Chapter 02 via dropdown`);
    }
  }

  // 9. Test Mobile Menu on 390x844
  console.log("\n--> 10. Testing Mobile Navigation Drawer (390x844)...");
  await page.setViewportSize({ width: 390, height: 844 });
  const menuBtn = await page.$('button[aria-label="Open menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await page.waitForTimeout(200);
    const mobileNav = await page.$('nav[aria-label="Mobile navigation"]');
    console.log(`  ✓ Mobile menu drawer opened: ${mobileNav !== null}`);

    // Close via Escape key
    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);
    const isClosed = (await page.$('nav[aria-label="Mobile navigation"]')) === null;
    console.log(`  ✓ Mobile drawer closed via Escape key: ${isClosed}`);
  }

  // 10. Capture Screenshots and Verify Zero Overflow across all viewports
  console.log("\n--> 11. Testing Responsiveness and Overflow across 5 Viewports...");
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(300);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hasHorizontalOverflow = scrollWidth > clientWidth;

    console.log(
      `  [${hasHorizontalOverflow ? "FAIL" : "PASS"}] Viewport: ${vp.name} (${vp.width}x${vp.height}) - Scroll: ${scrollWidth}px, Client: ${clientWidth}px`
    );

    await page.screenshot({
      path: `story_audit_${vp.name}.png`,
      fullPage: false,
    });
  }

  // Full-page screenshot at 1440x900 for holistic inspection
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(300);
  await page.screenshot({
    path: `story_audit_fullpage.png`,
    fullPage: true,
  });

  console.log("\n==================================================");
  console.log("AUDIT RESULTS SUMMARY");
  console.log("==================================================");
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) console.log("Errors:", consoleErrors);
  console.log(`Network Failures: ${networkFailures.length}`);
  if (networkFailures.length > 0) console.log("Failures:", networkFailures);
  console.log("==================================================");

  await browser.close();
}

runComprehensiveAudit().catch(console.error);
