import { Popover } from "@headlessui/react";
import { ArrowLeft } from "phosphor-react";

interface FeedbackContentStepProps{
    onFeedbackRestartRequested: () => void;
}

export function BackButton({onFeedbackRestartRequested}: FeedbackContentStepProps){
    return(
        <Popover.Button 
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" 
        title="Volta"
        onClick={onFeedbackRestartRequested}>
            <ArrowLeft weight="bold" className="w-4 h-4" />
        </Popover.Button>
    )
}