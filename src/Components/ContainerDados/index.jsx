import React from "react";
import {
  Container,
  ContainerInfo,
  ContainerNome,
  ContainerUser,
} from "./style";
import locationIcon from "./icon-location.svg";
import webIcon from "./icon-website.svg";
import twitterIcon from "./icon-twitter.svg";
import companyIcon from "./icon-company.svg";

export default function ContainerDados({ usuario }) {
  return (
    <Container>
      {usuario ? (
        <>
          <div>
            <img src={usuario.avatar_url} alt={`Avatar de ${usuario.login}`} />
          </div>
          <div>
            <ContainerNome>
              <div>
                <h2>{usuario.name}</h2>
                <span>@{usuario.login}</span>
                <p>{usuario.bio}</p>
              </div>
            </ContainerNome>
            <ContainerUser>
              <div>
                <h3>Repositorio</h3>
                <p>{usuario.public_repos}</p>
              </div>
              <div>
                <h3>Seguidores</h3>
                <p>{usuario.followers}</p>
              </div>
              <div>
                <h3>Seguindo</h3>
                <p>{usuario.following}</p>
              </div>
            </ContainerUser>
            <ContainerInfo>
              <div>
                <div>
                  <img src={locationIcon} />
                  <h4>
                    {usuario.location != null
                      ? usuario.location
                      : " não disponível"}
                  </h4>
                </div>
                <div>
                  <img src={twitterIcon} />
                  <h4>
                    {usuario.twitter_username != null
                      ? usuario.twitter_username
                      : " não disponível"}
                  </h4>
                </div>
              </div>
            </ContainerInfo>
            <ContainerInfo>
              <div>
                <div>
                  <img src={webIcon} />
                  <h4>
                    {usuario.blog != null ? usuario.blog : " não disponível"}
                  </h4>
                </div>
                <div>
                  <img src={companyIcon} />
                  <h4>
                    {usuario.company != null
                      ? usuario.company
                      : " não disponível"}
                  </h4>
                </div>
              </div>
            </ContainerInfo>
          </div>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
