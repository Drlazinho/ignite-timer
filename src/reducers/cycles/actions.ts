import { Cycle } from "./reduce";

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENTE_CYCLE_aS_FINISHED = 'MARK_CURRENTE_CYCLE_aS_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    }
  }
}

export function markCurrenteCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENTE_CYCLE_aS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}