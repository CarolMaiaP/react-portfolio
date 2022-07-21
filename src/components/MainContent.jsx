import '../styles/components/mainContent.sass'
import { AboutContainer } from './AboutContainer'
import { ProjectsContainer } from './ProjectsContatiner'
import { TecnologiesContainer } from './TechnologiesContainer'

export function MainContent(){
  return(
    <main id='main-content'>
      <AboutContainer/>
      <TecnologiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}