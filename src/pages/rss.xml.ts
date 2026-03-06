import rss from '@astrojs/rss';
import { SITE_TITLE } from '../types/consts';
import es from '../i18n/es';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const projects = es.projects.projectList;

    return rss({
        title: SITE_TITLE,
        description: 'Desarrollador Full-Stack de Galicia',
        site: context.site!,
        items: projects.map((project) => ({
            title: project.projectTitle,
            description: project.projectDescLong,
            link: `/es/projects/`,
        })),
    });
}