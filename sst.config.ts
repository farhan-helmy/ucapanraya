import { SSTConfig } from "sst";
import { API, Web } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "ucapraya",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(Web);
  }
} satisfies SSTConfig;
