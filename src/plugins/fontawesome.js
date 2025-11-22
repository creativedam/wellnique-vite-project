import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import only your needed icons
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// Add to library
library.add(faFacebookF, faTwitter, faEnvelope, faLock);

export default (app) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
};
