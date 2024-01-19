import {
  QuestionMarkCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  FireIcon,
  HandRaisedIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  UserIcon
} from '@heroicons/react/20/solid'
import Image from 'next/image'

const services = [
  {
    name: "# Création d'application web sur mesure",
    description:
      'Au Camel Studio, on crée des sites web adaptés à vos besoins. Pas de superflu, juste des solutions efficaces et un espace unique pour votre présence en ligne.'
  },
  {
    name: ' # Application mobile',
    description:
      'Plongez dans le monde mobile avec nos applications spécialement conçues pour vos aventures sur iOS et Android. Ici, on se démène pour vous offrir une expérience utilisateur exceptionnelle, où que vous soyez.'
  },
  {
    name: '# Conseil tech',
    description:
      "On n'est pas que des codeurs, on est là pour vous guider dans le monde de la tech et être votre allié dans vos prises de décisions."
  },
  {
    name: '# Conseils en développement',
    description:
      'Au Camel Studio, on ne vous embrouille pas avec du jargon tech et une terminologie perchée. On parle votre langue et on vous explique les choses étape par étape, afin de trouver les solutions optimales pour votre projet. On ne fait pas dans le compliqué, on fait le job'
  },
  {
    name: ' # Gestion de projet',
    description:
      'On prend en charge votre projet et on le mène à bien. Peu importe l’étape de son avancement, on saura s’y greffer et le faire décoller.'
  },
  {
    name: '# Design UX/UI',
    description:
      "Notre équipe crée des interfaces qui fonctionnent bien, propres et au goût du jour. Pas de trucs tape-à-l'œil, mais des designs intelligents."
  }
]

const cards = [
  {
    name: 'Qui sommes-nous ?',
    description:
      "Une équipe jeune, soudée en quête de nouvelles expériences et de nouveau projets Pas de blabla ici. On code, on design, on résout des problèmes. Notre équipe ? Des gens sympas qui aiment ce qu'ils font et qui le font bien. On sait ce qui se passe sur le marché européen, et on sait comment s'y prendre pour des projets qui fonctionnent. On est sympa, et surtout  pros.",
    icon: UserGroupIcon
  },
  {
    name: "Ce qu'on sait faire ?",
    description:
      "On fait du développement sur mesure, des applications web fluides et des solutions digitales qui marchent. On n'a pas de formules magiques, juste du bon boulot.",
    icon: LightBulbIcon
  },
  {
    name: 'Pourquoi nous ?',
    description:
  'Pas de blabla, que du boulot : On va droit au but. Pas de promesses vides, juste des résultats concrets.<br/> On est jeunes et on sait ce qu\'on fait. Une bonne énergie et un bon mindset. <br/> Des prix raisonnables : On est basés en Tunisie, alors nos tarifs sont cool. Qualité pro, sans se ruiner. ',

    icon: QuestionMarkCircleIcon
  },
  {
    name: 'On bosse comment ?',
    description:
      "Si vous en avez marre des discours pompeux et que vous voulez des résultats tangibles, parlons de votre projet. Contactez-nous et discutons sérieusement de ce que l'on peut faire ensemble.",
    icon: RocketLaunchIcon
  }
]

const experiences = [
  {
    name: 'Formiz',
    description:
      "Formiz, notre fierté open source, est bien plus qu'un simple formulaire. C'est une expérience de développement fluide, conçue pour simplifier la gestion des données et rendre la création de formulaires aussi agréable que possible. Avec Formiz, la puissance du développement est entre vos mains.",
    href: 'https://github.com/BearStudio/formiz',
    imageUrl: '/Formiz.png'
  },
  {
    name: 'Jhipster',
    description:
      "Jhipster, un autre de nos engagements open source, est une boîte à outils complète pour développer des applications web modernes. Avec une architecture solide, des fonctionnalités étendues et une intégration transparente, Jhipster accélère le processus de développement, vous permettant de vous concentrer sur l'essentiel : la création d'une expérience utilisateur exceptionnelle.",
    href: 'https://github.com/jhipster',
    imageUrl: '/jhipster.png'
  },
  {
    name: 'Start UI',
    description:
      "StartUI, notre projet basé sur NextJS, TypeScript, ChakraUI et React-Query, est bien plus qu'un simple starter. C'est une invitation à explorer le monde du développement web moderne avec un ensemble de technologies soigneusement sélectionnées. Lancez votre projet avec StartUI et donnez-lui une longueur d'avance dans le monde numérique.",
    href: 'https://github.com/BearStudio/start-ui-web',
    imageUrl: '/startui.png'
  }
]
const options = [
  {
    name: 'Option 1',
    icon: FireIcon,
    description:
      "Vous avez déjà une équipe en place et vous voulez la booster ? Aucun problème ! Prenez l'un de nos développeurs, et non seulement vous aurez un professionnel dédié, mais vous aurez aussi accès à l'expertise collective de toute notre équipe qui le soutient et l’épaule en coulisses. "
  },
  {
    name: 'option 2',

    description:
      "Vous préférez déléguer l'intégralité de votre projet à notre équipe ? Laisse-nous prendre les rênes. Confiez-nous votre vision, et notre équipe de développement mettra en œuvre chaque ligne de code avec soin, du concept à la réalisation."
  }
]

export default function Hero () {
  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <div className='px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0'>
          <Image alt='/Camel Studio' width='58' height='58' src='logo.svg' />
        </div>
      </header>

      <div className='relative'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 pt-14 lg:w-full lg:max-w-2xl'>
            <svg
              className='absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='0,0 90,0 50,100 0,100' />
            </svg>

            <div className='relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0'>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
                <Image
                 height='580'
                  alt='Camel Studio'
                  width='580'
                  className='h-10 w-auto mb-4 '
                  src='/logocamel.png'
                />

                <h1 className='text-4xl font-bold tracking-tight text-blue-700 sm:text-6xl margin-2'>
                  Boîte de devs agiles et résilients
                </h1>
                <p className='mt-6 text-lg leading-8 text-black'>
                  Au <strong className='font-bold'>Camel Studio </strong>on sait
                  comment garder la tête froide même dans les projets les plus
                  chauds. Pas de bosses, que des solutions.
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <a
                    href='mailto:contact@camelstudiotunisie.com'
                    className='rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Contactez-nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <Image
           height='900'
           width='900'
            className='aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full'
            src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
            alt=''
          />
        </div>
      </div>

      <div className='max-w-8xl px-6 lg:px-8 mt-28 mb-20'>
        <h2 className='text-4xl font-extrabold text-center text-black mb-20 flex items-center justify-center'>
          Adieu <HandRaisedIcon className='h-8 w-8 text-yellow-500 mx-1' /> aux
          soucis Web . Dites bonjour à votre équipe de rêve.
        </h2>
        <div className='mx-auto grid max-w-full grid-cols-1 lg:mx-0 lg:max-w-none'>
          <dl className='mx-auto grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-3'>
            {services.map(service => (
              <div
                key={service.name}
                className='relative mb-6 lg:mb-0 lg:p-4 lg:w-full'
              >
                <dt className='font-semibold text-2xl text-blue-700'>
                  {service.name}
                </dt>
                <dd className='mt-2 text-lg text-gray-800'>
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
        <Image
         height='2000'
         width='2000'
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
        />

        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Camel Studio
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Nous transformons les idées en réalité car chaque projet mérite
              une touche de magie! 🚀🐪
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8'>
            {cards.map(card => (
              <div key={card.name} className='flex gap-x-4  bg-white/5 p-6 '>
                <card.icon
                  className='h-7 w-5 flex-none text-indigo-400'
                  aria-hidden='true'
                />
                <div className='text-base leading-7'>
                  <h3 className='font-semibold text-white'>{card.name}</h3>
                  <p
                    className='mt-2 text-gray-300 '
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=' max-w-8xl px-6 lg:px-8 mt-20'>
        <div className=' max-w-8xl px-6 lg:px-8 mt-20'>
          <div className=' max-w-4xl lg:mx-0 text-start'>
            <h2 className='text-2xl font-bold tracking-tight text-blue-700 sm:text-4xl mb-8'>
              Our Experiences
            </h2>
            <p className='mt-6 leading-8 text-black'>
              Nos experts, au sein de Camel Studio, sont largement reconnus pour
              leur engagement en tant que contributeurs à des projets open
              source majeurs tels que Jhipster, Formiz, ainsi que StartUI : un
              starter open source basé sur NextJS, TypeScript, ChakraUI et
              React-Query. Nous sommes fiers de notre implication active dans la
              communauté open source, démontrant ainsi notre engagement envers
              le partage des connaissances et le développement collaboratif.
            </p>
          </div>
          <div className=' mt-4 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none mb-24'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {experiences.map(experience => (
                <div key={experience.name} className='flex flex-col mx-4'>
                  <dt className='text-base font-semibold leading-7 text-black flex items-center mb-6'>
                    <Image
                     height='2000'
                     width='2000'
                      src={experience.imageUrl}
                      alt={experience.name}
                      className='h-12 w-12 mr-8'
                    />
                    {experience.name}
                  </dt>
                  <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-black'>
                    <p className='mt-2'>{experience.description}</p>
                    <p className='mt-auto'>
                      <a
                        href={experience.href}
                        className='text-sm leading-6 text-indigo-600 inline-block'
                      >
                        En savoir plus <span aria-hidden='true'>→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
        <Image
         height='2000'
         width='2000'
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
        />

        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Développer votre projet avec le Camel Studio 🐪
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Chez Camel Studio, on croit fermement que la force d&rsquo;une équipe
              réside dans sa cohésion. Notre équipe ne se contente pas d&rsquo;être
              une bande de collègues, mais une véritable famille de devs. Avec
              nous, vous faites le choix d’avoir toute une équipe soudée prête à
              faire briller votre vision. Même si chaque membre de notre équipe
              bosse sur des projets différents, l&rsquo;esprit d&rsquo;équipe reste intact.
              On comprend que chaque projet ait des besoins spécifiques, c&rsquo;est
              pourquoi on offre deux options flexibles pour répondre à vos
              attentes.
            </p>
          </div>
          <div className='mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8'>
            {options.map(options => (
              <div key={options.name} className='flex gap-x-4   p-6 '>
                <div className='text-base leading-7'>
                  <h3 className='font-semibold text-white'>
                    {' '}
                    {options.name === 'Option 1'
                      ? 'Option 1: Équipe Boostée 🔥'
                      : 'Option 2: Team Camel 🚀'}
                  </h3>
                  <p
                    className='mt-2 text-gray-300 '
                    dangerouslySetInnerHTML={{ __html: options.description }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='  max-w-8xl sm:mt-20 lg:max-w-none text-center'>
          <p className='text-lg leading-7 text-Black mb-2'>
            <a
              href='mailto:contact@camelstudiotunisie.com'
              className='rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Démarrons l'aventure ensemble!
            </a>
          </p>
        </div>
      </div>

      <div className=' max-w-7xl px-6 lg:flex lg:px-8 mt-24'>
        <div className=' grid max-w-3xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <p className='mt-6 text-lg leading-8 text-Black lg:ml-12'>
              Chez <strong className='font-blod'>Camel Studio</strong> , on est
              fiers de notre esprit d&rsquo;équipe et on est prêts à vous accompagner,
              que vous ayez besoin d&rsquo;un renfort ponctuel ou d’une conception
              complète. Faites équipe avec nous, et ensemble, on fera de votre
              vision une réalité. 🚀🐪
            </p>

            <div className='mt-10 text-blue-700 flex flex-col items-start ml-2'>
              <p className='mb-3'>Retrouvez-nous sur :</p>
              <p className='text-sm flex items-center mb-2 '>
                <EnvelopeIcon className='h-6 w-6 mx-1 text-white bg-red-500 rounded-full p-1' />
                <a
                  href='mailto:contact@camelstudiotunisie.com'
                  className='text-blue-700'
                >
                  contact@camelstudiotunisie.com
                </a>
              </p>
              <p className='text-sm flex items-center  mb-2'>
                <UserIcon className='h-6 w-6 mx-1 text-white bg-blue-500 rounded-full p-1' />
                <a
                  href='https://www.linkedin.com/company/camelstudio/'
                  className='text-blue-700'
                >
                  CamelStudio
                </a>
              </p>
              <p className='text-sm flex items-center  mb-2'>
                <GlobeAltIcon className='h-6 w-6 mx-1 text-white bg-yellow-500 rounded-full p-1' />
                Immeuble Sarra, boulevard principal, les berges du lac
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-6 lg:contents'>
            <div className='w-full lg:w-auto lg:flex-none lg:self-end lg:ml-44'>
              <Image
               height='2000'
               width='2000'
                src='/equipe.png'
                alt=''
                className='w-full h-auto max-w-none rounded-2xl lg:w-[42rem] lg:h-[27rem] bg-gray-50 object-cover'
              />
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-full lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-full justify-end self-end lg:w-auto'>
                <Image
                 height='2000'
                 width='2000'
                  src='/equipe eljam.jpg'
                  alt=''
                  className='w-full h-auto max-w-none flex-none rounded-2xl lg:w-[32rem] lg:h-[24rem] bg-gray-50 object-cover'
                />
              </div>
              <div className='flex w-full flex-auto justify-end lg:w-auto lg:flex-none'>
                <Image
                 height='2000'
                 width='2000'
                  src='/equipe desert.jpg'
                  alt=''
                  className='w-full h-auto max-w-none max-h-full flex-none rounded-2xl lg:w-[38rem] lg:h-[28rem] bg-gray-50 object-cover'
                />
              </div>
              <div className='sm:block sm:w-full sm:flex-auto lg:w-auto lg:flex-none'>
                <Image
                 height='2000'
                 width='2000'
                  src='/desert.png'
                  alt=''
                  className='w-full h-auto max-w-none flex-none rounded-xl lg:w-[28rem] lg:h-[21rem] bg-gray-50 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-white'>
        <div className=' max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-gray-500'>
              &copy; 2024 Camel Studio, Inc. Tous droits réservés 🐪.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
