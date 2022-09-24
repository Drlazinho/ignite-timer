import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O tempo precisar ser de no mínimo 5 minutos')
    .max(60, 'O tempo precisar ser de no máximo 60 minutos')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

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
