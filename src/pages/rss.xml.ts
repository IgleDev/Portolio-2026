import es from '@/i18n/es';
import en from '@/i18n/en';
import gal from '@/i18n/gal';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import blogData from '@/json/blogs.json';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/types/consts';

export async function GET(context: APIContext) {
    const blogs = blogData.blogs;

    const languages = [ { lang: 'es', data: es }, { lang: 'en', data: en }, { lang: 'gal', data: gal }, ];

    const projectItems = languages.flatMap(({ lang, data }) =>
        data.projects.projectList.map((project) => ({
            title: project.projectTitle,
            description: project.projectDescLong,
            link: `/${lang}/projects/`,
        }))
    );

    const blogItems = blogs.map((blog) => ({
        title: blog.title,
        description: blog.paragraph[0],
        pubDate: new Date(blog.dateCreated),
        link: `/blog/${blog.slug}`,
    }));

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site!,
        items: [...projectItems, ...blogItems],
    });
}