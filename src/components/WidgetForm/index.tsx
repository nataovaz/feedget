
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import textImageUrl from '../../assets/text.svg'
import { useState } from 'react';
import { CloseButton } from '../CloseButton';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';


export const feedbackType = {
    BUG: {
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um problema / bug'
        }
    },
    IDEA: {
        title: 'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada acendendo e ativando uma ideia'
        }
    },
    OTHER: {
        title: 'Outro',
        image:{
            source: textImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },

};

export type FeedbackTypes = keyof typeof feedbackType;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null >(null)

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return(
   
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

           {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
           ) : 
           (
           <FeedbackContentStep feedbackTypes={feedbackType} 
           onFeedbackRestartRequested={handleRestartFeedback}
           />
           )
           }

            <footer className="text-xs text-neutral-400">
                Feito por Natan Vaz
            </footer>
        </div>
    );
}
