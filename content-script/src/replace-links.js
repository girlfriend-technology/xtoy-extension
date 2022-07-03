import { appearsToBeRegExp, stringToRegex } from "./regex";
import { getStorage } from "./storage";
import filter from "lodash/filter";

const replaceLinks = (links) => {
  getStorage().then(({ data }) => {
    const linksData = filter(data, { enabled: true, links: true });
    linksData.forEach(({ x, y }) => {
      links.forEach((el) => {
        const originalValue = el.href;
        let href = el.href;
        if (appearsToBeRegExp(x)) {
          href = el.href.replace(stringToRegex(x), y);
        } else {
          href = el.href.replace(x, y);
        }
        if (originalValue !== href) {
          el.href = href;
        }
      });
    });
  });
};

export default replaceLinks;
