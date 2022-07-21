import '../styles/components/mainContent.sass'
import { AboutContainer } from './AboutContainer'
import { ProjectsContainer } from './ProjectsContatiner'

export function MainContent(){
  return(
    <main id='main-content'>
      <AboutContainer/>
      <p>tecnologias</p>
      <ProjectsContainer/>
    </main>
  )
}