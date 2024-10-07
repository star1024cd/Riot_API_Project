import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="list-h1">리그 오브 레전드 정보 앱</h1>
        <span>
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link href="/champions">
          <Image
            className="rounded-md object-scale-down image-hover"
            width={607}
            height={358}
            sizes="(max-width: 768px) 100vw, 33vw"
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_5.jpg"
            }
            alt={"티모"}
          />
          챔피언 목록
        </Link>
        <Link href="/items">
          <Image
            className="rounded-md object-scale-down image-hover"
            width={607}
            height={358}
            sizes="(max-width: 768px) 100vw, 33vw"
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg"
            }
            alt={"딩거"}
          />
          아이템 목록
        </Link>
        <Link href="/rotation">
          {" "}
          <Image
            className="rounded-md object-scale-down image-hover"
            width={607}
            height={358}
            sizes="(max-width: 768px) 100vw, 33vw"
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_1.jpg"
            }
            alt={"탐켄치"}
          />
          챔피언 로테이션
        </Link>
      </div>
    </div>
  );
}
