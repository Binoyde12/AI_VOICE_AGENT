import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function UserInputDialog({ children, coachingOption
}) {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{coachingOption.name}</DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <h2>Enter a topic to masteryour skills in {coachingOption.name}</h2>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default UserInputDialog
