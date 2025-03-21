import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import car from '../../public/images/car.png'

// Données des véhicules
const vehicles = [
  {
    id: 1,
    type: "Sport Class",
    name: "AUDI RS3",
    price: "200€/jour",
    contact: "+33 6 12 34 56 78",
    image: car
  },
  {
    id: 2,
    type: "Premium Luxe",
    name: "BMW M4",
    price: "230€/jour",
    contact: "+33 6 23 45 67 89",
    image: car
  },
  {
    id: 3,
    type: "SUV Confort",
    name: "Mercedes GLC",
    price: "180€/jour",
    contact: "+33 6 34 56 78 90",
    image: car
  },
  {
    id: 4,
    type: "Électrique",
    name: "Tesla Model 3",
    price: "210€/jour",
    contact: "+33 6 45 67 89 01",
    image: car
  }
];

export default function Vehicules() {
  return (
    <div className='bg-gray-200 py-50'>
        <div className='container mx-auto px-4'>
            <h4 className='font-anton uppercase text-center mb-1 italic text-xl bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent py-9'>
              Notre gamme de voitures : style, confort et performance!
            </h4>
            <h2 className='font-anton text-center text-5xl text-black mt-5 mb-12'>
              "Choisis ta caisse et casse-toi !"
            </h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
              {vehicles.map(vehicle => (
                <Link 
                  href={`/bolide/${vehicle.id}`} 
                  key={vehicle.id}
                  className='bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden'
                >
                  <div className='relative h-56 w-full bg-gradient-to-r from-gray-800 to-gray-900'>
                    <div className='absolute inset-x-5 bottom-0 z-10 w-4/5 h-auto transform translate-x-4'>
                      <Image 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        width={300}
                        height={150}
                        style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
                      />
                    </div>
                    <div className='absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-anton'>
                      {vehicle.price}
                    </div>
                  </div>
                  
                  <div className='p-5'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-xs text-gray-500 font-semibold'>{vehicle.type}</span>
                      <span className='text-xs bg-gray-200 px-2 py-1 rounded-full'>Disponible</span>
                    </div>
                    <h3 className='font-anton text-lg text-gray-800'>{vehicle.name}</h3>
                    
                    <div className='mt-3 pt-3 border-t border-gray-200'>
                      <div className='flex items-center text-sm text-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {vehicle.contact}
                      </div>
                      <div className='flex justify-end mt-2'>
                        <span className='text-sm font-medium text-red-500 hover:underline'>Réserver maintenant</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
    </div>
  )
}