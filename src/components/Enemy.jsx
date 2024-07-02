function Enemy () {
  const enemyProps = {
    health: 1,
    name: "guv-slime",
    image: "/src/assets/guv-slime.png"
  }

  if(enemyProps.health > 0) {
    return (
      <div>
        <img src={enemyProps.image} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48"/>
      </div>
    )
  }
}

export default Enemy