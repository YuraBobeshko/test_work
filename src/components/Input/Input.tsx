import React from 'react'

import './Input.css'

interface IInput {
  name: string
  register: any
  type: string
  errors: any
  label?: string
  args?: any[]
  customLabel?: any
}

  const Input: React.FC<IInput> = ({name, register, type, errors, customLabel, label, ...args}) => {
  console.log(errors)
  return (
    <>
      <div className={type === 'checkbox' ? 'content-checkbox' : 'content'}>
        { label &&
          <label className={'label'} htmlFor={name}>{label}</label>
        }
        <input
          id={name}
          name={name}
          className={type === 'checkbox' ? 'checkbox' : 'input'}
          type={type}
          ref={register}
          placeholder={name}
          {...args}
        />
        {customLabel && <label className={'label'} htmlFor={name}>{customLabel}</label>}
      </div>
      {errors![name] && <span className={'error'}>{errors![name].message}</span>}
    </>
  )
}


export default  Input