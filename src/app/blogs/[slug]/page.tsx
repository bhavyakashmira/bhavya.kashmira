import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import React, { useState } from 'react';
import { FiCalendar, FiTag } from "react-icons/fi";



type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage?: string;
    tags?: string[];
    draft?: boolean;
};

type GitHubContentFile = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: 'file';
};

export async function generateStaticParams() {
    const res = await fetch("https://api.github.com/repos/bhavyakashmira/bhavyaBlog/contents/blogs");
    const files: GitHubContentFile[] = await res.json();

    return files
        .filter(file => file.name.endsWith(".md"))
        .map(file => ({
            slug: file.name.replace(".md", "")
        }));
}


export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const res = await fetch(
        `https://raw.githubusercontent.com/bhavyakashmira/bhavyaBlog/main/blogs/${slug}.md`
    );
    const raw = await res.text();
    const { content, data } = matter(raw);
    const processed = await remark().use(html).process(content);

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            {/* Optional Cover Image */}
            {/* {data.coverImage && (
                <div className="relative w-full h-72 sm:h-96 mb-8 overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={data.coverImage}
                        alt={data.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            )} */}

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                {data.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8">
                <div className="flex items-center gap-1">
                    <FiCalendar className="inline" />
                    <span>
                        {new Date(data.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </span>
                </div>

                {data.tags && data.tags.length > 0 && (
                    <div className="flex items-center gap-1">
                        <FiTag className="inline" />
                        <span className="flex gap-1 flex-wrap">
                            {data.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div
                className="prose max-w-none prose-lg prose-invert prose-headings:font-bold prose-headings:text-gray-100 prose-a:text-blue-400 prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: processed.toString() }}
            />
        </article>
    );
}





