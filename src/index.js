require("markdown-it").use(
  require("markdown-it-regexp")(
    /<<.*?>>\+?=/,
    ([, name]) => `<div class="mlfragment">${name}</div>`
  )
);
