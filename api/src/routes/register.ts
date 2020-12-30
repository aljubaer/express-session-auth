import { Router } from "express";
import { User } from "../models";
import { registerSchema } from "../validation";

const router = Router();

router.post("/register", async (req, res) => {
    await registerSchema.validateAsync(req.body, { abortEarly: false });

    const { email, name, password } = req.body;

    const found = User.exists({ email });

    if (found)
        throw new Error('Invalid email');

    const user = await User.create({
        email, name, password
    });

    res.json({ data: user });
});

export default router;
