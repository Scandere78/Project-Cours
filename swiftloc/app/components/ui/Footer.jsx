import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 md:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo et réseaux sociaux */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-anton text-red-400 text-2xl">
              SwiftLoc
            </Link>
            <p className="font-montserrat text-gray-400 mt-2 text-sm">
              Location de véhicules 100% en ligne
            </p>
            <div className="flex space-x-4 mt-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-anton text-white text-lg mb-3">Liens rapides</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Véhicules', href: '/bolide' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Contact', href: '/contact' },
                { name: 'Conditions', href: '/conditions' },
                { name: 'Partenaires', href: '/devenir-partenaire' },
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-red-400 transition-colors font-montserrat text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-anton text-white text-lg mb-3">Contact</h3>
            <p className="font-montserrat text-gray-400 text-sm">
              support@swiftloc.fr
            </p>
            <p className="font-montserrat text-gray-400 text-sm">
              01 23 45 67 89
            </p>
            <p className="font-montserrat text-gray-400 text-sm mt-2">
              123 Avenue des Champs-Élysées<br />
              75008 Paris, France
            </p>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="bg-gray-900 py-3">
        <div className="container mx-auto px-4 md:px-20 flex justify-center text-center">
          <p className="font-montserrat text-gray-500 text-xs">
            © {new Date().getFullYear()} SwiftLoc. Tous droits réservés. | 
            <a href="/privacy" className="text-gray-400 hover:text-red-400 ml-1">
              Confidentialité
            </a> | 
            <a href="/legal" className="text-gray-400 hover:text-red-400 ml-1">
              Mentions légales
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;