import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { FiCalendar, FiTag, FiArrowLeft, FiClock } from 'react-icons/fi';

type Heading = { id: string; text: string; depth: number };

function extractHeadings(content: string): Heading[] {
    const lines = content.split('\n');
    const headings: Heading[] = [];
    for (const line of lines) {
        const match = line.match(/^(#{1,6})\s+(.+)$/);
        if (match) {
            const depth = match[1].length;
            const text = match[2].trim();
            const id = text.toLowerCase().replace(/[^\w]+/g, '-').replace(/-+$/, '');
            headings.push({ id, text, depth });
        }
    }
    return headings;
}

function readingTime(content: string): string {
    const words = content.split(/\s+/).length;
    const min = Math.ceil(words / 200);
    return `${min} min read`;
}

export function generateStaticParams() {
    const whitepapersDir = path.join(process.cwd(), 'whitepapers');
    const files = fs.readdirSync(whitepapersDir).filter((f) => f.endsWith('.md'));
    return files.map((file) => ({ slug: file.replace('.md', '') }));
}

export default async function WhitepaperPost({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'whitepapers', `${slug}.md`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(raw);

    const headings = extractHeadings(content);
    const rt = readingTime(content);

    const processed = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(content);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <a
                href="/whitepapers"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-white transition-colors mb-8"
            >
                <FiArrowLeft className="inline" />
                Back to whitepapers
            </a>

            <div className="flex gap-12">
                <article className="flex-1 min-w-0">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                        {data.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8 text-sm">
                        <div className="flex items-center gap-1">
                            <FiCalendar className="inline" />
                            <span>
                                {new Date(data.date).toLocaleDateString('en-IN', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiClock className="inline" />
                            <span>{rt}</span>
                        </div>
                        {data.tags && data.tags.length > 0 && (
                            <div className="flex items-center gap-1">
                                <FiTag className="inline" />
                                <span className="flex gap-1 flex-wrap">
                                    {data.tags.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="bg-white/10 px-2.5 py-0.5 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </span>
                            </div>
                        )}
                    </div>

                    <div
                        className="prose max-w-none prose-lg prose-invert
                            prose-headings:font-bold prose-headings:tracking-tight
                            prose-headings:text-gray-100 prose-headings:border-b prose-headings:border-white/10
                            prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-gray-300 prose-p:leading-relaxed
                            prose-strong:text-gray-100
                            prose-a:text-blue-400 hover:prose-a:text-blue-300
                            prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-400 prose-blockquote:bg-white/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                            prose-code:text-blue-300 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
                            prose-img:rounded-xl prose-img:shadow-lg
                            prose-li:text-gray-300
                            prose-hr:border-white/10"
                        dangerouslySetInnerHTML={{ __html: processed.toString() }}
                    />
                </article>

                {headings.length > 0 && (
                    <aside className="hidden xl:block w-64 shrink-0">
                        <div className="sticky top-12">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                                On this page
                            </h3>
                            <nav className="space-y-1">
                                {headings.map((h) => (
                                    <a
                                        key={h.id}
                                        href={`#${h.id}`}
                                        className={`block text-sm transition-colors hover:text-white ${
                                            h.depth === 3 ? 'pl-4 text-gray-400' : 'text-gray-500'
                                        }`}
                                    >
                                        {h.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
}
