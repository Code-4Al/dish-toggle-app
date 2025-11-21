'use client'

import { useState, useEffect } from 'react'
import { getDishes } from './actions/toggleDish'
import { Dish } from './types/dish.types'
import DishCard from './components/DishCard'

export default function HomePage() {
  const [dishes, setDishes] = useState<Dish[]>([])
  const [loading, setLoading] = useState(true)

  // Load dishes function
  const loadDishes = async () => {
    try {
      const dishesData = await getDishes()
      setDishes(dishesData)
    } catch (error) {
      console.error('Failed to load dishes:', error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    loadDishes()
  }, [])


  useEffect(() => {
    const interval = setInterval(loadDishes, 5000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Dish Dashboard</h1>
        <div className="text-center py-8">Loading dishes...</div>
      </div>
    )
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dish Dashboard</h1>


    
      {dishes.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No dishes found. Add some dishes to get started.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dishes.map((dish) => (
            <DishCard key={dish.dishId} dish={dish} />
          ))}
        </div>
      )}
    </div>
  )
}






