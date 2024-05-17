import React, { useEffect, useState } from 'react';
import './../paginas/home/Home.css'

interface Profile {
  avatar_url: string;
  name: string;
  html_url: string;
  followers: number;
  public_repos: number;
}

const GithubProfile: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const getGitHubAPI = async () => {
      try {
        const response = await fetch('https://api.github.com/users/hrvieira');
        const data: Profile = await response.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    getGitHubAPI();
  }, []);

  return (
     <>
       {profile && (
         <>
           <img src={profile.avatar_url} alt={`Foto do perfil do GitHub - ${profile.name}`} id="busto" />
           <article id="box-quem-sou">
             <h2 id="titulo-secundario">Quem sou eu?</h2>
             <p id="texto-quem-sou">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni deleniti modi sit laudantium totam!
             </p>
             <div id="div-quem-sou">
               <a href={profile.html_url} id="bt-github" target="_blank" rel="noopener noreferrer">
                 Github
               </a>
               <p>{profile.followers} Seguidores</p>
               <p>{profile.public_repos} Repositórios</p>
             </div>
           </article>
         </>
       )}
     </>
   );
};

export default GithubProfile;
