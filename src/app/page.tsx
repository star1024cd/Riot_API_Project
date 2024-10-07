import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="list-h1">리그 오브 레전드 정보 앱</h1>
      <div>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
      </div>
      <span>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</span>
    </div>
  );
}
