(() => {
  class Accordion {
    constructor(obj) {
      console.log(obj.hookName);
      const $element = document.querySelector(obj.hookName);
      const $trigger = $element.getElementsByTagName(obj.tagName);
      const triLength = $trigger.length;
      let index = 0;
      while (index < triLength) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    clickHandler(e) {
      e.preventDefault();

      const $target = e.currentTarget;
      const $accordion_content = $target.nextElementSibling;
      if ($accordion_content.style.display === "block") {
        $accordion_content.style.display = "none";
      } else {
        $accordion_content.style.display = "block";
      }
    }
  }

  const tagAccordion = new Accordion({
    hookName: "#js_tag",
    tagName: "p",
  });
  const dummyAccordion = new Accordion({
    hookName: "#js_accordion",
    tagName: "span",
  });
  const classAccordion = new Accordion({
    hookName: "#js_mini",
    tagName: "p",
  });
})();
