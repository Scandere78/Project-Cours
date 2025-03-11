import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/voiture.mp4" type="video/mp4" />
          </video>
          {/* Overlay de dégradé sur la vidéo */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30" />
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full pt-20">
          <div className="font-anton w-full text-center px-4 md:px-20 max-w-4xl mx-auto">
            <h1 className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-7xl max-w-m mb-4 mx-auto italic">
              Louez en toute simplicité,
              <br />Roulez en toute liberté !
            </h1>
            <span className="font-anton text-white text-3xl mt-2 italic">
              T'as besoin d'une caisse ? On t'fait rouler direct !
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
          <a href="#services" className="text-white text-4xl hover:text-red-400 transition-colors">
            <svg
              className="animate-bounce h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      <section id="services" className="bg-gradient-to-b from-gray-900 to-black py-40">
        <div className="container mx-auto px-4 py-16 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-center font-anton mb-12 text-white">
              Simplifiez votre mobilité avec <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">SwiftLoc</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              {/* Contenu descriptif */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-anton text-red-400 mb-6">Une expérience de location simplifiée</h3>

                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full border-2 border-red-400 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      </div>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      Notre processus de réservation simple et rapide vous permet d'obtenir le véhicule idéal en quelques clics seulement.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full border-2 border-red-400 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      </div>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      Une flotte diversifiée de véhicules récents et bien entretenus pour répondre à tous vos besoins de déplacement.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full border-2 border-red-400 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      </div>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      Des tarifs transparents et compétitifs, sans frais cachés ni mauvaises surprises.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Carte avec CTA */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-anton text-white mb-4">Votre prochaine location à portée de main</h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Chez SwiftLoc, nous comprenons que votre temps est précieux. Notre objectif est de vous offrir une solution de mobilité flexible et sans contrainte, adaptée à vos besoins spécifiques.
                  </p>

                  <div className="border-l-4 border-red-400 pl-4 mb-6">
                    <p className="text-gray-300 italic">
                      "SwiftLoc a révolutionné ma façon de me déplacer. Service impeccable et véhicules toujours en parfait état."
                    </p>
                    <p className="text-sm text-gray-400 mt-2">— Jean Dupont, client depuis 2023</p>
                  </div>
                </div>

                <div id="/reservation" className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
                  <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-md transition-all shadow-lg flex items-center justify-center">
                    <span>Réserver votre véhicule</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-20">
          <h1 className="text-3xl md:text-5xl text-center font-anton mb-12 text-white">Nos Voitures</h1>
          <p className="text-white italic text-center text-xl">"Chez SwiftLoc, chaque voiture est entretenue avec soin pour te garantir une conduite fluide et sans souci.
            <br /> Nettoyage, contrôle mécanique, révision complète… On veille à ce que chaque caisse soit nickel et prête à rouler.
            <br /> Monte à bord, on s’occupe du reste ! 🚗✨"
          </p>
          <p className="text-white italic text-center text-xl my-10">"Nos voitures ? Propres, récentes et prêtes à rouler ! Que ce soit pour un road-trip, un déplacement pro ou juste le kiff,<br /> on t’assure du confort et de la fiabilité. <br /> Avec SwiftLoc, tu prends la route en toute confiance !" 🚗🔥</p>


        </div>

      </section>
    </>
  );
}