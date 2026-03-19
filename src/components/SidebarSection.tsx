import { useHayc } from '../hayc/config-context';

export function SidebarSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="col-lg-4">
      <aside className="blog-sidebar">
        <div className="widget mb-40">
          <div className="widget-title mb-30">
            <h5 {...cp('sidebarConfig.searchTitle')}>{t(config.sidebarConfig.searchTitle)}</h5>
          </div>
          <div className="widget-search">
            <form>
              <input 
                type="text" 
                placeholder={t(config.sidebarConfig.searchPlaceholder)}
                {...cp('sidebarConfig.searchPlaceholder')}
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget mb-40">
          <div className="widget-title mb-30">
            <h5 {...cp('sidebarConfig.categoriesTitle')}>{t(config.sidebarConfig.categoriesTitle)}</h5>
          </div>
          <div className="widget-categories">
            <ul>
              {config.sidebarConfig.categories.map((category, index) => (
                <li key={index}>
                  <a href={category.href} {...cp(`sidebarConfig.categories.${index}.name`)}>
                    {t(category.name)}
                    <span>({category.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="widget mb-40">
          <div className="widget-title mb-30">
            <h5 {...cp('sidebarConfig.recentPostsTitle')}>{t(config.sidebarConfig.recentPostsTitle)}</h5>
          </div>
          <div className="recent-posts">
            {config.sidebarConfig.recentPosts.map((post, index) => (
              <div key={index} className="recent-post-item mb-20">
                <div className="recent-post-thumb">
                  <img src={img(post.image)} alt="" />
                </div>
                <div className="recent-post-content">
                  <h6>
                    <a href={post.href} {...cp(`sidebarConfig.recentPosts.${index}.title`)}>
                      {t(post.title)}
                    </a>
                  </h6>
                  <span className="post-date" {...cp(`sidebarConfig.recentPosts.${index}.date`)}>
                    {t(post.date)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="widget mb-40">
          <div className="widget-title mb-30">
            <h5 {...cp('sidebarConfig.tagsTitle')}>{t(config.sidebarConfig.tagsTitle)}</h5>
          </div>
          <div className="widget-tags">
            {config.sidebarConfig.tags.map((tag, index) => (
              <a key={index} href={tag.href} {...cp(`sidebarConfig.tags.${index}.name`)}>
                {t(tag.name)}
              </a>
            ))}
          </div>
        </div>

        <div className="widget mb-40">
          <div className="widget-title mb-30">
            <h5 {...cp('sidebarConfig.archiveTitle')}>{t(config.sidebarConfig.archiveTitle)}</h5>
          </div>
          <div className="widget-archive">
            <ul>
              {config.sidebarConfig.archives.map((archive, index) => (
                <li key={index}>
                  <a href={archive.href} {...cp(`sidebarConfig.archives.${index}.name`)}>
                    {t(archive.name)}
                    <span>({archive.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="widget mb-40">
          <div className="widget-title mb-30">
            <h5 {...cp('sidebarConfig.followUsTitle')}>{t(config.sidebarConfig.followUsTitle)}</h5>
          </div>
          <div className="widget-social">
            {config.sidebarConfig.socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}