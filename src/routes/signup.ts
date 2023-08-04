import { Router } from "express";
import { hash } from "../bcrypt/hash";
import { prisma } from "../database/prisma";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const { username, email, password, name } = req.body;

    const hasUser = await prisma.user.findFirst({
      where: {
        OR: [{ username, email }],
      },
    });

    if (hasUser) {
      return res.status(409).send();
    }

    const hashedPassword = await hash(password);

    const { password: omittedPassword, ...createdUserWithoutPassword } =
      await prisma.user.create({
        data: {
          name,
          email,
          username,
          password: hashedPassword,
        },
      });

    return res.status(201).json(createdUserWithoutPassword);
  } catch (e) {
    next(e);
  }
});

export default router;
