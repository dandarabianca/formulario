import React from 'react';

export default function ReviewForm() {
  return (
    <div className='review-form'>
     <div className='form-control score-conteiner'>
      <label className='radio-conteiner'>
        <input
        type='radio'
        value='unsatisfied'
        name='review'
        required
        />
        <span>Insatisfeito</span>
      </label>
     </div>
    </div>
  )
}

