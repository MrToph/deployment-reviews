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

await runSection("Beacon", () => import("./beacon-validation.js"));
await runSection("Facets", () => import("./facets-validation.js"));
await runSection("PAUFactory", () => import("./pau-factory-validation.js"));
await runSection("AdministeredAgentFactory", () => import("./administered-agent-factory-validation.js"));
