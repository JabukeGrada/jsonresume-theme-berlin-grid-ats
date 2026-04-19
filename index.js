const style = `*, *::before, *::after { 
            box-sizing: border-box; 
        }

        body { 
            margin: 0; 
        }

        body a {
            text-decoration: none;
            position: relative;
            padding-bottom: 2px;
        }

        body a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: #1a1a1a;
            transition: width 0.2s ease;
        }

        body a:hover::after { 
            width: 100%;
        }

        .layout {
            max-width: 880px;
            margin: 0 auto;
            padding: 80px 48px;
            background: #ffffff;
            font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #1a1a1a;
            line-height: 24px;
            font-size: 14px;
        }

        .header {
            padding-bottom: 32px;
            border-bottom: 3px solid #1a1a1a;
            margin-bottom: 32px;
        }        

        .name {
            text-align: center;
            font-size: 44px;
            font-weight: 700;
            margin: 0 0 16px 0;
            letter-spacing: -0.5px;
            line-height: 56px;
            text-transform: uppercase;
        }

        .tagline {
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: #4a4a4a;
            margin: 8px 0 24px 0;
            font-weight: 500;
            letter-spacing: 0.3px;
        }

        .summary {
            font-size: 15px;
            line-height: 24px;
            color: #2a2a2a;
            margin: 0 0 64px 0;
            padding: 24px;
            border-left: 4px solid #e5e5e5;
            background: #fafafa;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 24px;
            margin-top: 16px;
        }

        .contact-info a {
            color: #1a1a1a;
            font-size: 16px;
        }

        .section { 
            margin-bottom: 64px;
        }

        .section-title {
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #1a1a1a;
            margin: 0 0 32px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #1a1a1a;
        }

        .grid-item {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 32px;
            margin-top: 40px;
            padding-top: 40px;
            border-top: 1px solid #e5e5e5;
        }

        .grid-item:first-of-type { 
            margin-top: initial;
            padding-top: initial;
            border-top: none; 
        }

        .meta-column {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-right: 16px;
            border-right: 2px solid #e5e5e5;
        }

        .content-column {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .meta-date {
            font-size: 13px;
            font-weight: 600;
            color: #4a4a4a;
            font-variant-numeric: tabular-nums;
        }

        .meta-location {
            font-size: 12px;
            color: #6a6a6a;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .item-title {
            font-size: 18px;
            font-weight: 700;
            margin: 0;
            color: #1a1a1a;
            letter-spacing: -0.2px;
        }

        .item-title a {
            color: inherit;
            text-decoration: none;
        }

        .item-title a:hover { 
            text-decoration: underline;
        }

        .item-subtitle {
            margin-top: 4px;
        }

        .item-subtitle * {
            font-size: 15px;
            font-weight: 500;
            color: #4a4a4a;
        }

        .item-description {
            font-size: 14px;
            line-height: 24px;
            color: #2a2a2a;
            margin: 8px 0 0 0;
        }

        .highlights-list {
            margin: 16px 0 0 0;
            padding-left: 24px;
            list-style: none;
        }

        .highlights-list li {
            position: relative;
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 24px;
        }

        .highlights-list li::before {
            content: '■';
            position: absolute;
            left: -24px;
            color: #1a1a1a;
            font-size: 10px;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 32px;
        }

        .skill-category {
            padding: 12px;
            border: 2px solid #e5e5e5;
            background: #fafafa;
        }

        .skill-category h4 {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 16px 0;
            color: #1a1a1a;
        }

        .badge-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .badge {
            flex: 1 1 auto;
            display: inline-block;
            font-size: 12px;
            padding: 4px 12px;
            background: #ffffff;
            border: 1px solid #d0d0d0;
            color: #2a2a2a;
            font-weight: 500;
            letter-spacing: 0.3px;
            text-align: center;
        }

        .simple-list {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .simple-item {
            padding: 16px;
            border-left: 3px solid #e5e5e5;
            background: #fafafa;
        }

        .simple-item h4 {
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 8px 0;
        }

        .simple-item p {
            font-size: 14px;
            margin: 0;
            color: #4a4a4a;
        }

        .simple-item a {
            color: inherit;
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .grid-item {
                    grid-template-columns: 1fr;
                    gap: 16px;
            }

            .meta-column {
                    border-right: none;
                    border-bottom: 2px solid #e5e5e5;
                    padding-right: 0;
                    padding-bottom: 16px;
            }
        }

        @media print {
            .layout { padding: 48px 32px; }
            .header { page-break-inside: avoid; }
            .grid-item { page-break-inside: avoid; }
            .no-break { page-break-inside: avoid;}
            .section .section-title { page-break-after: avoid; }
        }`;

function safeUrl(url) {
    if (!url || typeof url !== 'string') return null;
    const trimmed = url.trim();
    if (/^(javascript|data|vbscript|file|about):/i.test(trimmed)) return null;
    if (/^(https?|mailto|tel|sms|ftp):/i.test(trimmed)) return trimmed;
    if (trimmed.startsWith('/') || trimmed.startsWith('.')) return trimmed;
    if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
    if (/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(trimmed)) return `https://${trimmed}`;
    return trimmed;
}

function formatDateRange({ startDate, endDate }) {
    if (!startDate) return '';

    const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });

    const formatDate = (d) => {
        if (!d) return 'Present';
        const date = typeof d === 'string' ? new Date(d) : d;
        return isNaN(date.getTime()) ? String(d) : fmt.format(date);
    };

    const start = formatDate(startDate);
    if (endDate === undefined) return start;
    return `${start} - ${formatDate(endDate)}`;
}

function indentText(indent, text) {
    return text
        .replace(/\t/g, '    ')
        .split('\n')
        .map(line => '    '.repeat(indent) + line)
        .join('\n');
}

function renderContact({ email, phone, url, location, profiles = [] }) {
  const items = [];

  if (location) {
    const loc = [location.city, location.region, location.countryCode]
      .filter(Boolean)
      .join(', ');

    if (loc) items.push(loc);
  }

  if (email) {
    items.push(`<a href="mailto:${email}">${email}</a>`);
  }

  if (phone) {
    items.push(`<a href="tel:${phone}">${phone}</a>`);
  }

  if (url) {
    const href = safeUrl(url);
    if (href) {
      const display = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      items.push(
        `<a href="${href}" target="_blank" rel="noopener noreferrer">${display}</a>`
      );
    }
  }

  profiles.forEach((profile) => {
    if (profile.url) {
      const href = safeUrl(profile.url);
      if (href) {
        items.push(
          `<a href="${href}" target="_blank" rel="noopener noreferrer">${profile.network || profile.username}</a>`
        );
      }
    }
  });

  if (items.length === 0) return '';
  return `<div class="contact-info">${items.map((i) => `<span>${i}</span>`).join('')}</div>`;
}

function renderHighlights(highlights) {
    if (!highlights || highlights.length == 0) return '';
    let list = ['<ul class="highlights-list">'];

    for (const highlight of highlights) {
        list.push(`\t<li>${highlight}</li>`);
    }

    list.push('</ul>');
    return list.join('\n');
}

function renderGridItem({ title, metaDate, metaLocation, tags, subtitle, description, highlights }) {
    let lines = ['<div class="grid-item">']
        lines.push('\t<div class="meta-column">');
            if (metaDate) lines.push(`\t\t<div class="meta-date">${metaDate}</div>`);
            if (metaLocation) lines.push(`\t\t<div class="meta-location">${metaLocation}</div>`);
        lines.push('\t</div>');
        lines.push('\t<div class="content-column">');
            lines.push(`\t\t<h3 class="item-title">${title}</h3>`);
                if (subtitle) lines.push(`\t\t<div class="item-subtitle">${subtitle}</div>`);
                if (description) lines.push(`\t\t<p class="item-description"><em>${description}</em></p>`);
                if (highlights && highlights.length > 0) {
                    const highlightsBody = renderHighlights(highlights);
                    lines.push(indentText(2, highlightsBody));
                }
                if (tags && tags.length > 0) {
                    lines.push('\t\t<div class="badge-list">');
                    
                    for (const tag of tags) {
                        lines.push(`\t\t\t<span class="badge">${tag}</span>`);
                    }

                    lines.push('\t\t</div>');
                }
        lines.push('\t</div>');
    lines.push('</div>');

    return lines.join('\n');
}

function renderHeader(basics) {
    let lines = []

    lines.push('<header class="header">');
    if (basics.name) lines.push(`\t<h1 class="name">${basics.name}</h1>`);
    if (basics.label) lines.push(`\t<div class="tagline">${basics.label}</div>`);
    lines.push('\t' + renderContact({
        email: basics.email,
        phone: basics.phone,
        url: basics.url,
        location: basics.location,
        profiles: basics.profiles || [],
    }));

    lines.push('</header>');

    return lines.join('\n');
}

function renderSummary(summary) {
    let lines = ['<section class="section no-break">']
    lines.push(`\t<p class="summary">${summary}</p>`);
    lines.push('</section>');
    return lines.join('\n');
}

function renderSkills(skills) {
    let lines = ['<section class="section no-break">']
    lines.push('\t<h2 class="section-title">Skills</h2>');
    lines.push('\t<div class="skills-grid">');

    for (const skill of skills) {
        lines.push('\t\t<div class="skill-category">')
        lines.push(`\t\t\t<h4>${skill.name}</h4>`)

        if (skill.keywords && skill.keywords.length > 0) {
            lines.push('\t\t\t<div class="badge-list">');
            
            for (const kw of skill.keywords) {
                lines.push(`\t\t\t\t<span class="badge">${kw}</span>`);
            }

            lines.push('\t\t\t</div>');
        }

        lines.push('\t\t</div>');
    }

    lines.push('\t</div>');
    lines.push('</section>');

    return lines.join('\n');
}

function renderWork(work) {
    let lines = ['<section id="work" class="section">'];
    lines.push('\t<h2 class="section-title">Experience</h2>');

    for (const job of work) {
        const href = job.url ? safeUrl(job.url) : null;
        const titleHtml = href
            ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${job.name}</a>`
            : job.name;

        const jobBody = renderGridItem({
            metaDate: formatDateRange({ startDate: job.startDate, endDate: job.endDate }),
            metaLocation: job.location,
            title: job.position || titleHtml,
            subtitle: job.position && titleHtml ? titleHtml : null,
            description: job.summary,
            highlights: job.highlights
        });

        lines.push(indentText(1, jobBody));
    }
    
    lines.push('</section>')

    return lines.join('\n');
}

function renderProjects(projects) {
    let lines = ['<section id="projects" class="section">'];
    lines.push('\t<h2 class="section-title">Projects</h2>')

    for (const project of projects) {
        const href = project.url ? safeUrl(project.url) : null;
        const titleHtml = href
            ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${project.name}</a>`
            : project.name;

        lines.push('\t' + renderGridItem({
            metaDate: formatDateRange({ startDate: project.startDate, endDate: project.endDate }),
            metaLocation: project.type,
            title: titleHtml,
            tags: project.keywords,
            description: project.description,
            highlights: project.highlights,
        }));
    }

    lines.push('</section>');
    return lines.join('\n');
}

function renderEducation(education) {
    let lines = ['<section id="education" class="section">'];
    lines.push('\t<h2 class="section-title">Education</h2>');

    for (const edu of education) {
        const educationBody = renderGridItem({
            metaDate: formatDateRange({ startDate: edu.startDate, endDate: edu.endDate }),
            metaLocation: edu.area,
            title: edu.institution,
            subtitle: edu.studyType && edu.area ? `${edu.studyType} in ${edu.area}` : null,
            description: edu.score ? `GPA: ${edu.score}` : null,
            highlights: edu.courses,
        });

        lines.push(indentText(1, educationBody));
    }

    lines.push('</section>');
    return lines.join('\n');
}

function renderLanguages(languages) {
    let lines = ['<section id="languages" class="section">'];
    lines.push('\t<h2 class="section-title">Languages</h2>');
    lines.push('\t<div class="badge-list">');

    for (const language of languages) {
        let text = language.language;
        if (language.fluency) text += ` — ${language.fluency}`;
        const languageBody = `<span class="badge">${text}</span>`;

        lines.push(indentText(2, languageBody));
    }

    lines.push('\t</div>');
    lines.push('</section>');
    return lines.join('\n');
}

function renderAwards(awards) {
    let lines = ['<section class="section">'];
    lines.push('\t<h2 class="section-title">Awards</h2>');
    lines.push('\t<div class="simple-list">');

    for (const award of awards) {
        lines.push('\t\t<div class="simple-item">');
        lines.push(`\t\t\t<h4>${award.title}</h4>`);
        lines.push(`\t\t\t<p>${award.awarder}${award.date ? ` • ${award.date}` : ''}</p>`);
        if (award.summary) lines.push(`\t\t\t<p>${award.summary}</p>`);
        lines.push('\t\t</div>');
    }

    lines.push('\t</div>');
    lines.push('</section>');
    return lines.join('\n');
}

function renderPublications(publications) {
    let lines = ['<section class="section">'];
    lines.push('\t<h2 class="section-title">Publications</h2>');
    lines.push('\t<div class="simple-list">');

    for (const pub of publications) {
        const href = pub.url ? safeUrl(pub.url) : null;
        const nameHtml = href
            ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${pub.name}</a>`
            : pub.name;
        lines.push('\t\t<div class="simple-item">');
        lines.push(`\t\t\t<h4>${nameHtml}</h4>`);
        lines.push(`\t\t\t<p>${pub.publisher}${pub.releaseDate ? ` • ${pub.releaseDate}` : ''}</p>`);
        if (pub.summary) lines.push(`\t\t\t<p>${pub.summary}</p>`);
        lines.push('\t\t</div>');
    }

    lines.push('\t</div>');
    lines.push('</section>');
    return lines.join('\n');
}

function renderVolunteer(volunteer) {
    let lines = ['<section class="section">'];
    lines.push('\t<h2 class="section-title">Volunteer</h2>');

    for (const vol of volunteer) {
        lines.push(indentText(1, renderGridItem({
            metaDate: formatDateRange({ startDate: vol.startDate, endDate: vol.endDate }),
            title: vol.position,
            subtitle: vol.organization,
            description: vol.summary,
            highlights: vol.highlights,
        })));
    }

    lines.push('</section>');
    return lines.join('\n');
}

function renderInterests(interests) {
    let lines = ['<section class="section">'];
    lines.push('\t<h2 class="section-title">Interests</h2>');
    lines.push('\t<div class="simple-list">');

    for (const interest of interests) {
        lines.push('\t\t<div class="simple-item">');
        lines.push(`\t\t\t<h4>${interest.name}</h4>`);
        if (interest.keywords && interest.keywords.length > 0) {
            const keywordsText = interest.keywords.join(', ');
            lines.push(`\t\t\t<p>${keywordsText}</p>`);
        }
        lines.push('\t\t</div>');
    }

    lines.push('\t</div>');
    lines.push('</section>');
    return lines.join('\n');
}

function renderReferences(references) {
    let lines = ['<section class="section">'];
    lines.push('\t<h2 class="section-title">References</h2>');
    lines.push('\t<div class="simple-list">');

    for (const reference of references) {
        lines.push('\t\t<div class="simple-item">');
        lines.push(`\t\t\t<h4>${reference.name}</h4>`);
        if (reference.reference) lines.push(`\t\t\t<p>${reference.reference}</p>`);
        lines.push('\t\t</div>');
    }

    lines.push('\t</div>');
    lines.push('</section>');
    return lines.join('\n');
}

function renderBody(resume) {
    const {
        basics = {},
        work = [],
        education = [],
        skills = [],
        projects = [],
        volunteer = [],
        awards = [],
        publications = [],
        languages = [],
        interests = [],
        references = [],
    } = resume;

    let lines = ['<div class="layout">']
    lines.push(indentText(1, renderHeader(basics)));

    if (basics.summary) lines.push(indentText(1, renderSummary(basics.summary)));
    if (work.length > 0) lines.push(indentText(1, renderWork(work)));
    if (projects.length > 0) lines.push(indentText(1, renderProjects(projects)));  
    if (skills.length > 0) lines.push(indentText(1, renderSkills(skills)));
    if (references.length > 0) lines.push(indentText(1, renderReferences(references)));
    if (publications.length > 0) lines.push(indentText(1, renderPublications(publications)));
    if (awards.length > 0) lines.push(indentText(1, renderAwards(awards)));
    if (volunteer.length > 0) lines.push(indentText(1, renderVolunteer(volunteer)));
    if (education.length > 0) lines.push(indentText(1, renderEducation(education)));
    if (languages.length > 0) lines.push(indentText(1, renderLanguages(languages)));
    if (interests.length > 0) lines.push(indentText(1, renderInterests(interests)));

    lines.push('</div>');
    return lines.join('\n');
}

export function render(resume) {
  const body = renderBody(resume);
  const title = (resume.basics && resume.basics.name) || 'Resume';
  const minifiedCSS = style
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s*([{}|:;,])\s*/g, '$1') // Remove spaces around delimiters
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim();

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>${minifiedCSS}</style>
</head>
    <body>
${indentText(2, body)}
    </body>
</html>`;
}