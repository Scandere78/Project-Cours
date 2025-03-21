import Link from "next/link";

// Données des voitures pour réutilisation
const cars = [
  {
    id: 2,
    name: "Audi RS3 Sportback",
    image: "/images/audi-rs3.webp",
    tag: { text: "NOUVEAU", color: "bg-red-500" },
    rating: "4.9 (42 avis)",
    description: "Performance exceptionnelle avec son moteur 5 cylindres de 400ch. Parfaite pour les amateurs de conduite sportive.",
    specs: [
      { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "400 ch" },
      { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "0-100 km/h en 3.8s" },
      { icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4", text: "Transmission Quattro" },
      { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "230€/jour" }
    ],
    price: "230€/jour"
  },
  {
    id: 3,
    name: "Lamborghini Huracán",
    image: "/images/lambo.jpg",
    tag: { text: "EXCLUSIF", color: "bg-orange-500" },
    rating: "5.0 (18 avis)",
    description: "L'expérience supercar par excellence. Design audacieux, performances extraordinaires et sensation de pilotage incomparable.",
    specs: [
      { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "640 ch" },
      { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "0-100 km/h en 2.9s" },
      { icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4", text: "Transmission intégrale" },
      { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "450€/jour" }
    ],
    price: "450€/jour"
  }
];

// Étapes du processus
const steps = [
  {
    step: '01',
    title: 'Choisissez votre véhicule',
    description: 'Parcourez notre catalogue et sélectionnez le véhicule qui correspond le mieux à vos besoins.',
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    step: '02',
    title: 'Réservez en ligne',
    description: 'Choisissez vos dates, options et mode de livraison. Paiement sécurisé direct.',
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    step: '03',
    title: 'Profitez de votre véhicule',
    description: 'Récupérez-le en agence ou faites-vous livrer directement chez vous.',
    icon: "M5 3l14 9-14 9V3z"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/voiture.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full pt-20">
          <div className="w-full text-center px-4 md:px-20 max-w-4xl mx-auto">
            <h1 className="font-anton bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-6xl md:text-7xl mb-4">
              Louez en toute simplicité,<br />Roulez en toute liberté !
            </h1>
            <p className="font-montserrat text-white text-xl md:text-2xl mt-4 mb-8">
              Location 100% en ligne • Livraison à domicile ou en Agence • Sans engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/bolide" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-montserrat font-serif py-4 px-8 rounded-lg transition-all shadow-lg flex items-center justify-center">
                <span>Voir nos véhicules</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#process" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-montserrat font-sans py-4 px-8 rounded-lg transition-all shadow-lg border border-white/30">
                Comment ça marche ?
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
          <a href="#featured" className="text-white text-4xl hover:text-red-400 transition-colors">
            <svg className="animate-bounce h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Notre flotte */}
      <section id="featured" className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-3xl md:text-5xl text-center font-anton mb-8 text-white">
            Notre Sélection <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Premium</span>
          </h2>
          <p className="font-montserrat text-white italic text-center text-xl mb-12 max-w-3xl mx-auto">
            "Chez SwiftLoc, nous sélectionnons les meilleurs véhicules pour une expérience de conduite incomparable."
          </p>

          <div className="max-w-5xl mx-auto space-y-10">
            {cars.map(car => (
              <div key={car.id} className="overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 bg-gradient-to-r from-gray-900 to-black">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <div className="relative h-80 w-full overflow-hidden">
                      <img src={car.image} alt={car.name} className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" />
                      <div className="absolute top-4 left-4">
                        <span className={`${car.tag.color} text-white px-3 py-1 rounded-full text-sm font-serif`}>{car.tag.text}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-2xl font-anton text-white">{car.name}</h3>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-montserrat text-white ml-1 text-sm">{car.rating}</span>
                      </div>
                    </div>
                    <p className="font-montserrat text-gray-300 mb-6">{car.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {car.specs.map((spec, i) => (
                        <div key={i} className="font-montserrat text-gray-400 text-sm flex items-center">
                          <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                          </svg>
                          {spec.text}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="font-montserrat bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {car.price}
                      </span>
                      <Link href={`/bolide/${car.id}`} className="font-montserrat font-medium bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-all flex items-center">
                        Réserver maintenant
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/bolide" className="inline-block font-montserrat font-serif bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-4 px-10 rounded-xl transition-all shadow-lg">
              Découvrir toute notre flotte
            </Link>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="process" className="bg-black py-24">
        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-center font-anton mb-16 text-white">
              Comment fonctionne notre <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">service 100% en ligne</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl">
                  <div className="mb-4 flex items-center">
                    <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="font-anton text-3xl ml-auto text-white">{item.step}</span>
                  </div>
                  <h3 className="font-anton text-xl text-white mb-4">{item.title}</h3>
                  <p className="font-montserrat text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-anton text-2xl text-white mb-2">Prêt à prendre la route ?</h3>
                  <p className="font-montserrat text-gray-300">Réservez dès maintenant et profitez de nos tarifs exclusifs en ligne.</p>
                </div>
                <Link href="/bolide" className="font-montserrat whitespace-nowrap bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-3 px-8 rounded-lg transition-all shadow-lg">
                  Réserver maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Section Partenaires */ }
  <section className="bg-gradient-to-b from-gray-900 to-black py-24">
    <div className="container mx-auto px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-anton text-white mb-6">
              Vous <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">gérez une agence</span> de location ?
            </h2>
            <p className="font-montserrat text-gray-300 leading-relaxed mb-6">
              Rejoignez notre plateforme et donnez une visibilité nationale à votre flotte de véhicules. SwiftLoc vous permet de promouvoir vos voitures auprès d'une clientèle qualifiée et en recherche active.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Inscrivez votre agence en moins de 5 minutes',
                'Ajoutez et gérez facilement votre flotte de véhicules',
                'Recevez des réservations en ligne instantanément',
                'Suivez vos performances via un tableau de bord dédié'
              ].map((item, index) => (
                <li key={index} className="flex items-start font-montserrat text-white">
                  <svg className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/devenir-partenaire"
              className="font-montserrat  bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-3 px-8 rounded-lg transition-all shadow-lg inline-flex items-center"
            >
              Devenir partenaire
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-gray-800 to-black p-1 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <h3 className="font-anton text-2xl text-white mb-2">Processus simple en 3 étapes</h3>
                  <p className="font-montserrat text-gray-400 text-sm">Commencez à générer des revenus supplémentaires dès aujourd'hui</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-white">Créez votre compte professionnel</h4>
                      <p className="font-montserrat text-gray-400 text-sm mt-1">Fournissez vos informations d'entreprise et validez votre compte</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat text-white">Ajoutez vos véhicules</h4>
                      <p className="font-montserrat text-gray-400 text-sm mt-1">Téléchargez des photos, spécifications et définissez vos tarifs</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat  text-white">Commencez à recevoir des réservations</h4>
                      <p className="font-montserrat text-gray-400 text-sm mt-1">Les clients peuvent réserver et payer directement en ligne</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 flex items-center justify-between border-t border-gray-800">
                  <div className="font-montserrat text-gray-300 text-sm">
                  </div>
                  <div className="font-montserrat text-red-400  text-sm">
                    Commission de seulement 8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}