import React from 'react';
import { useHayc } from '../hayc/config-context';

interface BlogSidebarSectionConfig {
  searchTitle: { en: string };
  searchPlaceholder: { en: string };
  instagramTitle: { en: string };
  followUsTitle: { en: string };
  instagramImages: string[];
}

// Add to config.ts
export const blogSidebarSectionConfig: BlogSidebarSectionConfig = {
  searchTitle: { en: 'Search' },
  searchPlaceholder: { en: 'Search your keyword...' },
  instagramTitle: { en: 'Instagram' },
  followUsTitle: { en: 'Follow Us' },
  instagramImages: [
    '/img/blog/aside/insta_01.jpg',
    '/img/blog/aside/insta_02.jpg',
    '/img/blog/aside/insta_03.jpg',
    '/img/blog/aside/insta_04.jpg',
    '/img/blog/aside/insta_05.jpg',
    '/img/blog/aside/insta_06.jpg',
    '/img/blog/aside/insta_07.jpg',
    '/img/blog/aside/insta_08.jpg',
    '/img/blog/aside/insta_09.jpg'
  ]
};

export default function BlogSidebarSection() {
  const { t, img, config, cp } = useHayc();
  const sidebarConfig = config.blogSidebarSectionConfig;

  return (
    <div className="col-lg-4">
      <aside>
        <div className="widget mb-40">
          <div className="widget-title text-center">
            <h4 {...cp('blogSidebarSectionConfig.searchTitle')}>{t(sidebarConfig.searchTitle)}</h4>
          </div>
          <div className="slidebar__form">
            <form action="#">
              <input 
                type="text" 
                placeholder={t(sidebarConfig.searchPlaceholder)}
              />
              <button><i className="fas fa-search"></i></button>
            </form>
          </div>
        </div>
        <div className="widget mb-40">
          <div className="widget-title text-center">
            <h4 {...cp('blogSidebarSectionConfig.instagramTitle')}>{t(sidebarConfig.instagramTitle)}</h4>
          </div>
          <ul className="widget-insta-post">
            {sidebarConfig.instagramImages.map((image, index) => (
              <li key={index}>
                <a href="#">
                  <img src={img(image)} alt="Instagram post" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget mb-40">
          <div className="widget-title text-center">
            <h4 {...cp('blogSidebarSectionConfig.followUsTitle')}>{t(sidebarConfig.followUsTitle)}</h4>
          </div>
          <div className="widget-social text-center">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-wordpress"></i></a>
          </div>
        </div>
      </aside>
    </div>
  );
}