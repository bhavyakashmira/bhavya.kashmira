import React from "react";

export type BlogCardProps = {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
};

export const BlogCard: React.FC<BlogCardProps> = ({ slug, title, description, date, tags }) => {
    return (
        <li key={slug} className="group">
            <a
                href={`/blogs/${slug}`}
                className="text-xl font-semibold hover:underline underline-offset-4 transition-all"
            >
                {title}
            </a>

            <p className="text-sm text-gray-500 mt-1 flex flex-wrap gap-2 items-center text-muted-foreground">
                <span className="underline decoration-dotted underline-offset-2">
                    {new Date(date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </span>

                {tags && tags.length > 0 && (
                    <>
                        <span className="text-gray-400 select-none">•</span>
                        <span className="underline decoration-dotted underline-offset-2">
                            {tags.join(" • ")}
                        </span>
                    </>
                )}
            </p>

            <p className="text-base italic text-gray-600 mt-1">{description}</p>
        </li>
    );
};
