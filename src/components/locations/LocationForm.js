import React from 'react'

export default function LocationForm(props) {
  return (<form onSubmit={props.onSubmit}>
    <label>
      Name:
      <input type="text" name="name" onChange={props.onChange} value={props.values.name} />
    </label>
    <br></br>
    <label>
      Picture:
      <input type="text" name="picture" onChange={props.onChange} value={props.values.picture} />
    </label>
    <br></br>
    <button type="submit">Save</button>
  </form>)
}