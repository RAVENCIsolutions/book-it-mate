import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassMorphism from "@/components/BgGlassMorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionClientSay from "@/components/SectionClientSay";

const CITIES: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Gold Coast",
    taxonomy: "category",
    count: 188288,
    thumbnail: "/categories/category-gold-coast.jpg",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Sydney",
    taxonomy: "category",
    count: 188288,
    thumbnail: "/categories/category-sydney.jpg",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Melbourne",
    taxonomy: "category",
    count: 188288,
    thumbnail: "/categories/category-melbourne.jpg",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Brisbane",
    taxonomy: "category",
    count: 188288,
    thumbnail: "/categories/category-brisbane.jpg",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Perth",
    taxonomy: "category",
    count: 188288,
    thumbnail: "/categories/category-perth.jpg",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Hobart",
    taxonomy: "category",
    count: 188288,
    thumbnail: "/categories/category-hobart.jpg",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Cairns",
    taxonomy: "category",
    count: 188288,
    thumbnail: "/categories/category-cairns.jpg",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASS MORPHISM */}
      <BgGlassMorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* HERO SECTION */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* DISCOVER */}
        <SectionSliderNewCategories categories={CITIES} />

        {/* WHY BOOK IT MATE */}
        <SectionOurFeatures />

        {/* FEATURED */}
        <SectionGridFeaturePlaces cardType="card2" />

        {/* HOW IT WORKS */}
        {/*<SectionHowItWork />*/}

        <div className="relative py-16">
          <BackgroundSection className="bg-primary-100 dark:bg-black/30" />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
          />
        </div>

        {/* NEWSLETTER */}
        <SectionSubscribe2 />

        {/* TOP HOSTS */}
        {/*<div className="relative py-16">*/}
        {/*  <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />*/}
        {/*  <SectionGridAuthorBox />*/}
        {/*</div>*/}

        {/*<SectionGridCategoryBox />*/}

        {/*<div className="relative py-16">*/}
        {/*  <BackgroundSection />*/}
        {/*  <SectionBecomeAnAuthor />*/}
        {/*</div>*/}

        {/* BY TYPE */}
        <SectionSliderNewCategories
          heading="Stay your way"
          subHeading="Find the perfect stays that make your trip unforgettable"
          categoryCardType="card5"
          itemPerRow={5}
        />

        {/* VIDEOS */}
        {/*<SectionVideos />*/}

        {/* TESTIMONIALS */}
        {/*<div className="relative py-16">*/}
        {/*  <BackgroundSection />*/}
        {/*  <SectionClientSay />*/}
        {/*</div>*/}
      </div>
    </main>
  );
}

export default PageHome;
