import React, { useState, useEffect } from "react"
import { FoodMenu as LibFoodMenu } from "@jalgraves/react-components-library"
import { ContentSection } from "@jalgraves/react-components-library"
import { config, getOptions } from "../../utils/main.js"

const COLORS = config.colors
const FONTS = config.fonts

export const FoodMenu = () => {
  const [state, setState] = useState({
    categories: null,
    sides: null
  })

  useEffect(() => {
    fetch(`/menu/categories`, getOptions)
      .then(response => response.json())
      .then(data => setState({ categories: data.data["categories"], sides: data.data["sides"] }))
      .catch(error => console.log(error))
  }, [])

  if (!state.categories) {
    return (
      <ContentSection
        display="flex"
        flexFlow="column wrap"
        $margin="10rem auto 3rem auto"
        $fontColor={COLORS.white}
        $backgroundColor={COLORS.black}
        $maxWidth="30rem"
      >
        <h1>Error Loading Menu</h1>
      </ContentSection>
    )
  }

  return (
    <LibFoodMenu
      categories={state.categories}
      sides={state.sides}

      // Category title styling
      menuCategoryTitleColor={COLORS.red}
      menuCategoryTitleFontFamily={FONTS.headline}
      menuCategoryTitleFontSize="1.95rem"
      menuCategoryTitleFontWeight="900"
      menuCategoryTitleLetterSpacing=".2rem"
      menuCategoryTitleTextAlign="center"
      menuCategoryTitleTextTransform="uppercase"

      // Category container styling
      menuCategoryContainerDisplay="flex"
      menuCategoryContainerFlexFlow="row wrap"
      menuCategoryContainerWidth="100%"

      // Category items container
      menuCategoryItemsContainerDisplay="flex"
      menuCategoryItemsContainerFlexFlow="row wrap"
      menuCategoryItemsContainerJustifyContent="center"
      menuCategoryItemsContainerMargin="auto"

      // Menu item card styling
      menuItemBackground={COLORS.backgroundWhite}
      menuItemBorder={`.1rem solid ${COLORS.borderGray}`}
      menuItemBorderRadius=".4rem"
      menuItemBoxShadow={`0px 5px 20px 0px ${COLORS.boxShadowGray}`}
      menuItemDisplay="flex"
      menuItemFlexBasis="30rem"
      menuItemFlexFlow="column nowrap"
      menuItemMargin=".5rem"
      menuItemMaxWidth="90vw"

      // Menu item name styling
      menuItemNameColor={COLORS.hubPubBlue}
      menuItemNameFontFamily={FONTS.headline}
      menuItemNameFontSize="1.5rem"
      menuItemNameFontWeight="700"
      menuItemNameLetterSpacing=".15rem"
      menuItemNameTextAlign="left"
      menuItemNameTextTransform="uppercase"

      // Menu item price styling
      menuItemPriceColor={COLORS.black}
      menuItemPriceFontFamily={FONTS.content}
      menuItemPriceFontSize="1.5rem"
      menuItemPriceFontWeight="600"
      menuItemPriceLetterSpacing=".15rem"
      menuItemPriceTextAlign="right"
      menuItemPriceTextTransform="uppercase"

      // Menu item description styling
      menuItemDescriptionFontFamily={FONTS.content}
      menuItemDescriptionFontSize="1.25rem"
      menuItemDescriptionLineHeight="125%"
      menuItemDescriptionPadding="1rem"
      menuItemDescriptionMaxWidth="30rem"

      // Menu item table styling
      menuItemTablePadding=".5rem"
      menuItemTableWidth="100%"
      menuItemTableDataLineHeight="125%"
      menuItemTableDataPadding=".25rem"

      // Sides styling
      sidesContainerOrderNumber="6"
      sidesContainerDisplay="flex"
      sidesContainerFlexFlow="column wrap"
      sidesContainerJustifyContent="center"
      sidesContainerTitleText="Sides"
      sideItemBackground="white"
      sideItemFontWeight="600"
      sideItemMargin=".5rem"
      sideItemMaxWidth="max-content"
      sideItemPadding=".5rem"
      sideItemTextTransform="capitalize"
    />
  )
}
