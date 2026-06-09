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

// await runSection("Contract", () => import("./contract-validation.js"));