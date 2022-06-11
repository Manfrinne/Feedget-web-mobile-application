import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

// Preciso avisar o TypeScript que há uma propriedade/função no componente
interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    // Conceito de 'Fragment' = <> Conteúdo </>
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              // Comunicação de um componente com outro através de funções 'onFeedbackTypeChanged'
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img
                className="mx-auto"
                src={value.image.source}
                alt={value.image.alt}
              />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
