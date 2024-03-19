import React from "react";
import { DEMO_POSTS } from "@/data/posts";
import { PostDataType } from "@/data/types";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Comment from "@/shared/Comment";
import AuthorSocialsList from "@/shared/AuthorSocialsList";
import Textarea from "@/shared/Textarea";
import Image from "next/image";
import travelhero2Image from "@/images/travelhero2.png";
import Link from "next/link";
import { Route } from "@/routers/types";

const Page = ({
  params,
  searchParams,
}: {
  params: { stepIndex: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="/blog" color="purple" name="Expert Advice" />
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            Holiday Here This Year
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            We’re an online magazine dedicated to covering the best in
            international product design. We started as a little blog back in
            2002 covering student work and over time
          </span>

          {/*<div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>*/}
          {/*<div className="flex flex-col items-baseline sm:flex-row sm:justify-between">*/}
          {/*  <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">*/}
          {/*    <Avatar*/}
          {/*      containerClassName="flex-shrink-0"*/}
          {/*      sizeClass="w-8 h-8 sm:h-11 sm:w-11 "*/}
          {/*    />*/}
          {/*    <div className="ml-3">*/}
          {/*      <div className="flex items-center">*/}
          {/*        <a className="block font-semibold" href="/">*/}
          {/*          Author Name*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="text-xs mt-[6px]">*/}
          {/*        <span className="text-neutral-700 dark:text-neutral-300">*/}
          {/*          4 May, 2022*/}
          {/*        </span>*/}
          {/*        <span className="mx-2 font-semibold">·</span>*/}
          {/*        <span className="text-neutral-700 dark:text-neutral-300">*/}
          {/*          6 min read*/}
          {/*        </span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="mt-3 sm:mt-0 sm:ml-3">*/}
          {/*    <AuthorSocialsList />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose dark:prose-invert prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
      >
        <p>
          Ready to rediscover your own backyard?? There’s never been a better or
          more important time to explore Australia. Help support local
          communities and plan a domestic trip within Australia this year.
        </p>
        <p>
          Australia has been doing it tough for the last 2 years, and despite
          months of disappointment, travel lovers are now presented with a rare
          opportunity. With pollution down and overseas arrivals still at a
          minimum, Australia’s most popular and well-travelled destinations are
          in the most pristine condition they’re been in years. If you have ever
          been interested in seeing more of this sunburnt country, easing
          restrictions for domestic travelers mean that it is the perfect
          opportunity and you can do it all whilst helping Aussie tourism find
          its feet again.
        </p>
        <p>
          Here at Book It MATE we take all the fuss out of organizing your
          dreamin’ Aussie holiday! Whether you want road trips, wilderness
          escapes, luxury hotels, cultural events, relaxing camping getaways,
          animal encounters, family adventures, thrill seeking and food
          adventures in the Land Down Under; Book It MATE have you ready to go!
        </p>
      </div>
    );
  };

  const renderTags = () => {
    return (
      <div className="max-w-screen-md mx-auto flex flex-wrap">
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-600 mr-2 mb-2"
          href="##"
        >
          Advice
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-600 mr-2 mb-2"
          href="##"
        >
          COVID
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-600 mr-2 mb-2"
          href="##"
        >
          Tourism
        </a>
      </div>
    );
  };

  const renderAuthor = () => {
    return (
      <div className="max-w-screen-md mx-auto ">
        <div className="nc-SingleAuthor flex">
          <Image
            src={`https://i.pravatar.cc/200`}
            alt={"Article author"}
            width={200}
            height={200}
            className={`w-11 h-11 md:w-24 md:h-24 rounded-full`}
          />
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              WRITTEN BY
            </span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <a href="/">Author Name</a>
            </h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
              A small description about the author who wrote this article,
              unless we're not showing articles for Book it Mate...
              <a className="text-primary-500 font-medium ml-1" href="/">
                Read more
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderCommentForm = () => {
    return (
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses (14)
        </h3>
        <form className="nc-SingleCommentForm mt-5">
          <Textarea />
          <div className="mt-2 space-x-3">
            <ButtonPrimary>Submit</ButtonPrimary>
            <ButtonSecondary>Cancel</ButtonSecondary>
          </div>
        </form>
      </div>
    );
  };

  const renderCommentLists = () => {
    return (
      <div className="max-w-screen-md mx-auto">
        <ul className="nc-SingleCommentLists space-y-5">
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };

  const renderPostRelated = (post: PostDataType) => {
    return (
      <div
        key={post.id}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link href={post.href as Route} />
        <Image
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={post.featuredImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt=""
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name="Categories" />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{post.title}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {post.author.displayName}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">{post.date}</span>
          </div>
        </div>
        <Link href={post.href as Route} />
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      {renderHeader()}
      <div className="container my-10 sm:my-12 ">
        <Image className="w-full rounded-xl" src={travelhero2Image} alt="" />
      </div>

      <div className="nc-SingleContent container space-y-10 mb-16 lg:mb-24">
        {renderContent()}
        {renderTags()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        {renderAuthor()}
        {/*{renderCommentForm()}*/}
        {/*{renderCommentLists()}*/}
      </div>

      {/* RELATED POSTS */}
      {/*<div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">*/}
      {/*  <div className="container ">*/}
      {/*    <h2 className="text-3xl font-semibold">Related posts</h2>*/}
      {/*    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">*/}
      {/*      /!*  *!/*/}
      {/*      {DEMO_POSTS.filter((_, i) => i < 4).map(renderPostRelated)}*/}
      {/*      /!*  *!/*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Page;
