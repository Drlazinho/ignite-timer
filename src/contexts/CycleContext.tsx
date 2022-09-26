import { differenceInSeconds } from 'date-fns'
import { Children, createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { ActionTypes, addNewCycleAction, interruptCurrentCycleAction, markCurrenteCycleAsFinishedAction } from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reduce'

interface CreateCycleData {
  task: string
  minutesAmount: number
}


interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondPassed: number
  setSecondPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  InterruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    }, () => {
      // Usando os dados do LocalStorage Armazenados
      const storedStateAsJSON = localStorage.getItem('@ignite-time:cycles-sate-1.0.0');

      if(storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    }
  )
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const [amountSecondPassed, setAmountSecondPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  // Armazenando em LocalStorage
  useEffect(() => {
    const stateJSON  = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-time:cycles-sate-1.0.0', stateJSON)
  }, [cyclesState])



  function setSecondPassed(seconds: number) {
    setAmountSecondPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrenteCycleAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondPassed(0)
  }

  // Função de interrompe ciclos
  function InterruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondPassed,
        setSecondPassed,
        createNewCycle,
        InterruptCurrentCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
