import React from "react";
import Logo from "@/shared/Logo";
import Heading from "@/shared/Heading";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Niamh O'Shea`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: `Danien Jame`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: `Orla Dwyer`,
    job: "Co-founder, Chairman",
    avatar:
      "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: `Dara Frazier`,
    job: "Co-Founder, Chief Strategy Officer",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading desc="">⛱ From the Founder</Heading>
      <div className="text-sm xl:text-base text-neutral-600 dark:text-neutral-400 space-y-6">
        <p className={`leading-7`}>
          G’DAY & Welcome to Book It MATE, Australia’s own Online Holiday Guru!
          As Australia reopens to the world, we couldn’t be more excited to show
          you around, and share our magnificent backyard with travellers once
          again. Founded in 2019, Book It MATE has come a long way from its
          beginnings in Narooma, NSW during the horrific bush fires. When we
          first started out, our passion for Australia was ever growing (having
          travelled around this most beautiful country 6 times), we wanted the
          world to know just how amazing Australia truly is. More importantly we
          wanted to help aussies & their businesses rebuild from natural
          disasters, what we knew best was the accommodation & hospitality
          industry, hence our company was born:
        </p>
        <p className={`font-bold leading-8`}>
          Book It MATE – Australia’s Own Online Holiday Guru.
        </p>
        <p className={`leading-7`}>
          While some things have remained the same Down Under during bush fires,
          COVID-19 & floods – namely the gloriously wide-open spaces and locals’
          famously easy-going way of life – in recent years everything from food
          to fashion has had a fresh new makeover. New tourism experiences and
          places to stay have opened in hidden corners of the country, refreshed
          cultural attractions reflect the vibrancy of today’s residents and a
          nationwide love for amazing & unique accommodation, fresh local
          produce and great coffee has firmly embedded an urban culture across
          the country. And that’s just the beginning.
        </p>
        <p className={`leading-7`}>
          In this new era of global travel, Australia’s endless opportunities to
          get out into nature and explore places where space is abundant, have
          never been more precious or desirable. From the outback to the coast,
          from icons to undiscovered gems, there’s still nothing like Australia
          and Book It MATE is here to help you enjoy it all.
        </p>
        <p className={`font-bold leading-8`}>
          Our mission: FIND IT. LOVE IT. BOOK IT
        </p>
        <p className={`leading-7`}>
          Book It MATE offers you the most competitive accommodation deals,
          sightseeing tours, detailed local knowledge of hundreds of 1000s of
          holiday towns across Australia. We now serve travellers, holiday
          makers from all over the world and are thrilled that we’re able to
          turn our passion into our aussie own website – www.bookitmate.com.au.
        </p>
        <p className={`leading-7`}>
          We hope you enjoy your Aussie holiday experience as much as we enjoy
          offering it all to you. If you have any questions or comments, please
          don’t hesitate to contact our ‘beaut fair dinkum’ Team!
        </p>
        <p className={`flex flex-col leading-8`}>
          Hava great day 😊
          <Logo className={`w-40`} />
        </p>
        {/*{FOUNDER_DEMO.map((item) => (*/}
        {/*  <div key={item.id} className="max-w-sm">*/}
        {/*    <div className="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">*/}
        {/*      <Image*/}
        {/*        fill*/}
        {/*        className=" object-cover"*/}
        {/*        src={item.avatar}*/}
        {/*        alt=""*/}
        {/*        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"*/}
        {/*      />*/}
        {/*    </div>*/}

        {/*    <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">*/}
        {/*      {item.name}*/}
        {/*    </h3>*/}
        {/*    <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">*/}
        {/*      {item.job}*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default SectionFounder;
