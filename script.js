// browser is used for firefox, chrome is used for chrome
const api = typeof browser === "undefined" ? chrome : browser;

// Injected script
function buttonAction() {
  api.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    api.tabs.executeScript(
      tabs[0].id,
      {
        code: `
        var userInput = prompt("Please enter your input:");
        userInput;
      `,
      },
      (data) => {
        console.log(data[0]);
      }
    );
  });
}

document
  .getElementById("redirectButton")
  .addEventListener("click", buttonAction);
