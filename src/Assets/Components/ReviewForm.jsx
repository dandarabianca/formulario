import React from 'react';
import "./ReviewForm.css";


export default function ReviewForm({data}) {
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
      <label className='radio-conteiner'>
        <input
        type='radio'
        value='neutral'
        name='review'
        required
        />
        <span>Poderia ser melhor</span>
      </label>
      <label className='radio-conteiner'>
        <input
        type='radio'
        value='satisfied'
        name='review'
        required
        />
        <span>Satisfeito</span>
      </label>
      <label className='radio-conteiner'>
        <input
        type='radio'
        value='very_satisfied'
        name='review'
        required
        />
        <span>Muito satisfeito</span>
      </label>
     </div>
     <div className='form-control'>
     <label htmlFor='coment'>Cometário:</label>
     <textarea name='coment' id='coment' placeholder='Conte como foi a sua experiencia com o produto...' required></textarea>
     </div>
    </div>
  )
}


