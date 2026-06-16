async function runSection(name: string, validation: () => Promise<unknown>) {
  if (process.env.GITHUB_ACTIONS === "true") {
    console.log(`::group::${name}`);
  } else {
    console.log(`\n\n================= ${name} =================`);
  }

  try {
    await validation();
  } finally {
    if (process.env.GITHUB_ACTIONS === "true") {
      console.log("::endgroup::");
    }
  }
}

await runSection("GroveBasinFactory", () => import("./grove-basin-factory-validation.js"));
await runSection("RateProviders", () => import("./rate-providers-validation.js"));
await runSection("Timelocks", () => import("./timelocks-validation.js"));
await runSection("Pockets", () => import("./pockets-validation.js"));
await runSection("Redeemers", () => import("./redeemers-validation.js"));
await runSection("GroveBasins", () => import("./grove-basins-validation.js"));