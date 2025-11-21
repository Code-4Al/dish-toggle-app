'use client'

import { useState } from 'react'
import { toggleDish } from '../actions/toggleDish'
import { Dish } from '../types/dish.types'
import Image from 'next/image'

export default function DishCard({ dish }: { dish: Dish }) {
  const [isUpdating, setIsUpdating] = useState(false)

  const handleToggle = async () => {
    setIsUpdating(true)

    try {
      await toggleDish(dish.dishId)
    } catch (error) {
      console.error('Failed to toggle dish:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-48 mb-3">
        <Image
          src={dish.imageUrl.trim() || '/placeholder-dish.jpg'}
          alt={dish.dishName}
          fill
          className="object-cover rounded-md"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = '/placeholder-dish.jpg'
          }}
        />
      </div>

      <h2 className="font-bold text-lg text-gray-800 mb-2">{dish.dishName}</h2>

      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-600">Status:</span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            dish.isPublished
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {dish.isPublished ? 'Published' : 'Unpublished'}
        </span>
      </div>

      <button
        onClick={handleToggle}
        disabled={isUpdating}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isUpdating
          ? 'Updating...'
          : `Mark as ${dish.isPublished ? 'Unpublished' : 'Published'}`}
      </button>
    </div>
  )
}





