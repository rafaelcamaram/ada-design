# ADA Design UI

WIP library

## Why is Form Accessibility so important?

[W3.1](https://www.w3.org/WAI/tutorials/forms/) Forms can be visually and cognitively complex and challenging to use. Accessible forms are easier to use for everyone, including people with disabilities.

- **People with cognitive disabilities** can better understand the form and how to complete it, as making forms accessible improves the layout structure, instructions, and feedback.

- **People using speech input** can use the labels via voice commands to activate controls and move the focus to the fields that they have to complete.

- **People with limited dexterity** benefit from large clickable areas that include the labels, especially for smaller controls, such as radio buttons and checkboxes.

- **People using screen readers** can identify and understand form controls more easily because they are associated with labels, field sets, and other structural elements.

## Form Concepts

[W3.1](https://www.w3.org/WAI/tutorials/forms/) Aside from technical considerations, users usually prefer simple and short forms. Only ask users to enter what is required to complete the transaction or process; if irrelevant or excessive data is requested, users are more likely to abandon the form.

- [Label Control](https://www.w3.org/WAI/tutorials/forms/labels/)
  - Use the `<label>` element, and, in specific cases, other mechanisms (e.g. WAI-ARIA, title attribute etc.), to identify each form control.
  - Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done by using the <label> element.
- Grouping Controls
  - Use the `<fieldset>` and `<legend>` elements to group and associate related form controls.
- Form Instructions
  - Provide instructions to help users understand how to complete the form and individual form controls.
- Validating Input
  - Validate input provided by the user and provide options to undo changes and confirm data entry.
- User Notifications
  - Notify users about successful task completion, any errors, and provide instructions to help them correct mistakes.

## Status: View CSS Properties

- ✅ alignContent
- ✅ alignItems
- ✅ alignSelf
- ✅ background
- ✅ mixBlendMode
- ✅ backgroundClip
- ✅ backgroundColor
- ✅ backgroundImage
- ✅ backgroundOrigin
- ✅ backgroundPosition
- ✅ backgroundRepeat
- ✅ backgroundSize
- ✅ border
- ✅ borderBottom
- ✅ borderBottomColor
- ✅ borderBottomLeftRadius
- ✅ borderBottomRightRadius
- ✅ borderBottomStyle
- ✅ borderBottomWidth
- ✅ borderColor
- ✅ borderLeft
- ✅ borderLeftColor
- ✅ borderLeftStyle
- ✅ borderLeftWidth
- ✅ borderRadius
- ✅ borderRight
- ✅ borderRightColor
- ✅ borderRightStyle
- ✅ borderRightWidth
- ✅ borderStyle
- ✅ borderTop
- ✅ borderTopColor
- ✅ borderTopLeftRadius
- ✅ borderTopRightRadius
- ✅ borderTopStyle
- ✅ borderTopWidth
- ✅ borderWidth
- ✅ bottom
- ✅ boxShadow
- ✅ boxSizing - Set to border-box by default.
- ✅ clear
- ✅ color
- columnGap
- ✅ cursor
- ✅ display
- ✅ flex
- ✅ flexBasis
- ✅ flexDirection
- ✅ flexFlow
- ✅ flexGrow
- ✅ flexShrink
- ✅ flexWrap
- ✅ float
- ✅ font
- ✅ fontFamily
- ✅ fontSize
- ✅ fontStyle
- ✅ fontVariant
- ✅ fontWeight
- gap
- grid
- gridArea
- gridAutoColumns
- gridAutoFlow
- gridAutoRows
- gridColumn
- gridColumnEnd
- gridColumnGap
- gridColumnStart
- gridGap
- gridRow
- gridRowEnd
- gridRowGap
- gridRowStart
- gridTemplate
- gridTemplateAreas
- gridTemplateColumns
- gridTemplateRows
- ✅ height
- ✅ justifyContent
- ✅ justifyItems
- ✅ justifySelf
- ✅ left
- ✅ letterSpacing
- ✅ lineHeight
- listStyle
- listStyleImage
- listStylePosition
- listStyleType
- ✅ margin
- ✅ marginBottom
- ✅ marginLeft
- ✅ marginRight
- ✅ marginTop
- ✅ marginX - Sets marginLeft and marginRight to the same value.
- ✅ marginY - Sets marginTop and marginBottom to the same value.
- ✅ maxHeight
- ✅ maxWidth
- ✅ minHeight
- ✅ minWidth
- ✅ opacity
- ✅ order
- ✅ outline
- ✅ overflow
- ✅ overflowX
- ✅ overflowY
- ✅ padding
- ✅ paddingBottom
- ✅ paddingLeft
- ✅ paddingRight
- ✅ paddingTop
- ✅ paddingX - Sets paddingLeft and paddingRight to the same value.
- ✅ paddingY - Sets paddingTop and paddingBottom to the same value.
- placeContent
- placeItems
- placeSelf
- pointerEvents
- ✅ position
- resize
- ✅ right
- rowGap
- ✅ textAlign
- ✅ textDecoration
- ✅ textOverflow
- ✅ textShadow
- ✅ textTransform
- ✅ top
- ✅ transform
- ✅ transformOrigin
- ✅ transition
- ✅ transitionDelay
- ✅ transitionDuration
- ✅ transitionProperty
- ✅ transitionTimingFunction
- userSelect
- verticalAlign
- ✅ visibility
- ✅ whiteSpace
- ✅ width
- wordBreak
- ✅ wordWrap
- ✅ zIndex

## References

- W3.1 - https://www.w3.org/WAI/tutorials/forms/
