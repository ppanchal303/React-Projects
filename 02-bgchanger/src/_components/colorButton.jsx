function ColorButton ({ colorName, onClick }) {
  return (
    <>
      <button
        className='rounded-full px-4 py-1'
        style={{ backgroundColor: colorName }}
        onClick={onClick}
      >
        {colorName}
      </button>
    </>
  )
}

export default ColorButton
