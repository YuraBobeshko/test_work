import React from 'react'

import { IInput } from '../../interfaces/interfaces'
import './Input.scss'

  const Input: React.FC<IInput> = ({name, register, type, errors, customLabel, label, ...args}) => {
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
        {customLabel && <label className={'customLabel'} htmlFor={name}>{customLabel}</label>}
      </div>
      {errors![name] && <span className={'error'}>{errors![name].message}</span>}
    </>
  )
}


export default  Input