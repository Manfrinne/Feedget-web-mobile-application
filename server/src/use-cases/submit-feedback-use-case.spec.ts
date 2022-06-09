import { SubmiteFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

// O teste unitário deve testar o nosso use-case desconectado das dependências.
// Nesse caso, vamos testar somente o que tem no corpo dessa resource sendo testada.

// Podemos nos assegurar que uma função foi chamada
const submitFeedback = new SubmiteFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("shold be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Example of the comment",
        screenshot: "data:image/png;base64.text.png",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("shold not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Example of the comment",
        screenshot: "data:image/png;base64.text.png",
      })
    ).rejects.toThrow();
  });

  it("shold not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "OTHER",
        comment: "",
        screenshot: "data:image/png;base64.text.png",
      })
    ).rejects.toThrow();
  });

  it("shold not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "OTHER",
        comment: "Example of the comment",
        screenshot: "text.png",
      })
    ).rejects.toThrow();
  });
});
