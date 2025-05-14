
type StarPropsType = {
  selected: boolean
};

export function Star( {selected}: StarPropsType) {
  return (
  <div>
  {selected ? <span><b>star</b></span> : <span>star</span> }

  </div>
  )
}
