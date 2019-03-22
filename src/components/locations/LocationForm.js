import React from 'react'

export default function LocationForm(props) {
  return (<form onSubmit={props.onSubmit}>
    <label>
      Name:
      <input type="text" name="name" onChange={props.onChange} value={props.values.name} />
    </label>
    <br></br>
    <label>
      Description:
      <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
    </label>
    <br></br>
    <label>
      Picture:
      <input type="text" name="picture" onChange={props.onChange} value={props.values.picture} />
    </label>
    <br></br>
    <label>
      Date:
      <input type="text" name="date" onChange={props.onChange} value={props.values.date} />
    </label>
    <br></br>
    <button type="submit">Save</button>
  </form>)
}