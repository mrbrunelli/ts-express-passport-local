import { RestController } from "../protocols/rest-controller";
import { Validator } from "../protocols/validator";

export class SignUpController implements RestController {
  constructor(private readonly validation: Validator) {}

  async handle(
    request: RestController.HttpRequest<SignUpController.Input>
  ): Promise<RestController.HttpResponse> {
    const error = this.validation.validate(request.body);

    if (error) {
      return {
        statusCode: 400,
        body: error,
      };
    }

    return {
      statusCode: 201,
    };
  }
}

export namespace SignUpController {
  export type Input = {
    username: string;
    email: string;
    password: string;
    name: string;
  };
}
