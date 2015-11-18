if (Meteor.is_server) {
  // confirm that the linter report errors.
  // linter should report ["str" is defined but never used]
  const str = ''
}
