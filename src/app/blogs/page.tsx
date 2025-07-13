import { BlogCard } from '@/components/blogs/BlogCard';
import matter from 'gray-matter';

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





export default async function BlogPage() {
    const res = await fetch("https://api.github.com/repos/bhavyakashmira/bhavyaBlog/contents/blogs", {
        next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    });
    if (!res.ok) {
        const error = await res.json();
        console.error("GitHub API Error:", error);
        throw new Error(`GitHub API failed: ${res.status}`);
    }
    const files: GitHubContentFile[] = await res.json();

    const posts: BlogPost[] = await Promise.all(
        files
            .filter((file) => file.name.endsWith(".md"))
            .map(async (file) => {
                const raw = await fetch(file.download_url);
                const content = await raw.text();
                const { data } = matter(content);

                return {
                    slug: file.name.replace(".md", ""),
                    title: data.title,
                    description: data.description,
                    date: data.date,
                    coverImage: data.coverImage,
                    tags: data.tags,
                    draft: data.draft ?? false, // default to false
                };
            })
    );

    return (
        <div className="max-w-3xl mx-auto p-6">
            <ul className="space-y-8">
                {posts
                    .filter((p) => !p.draft)
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
            </ul>
        </div>

    );
}
