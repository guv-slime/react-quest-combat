import { useState } from "react"

function ActionsBox ({showActions}) {
  console.log(showActions)
  if(showActions) {
    return (
      <div className="bg-sky-950 text-white absolute left-0 bottom-0 p-4 m-4 text-4xl rounded-md  border-sky-100 border-4 shadow-2xl shadow-black opacity-95 flex flex-col gap-y-4 items-start">
        <p>Fight</p>
        <p>Flee</p>
      </div>
    )
  }
}

export default ActionsBox