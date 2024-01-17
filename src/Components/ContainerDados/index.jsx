import React from "react";
import {
  Bio,
  Container,
  ContainerImagem,
  ContainerInfo,
  ContainerNome,
  ContainerUser,
} from "./style";
import locationIcon from "./icon-location.svg";
import webIcon from "./icon-website.svg";
import twitterIcon from "./icon-twitter.svg";
import companyIcon from "./icon-company.svg";

export default function ContainerDados({ usuario }) {
  if (usuario != null) {
    var dataAPI = usuario.created_at;
    var data = new Date(dataAPI);
    var dataFormatada = data.toLocaleString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  }

  return (
    <Container>
      {usuario ? (
        <>
          <div>
            <ContainerImagem>
              <img
                src={usuario.avatar_url}
                alt={`Avatar de ${usuario.login}`}
              />
              <ContainerNome>
                <div>
                  <h2>{usuario.name}</h2>
                  <p>@{usuario.login}</p>
                </div>
                <div>
                  <span>Entrou {dataFormatada}</span>
                </div>
              </ContainerNome>
            </ContainerImagem>

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
                  <h4 nulo={usuario.location === null}>
                    {usuario.location != null
                      ? usuario.location
                      : " não disponível"}
                  </h4>
                </div>
                <div>
                  <img src={twitterIcon} alt="icone do twitter" />
                  <h4 nulo={usuario.twitter_username === null}>
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
                  <a href={usuario.blog} target="_blank">
                    <h4 className="link" nulo={usuario.blog === null}>
                      {usuario.blog != null ? usuario.blog : " não disponível"}
                    </h4>
                  </a>
                </div>
                <div>
                  <img src={companyIcon} alt="icone de uma empresa" />
                  <h4 nulo={usuario.company === null}>
                    {usuario.company != null
                      ? usuario.company
                      : "não disponível"}
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
