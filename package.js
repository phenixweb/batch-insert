Package.describe({
  summary: "Insert multiple documents to mongo collection with one db call.",
  version: "1.1.15",
  name: "mikowals:batch-insert",
  git: "https://github.com/mikowals/batch-insert.git"
});

Npm.strip({
  mongodb: ["test/"]
});

Npm.depends({
  "mongodb": "3.1.1"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.6");
  api.use(["mongo", "ddp", "ejson", "underscore", "check"]);
  api.addFiles("batch-insert-server.js", "server");
  api.addFiles("batch-insert-common.js");
});

Package.onTest(function(api) {
  api.use(["tinytest", "test-helpers", "random", "mongo"]);
  api.use("mikowals:batch-insert");
  api.addFiles("batch-insert-tests.js");
});
