export interface RestController {
  handle(
    request: RestController.HttpRequest
  ): Promise<RestController.HttpResponse>;
}

export namespace RestController {
  export type HttpRequest<
    Body = any,
    Params = any,
    Query = any,
    Headers = any
  > = {
    body: Body;
    params: Params;
    query: Query;
    headers: Headers;
  };

  export type HttpResponse = {
    statusCode: number;
    body?: any;
  };
}
