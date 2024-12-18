import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { STARTUP_QUERY } from '@/sanity/lib/queries';

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params });
  // console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <h1 className="text-3xl font-[family-name:var(--font-josefin-sans)]">
        Welcome to Next.js
      </h1>
    </>
  );
}
