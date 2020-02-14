import React from 'react'

import { IInput } from '../../interfaces/interfaces'
import './Input.scss'

  const Input: React.FC<IInput> = ({name, register, type, errors, label, ...args}) => {
  return (
    <>
      <div className={type === 'checkbox' ? 'content-checkbox' : 'content'}>
        <input
          id={name}
          name={name}
          className={errors![name] ? 'error' : ''}
          type={type}
          ref={register}
          {...args}
        />
        { label &&
          <label className={'label'} htmlFor={name}>{label}</label>
        }
      </div>
      {errors![name] && <span className={'error'}>{errors![name].message}</span>}
    </>
  )
}


export default  Input