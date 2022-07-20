import Profile from '../assets/profile.jpg'
import '../styles/components/sidebar.sass'
import { SocialNetwork } from './SocialNetworks'

export function Sidebar(){
  return(
    <aside id="sidebar">
      <img src={Profile} alt="Caroline Maia" />
      <p className="title">Desenvolvedora Front-end</p>
      <SocialNetwork/>
      <p>Informações de contato</p>
      <a href="#" className="btn">Download currículo</a>
    </aside>
  )
}