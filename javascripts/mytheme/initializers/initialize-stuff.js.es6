import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: "my-initializer",
  initialize(){
    withPluginApi("0.8.7", api => {
      // Do something with the API here
    });
  }
}
