import React, { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CyclesContext } from '../../../../contexts/CycleContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const {activeCycle} = useContext(CyclesContext)
  const {register} = useFormContext()

  return (
    <FormContainer>
    <label htmlFor="task">Vou trabalhar em</label>
    <TaskInput
      type="text"
      id="task"
      list="taks-suggestion"
      placeholder="Dê um nome para o seu projeto"
      {...register('task')}
      disabled={!!activeCycle}
    />

    <datalist id="taks-suggestion">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
    </datalist>

    <label htmlFor="minutesAmount">durante</label>
    <MinutesAmountInput
      type="number"
      id="minutesAmount"
      placeholder="60"
      step={5}
      min={5}
      {...register('minutesAmount', { valueAsNumber: true })}
      disabled={!!activeCycle}
    />

    <span>minutos.</span>
  </FormContainer>  )
}
