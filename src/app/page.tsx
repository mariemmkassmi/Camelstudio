import {LifebuoyIcon, NewspaperIcon, QuestionMarkCircleIcon , UserGroupIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'

const services = [
  {
    name: "# Création d'application web sur mesure",
    description:
      'Au Camel Studio, on crée des sites web adaptés à vos besoins. Pas de superflu, juste des solutions efficaces et un espace unique pour votre présence en ligne.'
  },
  {
    name: ' # Conseils en développement',
    description:
      'Au Camel Studio, on ne vous embrouille pas avec du jargon tech et une terminologie perchée. On parle votre langue et on vous explique les choses étape par étape, afin de trouver les solutions optimales pour votre projet. On ne fait pas dans le compliqué, on fait le job.'
  },
  {
    name: '# Exploration mobile',
    description:
      'Plongez dans le monde mobile avec nos applications spécialement conçues pour vos aventures sur iOS et Android. Ici, on se démène pour vous offrir une expérience utilisateur exceptionnelle, où que vous soyez.'
  },
  {
    name: '# Gestion de projet carrée',
    description:
      'On prend en charge votre projet et on le mène à bien. Peu importe l’étape de son avancement, on saura s’y greffer et le faire décoller'
  },
  {
    name: ' # Guide tech',
    description:
      "On n'est pas que des codeurs, on est là pour vous guider dans le monde de la tech et être votre allié dans vos prises de décisions."
  },
  {
    name: '# Design UX/UI malin',
    description:
      "Notre équipe crée des interfaces qui fonctionnent bien, propres et au goût du jour. Pas de trucs tape-à-l'œil, mais des designs intelligents."
  }
]


const cards = [
  {
    name: 'Qui sommes-nous ?',
    description: 'Une équipe jeune, mais pas novice, soudée et qui connaît le marché européen.  Pas de blabla ici. On code, on design, on résout des problèmes. Notre équipe ?  Des gens sympas qui aiment ce qu\'ils font et qui le font bien. On sait ce qui se passe sur le marché européen, et on sait comment s\'y prendre pour des projets qui dépotent.',
    icon: UserGroupIcon,
  },
  {
    name: 'Ce qu\'on sait faire ?',
    description: 'On fait du développement sur mesure, des applications web fluides et des solutions digitales qui marchent. On n\'a pas de formulesmagiques, juste du bon boulot. On est sympa, mais surtout on estpros.',
    icon: LightBulbIcon,
  },
  {
    name: 'Pourquoi nous ?',
    description: ' Pas de blabla, que du boulot : On va droit au but. Pas depromesses vides, juste des résultats concrets.<br/>Jeunes, mais pas novices :On est jeunes, mais on sait ce qu\'on fait.Une bonne énergie et un bon mindset.<br/>Des prix raisonnables : On est basés en Tunisie, alors nos tarifs sont cool. Qualité pro, sans se ruiner.',
    icon: QuestionMarkCircleIcon ,
  }, {
    name: 'On bosse comment ?',
    description: ' Si vous en avez marre des discours pompeux et que vous voulez des résultats tangibles, parlons de votre projet. Contactez-nous et discutons sérieusement de ce que l\'on peut faire ensemble.',
    icon: RocketLaunchIcon  ,
  }
]

const experiences = [
  {
    name: 'Formiz',
    description:'Formiz, notre fierté open source, est bien plus qu\'un simple formulaire. C\'est une expérience de développement fluide, conçue pour simplifier la gestion des données et rendre la création de formulaires aussi agréable que possible. Avec Formiz, la puissance du développement est entre vos mains.',
    href: 'https://github.com/BearStudio/formiz',
    imageUrl: 'Formiz.png'
  },
  {
    name: 'Jhipster',
   description:'Jhipster, un autre de nos engagements open source, est une boîte à outils complète pour développer des applications web modernes. Avec une architecture solide, des fonctionnalités étendues et une intégration transparente, Jhipster accélère le processus de développement, vous permettant de vous concentrer sur l\'essentiel : la création d\'une expérience utilisateur exceptionnelle.',
    href: 'https://github.com/jhipster',
    imageUrl: 'jhipster.png'
  },
  {
    name: 'Start UI',
    description:'StartUI, notre projet basé sur NextJS, TypeScript, ChakraUI et React-Query, est bien plus qu\'un simple starter. C\'est une invitation à explorer le monde du développement web moderne avec un ensemble de technologies soigneusement sélectionnées. Lancez votre projet avec StartUI et donnez-lui une longueur d\'avance dans le monde numérique.',
    href: 'https://github.com/BearStudio/start-ui-web',
    imageUrl: 'startui.png'
  }
]
const options = [
  {
    name: 'Option 1',

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
        <div className='mx-auto max-w-7xl'>
          <div className='px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0'>
            <img alt='Camel Studio' width='58' src='logo.svg' />
          </div>
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
                <div>
                  <img
                    alt='Camel Studio'
                    className='h-10 w-auto mb-4 '
                    src='logocamel.png'
                  />
                </div>
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
          <img
            className='aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full'
            src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
            alt=''
          />
        </div>
      </div>

    <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-10'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:gap-x-10 lg:grid-cols-3'>
          <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16'>
            {services.map((service) => (
              <div key={service.name} className='relative pl-9'>
                <dt className='font-semibold text-2xl text-blue-700'>{service.name}</dt>
                <dd className='mt-2 text-lg text-gray-800'>{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>


    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Camel Studio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Nous transformons les idées en réalité car chaque projet mérite une touche de magie! 🚀🐪
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300 "dangerouslySetInnerHTML={{ __html: card.description }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 


     

      <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-2xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
            Our experiences
          </h2>
          <p className='mt-6  leading-8 text-black'>
            Nos experts, au sein de Camel Studio, sont largement reconnus pour
            leur engagement en tant que contributeurs à des projets open source
            majeurs tels que Jhipster, Formiz, ainsi que StartUI : un starter
            open source basé sur NextJS, TypeScript, ChakraUI et React-Query.
            Nous sommes fiers de notre implication active dans la communauté
            open source, démontrant ainsi notre engagement envers le partage des
            connaissances et le développement collaboratif.
          </p>
        </div>
        <div className='mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none mb-24'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {experiences.map(experiences => (
              <div key={experiences.name} className='flex flex-col mx-4'>
                <dt className='text-base font-semibold leading-7 text-gray-900 '>
                  <img
                    src={experiences.imageUrl}
                    alt={experiences.name}
                    className='h-12 w-15 text-white '
                  />

                  {experiences.name}
                </dt>
                <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                <p className='mt-2'>{experiences.description}</p>
                
                  <p className='mt-6'>
                    <a
                      href={experiences.href}
                      className='text-sm  leading-6 text-indigo-600'
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
      <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-2xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
            Développer votre projet avec le Camel Studio 🐪
          </h2>
          <p className='mt-6  leading-8 text-black'>
            Chez Camel Studio, on croit fermement que la force d'une équipe
            réside dans sa cohésion. Notre équipe ne se contente pas d'être une
            bande de collègues, mais une véritable famille de devs. Avec nous,
            vous faites le choix d’avoir toute une équipe soudée prête à faire
            briller votre vision. Même si chaque membre de notre équipe bosse
            sur des projets différents, l'esprit d'équipe reste intact. On
            comprend que chaque projet ait des besoins spécifiques, c'est
            pourquoi on offre deux options flexibles pour répondre à vos
            attentes.
          </p>
        </div>
        <div className='mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none '>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {options.map(option => (
              <div key={option.name} className='flex flex-col'>
                <dt className='text-base font-semibold leading-7 text-Black'>
                  {option.name}
                </dt>
                <dt className='text-base  leading-7 text-Black'>
                  {option.description}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <p className='mt-6 text-lg leading-8 text-Black'>
              Chez <strong className='font-blod'>Camel Studio</strong> , on est
              fiers de notre esprit d'équipe et on est prêts à vous accompagner,
              que vous ayez besoin d'un renfort ponctuel ou d’une conception
              complète. Faites équipe avec nous, et ensemble, on fera de votre
              vision une réalité. 🚀🐪
            </p>

            <div className='mt-10 text-blue-700 flex flex-col'>
              <p className=' text-sm'>
                Retrouvez-nous sur : <br />
                <img
                  src='mail.png'
                  alt='Email'
                  className='inline-block w-4 h-4 mr-2 ml-1'
                />
                <a
                  href='mailto:contact@camelstudiotunisie.com'
                  className='text-blue-700 '
                >
                  contact@camelstudiotunisie.com
                </a>
                <br />
                <img
                  src='linkedin.png'
                  alt='LinkedIn'
                  className='inline-block w-6 h-6 mr-2'
                />
                <a
                  href='https://www.linkedin.com/company/camelstudio/'
                  className='text-blue-700 '
                >
                  CamelStudio
                </a>
                <br />
                <img
                  src='adress.png'
                  alt='Adresse'
                  className='inline-block w-6 h-6 mr-2'
                />
                Immeuble Sarra, boulevard principal, les berges du lac
              </p>
            </div>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-6 lg:contents'>
            <div className='w-full lg:w-auto lg:flex-none lg:self-end'>
              <img
                src='equipe.png'
                alt=''
                className='w-full h-auto max-w-none rounded-2xl lg:w-[32rem] lg:h-[21.33rem] bg-gray-50 object-cover'
              />
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-full lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-full justify-end self-end lg:w-auto'>
                <img
                  src='equipe eljam.jpg'
                  alt=''
                  className='w-full h-auto max-w-none flex-none rounded-2xl lg:w-[24rem] lg:h-[18rem] bg-gray-50 object-cover'
                />
              </div>
              <div className='flex w-full flex-auto justify-end lg:w-auto lg:flex-none'>
                <img
                  src='equipe desert.jpg'
                  alt=''
                  className='w-full h-auto max-w-none max-h-full flex-none rounded-2xl lg:w-[29rem] lg:h-[21.33rem] bg-gray-50 object-cover'
                />
              </div>

              <div className='sm:block sm:w-full sm:flex-auto lg:w-auto lg:flex-none'>
                <img
                  src='desert.png'
                  alt=''
                  className='w-full h-auto max-w-none flex-none rounded-xl lg:w-[20rem] lg:h-[15rem] bg-gray-50 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
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
