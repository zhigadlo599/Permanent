const { execSync } = require("child_process");
const fs = require("fs");
try {
  const t = Math.floor(Date.now() / 1000);
  const tag = `backup-${t}`;
  try {
    execSync(`git tag -a ${tag} -m "backup ${t}"`, { stdio: "inherit" });
  } catch (e) {
    // tag may already exist; ignore
  }
  fs.mkdirSync("backups", { recursive: true });
  execSync(`git archive --format=zip -o backups/backup-${t}.zip HEAD`, { stdio: "inherit" });
  console.log("TAG:" + tag);
  console.log("ARCHIVE: backups/backup-" + t + ".zip");
} catch (err) {
  console.error(err);
  process.exit(1);
}


