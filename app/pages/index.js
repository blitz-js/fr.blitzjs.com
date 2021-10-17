import {Octokit} from "@octokit/rest"
import {Image, Link} from "blitz"
import {useEffect, useState} from "react"

import {ButtonLink} from "@/components/ButtonLink"
import {Header} from "@/components/Header"
import {Feature} from "@/components/home/Feature"
import {FeatureIcon} from "@/components/home/FeatureIcon"
import {FeatureIconTitle} from "@/components/home/FeatureIconTitle"
import {Footer} from "@/components/home/Footer"
import {Hand} from "@/components/home/Hand"
import {HeroCode} from "@/components/home/HeroCode"
import {StyledLink} from "@/components/home/StyledLink"
import {VideoPlayer} from "@/components/home/VideoPlayer"
import Scrollbar from "@/components/Scrollbar"
import {SocialCards} from "@/components/SocialCards"
import {SponsorPack} from "@/components/SponsorPack"
import {getGitHubFile} from "@/utils/getGitHubFile"

const Home = ({randomContributors}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div>
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-44">
            <div className="z-30 text-white col-span-full">
              <Header
                className="px-6 mx-auto max-w-7xl"
                onNavToggle={(isOpen) => {
                  setNavIsOpen(isOpen)
                }}
              />
            </div>
            <div
              className={
                "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
                (navIsOpen ? "z-20 fixed" : "-z-10")
              }
            ></div>
            <div className="relative -mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2 md:gap-6 xl:-mt-10">
                <div className="z-10 space-y-10 lg:w-full">
                  <h2 className="-mt-8 font-medium text-5xl-squashed lg:-mt-0 font-secondary xl:text-6xl xl:font-medium dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    Le Framework React Fullstack
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:w-4/5">
                    Blitz est un framework inspir&eacute; par Ruby on Rails, bas&eacute; sur Next.js
                    et qui utilise une couche d&apos;abstraction &quot;Zero-API&quot; : sans REST ni
                    GraphQL.
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink className="w-2/3 lg:w-auto rounded-tl-xl" href="/docs/get-started">
                      Essayer Blitz en 5 Mins
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative lg:col-span-2 xl:col-span-1">
                  <Hand variant="hero-squiggle" className="lg:hidden -right-6 -top-36" />
                  <Hand variant="hero-rightarm" className="hidden lg:block -left-36 top-32" />
                  <Hand
                    variant="hero-righthand"
                    className="z-20 hidden lg:block -left-4"
                    style={{top: "15.2rem"}}
                  />
                  <Hand
                    variant="hero-leftarm"
                    className="hidden lg:block"
                    style={{top: "30rem", right: "-4.8rem"}}
                  />
                  <Hand
                    variant="hero-lefthand"
                    style={{top: "26.6rem", right: "-2.2em"}}
                    className="z-20 hidden lg:block"
                  />
                  <HeroCode className="z-10" />
                </div>
              </div>
            </div>
            <div className="z-10 px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-mediumxl:text-xl">
              <FeatureIcon icon="layers">
                L&apos;abstraction &quot;Zero-API&quot; permet{" "}
                <strong>d&apos;importer le code serveur directement dans vos composants</strong>.
                Elle prend en charge le fetching, le caching et la cr&eacute;ation d&apos;endpoints
                pour vous !
              </FeatureIcon>
              <FeatureIcon icon="lighteningBolt">
                La cr&eacute;ation d&apos;application Blitz comprend d&eacute;j&agrave; toute{" "}
                <strong>la mise en place et la configuration barbante </strong>
                telle que ESLint, Prettier, Jest, l&apos;enregistrement, l&apos;authentification et
                la r&eacute;initialisation de mot de passe !
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                Blitz repose sur <strong>une structure et des normes</strong> qui facilitent le
                d&eacute;veloppement telles que la structure de l&apos;arborescence de fichiers, les
                conventions pour le routage, ou celles pour l&apos;authentification, ... tout en
                restant extrêmement flexible.
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="/#" passHref>
                <StyledLink className="flex items-center justify-between pb-1 text-lg border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary xl:text-xl">
                  <span>Meilleures Vid&eacute;os</span>

                  {/*
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                    */}
                </StyledLink>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=TTe56M1QscM" />
              <VideoPlayer url="https://www.youtube.com/watch?v=fIexr5UZfhU" />
            </div>

            <div className="relative w-full mx-auto space-y-10 lg:space-y-20 xl:space-y-36 max-w-7xl">
              <h2 className="px-6 text-3xl font-semibold xl:text-5xl xl:w-1/2">
                Tout ce dont vous pouvez avoir besoin pour lancer vos applications en production
              </h2>
              <div className="w-full">
                <Hand
                  variant="concepts-right"
                  className="hidden lg:block lg:-top-24 lg:-right-96 lg:w-8/12 xl:-top-14"
                />
                <Scrollbar className="lg:hidden" thumbHeight="4px">
                  <div className="grid pb-4 ml-6 features-grid lg:gap-y-14">
                    <Feature title="Fullstack compatible et Monolithique">
                      <p>
                        Avec Blitz, ne d&eacute;veloppez et ne d&eacute;ployez qu&apos;une seule
                        application contenant tout, de la base de donn&eacute;es au
                        <br className="hidden lg:block" />
                        frontend !
                      </p>
                      <p>D&eacute;ployable sur serveur ou en &quot;serverless&quot;.</p>
                    </Feature>
                    <Feature title="N'&eacute;crivez plus d'API">
                      <p>
                        Au lieu de manuellement fetcher vos donn&eacute;es du backend,
                        &eacute;crivez directement le code serveur dans vos composants. Au moment de
                        la compilation, ce code est remplac&eacute; par une API HTTP automatiquement
                        g&eacute;n&eacute;r&eacute;e.
                      </p>
                      <p>
                        L&apos;API g&eacute;n&eacute;r&eacute;e peut &eacute;galement &ecirc;tre
                        utilis&eacute;e par d&apos;autres applications et tierce-parties.
                      </p>
                    </Feature>
                    <Feature title="Flexible">
                      <p>
                        Les conventions et la structure par d&eacute;faut conviennent parfaitement
                        &agrave; la plupart des applications. Mais rien ne vous emp&ecirc;che de
                        sortir des sentiers battus.
                      </p>
                      <p>
                        Une grande compatibilit&eacute;e : par exemple, nous n&apos;imposons pas de
                        biblioth&egrave;ques de style ou de formulaire.
                      </p>
                    </Feature>
                    <Feature title="Convention plut&ocirc;t que Configuration">
                      <p>
                        Blitz prend en charge la mise en place et la configuration pour vous. La
                        structure et l&apos;architecture de projet permettent de facilement passer
                        d&apos;une application Blitz &agrave; une autre.
                      </p>
                    </Feature>
                    <Feature title="Facile d&egrave;s le d&eacute;marrage, facile sur la dur&eacute;e">
                      <p>
                        Prise en main facile pour les d&eacute;butants et migration
                        d&apos;application Next.js existante vers Blitz ais&eacute;e.
                      </p>
                      <p>
                        Facile &agrave; maintenir sur la dur&eacute;e en terme de : lignes de code,
                        de nombre de d&eacute;veloppeurs, et d&apos;ex&eacute;cution du code.
                      </p>
                    </Feature>
                    <Feature title="Stable">
                      <p>
                        Une fois la version 1.0 atteinte, nous passerons &agrave; un cycle de
                        livraison classique avec plusieurs phases telles que &quot;stable&quot;,
                        &quot;LTS&quot;, et &quot;b&ecirc;ta&quot;.
                      </p>
                      <p>Pour cela, nous nous inspirons des livraisons de Ember.</p>
                    </Feature>
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 lg:h-codesandbox lg:mt-80 row-end-10 rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-4xl lg:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div className="relative hidden w-full px-6 mx-auto space-y-10 max-w-7xl lg:block">
              <h3 className="pb-1 text-xs border-b border-opacity-50 font-secondary border-blue-mid">
                Exemple de CodeSanbox Blitz
              </h3>
              <div>
                <Hand variant="sandbox-right" style={{right: "-13.2rem", bottom: "-35rem"}} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/flamboyant-meninsky-j63yq?file=/app/projects/mutations/createProject.ts"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
                  <Image
                    src="/img/sandbox-pic.png"
                    layout="fill"
                    className="object-cover"
                    alt="Codesandbox placeholder"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-6xl font-bold">
                    Click to Open in New Tab
                  </div>
                </a>
              </div>
            </div>
            <div className="xl:hidden">{/*spacer div*/}</div>
            <div className="relative flex flex-col px-6 mx-auto text-white lg:flex-row max-w-7xl space-y-14 lg:space-x-24 lg:space-y-0 xl:space-x-40">
              <div className="space-y-14 lg:w-1/2">
                <h2 className="z-10 font-medium text-transparent text-5xl-squashed font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue xl:text-6xl">
                  Le plus important: La Communaut&eacute; Blitz
                </h2>
                <div className="z-10 grid grid-cols-5 gap-1 md:grid-cols-6 lg:grid-cols-5 grid-rows-8 overflow-clip">
                  {randomContributors.map((contributor, i) => (
                    <a
                      href={`https://github.com/${contributor.login}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        layout="intrinsic"
                        width="100%"
                        height="100%"
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        title={contributor.name}
                        className="w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 text-lg lg:relative gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl lg:w-1/2">
                <Hand variant="community-squiggle" className="xl:hidden -right-18" />
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-end">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Notre communaut&eacute; est acceuillante, diverse, inclusive et sympa !{" "}
                      <br className="hidden lg:block" />
                      Les membres des communaut&eacute;s LGBTQ+, les femmes, et les
                      minorit&eacute;es ethniques sont les bienvenus.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Pensez &agrave; lire notre{" "}
                      <Link href="/docs/code-of-conduct" passHref>
                        <StyledLink className="underline text-off-white hover:text-blue-light">
                          Code de Conduite
                        </StyledLink>
                      </Link>
                      .
                    </p>
                  </div>
                  <ButtonLink
                    href="https://discord.blitzjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Rejoinez notre communaut&eacute; Discord
                  </ButtonLink>
                </div>
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-start">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Dans cette communaut&eacute; interg&eacute;n&eacute;rationnelle, nous sommes
                      tous unis et adorons travailler main dans la main.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Venez aider &agrave; faire de Blitz le meilleur framework jamais
                      cr&eacute;&eacute; !
                    </p>
                  </div>
                  <Link href="/docs/contributing" passHref>
                    <ButtonLink className="rounded-bl-none rounded-xl lg:w-max">
                      Apprenez comment contribuer
                    </ButtonLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10 w-full mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="px-6 text-2xl font-medium text-white font-secondary lg:text-3xl">
                Diagramme d&apos;architecture
              </h2>
              <div className="w-full">
                <Scrollbar className="lg:hidden" thumbHeight="4px" thumbColor="white">
                  <div className="px-6 architecture-diagram" style={{paddingBottom: "2px"}}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="img/architecture.svg" alt="Diagramme d'architecture" />
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="relative col-span-full">
              <Hand variant="features-squiggle" className="-right-6 -top-10 xl:hidden -z-10" />
            </div>
            <div className="absolute w-full h-full row-start-8 row-end-19 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="relative px-6 mx-auto my-6 space-y-12 text-white xl:my-0 max-w-7xl xl:space-y-36">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                De bout en bout, <br className="hidden xl:block" />
                de la base de donn&eacute;es
                <br className="hidden xl:block" />
                &agrave; l&apos;interface
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <Hand
                  variant="features-right"
                  className="hidden xl:block xl:-top-40 xl:-right-52"
                />
                <FeatureIconTitle icon="thumbsUp" title="Authentification & Autorisation">
                  L&apos; authentification par d&eacute;faut est tr&egrave;s facile
                  d&apos;utilisation et tr&egrave;s s&eacute;curis&eacute;e. Elle est compatibles
                  avec de nombreux fournisseurs d&apos;identit&eacute;, notamment les solutions
                  auto-h&eacute;berg&eacute;es reposant sur un couple d&apos;identifiant-mot de
                  passe ou les solutions tierce telles que Auth0.
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="Base de donn&eacute;es Agnostique">
                  Vous pouvez utiliser la base de donn&eacute;es que vous souhaitez. Prisma 2 est le
                  client par d&eacute;faut mais vous pouvez le remplacer par n&apos;importe quel
                  autre client comme Fauna ou DynamoDB.
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="Recettes">
                  Une seule commande pour installer le code et/ou les paquets dans votre application
                  Blitz. Par exemple `blitz install tailwind` ou `blitz install chakra-ui`. Les
                  recettes peuvent &ecirc;tre cr&eacute;&eacute;es par tous.
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="Architecture Backend">
                  Blitz est adapt&eacute; aux t&acirc;ches intensives c&ocirc;t&eacute; serveur
                  comprenant l&apos;envoi d&apos;emails, les cron jobs, le calcul en t&acirc;che de
                  fond, la g&eacute;n&eacute;ration de PDFs, etc. Nous avons aujourd&apos;hui peu de
                  guides pour ce type de t&acirc;ches mais nous travaillons &agrave; &eacute;tailler
                  nos patterns et &agrave; ajouter plus de documentation.
                </FeatureIconTitle>
                <FeatureIconTitle icon="typescript" title="TypeScript Nativement Support&eacute;">
                  Blitz est cod&eacute; en TypeScript et la couche de donn&eacute;es de Blitz est
                  enti&egrave;rement typesafe de bout en bout. Tous les types sont
                  compl&egrave;tement statiques sans besoin de processus g&eacute;n&eacute;ration
                  tiers.
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Aide au Code">
                  Nous n&apos;en sommes qu&apos;au d&eacute;but mais l&apos;aide au code de Blitz
                  est en passe de devenir extr&ecirc;mement puissante, &agrave; la fois pour
                  prototyper et pour cr&eacute;er des applications solides. Il sera possible
                  d&apos;override n&apos;importe quel template et de les adapter &agrave; chacun de
                  vos projets.
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 row-end-13 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="relative col-span-full">
              <Hand
                variant="sponsors-squiggle"
                className="-right-24 xl:hidden"
                style={{top: "-5.3rem"}}
              />
            </div>
            <div className="px-6 mx-auto text-center max-w-7xl ">
              <div className="space-y-7 xl:space-y-10">
                <h2 className="relative text-3xl font-semibold xl:text-5xl">
                  <Hand
                    variant="sponsors-left"
                    className="hidden xl:block -left-80 pointer-events-none"
                    style={{top: "-18.05rem"}}
                  />
                  Nos Parrains
                </h2>
                <p className="text-lg xl:text-xl">
                  Votre aide financi&egrave;re permet &agrave; Blitz d&apos;&ecirc;tre
                  d&eacute;velopp&eacute; et maintenu continuellement !
                  <br className="hidden lg:block" />
                  Nous acceptons les parrainages &agrave; partir de $5/mois.
                </p>
                <div>
                  <ButtonLink
                    variant="solid-dark"
                    href="https://github.com/sponsors/blitz-js"
                    className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4 xl:mt-18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Parrainer Blitz
                  </ButtonLink>
                </div>
              </div>

              <div className="xl:max-w-2xl mx-auto">
                <SponsorPack />
              </div>
            </div>

            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Et la prochaine &eacute;tape ?
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  href="/docs/get-started"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  Essayer Blitz en 5 minutes
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.blitzjs.com"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Rejoingez le Discord
                </ButtonLink>
              </div>
            </div>
            <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  const MAX_CONTRIBUTORS = 30

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const {contributors} = await getGitHubFile({
    octokit,
    owner: "blitz-js",
    repo: "blitz",
    path: ".all-contributorsrc",
    json: true,
  })

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return {
    props: {randomContributors},
    revalidate: 60 * 30, // 30 minutes
  }
}

Home.meta = {
  title: "Blitz.js - The Fullstack React Framework",
  description: `Blitz is a hyper-productive fullstack React framework that's built on Next.js and features a "Zero-API" data layer.`,
}

export default Home
export {getStaticProps}
