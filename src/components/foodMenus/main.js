import React, { useState, useEffect } from "react"
import { StyledContentContainer } from "./styles/main.js"
import { CategoryCards } from "./categories/main.js"
import { config, getOptions } from "../../utils/main.js"
const COLORS = config.colors


export const FoodMenu = () => {
  // console.log("Rendering FoodMenu")
  const [state, setState] = useState({
    categories: [],
    sides: []
  })
  useEffect(() => {
    fetch(`/menu/categories`, getOptions)
      .then(response => response.json())
      .then(data => setState({ categories: data.data["categories"], sides: data.data["sides"] }))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      {state.categories ?
        <CategoryCards categories={state.categories} sides={state.sides}/> :
        <StyledContentContainer $margin="10rem auto 3rem auto" $fontColor={COLORS.white} $backgroundColor={COLORS.black} $maxWidth="30rem">
          <h1>Error Loading Menu</h1>
        </StyledContentContainer>
      }
    </div>
  )
}
