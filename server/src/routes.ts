import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodeMailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/Prisma/prisma-feedbacks-repository";
import { SubmiteFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  // Aqui nós aplicamos a ideia do SOLID de princípio de inversão de dependência,
  // somente a parte que vai executar o submit, faz mensão ao Prisma
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const submiteFeedbackUseCase = new SubmiteFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  );

  await submiteFeedbackUseCase.execute({ type, comment, screenshot });

  return res.status(201).send();
});
