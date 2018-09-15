var path = require('path');

['buttons', 'inspect', 'spellcheck', 'unread', 'accounts'].forEach(function(mod) {
  try {
    console.log(mod);
    require(path.join(__dirname, mod));
  }
  catch (err) {
    console.log(err);
  }
});
