import _ from 'lodash';
import React from 'react';

import { htmlToReact, withPrefix } from '../utils';

export default class SectionReviews extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block reviews-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              {_.get(section, 'reviews', null) && (
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'reviews', null), (review, review_idx) => (
                  <blockquote key={review_idx} className="cell review">
                    {_.get(review, 'contentImage', null) && (
                      <a class="post-thumbnail" href="#">
                        <img src={withPrefix(_.get(review, 'contentImage', null))} alt={_.get(review, 'image_alt', null)} />
                      </a>
                    )}
                    <div className={'card ' + _.get(section, 'withoutQuote', null)}>
                      <h3>{htmlToReact(_.get(review, 'contentTitle', null))}</h3>
                    
                      <p className={'review-text ' + _.get(section, 'withoutQuote', null)}>{htmlToReact(_.get(review, 'content', null))}</p>
                      {_.get(review, 'contentImage', null) && (
                        <a class="button" href="#"><span>Saiba mais</span></a>
                      )}
                      <footer className="review-footer">
                        {_.get(review, 'avatar', null) && (
                        <img className="review-avatar" src={withPrefix(_.get(review, 'avatar', null))} alt={_.get(review, 'avatar_alt', null)}/>
                        )}
                        <cite className="review-author">{_.get(review, 'author', null)}</cite>
                      </footer>
                    </div>
                  </blockquote>
                  ))}
                </div>
              </div>
              )}

              {_.get(section, 'links', null) && (
                <div class="links-parceiros">
                    {_.map(_.get(section, 'links', null), (link) => (
                    <div>
                      {_.get(link, 'contentImage', null) && (
                        <a href="#">
                          <img className="parceiros-avatar" src={withPrefix(_.get(link, 'contentImage', null))} alt={_.get(link, 'image_alt', null)} />
                        </a>
                      )}
                    </div>
                    ))}
                </div>
              )}
            </section>
        );
    }
}
