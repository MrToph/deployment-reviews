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

await runSection("AccessControls", () => import("./access-controls-validation.js"));
await runSection("AdministeredAgent", () => import("./administered-agent-validation.js"));
await runSection("Controller", () => import("./controller-validation.js"));