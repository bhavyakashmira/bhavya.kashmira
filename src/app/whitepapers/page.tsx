import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { FiCalendar, FiClock, FiTag, FiArrowRight } from 'react-icons/fi';

type WhitepaperPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
};

function readingTime(content: string): string {
    const words = content.split(/\s+/).length;
    const min = Math.ceil(words / 200);
    return `${min} min read`;
}

export default function WhitepapersPage() {
    const whitepapersDir = path.join(process.cwd(), 'whitepapers');
    const files = fs.readdirSync(whitepapersDir).filter((f) => f.endsWith('.md'));

    const posts: (WhitepaperPost & { readingTime: string })[] = files.map((file) => {
        const raw = fs.readFileSync(path.join(whitepapersDir, file), 'utf-8');
        const { data, content } = matter(raw);
        return {
            slug: file.replace('.md', ''),
            title: data.title,
            description: data.description,
            date: data.date,
            tags: data.tags,
            readingTime: readingTime(content),
        };
    });

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    Whitepaper Notes
                </h1>
                <p className="text-gray-500 text-lg">
                    Summaries and key takeaways from whitepapers I&apos;ve been reading.
                </p>
            </div>

            <div className="space-y-6">
                {posts
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((post) => (
                        <Link
                            key={post.slug}
                            href={`/whitepapers/${post.slug}`}
                            className="group block rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2 min-w-0">
                                    <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                        {post.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-1">
                                        <span className="flex items-center gap-1">
                                            <FiCalendar className="inline" size={12} />
                                            {new Date(post.date).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiClock className="inline" size={12} />
                                            {post.readingTime}
                                        </span>
                                        {post.tags && post.tags.length > 0 && (
                                            <span className="flex items-center gap-1.5 flex-wrap">
                                                <FiTag className="inline" size={12} />
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-white/10 px-2 py-0.5 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <FiArrowRight className="shrink-0 mt-1 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={18} />
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
