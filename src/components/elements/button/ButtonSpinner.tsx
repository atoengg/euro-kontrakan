"use client"

import React from 'react'
import { Button } from 'flowbite-react'
import { AiOutlineLoading } from 'react-icons/ai'
import { ButtonSpinnerProps } from '@/types'

export const ButtonSpinner = ({size, className, color, label} : ButtonSpinnerProps) => {
  return (
    <Button size={size} className={`flex items-center justify-center gap-4 ${className}`} color={color} pill >
        {<AiOutlineLoading className="h-6 w-6 animate-spin" />}
        <span>{label}</span>
    </Button>
  )
}
