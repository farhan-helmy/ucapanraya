import { StackContext, Api, StaticSite, use } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return api;
}

export function Web({ stack }: StackContext) {
  const api = use(API);

  const web = new StaticSite(stack, "web", {
    path: "packages/web/ucapanraya",
    buildOutput: "dist",
    buildCommand: "yarn build",
    environment: {
      VITE_APP_API_URL: api.url,
    },
  });

  stack.addOutputs({
    Web: web.url,
  });
}
