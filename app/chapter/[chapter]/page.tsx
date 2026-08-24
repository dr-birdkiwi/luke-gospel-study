import { notFound } from 'next/navigation';
import { Home } from '../../page';

const chapterNumbers = Array.from({ length: 24 }, (_, index) => index + 1);

export function generateStaticParams() {
  return chapterNumbers.map((chapter) => ({ chapter: String(chapter) }));
}

export default async function ChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: chapterParam } = await params;
  const chapterNo = Number(chapterParam);
  if (!Number.isInteger(chapterNo) || chapterNo < 1 || chapterNo > chapterNumbers.length) notFound();
  return <Home initialChapter={chapterNo} />;
}
