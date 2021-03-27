import 'react-responsive-modal/styles.css';

import _ from 'lodash';
import React from 'react';
import { Modal } from 'react-responsive-modal';

import { htmlToReact, withPrefix } from '../utils';

export default class SectionReviews extends React.Component {
  _contentTitle;
  _fullContent;

  state = {
    open: false
  };

  onOpenModal = (contentTitle, fullContent) => {
    this._contentTitle = "";
    this._fullContent = "";

    this._contentTitle = contentTitle;
    this._fullContent = fullContent;
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

    render() {
        const {open} =this.state;
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block reviews-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle inner-about">
                  {htmlToReact(_.get(section, 'subtitle', null))}

                  {_.get(section, 'modalCoverageTitle', null) && (
                    <span className="subtitle-link" onClick={() => this.onOpenModal(
                      _.get(section, 'modalCoverageTitle', null), _.get(section, 'modalCoverageBody', null))}
                      onKeyDown={() => this.onOpenModal(
                      _.get(section, 'modalCoverageTitle', null), _.get(section, 'modalCoverageBody', null))}
                      role="button"
                      tabIndex={0}>
                      {htmlToReact(_.get(section, 'subtitleLinkText', null))}
                    </span>
                  )}

                  {_.get(section, 'modalTermsOfUseTitle', null) && (
                  <span className="subtitle-link" onClick={() => this.onOpenModal(
                     _.get(section, 'modalTermsOfUseTitle', null), _.get(section, 'modalTermsOfUseBody', null))}
                     onKeyDown={() => this.onOpenModal(
                    _.get(section, 'modalTermsOfUseTitle', null), _.get(section, 'modalTermsOfUseBody', null))}
                    role="button"
                    tabIndex={0}>
                    {htmlToReact(_.get(section, 'subtitleLinkText', null))}
                  </span>
                  )}
                </p>
                )}
              </div>
              {_.get(section, 'reviews', null) && (
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'reviews', null), (review, review_idx) => (
                  <blockquote key={review_idx} className="cell review">
                    {_.get(review, 'contentImage', null) && (
                        <img src={withPrefix(_.get(review, 'contentImage', null))} alt={_.get(review, 'image_alt', null)} />
                    )}
                    <div className={'card ' + _.get(section, 'cardAssistencias', null)}>
                      <h3>{htmlToReact(_.get(review, 'contentTitle', null))}</h3>
                    
                      <p className={'review-text ' + _.get(section, 'withoutQuote', null)}>{htmlToReact(_.get(review, 'content', null))}</p>
                      {_.get(review, 'contentImage', null) && (
                        <div className="button-card-block">
                          <button className="button" onClick={() => this.onOpenModal(
                            _.get(review, 'contentTitle', null), _.get(review, 'fullContent', null))}>
                            <span>Saiba mais</span>
                          </button>
                        </div>
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

                  <Modal open={open} onClose={this.onCloseModal}>
                        <h2>{this._contentTitle}</h2>
                        <hr />
                        <div className="modal-body">
                          {htmlToReact(this._fullContent)}
                        </div>
                  </Modal>
                </div>

                {_.get(section, 'buttonCustomerTestimony', null) && (
                  <div className="button-customer-testimony">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="button">
                          <span>Ver mais depoimentos</span>
                    </a>
                  </div>
                )}
              </div>
              )}

              {_.get(section, 'links', null) && (
                <div className="links-parceiros">
                    {_.map(_.get(section, 'links', null), (link) => (
                    <div key={_.get(link, 'link-index', null)}>
                      {_.get(link, 'contentImage', null) && (
                        <a href="/" rel="noreferrer">
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
