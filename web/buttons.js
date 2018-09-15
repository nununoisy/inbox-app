const remote = require('electron').remote;
console.log('buttons script running');
// make some titlebar buttons

// define some image data
var close = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCQ4DEjFR+8vbAAAAv0lEQVRIx+2WQQ6DMAwEEa9DitRnFU58t+E0vbRqi5JgO131UHxDZAeTOPYOwxnPYCaFdIm59uoKbFzcyIkbsNaQ+LEPJAUsC6/I9k0gkd+US+17jmwPVX6sSeHDmlfbsa4EbIvdW3UsCB1qWxSrk6YwjKyLu5BlQDeycAXz7ilFW+Fnbr1ZNrF9yCLWgBx/MWC+//uCgxKUlKD4BddU0FAErU/QpAXjRDD4BCNaYCYktkdi0CRWUmR6Rfb8H+MOxMLQRsgHDfkAAAAASUVORK5CYII="
var maxim = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAYAAABNo9TkAAAgAElEQVR4nOzc3+s//n/X9a0fTveD1NmMrI4iMEHsx0EEVpMJGihBFERE2GiaEHRS66Qf9MPIDoRCYhAFAxXsLEuiHwcdLQYjKyeFCRVpLdi05ja3fbdHBx8INVq5fb/36+f+vF8u8PwHrtwfL143Xu/38+u+DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABguffeN773fs177+997/2O996/+t77d997f+i9933vvT/x3vuRv+gDAACf7C/+/fd/eF/8bvwfvC9+V/5X3nu//X3xO/Svee/9kvr3emCZ9943v/d+w3vvu997v/+998fee1+Z/mkHAAAf5ivvvR98X/yO/c+89779vfdN9e//wJfIe++b3nt/33vv9773/qtnjAMAwJSffu/9wHvv33rv/db33jfW+wAY9t77le+9f+K994ffez/R/TwCAAD+PD/+3vuP3hf/NP7b6t0AfI289375e+8ff+/9Z89fyQEA4MvuK++9/+S9953vvV9W7wngF+i99/Xvvd/y3vtPn1EOAABbfeV98QXN3/He+/p6ZwB/Cd57v+S9913vvT9a/hQBAAC+6v6b98W/jP3F9e4Afg7vvb/6vfcvvPd+qPyJAQAAfM39b++9f+699631DgH+PO+9v+699z3vvZ9Mf0QAAADTfvJ9sQV+Vb1L4LT3xRe//e733p9NfyQAAAC1H33v/WvPF8rBrPfeN7z3/sVnmAMAAH+hP/3e++733jfUuwU+3nvv73nv/bftmwcAAL7k/uv33q+v9wt8pPfet773/mD8yAEAgF3+4PNFcvDV8977Te+9/zl+2AAAwE7/43vvN9a7BlZ77/3S56/mAADAV8f3vve+ud45sM57729/7/138QMGAAA+yw++9/6Weu/AGu+Lb138SvxwAQCAz/TT773vrncPfKm9977pvfcH4scKAADc8Pvee99Y7yD40nnv/TXvve+PHygAAHDL9733vq3eQ/Cl8d77W997fyp+mAAAwE1/8r336+pdBLn33re/9/50/CABAIDbfvi99+vrfQSZ994/8N77qfghAgAAvPfeT773/v56J8G4995ve76pHQAA+HL5ynvvH633Eox57/0jzzgHAAC+nH76vfcP17sJvubee9/53vvZ+MEBAAD8XH7mvfcP1fsJvmbee//g85dzAABgh5967/2WekfBV9177+967/14/MAAAAD+UvzYe+/vrPcUfNW8937de+//jB8WAADAz8f/8d77tfWugl+w997f8N77k/GDAgAA+IX4X957f329r+Dn7b33i9973x8/JAAAgK+G73vv/aJ6Z8HPy3vv99UvCAAA4Kvo36l3Fvwle+/9jvrlAAAAfA18Z7234P+3996vfe/9RP1qAAAAvgZ+7L33N9e7C/4/vfe++b33x+MHAwAA8LX0g++9b6z3F/yc3nvfU78UAACAAb+33l/w/+q995veez9bvxIAAIABP/ve+456h8H/w3vvl773/lT8QAAAACb9T++9b6n3GPwF3nv/dv0yAAAAAv9mvcfg//be+zveez9TvwoAAIDAV957f1u9y+Dr3nt/+Xvvj8QPAgAAoPQD772/rN5nHPfe++31SwAAAPgS+MfqfcZh771vfe/9cP0KAAAAvgR+6L33V9U7jaPee/9y/QIAAAC+RP75eqdx0HvvV773/mx9/QAAAF8iP/re+7Z6r3HMe+/31JcPAADwJfS7673GIe+Lv57/WH31AAAAX0I/+t77FfVu44j33u+qLx4AAOBL7F+qdxsHvPe+5b33I/W1AwAAfIn98Hvvm+v9xod77/1T9aUDAAAs8E/W+40P9t77+vfef19fOQAAwAJ/rN5wfLD33nfUFw4AALDIt9c7jg/13vv36+sGAABY5A/UO44P9N77Fe+9n6yvGwAAYJGfeO/98nrP8WHee7+zvmwAAICFvqvec3yY995/UV81AADAQv95vef4IO+9X/Xe+5n6qgEAABb6mffeX1vvOj7E88/bAQAAfiH8M3e+Ot57/3F9zQAAAIv9h/Wu4wO89775vffn6msGAABY7Mffe99Y7zuWe+/9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";
var restr = "data:image/png;base64,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";
var minim = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAE1klEQVR4nO3czUlEMRhAUZf+FCOKtc7guLAVESxCtJJxcV0El65kTHhzTgt5cBOS911cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAf6geqkP1WX0FAKf1VX1Uj9X97A6eneqmep75BQBA9VRdze7iWWjE/23yggPAj9fqenYfNy8nfwDWc5jdx01r3PkDwIruZndysxoP/gBgRfvZndysxmt/AFjR++xOblZ+9QNgXcfZndysbAAAWJcNwKk0hi8AwIpcAZxKY/ISAKxoN7uTm1Xdz15dAPjF7exOblpj7CIArMTp/9Sqq8bYRQBYwUt1ObuPZ6G6zlAgAObbJf7/r7qr9tV7dZz6CQBwDo6N5uxy5w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA33wDL4KFd5BX3C8AAAAASUVORK5CYII=";

// populate the titlebar
// fetch the right side titlebar
var titleContainer = document.querySelector(".gb_Uf .gb_jb.gb_Sg");

// are we maximized?
var maximized = remote.getCurrentWindow().isMaximized();

//create buttons now
titleContainer.innerHTML += "<input type='image' id='min-btn' src='" + minim + "' />";
if (maximized) {
	titleContainer.innerHTML += "<input type='image' id='max-btn' src='" + maxim + "' />";
} else {
	titleContainer.innerHTML += "<input type='image' id='max-btn' src='" + restr + "' />";
}

//set traps

titleContainer.innerHTML += "<input type='image' id='close-btn' src='" + close + "' />";
document.getElementById("min-btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     window.minimize();
});

document.getElementById("max-btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     if (!window.isMaximized()) {
         document.getElementById("max-btn").src = restr;
	 window.maximize();
     } else {
	 document.getElementById("max-btn").src = maxim;
         window.unmaximize();
     }
});

document.getElementById("close-btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     window.close();
});

// set max-min updater
function maxupdate() {
      if (remote.getCurrentWindow().isMaximized()) {
          document.getElementById("max-btn").src = restr;
      } else {
          document.getElementById("max-btn").src = maxim;
      }
      setTimeout(maxupdate, 100);
}

maxupdate();