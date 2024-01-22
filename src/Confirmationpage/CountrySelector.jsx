import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select className='w-full mb-2' placeholder="Select your country" id='Country' options={options} value={value} onChange={changeHandler} required />
}

export default CountrySelector