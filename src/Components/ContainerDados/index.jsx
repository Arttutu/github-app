import React from "react";
import { Container } from "./style";

export default function ContainerDados({ usuario }) {
  return (
    <Container>
      {usuario ? (
        <>
          <div>
            <img
              src={usuario.avatar_url}
              alt={`Avatar de ${usuario.login}`}
            ></img>
            <div>
              <h2>{usuario.name}</h2>
              <span>@{usuario.login}</span>
              <p>{usuario.bio}</p>
              <div>
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
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
