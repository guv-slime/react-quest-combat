import { useState } from "react"

function ActionsBox () {
  const [hideActions, setHideActions] = useState(false);

  return (
    <div className="bg-sky-950 text-white absolute left-0 bottom-0 p-4 m-4 text-4xl rounded-md  border-sky-100 border-4 shadow-2xl shadow-black opacity-95 flex flex-col gap-y-4 items-start">
      <Fight />
      <Flee />
    </div>
  )
}

function Fight () {
  const [showCombat, setShowCombat] = useState(false);

  if(showCombat) {
    return (
      <>
        <p>Attack</p>
        <p>Skill</p>
        <p>Spells</p>
        <p>Defend</p>
      </>
    )
  }

  return (
    <button>Fight</button>
  )
  // Show other options for combat
  // 1. Attack
  // 2. Skill
  // 3. Spells
  // 4. Defend
}

function Flee () {
  return (
    <button onClick="">Flee</button>
  )
  // escape the fight
  // remove enemy
}

export default ActionsBox