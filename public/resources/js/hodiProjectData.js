fetch(
  "https://azuresearch-usnc.nuget.org/query?q=HODI&packageVersion=2.0.6"
)
  .then((payload) => payload.json())
  .then((resObj) => {
    /**
     * @type {HTMLElement}
     */
    const hodiDownloadCntEl = document.querySelector(
      "#hodi-total-downloads"
    );
    /**
     * @type {HTMLElement}
     */
    const hodiProjectDataEl = document.querySelector("#hodi-project-data");
    /**
     * @type {HTMLElement}
     */
    const hodiDescriptionEl = document.querySelector("#hodi-description");
    /**
     * @type {HTMLAnchorElement}
     */
    const hodiFsharpLogoEl = document.querySelector("#hodi-fsharp-logo");
    /**
     * @type {array}
     */
    const resultData = resObj.data;
    /**
     * @type {number}
     */
    const totalDownloads = Math.max(
      resultData.map((obj) => obj.totalDownloads)
    );
    /**
     * @type {string}
     */
    const description = resultData.map((obj) => obj.description).join("");
    hodiDownloadCntEl.textContent = `${totalDownloads} downloads`;
    hodiDescriptionEl.textContent = description;
    hodiProjectDataEl.setAttribute("aria-busy", false);
    hodiFsharpLogoEl.style.display = "inline";
  });
