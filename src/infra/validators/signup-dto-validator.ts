import { z } from "zod";
import { Validator } from "../../presentation/protocols/validator";

export class SignUpInputValidator implements Validator {
  validate(input: any): Error | undefined {
    const result = z
      .object({
        username: z.string().nonempty(),
        email: z.string().email(),
        password: z.string().min(8).max(100),
        name: z.string().nonempty(),
      })
      .safeParse(input);

    if (!result.success) {
      const error = new Error();
      error.message = result.error.message;
      error.stack = result.error.stack;
      error.name = result.error.name;
    }

    return undefined;
  }
}
