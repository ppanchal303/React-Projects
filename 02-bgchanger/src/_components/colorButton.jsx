function ColorButton ({ colorName }) {
  return (
    <>
      <button
        className='rounded-full px-4 py-1'
        style={{ backgroundColor: colorName }}
      >
        {colorName}
      </button>
    </>
  )
}

export default ColorButton
