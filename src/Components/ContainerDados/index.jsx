import React from "react";
import {
  Bio,
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
            <ContainerNome>
              <div>
                <img
                  src={usuario.avatar_url}
                  alt={`Avatar de ${usuario.login}`}
                />
              </div>
              <div className="usuario_info">
                <div>
                  <h2>{usuario.name}</h2>
                  <span>@{usuario.login}</span>
                </div>
                <div className="data_cadastro">
                  <span className="data">{usuario.created_at}</span>
                </div>
              </div>
            </ContainerNome>
            <Bio>
              <p>{usuario.bio}</p>
            </Bio>
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
                  <img
                    src={locationIcon}
                    className="location_icon"
                    alt="icone de lugar"
                  />
                  <h4>
                    {usuario.location != null
                      ? usuario.location
                      : " não disponível"}
                  </h4>
                </div>
                <div>
                  <img src={twitterIcon} alt="icone do twitter" />
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
                  <img src={webIcon} alt="icone de link de um site" />
                  <h4>
                    {usuario.blog != null ? usuario.blog : " não disponível"}
                  </h4>
                </div>
                <div>
                  <img src={companyIcon} alt="icone de uma empresa" />
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
