import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';



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
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 prose prose-neutral dark:prose-invert">
            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight leading-tight mb-2">
                {data.title}
            </h1>

            {/* Meta: date, tags */}
            <div className="text-sm text-gray-500 flex flex-wrap gap-2 items-center mb-6">
                <span className="underline underline-offset-2 decoration-dotted">
                    {new Date(data.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </span>

                {data.tags && data.tags.length > 0 && (
                    <>
                        <span className="text-gray-400 select-none">•</span>
                        <span className="underline underline-offset-2 decoration-dotted">
                            {data.tags.join(" • ")}
                        </span>
                    </>
                )}
            </div>

            {/* Optional Cover Image */}
            {/* {data.coverImage && (
                <img
                    src={data.coverImage}
                    alt={data.title}
                    className="rounded-xl mb-8 border shadow"
                />
            )} */}

            <div
                className="prose max-w-none prose-lg dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: processed.toString() }}
            />
        </article>

    );
}
