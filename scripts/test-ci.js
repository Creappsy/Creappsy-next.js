#!/usr/bin/env node
// Simple CI test for Next.js pricing API across regions
const REGION_CODES = ["es-MX", "en-US", "es-ES"];

async function testPricing(region) {
  const url = `http://localhost:3001/api/pricing?region=${region}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Pricing API failed for ${region}: ${res.status} ${res.statusText}`,
    );
  }
  const data = await res.json();
  if (!data || !data.success) {
    throw new Error(`Invalid response for ${region}: ${JSON.stringify(data)}`);
  }
  // Basic shape check
  const services = data?.data?.services;
  if (!Array.isArray(services) || services.length === 0) {
    throw new Error(`No services returned for ${region}`);
  }
  console.log(`✓ Pricing OK for ${region}: ${services.length} services`);
  return true;
}

(async () => {
  try {
    for (const region of REGION_CODES) {
      await testPricing(region);
    }
    console.log("\nAll region pricing endpoints responded correctly.");
    process.exit(0);
  } catch (err) {
    console.error("\nPricing CI test failed:", err);
    process.exit(1);
  }
})();
