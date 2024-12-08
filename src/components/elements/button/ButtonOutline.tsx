"use client"

import { buttonOutlineProps } from '@/types'
import React from 'react'

export const ButtonOutline = ({label, className}: buttonOutlineProps) => {
  return (
    <>
        <button className={className}>{label}</button>
    </>
  )
}
