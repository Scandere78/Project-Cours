"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Au lieu d'importer les images statiquement, utilisez-les directement dans le composant Image
export default function VehicleDetails({ params }) {
  const { id } = params;
  
  // Données simulées pour ce véhicule spécifique
  const vehicle = {
    id: parseInt(id),
    type: "Sport Class",
    name: "AUDI RS3",
    price: "200€/jour",
    contact: "+33 6 12 34 56 78",
    description: "Performance exceptionnelle avec son moteur 5 cylindres de 400ch. Parfaite pour les amateurs de conduite sportive qui ne veulent pas sacrifier le confort.",
    specs: {
      motor: "2.5L 5 cylindres turbo",
      power: "400 ch",
      acceleration: "0-100 km/h en 3.8s",
      transmission: "Quattro (4 roues motrices)",
      consumption: "8.5L/100km"
    },
    features: ["Sièges sport en cuir", "Système audio Bang & Olufsen", "Jantes 19 pouces", "Virtual Cockpit", "Démarrage sans clé"],
    owner: {
      name: "Jean Dupont",
      rating: 4.8,
      reviews: 42,
      since: "Avril 2022",
      description: "Passionné d'automobiles depuis toujours, je propose uniquement des véhicules premium parfaitement entretenus."
    }
  };

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculer le prix total lors de la modification des dates
  const calculatePrice = (start, end) => {
    if (!start || !end) return;
    
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    
    // Calculer le nombre de jours entre les deux dates
    const diffTime = Math.abs(endDateObj - startDateObj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    setTotalDays(diffDays);
    setTotalPrice(diffDays * 200); // Prix par jour (200€)
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    calculatePrice(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    calculatePrice(startDate, e.target.value);
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-white mb-6">
          <Link href="/bolide" className="text-gray-400 hover:text-red-400">
            Nos véhicules
          </Link>
          <span className="mx-2">/</span>
          <span className="text-red-400">{vehicle.name}</span>
        </div>
        
        {/* En-tête du véhicule */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="md:w-2/3">
            <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900">
              {/* Utilisez directement l'URL au lieu d'un import */}
              <Image 
                src="/images/bg.jpg" 
                alt="Background" 
                fill 
                style={{ objectFit: 'cover' }}
                className="z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 w-full z-20 flex justify-center transform translate-y-20">
                <Image 
                  src="/images/car.png" 
                  alt={vehicle.name} 
                  width={500}
                  height={500}
                  style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
                />
              </div>
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold z-20">
                {vehicle.price}
              </div>
              <div className="absolute top-4 right-4 bg-gray-800/80 text-white px-4 py-2 rounded-lg font-bold z-20">
                {vehicle.type}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-anton text-white mb-2">{vehicle.name}</h1>
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-red-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {vehicle.type}
              </span>
              <div className="ml-auto flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white ml-1">4.9 (24 avis)</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">{vehicle.description}</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-white">
                <span>Moteur:</span>
                <span className="font-semibold">{vehicle.specs.motor}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Puissance:</span>
                <span className="font-semibold">{vehicle.specs.power}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>0-100 km/h:</span>
                <span className="font-semibold">{vehicle.specs.acceleration}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Transmission:</span>
                <span className="font-semibold">{vehicle.specs.transmission}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white">{vehicle.contact}</span>
            </div>
            
            <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center">
              <span>Réserver maintenant</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Reste du code... */}
        {/* Tableau de réservation */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-anton text-white mb-6">Réserver ce véhicule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-300 mb-2">Date de début</label>
              <input 
                type="date" 
                value={startDate}
                onChange={handleStartDateChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Date de fin</label>
              <input 
                type="date" 
                value={endDate}
                onChange={handleEndDateChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800/50 p-4 rounded-lg mb-6">
            <div>
              <h3 className="text-white font-semibold">Récapitulatif</h3>
              {totalDays > 0 && (
                <p className="text-gray-400">{totalDays} jour{totalDays > 1 ? 's' : ''} × {vehicle.price.replace('€/jour', '€')}</p>
              )}
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-2xl font-bold text-white">{totalPrice}€</span>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all">
            Confirmer la réservation
          </button>
        </div>
        
        {/* Informations du loueur */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-anton text-white mb-6">À propos du loueur</h2>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden relative flex items-center justify-center">
              <span className="text-2xl text-white font-bold">{vehicle.owner.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-xl text-white font-bold">{vehicle.owner.name}</h3>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white ml-1">{vehicle.owner.rating} ({vehicle.owner.reviews} avis)</span>
              </div>
              <p className="text-gray-400">Membre depuis {vehicle.owner.since}</p>
            </div>
          </div>
          
          <p className="text-gray-300">{vehicle.owner.description}</p>
        </div>
        
        {/* Bouton de retour */}
        <div className="flex justify-center mt-10">
          <Link href="/bolide" className="text-white flex items-center hover:text-red-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la liste des véhicules
          </Link>
        </div>
      </div>
    </div>
  );
}