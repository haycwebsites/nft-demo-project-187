import React from 'react';
import { useHayc } from '../hayc/config-context';

export function BlogDetailsSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-details-content">
            <div className="blog-details-meta">
              <span {...cp('blogDetailsConfig.date')}>{t(config.blogDetailsConfig.date)}</span>
              <span {...cp('blogDetailsConfig.author')}>{t(config.blogDetailsConfig.author)}</span>
              <span {...cp('blogDetailsConfig.category')}>{t(config.blogDetailsConfig.category)}</span>
            </div>
            <h2 {...cp('blogDetailsConfig.title')} className="blog-details-title">
              {t(config.blogDetailsConfig.title)}
            </h2>
            <div className="blog-details-img mb-30">
              <img src={img(config.blogDetailsConfig.image)} alt="blog details" />
            </div>
            <div className="blog-details-text">
              <p {...cp('blogDetailsConfig.content')}>{t(config.blogDetailsConfig.content)}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-sidebar">
            <div className="sidebar-widget">
              <h4 {...cp('blogDetailsConfig.sidebarTitle')} className="widget-title">
                {t(config.blogDetailsConfig.sidebarTitle)}
              </h4>
              <div className="sidebar-content">
                <p {...cp('blogDetailsConfig.sidebarContent')}>{t(config.blogDetailsConfig.sidebarContent)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}