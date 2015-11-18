var CLIEngine = Npm.require('eslint').CLIEngine;

Plugin.registerLinter({
  extensions: ["js"],
  filenames: [".eslintrc"]
}, function () {
  var linter = new EsLintLinter();
  return linter;
});

function EsLintLinter (){
};

EsLintLinter.prototype.processFilesForPackage = function (files, options) {
	var globals = options.globals
  var cli = new CLIEngine({
    globals: globals,
  })
  files.forEach(function (file) {
    if (file.getBasename() === '.eslintrc') {
      return;
    }

    var report = cli.executeOnText(file.getContentsAsString(), file.getBasename())
    var errors = report.results[0].messages

    if (errors) {
      errors.forEach(function (error) {
        file.error({
          message: error.message,
          line: error.line,
          column: error.column,
        })
      })
    }
  })
}
