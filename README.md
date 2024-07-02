# React Quest Combat

The goal of this project is to make a simple RPG style combat using React components, state, and effects.  

## Components
Still figuring out how to structure these...

1. GameWindow
  - This isn't an actual game window, it's just a background image.
2. Enemy
  - dislpays the enemy
  - properties: health, name, image
3. DialogBox
  - displays the about what's going on
  - parent component to the actions box
4. ActionsBox
  - displays fight or flee
  - not sure if I want to make separate components for fight and flee yet
5. Hero
  - displays your health, xp, etc.
  - may not include this yet.

## Flow
- Background Scene is visible
- Enemy is visible
- Dialog box states that an enemy has appeared
  - click dialogue box to proceed to combat or flee
- Fight or Flee
  - Fight
    - Attack
      - deal damage to creature (subtract from it's life total)
      - death animation (rotates sideways and disappears)
      - dialogue box reappears:
        - you defeated the enemy and gained 1 exp and 1 gold 
    - Back
      - return to Fight or Flee
  - Flee
    - enemy disappears
    - background scene grays out or goes black
    - dialogue box appears and says "successfully escaped"

I would like for this app to do more than attacking or fleeing, but I think this is the best place to start. 