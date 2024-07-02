import { useState, useEffect } from "react"
import ActionsBox from '/src/components/ActionsBox'

function DialogBox () {
    const [showDialog, setShowDialog] = useState(true);
    const [showActions, setShowActions] = useState(false);

    useEffect(() => {
      console.log(showActions);
    }, [showActions]);

    function closeDialog () {
      setShowDialog(false);
      setShowActions(true);
    }

    if(showDialog) {
      return (
        <div className="bg-sky-950 text-white absolute left-0 bottom-0 p-4 text-4xl rounded-md  border-sky-100 border-4 shadow-2xl shadow-black opacity-95 w-full h-[200px]" onClick={closeDialog}>
          <p>An ENEMY appeared!</p>
        </div>
      )
    }

    return (
      <ActionsBox showActions={showActions} />
    )
}

export default DialogBox