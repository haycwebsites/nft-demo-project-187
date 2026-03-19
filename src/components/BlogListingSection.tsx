import { useHayc } from '../hayc/config-context';

export default function BlogListingSection() {
  const { t, img, config, cp } = useHayc();

  if (!config.blogListingConfig?.title?.en) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="page-title text-center mb-50">
            <h2 {...cp('blogListingConfig.title')}>{t(config.blogListingConfig.title)}</h2>
            <p {...cp('blogListingConfig.subtitle')}>{t(config.blogListingConfig.subtitle)}</p>
          </div>
        </div>
      </div>
      <div className="row">
        {config.blogListingConfig.posts.map((post, index) => (
          <div key={index} className="col-lg-6 col-md-6">
            <div className="single-blog mb-50">
              <div className="blog-img">
                <img src={img(post.image)} alt="Blog" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span {...cp(`blogListingConfig.posts.${index}.date`)}>{t(post.date)}</span>
                  <span {...cp(`blogListingConfig.posts.${index}.category`)}>{t(post.category)}</span>
                </div>
                <h3 {...cp(`blogListingConfig.posts.${index}.title`)}>
                  <a href={post.href}>{t(post.title)}</a>
                </h3>
                <p {...cp(`blogListingConfig.posts.${index}.excerpt`)}>{t(post.excerpt)}</p>
                <a href={post.href} className="read-more" {...cp(`blogListingConfig.posts.${index}.readMore`)}>{t(post.readMore)}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}