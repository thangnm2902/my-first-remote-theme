import { isAppleDevice } from "discourse/lib/utilities";

export default {
  shouldRender(args, component) {
    return isAppleDevice();
  }
};
