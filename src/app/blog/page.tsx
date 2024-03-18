import React from "react";
import Link from "next/link";

import { DEMO_POSTS } from "@/data/posts";

import SectionAds from "./SectionAds";
import SectionMagazine5 from "./SectionMagazine5";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassMorphism from "@/components/BgGlassMorphism";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const BlogPage: React.FC = () => {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      {/* ======== BG GLASS ======== */}
      <BgGlassMorphism />

      {/* ======== ALL SECTIONS ======== */}
      {/* ======= START CONTAINER ============= */}
      <div className="container relative">
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
          <SectionMagazine5 posts={MAGAZINE1_POSTS} />
        </div>

        <div className={`py-10 bg-primary-500 rounded-3xl text-center`}>
          <p className={`text-xl text-white`}>
            Want to contribute to our magazine?
          </p>
          <Link
            href={`/write-an-article`}
            className={`text-secondary-500 font-bold tracking-wider uppercase`}
          >
            Let us know
          </Link>
        </div>

        {/*<SectionAds />*/}

        {/* === SECTION 8 === */}
        <SectionLatestPosts className="py-16 lg:py-28" />

        {/* === SECTION 1 === */}
        <SectionSubscribe2 className="pb-16 lg:pb-28" />
      </div>
    </div>
  );
};

export default BlogPage;
