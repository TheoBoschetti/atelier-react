import { useEffect, useState } from 'react'
import style from './form.module.css'

const array = ['ici', 'patate', 'carotte', 'tomate']

const Form = () => {
  const [value, setValue] = useState('')
  const [food, setFood] = useState(null)

  useEffect(() => {
    setFood(
      array.filter(food => food.toLowerCase().search(value.toLowerCase()) > -1)
    )
  }, [value])

  return (
    <div className={style.formContainer}>
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      {food && <p> {food} </p>}
    </div>
  )
}

export default Form
