"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import TravelFeedSlider from "@/container/Slider/TravelFeedSlider";
import FullSlider from "@/container/Slider/FullSlider";
import images from "@/json/mainBanner.json";
import posts from "@/json/post.json";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const userData = false;
      if (!userData) router.push("/signUp");

      setUser(userData);
      setLoading(false);
    }, 3000);
  }, [router]);

  if (loading) {
    return (
      <div className="fixed left-0 top-0 z-[99999] flex w-full cursor-progress flex-col items-center justify-center overflow-hidden">
        <div className="flex h-screen w-[390px] flex-col items-center justify-center bg-[#226AFA]">
          <h1 className="mb-5 text-2xl font-semibold text-white">
            여행 동행을 찾을 때는
          </h1>
          <Image src="/logo2.png" width={182} height={60} alt="logo" />
        </div>
      </div>
    );
  }

  return (
    user && (
      <>
        <FullSlider data={images} />
        <h1 className="px-5 py-5 text-xl font-semibold">
          민아님 안녕하세요! <br />
          여행을 떠날 준비되셨나요?
        </h1>
        <section className="w-full pb-16">
          <div className="flex items-center justify-between px-5 py-3">
            <h2 className="text-base font-semibold">
              김민아님을 위한 추천 여행 피드
            </h2>
            <Link href="#" className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#A8B2BE]">
                더보기
              </span>
              <Image
                src="chevron-right.svg"
                width={6}
                height={6}
                alt=" 더보기"
                className="ml-2"
              />
            </Link>
          </div>
          <div className="pl-5">
            <TravelFeedSlider data={posts} />
          </div>
        </section>
        <section className="w-full px-5 pb-6">
          <Image
            src="/promotion.png"
            width={0}
            height={0}
            sizes="100%"
            className="w-full"
            alt="홍보배너"
          />
        </section>
        <section className="w-full pb-16">
          <div className="flex items-center justify-between px-5 py-3">
            <h2 className="text-base font-semibold">
              트리비의 추천 인기 여행지
            </h2>
            <Link href="#" className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#A8B2BE]">
                더보기
              </span>
              <Image
                src="chevron-right.svg"
                width={6}
                height={6}
                alt=" 더보기"
                className="ml-2"
              />
            </Link>
          </div>
          <div className="pl-5">
            <TravelFeedSlider data={posts} />
          </div>
        </section>
      </>
    )
  );
}
