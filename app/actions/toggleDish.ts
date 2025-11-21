'use server'

import prisma from '@/lib/prisma'

export async function getDishes() {
  try {
    const dishes = await prisma.dish.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return dishes
  } catch (error) {
    console.error('Error fetching dishes:', error)
    throw new Error('Failed to fetch dishes')
  }
}

export async function toggleDish(dishId: string) {
  try {
    const dish = await prisma.dish.findUnique({
      where: { dishId },
    })

    if (!dish) {
      throw new Error('Dish not found')
    }

    const updatedDish = await prisma.dish.update({
      where: { dishId },
      data: {
        isPublished: !dish.isPublished,
      
      },
    })

    return updatedDish
  } catch (error) {
    console.error('Error toggling dish:', error)
    throw new Error('Failed to toggle dish status')
  }
}

