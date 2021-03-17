import '../sass/main.scss';

import { graphql } from 'gatsby';
import React from 'react';


// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class NotFound extends React.Component {
    render() {
        return (
            <section id="notfound" className="not-found">
                <div className="card">
                    <h2 className="card-title">Página não encontrada</h2>
                    <p className="card-subtitle">Desculpe, a página solicitada não foi encontrada.</p>
                    <a href="/" className="link-home">Voltar a página inicial</a>
                </div>
            </section>
        );
    }
}
