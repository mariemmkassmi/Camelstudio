import type { Metadata } from 'next'
import { Inter,Roboto_Serif } from 'next/font/google'
import './globals.css'

const inter = Roboto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Camel Studio',
  description: 'Camel Studio est une agence de développement web et mobile spécialisée dans la création d\'applications sur mesure, l\'expérience utilisateur, le conseil technologique, et la gestion de projet. L\'entreprise se distingue par son approche agile et résiliente, cherchant à fournir des solutions efficaces et adaptées aux besoins de ses clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
