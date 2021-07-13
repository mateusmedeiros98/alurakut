import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.gitHubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <a className="boxLink" href={`https://github.com/${propriedades.gitHubUser}`}>@{propriedades.gitHubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}
export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
      id: '12122121',
      title: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  // const comunidades =['Alurakut']
  const userA = 'gabriel-elesbao'
  const favoritePersons = [
    'gabriel-elesbao',
    'omariosouto',
    'marcobrunodev',
    'juunegreiros',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar gitHubUser={userA} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1>Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateComunnity(e){
                e.preventDefault();
                const dadosForm = new FormData(e.target);

                const comunidade ={
                  id: new Date().toISOString(),
                  title: dadosForm.get('title'),
                  image: dadosForm.get('image'), 

                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)


            }}>

              <div>

              <input
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="" 
                type="text"
                />
              </div>

              
              <div>

              <input
                placeholder="Coloque uma url para usarmos de capa"
                name="image"
                aria-label="" 
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
              <ul>
                  {comunidades.map((itemAtual) => {
                    return (
                      <li key={itemAtual.id}>
                        <a href={`/users/${itemAtual.title}`} >
                          <img src={itemAtual.image} />
                          <span>{itemAtual.title}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>

            
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas ({favoritePersons.length})

            </h2>
            <ul>
              {favoritePersons.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}
